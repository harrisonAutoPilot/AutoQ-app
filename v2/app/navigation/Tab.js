import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Host} from 'react-native-portalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import Home from '@Screen2/Home';
import DrawerScreen from '@Screen2/drawerScreen';
import Catalogue from '@Screen/Catalogue';
import Wallet from '@Screen/Wallet';
import SpareParts from '@Screen2/Spareparts'
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
          name="Check"
          component={SpareParts}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: () => null,
            tabBarIcon: ({color}) => (
              <View style={styles.uniqueStyle}>
                {/* <Icon name="add" color="#fff" size={26} /> */}
                <Text style={styles.uniqueText}>SPARE PARTS</Text>
              </View>
            //   <Image
            //   source={require('@Assets2/image/istockphoto-1300646016-612x612.jpeg')}
            //   style={styles.uniqueStyle}
            // />
            ),
          })}
          // listeners={({navigation}) => ({
          //   tabBarBadgeStyle: styles.badgeStyle,
          //   tabPress: e => {
          //     e.preventDefault();
          //      navigation.navigate("CustomerRegistration", { items, key: 1 });
          //   },
          // })}
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
