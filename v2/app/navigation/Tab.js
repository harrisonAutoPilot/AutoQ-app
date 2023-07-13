import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Host} from 'react-native-portalize';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import Home from '@Screen2/Home';
import DrawerScreen from '@Screen2/drawerScreen';
import Catalogue from '@Screen/Catalogue';
import Wallet from '@Screen/Wallet';
 import CustomerRegistration from "@Screen2/Customers/Registration";
import CustomersDashboard from '@Screen2/Customers/Dashboard';

const Tab = createBottomTabNavigator();

export default TabHomeNavigator = () => {
  const items = 0;

  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: styles.tabLable,
          tabBarActiveTintColor: '#3858CF',
          tabBarInactiveTintColor: '#45464F',
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon
                name="home-filled"
                color={color}
                size={16}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />
        <Tab.Screen
          name="CustomersDashboard"
          component={CustomersDashboard}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'Customers',
            tabBarIcon: ({color}) => (
              <Zcon
                name="account-supervisor-circle-outline"
                color={color}
                size={18}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />

        <Tab.Screen
          name="Check"
          component={CustomerRegistration}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: () => null,
            tabBarIcon: ({color}) => (
              <View style={styles.uniqueStyle}>
                <Icon name="add" color="#fff" size={26} />
              </View>
            ),
          })}
          listeners={({navigation}) => ({
            tabBarBadgeStyle: styles.badgeStyle,
            tabPress: e => {
              e.preventDefault();
               navigation.navigate("CustomerRegistration", { items, key: 1 });
            },
          })}
        />

        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'Catalog',
            tabBarBadge:
              items.carts && items.carts.total > 0 ? items.carts.total : null,
            tabBarBadgeStyle: styles.badgeStyle,
            tabBarIcon: ({color}) => (
              <Icon
                name="inventory"
                color={color}
                size={16}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />

        <Tab.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'More',
            tabBarIcon: ({color}) => (
              <Icon
                name="menu"
                color={color}
                size={16}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />
      </Tab.Navigator>
    </Host>
  );
};
