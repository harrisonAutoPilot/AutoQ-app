import React from "react";
import { View,Text, StatusBar, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // Routes

// import Login from "@Screen/Login";
// import CustomerOrderDetails from "@Screen/CustomerOrderDetails";

// import Deals from "@Screen/Deals";
// import ForgotPin from "@Screen/ForgotPin";
// import Notification from "@Screen/Notification";
// import NotificationDetail from "@Screen/NotificationDetail";
// import TrackOrder from "@Screen/TrackOrder";
// import Product from "@Screen/Product";
// import Search from "@Screen/Search";
// import Cart from "@Screen/Cart";
// import CheckOut from "@Screen/CheckOut";
// import ConfirmCheckOut from "@Screen/ConfirmCheckOut";
// import Filter from "@Screen/Filter";
// import TransactionDetail from "@Screen/TransactionDetail";
// import CustomerDetails from "@Screen/Customers/AccountDetails";
// import CustomerRegistration from "@Screen/Customers/Registration";
// import CheckoutSuccess from "@Screen/CheckoutSuccess";
// import CustomerSuccess from "@Screen/CustomerSuccess";
// import MyStore from "@Screen/Customers/MyStore";
// import AddStore from "@Screen/Customers/MyStore/AddStore";
// import StoreDetails from "@Screen/Customers/MyStore/StoreDetails";
// import RegConfirm from "@Screen/Customers/Registration/RegConfirm";

// import InCompleteOrderDetails from "@Screen/IncompleteOrderDetails";
// import GenProducts from "@Screen/GenProducts"

// Routes

// UNAUTHENTICATED
import SplashScreen from "@Screen2/Splash";
import Onboarding from '@Screen2/onboarding'
import Login from "@Screen2/login/phoneNumber";
import Pin from "@Screen2/login/pin";
import ForgotPin from "@Screen2/login/resetPin";
import ResetPwdSuccess from "@Screen2/login/resetPin/resetPinSuccess";
import SelectCategorySignUp from "@Screen2/signup/SelectCategory";
import FormDetailsSignUp from "@Screen2/signup/FormDetails";
import FormEmailDetailsSignUp from "@Screen2/signup/FormEmailDetails";
import FormPhoneDetailsSignUp from "@Screen2/signup/FormPhoneDetails";
import FormStoreDetailsSignUp from "@Screen2/signup/FormStoreDetails";
import FormPinDetailsSignUp from "@Screen2/signup/FormPinDetails";
import FormConfirmPinDetailsSignUp from "@Screen2/signup/FormConfirmPinDetails";
import PhoneVerification from "@Screen2/signup/PhoneVerification";
// import CloseAccount from "@Screen2/close"

import SoftUpdate from "@Screen2/SoftUpdate";

import DrawerNavigator from "./Drawer";


const RootStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SplashStack = createNativeStackNavigator();
const SoftUpdateStack = createNativeStackNavigator();



export const SoftUpdateNavigator = () => {
    return (
        <SoftUpdateStack.Group
            screenOptions={{
                presentation: 'modal',
            }}>
            <SoftUpdateStack.Screen name="SoftUpdate" component={SoftUpdate} />
            <View>
                <Text>
                    Update View
                </Text>
            </View>
        </SoftUpdateStack.Group>
    )
};

export const SplashStackNavigator = () => {
    return (
        <SplashStack.Group >
            <SplashStack.Screen name="Splash" component={SplashScreen} />
           
        </SplashStack.Group>
    )
};

export const RootStackNavigator = () => {

    return (
        <>

            <RootStack.Group>
                <RootStack.Screen name="Root" component={DrawerNavigator} />
            </RootStack.Group>
            {/* <RootStack.Group>
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
            </RootStack.Group> */}

        </>
    )
};

export const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            <LoginStack.Screen name="Onboarding" component={Onboarding} />
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="Pin" component={Pin} />
            <LoginStack.Screen name="Onboarding" component={Onboarding} />
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="ForgotPin" component={ForgotPin} />
            <LoginStack.Screen name="SelectCategory" component={SelectCategorySignUp} />
            <LoginStack.Screen name="FormDetails" component={FormDetailsSignUp} />
            <LoginStack.Screen name="FormEmailDetails" component={FormEmailDetailsSignUp} />
            <LoginStack.Screen name="FormPhoneDetails" component={FormPhoneDetailsSignUp} />
            <LoginStack.Screen name="FormStoreDetails" component={FormStoreDetailsSignUp} />
            <LoginStack.Screen name="FormPinDetails" component={FormPinDetailsSignUp} />
            <LoginStack.Screen name="FormConfirmPinDetails" component={FormConfirmPinDetailsSignUp} />
            <LoginStack.Screen name="ResetPwdSuccess" component={ResetPwdSuccess} />
        </LoginStack.Group>
    )
}




