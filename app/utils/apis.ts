import { mockAccount, mockActivePeriod, mockCategories, mockNotifications, mockOcrReceipt, mockPCards, mockReceiptTransactions } from './mockData';
import { Account, ApiResponse, ExpenseCategory, ExpensePCard, Notification, ReceiptTransaction } from 'models/types';
import { FullReceipt, IUploadReceiptDataObject } from 'models/fullReceipt';
import { IOcrReceipt } from 'models/ocr';

// Mock API response helper
const mockApiResponse = <T>(data: T, delay = 500): Promise<ApiResponse<T>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data, status: 200 });
    }, delay);
  });
};

export const checkUser = async () => {
  return mockApiResponse(mockAccount);
};

export const fetchExpenseCategories = async () => {
  return mockApiResponse(mockCategories);
};

export const fetchExpenseProCardholders = async () => {
  return mockApiResponse(mockPCards);
};

export const fetchCardholderActivePeriodInformation = async () => {
  return mockApiResponse(mockActivePeriod);
};

export const fetchReceiptNotifications = async () => {
  return mockApiResponse(mockNotifications);
};

export const fetchReceiptTransactions = async () => {
  return mockApiResponse(mockReceiptTransactions);
};

export const readReceiptNotifications = async () => {
  return mockApiResponse(mockNotifications.map(n => ({ ...n, isRead: true })));
};

export const uploadFullReceipt = async (
  receiptImage: string | null,
  receiptData: IUploadReceiptDataObject
): Promise<ApiResponse<FullReceipt>> => {
  const mockReceipt: FullReceipt = {
    id: Math.floor(Math.random() * 1000),
    filePath: receiptImage || "https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg",
    ...receiptData,
    status: 2,
    dateCreated: new Date().toISOString(),
    dateUpdated: new Date().toISOString()
  };
  return mockApiResponse(mockReceipt, 1000);
};

export const uploadReceiptSearch = async (): Promise<ApiResponse<IOcrReceipt>> => {
  return mockApiResponse(mockOcrReceipt, 1500);
};

export const attachExistingReceipt = async (
  transactionId: number,
  receiptId: number
): Promise<ApiResponse<ReceiptTransaction>> => {
  const mockTransaction = {
    ...mockReceiptTransactions[0],
    transaction: { ...mockReceiptTransactions[0].transaction, id: transactionId },
    receipt: { ...mockReceiptTransactions[0].receipt, id: receiptId }
  };
  return mockApiResponse(mockTransaction);
};