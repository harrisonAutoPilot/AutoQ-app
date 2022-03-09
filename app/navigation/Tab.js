import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Platform, View } from "react-native"

import styles from "./style";
import Home from "@Screen/Home";
import Catalogue from "@Screen/Catalogue";
import Wallet from "@Screen/Wallet";
import CustomersDashboard from "@Screen/Customers/Dashboard";

const Tab = createBottomTabNavigator();

export default TabHomeNavigator = () => {

    const tabBarListeners = ({ navigation, route }) => ({
        tabPress: () => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: route.name }]
                })
            );
        }
    });
    
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: Platform.OS === "android" ? styles.tabLable : null,
            tabBarActiveTintColor: "#3858CF",
            tabBarInactiveTintColor: "#9E9E9E",
            tabBarStyle: { height: Platform.OS === "android" ? 70 : 80 },


        }}>
            <Tab.Screen name="HomeScreen" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <View>
                        {focused ? <View style={styles.tabLableTop}></View> : null}
                        <Icon name="home" color={color} size={16} style={styles.iconStyle} />
                    </View>
                ),
            }}
                listeners={tabBarListeners}
            />
            <Tab.Screen  name="CustomersDashboard" component={CustomersDashboard} options={{
                tabBarLabel: 'Customers',
                tabBarIcon: ({ color, focused }) => (
                    <View>
                        {focused ? <View style={styles.tabLableTop}></View> : null}
                        <Icon name="search" color={color} size={16} style={styles.iconStyle} />
                    </View>
                ),
            }}
                listeners={tabBarListeners}
            />
            <Tab.Screen name="Wallet" component={Wallet} options={{
                tabBarLabel: 'Wallet',
                tabBarIcon: ({ color, focused }) => (
                    <View>
                        {focused ? <View style={styles.tabLableTop}></View> : null}
                        <Icon name="wallet" color={color} size={16} style={styles.iconStyle} />
                    </View>
                ),
            }}
                listeners={tabBarListeners}
            />
            <Tab.Screen name="Catalogue" component={Catalogue} options={{
                tabBarLabel: 'Catalogue',
                tabBarBadgeStyle: styles.badgeStyle,
                tabBarIcon: ({ color, focused }) => (
                    <View>
                        {focused ? <View style={styles.tabLableTop}></View> : null}
                        <Icon name="shopping-cart" color={color} size={16} style={styles.iconStyle} />
                    </View>
                ),
            }}
                listeners={tabBarListeners}
            />
        </Tab.Navigator>
    )
};