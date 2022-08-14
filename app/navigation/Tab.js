import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FIcon from "react-native-vector-icons/Foundation"
import IonIcon from "react-native-vector-icons/Ionicons"
import { Platform, View} from "react-native"

import styles from "./style";
import Home from "@Screen/Home";
import Catalogue from "@Screen/Catalogue";
import Wallet from "@Screen/Wallet";
import CustomersDashboard from "@Screen/Customers/Dashboard";

const Tab = createBottomTabNavigator();


export default TabHomeNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarLabelStyle: Platform.OS === "android" ? styles.tabLable : styles.tabLableIOS,
            tabBarActiveTintColor: "#3858CF",
            tabBarInactiveTintColor: "#9E9E9E",
            tabBarActiveBackgroundColor: "rgba(233, 235, 249, 0.5)",
            tabBarInactiveBackgroundColor: "#fff",
            tabBarStyle: styles.tabBarStyle,
        }}
        >
            <Tab.Screen name="HomeScreen" component={Home} options={({navigation: {isFocused}}) => ({
                tabBarLabel: 'Home',
                tabBarItemStyle: isFocused() && styles.item,
                tabBarIcon: ({ color }) => (
                        <FIcon name="home" color={color} size={20} style={styles.iconStyle} />
                )
            })}
            />

            <Tab.Screen name="CustomersDashboard" component={CustomersDashboard} options={({navigation: {isFocused}}) => ({
                tabBarLabel: 'Customers',
                tabBarItemStyle: isFocused() && styles.item,
                tabBarIcon: ({ color }) => (
                        <FIcon name="torsos-all" color={color} size={20} style={styles.iconStyle} />
                ),
            })}
            />

            <Tab.Screen name="Wallet" component={Wallet} options={({navigation: {isFocused}}) => ({
                tabBarLabel: 'Wallet',
                tabBarItemStyle: isFocused() && styles.item,
                tabBarIcon: ({ color}) => (
                        <IonIcon name="wallet" color={color} size={20} style={styles.iconStyle} />
                ),
            })}
            />

            <Tab.Screen name="Catalogue" component={Catalogue} options={({navigation: {isFocused}}) => ({
                tabBarLabel: 'Catalogue',
                tabBarBadgeStyle: styles.badgeStyle,
                tabBarItemStyle: isFocused() && styles.item,
                tabBarIcon: ({ color }) => (
                        <IonIcon name="archive" color={color} size={20} style={styles.iconStyle} />
                ),
            })}
            />
        </Tab.Navigator>
    )
};