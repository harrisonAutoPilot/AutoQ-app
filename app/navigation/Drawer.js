import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from "@Component/drawer";
import CustomerOrder from "@Screen/CustomerOrder";
import PendingOrder from "@Screen/PendingOrders";
import Account from "@Screen/Account";
import TabHomeNavigator from "./Tab";
import CustomerSupport from "@Screen/CustomerSupport";
import ProductRequest from "@Screen/ProductRequest";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={(props) => <DrawerContent {...props} />} >
            <Drawer.Screen name="Home" component={TabHomeNavigator} />
            <Drawer.Screen name="CustomerOrder" component={CustomerOrder} />
            <Drawer.Screen name="Account" component={Account} /> 
            <Drawer.Screen name="PendingOrder" component={PendingOrder} /> 
            <Drawer.Screen name="CustomerSupport" component={CustomerSupport} /> 
            <Drawer.Screen name="ProductRequest" component={ProductRequest} /> 
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

