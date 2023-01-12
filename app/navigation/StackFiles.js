import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Routes
import SplashScreen from "@Screen/Splash";
import Login from "@Screen/Login";
import CustomerOrderDetails from "@Screen/CustomerOrderDetails";
import DrawerNavigator from "./Drawer";
import Deals from "@Screen/Deals";
import ForgotPin from "@Screen/ForgotPin";
import Notification from "@Screen/Notification";
import NotificationDetail from "@Screen/NotificationDetail";
import TrackOrder from "@Screen/TrackOrder";
import Product from "@Screen/Product";
import Search from "@Screen/Search";
import Cart from "@Screen/Cart";
import CheckOut from "@Screen/CheckOut";
import ConfirmCheckOut from "@Screen/ConfirmCheckOut";
import Filter from "@Screen/Filter";
import TransactionDetail from "@Screen/TransactionDetail";
import CustomerDetails from "@Screen/Customers/AccountDetails";
import CustomerRegistration from "@Screen/Customers/Registration";
import CheckoutSuccess from "@Screen/CheckoutSuccess";
import CustomerSuccess from "@Screen/CustomerSuccess";
import MyStore from "@Screen/Customers/MyStore";
import AddStore from "@Screen/Customers/MyStore/AddStore";
import StoreDetails from "@Screen/Customers/MyStore/StoreDetails";
import RegConfirm from "@Screen/Customers/Registration/RegConfirm";
import SoftUpdate from "@Screen/SoftUpdate";
import InCompleteOrderDetails from "@Screen/IncompleteOrderDetails";
import GenProducts from "@Screen/GenProducts"

const RootStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SplashStack = createNativeStackNavigator();
const SoftUpdateStack = createNativeStackNavigator();

export const SplashStackNavigator = () => {
    return (
        <SplashStack.Group >
            <SplashStack.Screen name="Splash" component={SplashScreen} />
        </SplashStack.Group>
    )
};

export const SoftUpdateNavigator = () => {
    return (
        <SoftUpdateStack.Group
            screenOptions={{
                presentation: 'modal',
            }}>
            <SoftUpdateStack.Screen name="SoftUpdate" component={SoftUpdate} />
        </SoftUpdateStack.Group>
    )
};


export const RootStackNavigator = () => {

    return (
        <>
            <RootStack.Group>
                <RootStack.Screen name="Root" component={DrawerNavigator} />
            </RootStack.Group>
            <RootStack.Group>
                <RootStack.Screen name="Deals" component={Deals} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="OrderDetails" component={CustomerOrderDetails} />
                <RootStack.Screen name="TrackOrder" component={TrackOrder} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="IncompleteOrderDetails" component={InCompleteOrderDetails} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Notification" component={Notification} />
                <RootStack.Screen name="NotificationDetail" component={NotificationDetail} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Product" component={Product} />
                <RootStack.Screen name="Filter" component={Filter} />
                <RootStack.Screen name="Search" component={Search} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="GenProducts" component={GenProducts} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Cart" component={Cart} />
                <RootStack.Screen name="CheckOut" component={CheckOut} />
                <RootStack.Screen name="ConfirmCheckOut" component={ConfirmCheckOut} />
                <RootStack.Screen name="CheckoutSuccess" component={CheckoutSuccess} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="TransactionDetail" component={TransactionDetail} />
            </RootStack.Group>


            <RootStack.Group>
                <RootStack.Screen name="CustomerDetails" component={CustomerDetails} />
                <RootStack.Screen name="CustomerRegistration" component={CustomerRegistration} />
                <RootStack.Screen name="MyStore" component={MyStore} />
                <RootStack.Screen name="AddStore" component={AddStore} />
                <RootStack.Screen name="StoreDetails" component={StoreDetails} />
                <RootStack.Screen name="RegConfirm" component={RegConfirm} />
                <RootStack.Screen name="CustomerSuccess" component={CustomerSuccess} />
            </RootStack.Group>

        </>
    )
};

export const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="ForgotPin" component={ForgotPin} />
        </LoginStack.Group>
    )
}




