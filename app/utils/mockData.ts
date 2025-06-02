import { Account, ActivePeriod, ExpenseCategory, ExpensePCard, IOcrReceipt, Notification, ReceiptTransaction } from 'models/types';

export const mockAccount: Account = {
  account: {
    email: "john.doe@example.com",
    employeeNumber: 12345,
    firstName: "John",
    lastName: "Doe", 
    name: "John Doe",
    windowsUsername: "johndoe",
    expenseProEmployeeId: 1
  },
  flags: 8 // ShortForm flag
};

export const mockCategories: ExpenseCategory[] = [
  { id: 16, name: "Advertising" },
  { id: 17, name: "Building/Warehouse" },
  { id: 18, name: "Employee Expense" },
  { id: 19, name: "Freight" },
  { id: 20, name: "Gas" },
  { id: 21, name: "IT" },
  { id: 22, name: "Job Cost" },
  { id: 23, name: "Meals" },
  { id: 24, name: "Travel" },
  { id: 25, name: "Other" }
];

export const mockPCards: ExpensePCard[] = [
  {
    cardholderId: 1,
    employeeId: 12345,
    username: "johndoe",
    legalName: "John Doe",
    lastName: "Doe",
    firstName: "John",
    email: "john.doe@example.com",
    employeeNumber: 12345,
    managerEmployeeNumber: 54321,
    managerEmail: "manager@example.com",
    managerFirstName: "Jane",
    managerLastName: "Smith",
    accountingCodeName: "ACC123",
    accountingCodeDescription: "General Expenses",
    accountingCodeId: 1,
    costCenters: "CC-001",
    companyId: 1,
    companyName: "ACME Corp",
    departmentId: 1,
    departmentName: "Engineering",
    locations: "HQ",
    isNonEvaUser: false,
    lastFourDigits: "1234"
  }
];

export const mockActivePeriod: ActivePeriod = {
  currentCompanyStatementPeriodId: 1,
  currentPeriodStartDate: "2024-03-01",
  currentPeriodEndDate: "2024-03-31",
  lastCompanyStatementPeriodId: 2,
  lastPeriodStartDate: "2024-02-01",
  lastPeriodEndDate: "2024-02-29"
};

export const mockNotifications: Notification[] = [
  {
    id: 1,
    isRead: false,
    title: "Missing Receipt",
    message: "Please upload receipt for transaction #12345",
    employeeId: 12345,
    receiptId: 1,
    cardholderId: 1,
    isPending: true,
    dateCreated: "2024-03-15T10:00:00Z",
    dateUpdated: "2024-03-15T10:00:00Z",
    type: 1,
    receiptTransactionId: 1
  }
];

export const mockReceiptTransactions: ReceiptTransaction[] = [
  {
    id: 1,
    transaction: {
      id: 1,
      supplier: "Office Supplies Co",
      totalAmount: 156.78,
      taxAmount: 12.34,
      purchaseDate: "2024-03-15"
    },
    receipt: {
      id: 1,
      filePath: "https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg",
      cardholderId: 1,
      supplier: "Office Supplies Co",
      expenseCategoryId: 21,
      totalAmount: 156.78,
      purchaseDate: "2024-03-15",
      description: "Office supplies and equipment",
      taxCharged: true,
      shippedAnotherState: false,
      multipleCompaniesCharged: false,
      mealAttendanceCount: null,
      receiptConfidence: 0.95,
      taxAmount: 12.34,
      isMatched: true,
      dateCreated: "2024-03-15T10:00:00Z",
      dateUpdated: "2024-03-15T10:00:00Z",
      isReceiptRequired: true,
      projectName: ""
    },
    matchStatus: 1,
    receiptStatus: 2,
    cardholderId: 1,
    supplier: "Office Supplies Co",
    totalAmount: 156.78,
    taxAmount: 12.34,
    purchaseDate: "2024-03-15"
  }
];

export const mockOcrReceipt: IOcrReceipt = {
  merchantName: "Office Supplies Co",
  merchantPhoneNumber: "555-0123",
  merchantAddress: "123 Business St",
  total: 156.78,
  transactionDate: "2024-03-15",
  transactionTime: "10:00:00",
  subTotal: 144.44,
  tax: 12.34,
  tip: 0,
  currency: "USD",
  category: "Other",
  merchantAliases: ["OfficeSupplies"],
  items: [],
  taxDetails: [],
  merchantNameConfidence: 3,
  transactionTotalConfidence: 3,
  transactionDateConfidence: 3,
  taxConfidence: 3,
  receiptConfidence: 0.95
};