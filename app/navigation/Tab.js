import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FIcon from "react-native-vector-icons/Foundation"
import IonIcon from "react-native-vector-icons/Ionicons"
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
            tabBarActiveBackgroundColor: "rgba(233, 235, 249, 0.5)",
            tabBarInactiveBackgroundColor: "#fff",
            tabBarStyle: { height: Platform.OS === "android" ? 70 : 80, }

        }}>
            <Tab.Screen name="HomeScreen" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, focused }) => {
                   
                   return <View style={focused ?  styles.innerTabView : null}>
                        {focused ? <View style={styles.tabLableTop}></View> : null}
                        <Icon name="home" color={color} size={20} style={styles.iconStyle} />
                    </View>
                },
            }}
                listeners={tabBarListeners}
            />
            <Tab.Screen  name="CustomersDashboard" component={CustomersDashboard} options={{
                tabBarLabel: 'Customers',
                tabBarIcon: ({ color, focused }) => (
                    <View>
                        {focused ? <View style={styles.tabLableTop}></View> : null}
                        <Icon name="users" color={color} size={20} style={styles.iconStyle} />
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
                        <IonIcon name="md-wallet-outline" color={color} size={20} style={styles.iconStyle} />
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
                        <IonIcon name="md-download-outline" color={color} size={20} style={styles.iconStyle} />
                    </View>
                ),
            }}
                listeners={tabBarListeners}
            />
        </Tab.Navigator>
    )
};