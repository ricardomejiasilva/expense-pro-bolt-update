import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontFamily } from 'config/Fonts';
import Colors from 'config/Colors';

type TabBarIconProps = {
    name: string;
    icon: React.ReactNode;
    focused: boolean;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused, icon }) => {
    const iconOffset = useSharedValue(0);
    const opacity = useSharedValue(0);
    const lineTop = useSharedValue(0);

    const iconStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: iconOffset.value }],
    }));

    const transactionsLine = {
        position: 'relative' as 'relative',
        opacity: opacity.value,
        top: lineTop.value,
    };

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Animated.View
                style={[
                    iconStyle,
                    {
                        width: 24,
                        height: 24,
                    },
                ]}
            >
                {icon}
            </Animated.View>
            <Text
                style={[
                    styles.text,
                    {
                        color: focused ? Colors.green : Colors.darkgray,
                    },
                ]}
            >
                {name}
            </Text>
            <View style={[transactionsLine, styles.transactionLine]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 12,
        marginTop: 2,
    },
    text: {
        marginBottom: RFPercentage(0.3),
        marginTop: RFPercentage(0.4),
        fontFamily: FontFamily.light,
        fontSize: RFPercentage(1.4),
    },
    transactionLine: {
        width: RFPercentage(8.6),
        height: RFPercentage(0.2),
        backgroundColor: Colors.green,
        borderRadius: RFPercentage(1),
    },
});

export default TabBarIcon;
