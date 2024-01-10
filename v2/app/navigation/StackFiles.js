import React from "react";
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from "@react-navigation/stack";
import CustomerOrderDetails from "@Screen/CustomerOrderDetails";
import Deals from "@Screen/Deals";
// import ForgotPin from "@Screen/ForgotPin";

import TrackOrder from "@Screen/TrackOrder";
import Product from "@Screen/Product";
import Search from "@Screen/Search";
import Cart from "@Screen/Cart";
import CheckOut from "@Screen/CheckOut";
import ConfirmCheckOut from "@Screen/ConfirmCheckOut";
import Filter from "@Screen/Filter";
import TransactionDetail from "@Screen/TransactionDetail";
import CustomerDetails from "@Screen2/Customers/AccountDetails";
import CustomerRegistration from "@Screen2/Customers/Registration";
import CheckoutSuccess from "@Screen/CheckoutSuccess";
import CustomerSuccess from "@Screen/CustomerSuccess";
import RegConfirm from "@Screen2/Customers/Registration/RegConfirm";
import LicencePreview from "@Screen2/Customers/Registration/LicencePreview"
import StorePreview from "@Screen2/Customers/Registration/StorePreview"
import SoftUpdate from "@Screen/SoftUpdate";
import InCompleteOrderDetails from "@Screen/IncompleteOrderDetails";
import GenProducts from "@Screen/GenProducts"
import Review from "@Screen2/order/review";
import ViewReview from "@Screen2/order/viewReview"
import MyStore from "@Screen2/myStore";
import StoreSuccess from "@Screen2/myStore/addStore/storeSuccess"
import StoreDetails from "@Screen2/myStore/storeDetails"
import AddStore from "@Screen2/myStore/addStore";
import WorkerDetails from "@Screen2/workerDetails"
import SpareParts from "@Screen2/Spareparts"

// this is for the workers
import FormDetailsWorker from '@Screen2/worker/FormDetailsWorker'
import FormStateDetailsWorker from '@Screen2/worker/FormStateDetailsWorker'
import FormIDUploadWorker from '@Screen2/worker/FormIDUploadWorker'
import FormImageUploadWorker from '@Screen2/worker/FormImageUploadWorker'
import FormGuarrantorWorker from '@Screen2/worker/FormGuarrantorWorker'

// this is for the spare part dealers
import FormDetailsDealer from '@Screen2/signupDealer/FormDetails'
import FormStateDetailsDealer from '@Screen2/signupDealer/FormStateDetailsDealer'
import FormIDUploadDealer from '@Screen2/signupDealer/FormIDUploadDealer'
import SignUpPinDealer from '@Screen2/signupDealer/FormPinDetailsDealer'

import MapViewScreen from '@Screen2/MapView'

import SearchList from "@Screen2/SearchList"


// The new screens
import ActivityReport from "@Screen2/Home/ActivityReport";
import Notification from '@Screen2/Notification';
import NotificationDetail from '@Screen2/Notification/notificationDetails';


import TabHomeNavigator from './Tab';




import SplashScreen from '@Screen2/Splash';
import Onboarding from '@Screen2/onboarding';
import OnboardingTest from '@Screen2/test/onboarding';
import Login from '@Screen2/login/phoneNumber';
import Pin from '@Screen2/login/pin';
import ForgotPin from '@Screen2/login/resetPin';
import ResetPwdSuccess from '@Screen2/login/resetPin/resetPinSuccess';
import SelectCategorySignUp from '@Screen2/signup/SelectCategory';
import FormDetailsSignUp from '@Screen2/signup/FormDetails';
import FormEmailDetailsSignUp from '@Screen2/signup/FormEmailDetails';
import FormPhoneDetailsSignUp from '@Screen2/signup/FormPhoneDetails';
import FormStateDetailsSignUp from '@Screen2/signup/FormStateDetails';
import FormPinDetailsSignUp from '@Screen2/signup/FormPinDetails';
import FormImageUploadSignUp from '@Screen2/signup/FormImageUpload';
import FormConfirmPinDetailsSignUp from '@Screen2/signup/FormConfirmPinDetails';
import PhoneVerification from '@Screen2/signup/PhoneVerification';
import ContactSupport from "@Screen2/contactSupport";
import AwaitVerification from '@Screen2/signup/awaitVerification';
import SignUpSuccess from '@Screen2/signup/signUpSuccess';
import Settings from "@Screen2/settings";

import OrderDetails from "@Screen2/orderDetails";
import OrderStatus from "@Screen2/order/orderStatus";
// import Deals from "@Screen2/products/Deals";
import Order from "@Screen2/order";

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SplashStack = createStackNavigator();
const SoftUpdateStack = createStackNavigator();
const PhoneVerificationStack = createStackNavigator();
const AdminVerificationStack = createStackNavigator();



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


export const PhoneVerificationStackNavigator = () => {
    return (
        <PhoneVerificationStack.Group>
            <PhoneVerificationStack.Screen name="PhoneVerification" component={PhoneVerification} options={{ gestureEnabled: false, gestureDirection: "horizontal" }} />
        </PhoneVerificationStack.Group>

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
                <RootStack.Screen name="Root" component={TabHomeNavigator} />
                <RootStack.Screen name="AwaitVerification" component={ AwaitVerification} />
            </RootStack.Group>
            <RootStack.Group>
                <RootStack.Screen name="ActivityReport" component={ActivityReport} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Settings" component={Settings} />
            </RootStack.Group>

            <RootStack.Group>

                <RootStack.Screen name="StoreSuccess" component={StoreSuccess} />
            </RootStack.Group>

              <RootStack.Group>
                <RootStack.Screen name="Order" component={Order} />
                <RootStack.Screen name="OrderDetails" component={OrderDetails} />
                <RootStack.Screen name="OrderStatus" component={OrderStatus}
                 options={{
                    gestureDirection: 'vertical',
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                 }}
               />
                <RootStack.Screen name="Review" component={Review}
                    options={{
                        gestureDirection: 'vertical',
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    }}
                />
                <RootStack.Screen name="ViewReview" component={ViewReview}
                    options={{
                        gestureDirection: 'vertical',
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    }}
                />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="IncompleteOrderDetails" component={InCompleteOrderDetails} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Notification" component={Notification} />
                <RootStack.Screen name="NotificationDetail" component={NotificationDetail} />
                <RootStack.Screen name="ContactSupport" component={ContactSupport} />
                
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Product" component={Product} />
                <RootStack.Screen name="Filter" component={Filter} />
                <RootStack.Screen name="Search" component={Search} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="GenProducts" component={GenProducts} />
                {/* <RootStack.Screen name="SpareParts" component={SpareParts} /> */}
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
                <RootStack.Screen name="MapViewScreen" component={MapViewScreen} />
                <RootStack.Screen name="SearchList" component={SearchList} />
                <RootStack.Screen name="WorkerDetails" component={WorkerDetails} />
                
                
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="CustomerDetails" component={CustomerDetails} />
                <RootStack.Screen name="CustomerRegistration" component={CustomerRegistration} />
                <RootStack.Screen name="MyStore" component={MyStore} />
                <RootStack.Screen name="AddStore" component={AddStore} />
                <RootStack.Screen name="StoreDetails" component={StoreDetails} />
                <RootStack.Screen name="RegConfirm" component={RegConfirm} />
                <RootStack.Screen name="LicencePreview" component={LicencePreview} />
                <RootStack.Screen name="StorePreview" component={StorePreview} />
                <RootStack.Screen name="CustomerSuccess" component={CustomerSuccess} />
            </RootStack.Group>

        </>
    )
};



export const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            {/* <LoginStack.Screen name="OnboardingTest" component={OnboardingTest} /> */}
            <LoginStack.Screen name="Onboarding" component={Onboarding} />
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="Pin" component={Pin} />
            <LoginStack.Screen name="ForgotPin" component={ForgotPin} />
            <LoginStack.Screen name="SelectCategory" component={SelectCategorySignUp} />
            <LoginStack.Screen name="FormDetails" component={FormDetailsSignUp} />
            <LoginStack.Screen name="FormEmailDetails" component={FormEmailDetailsSignUp} />
            <LoginStack.Screen name="FormPhoneDetails" component={FormPhoneDetailsSignUp} />
            <LoginStack.Screen name="FormImageUpload" component={FormImageUploadSignUp} />
            <LoginStack.Screen name="FormPinDetails" component={FormPinDetailsSignUp} />
            <LoginStack.Screen name="FormConfirmPinDetails" component={FormConfirmPinDetailsSignUp} />
            <LoginStack.Screen name="ResetPwdSuccess" component={ResetPwdSuccess} />
            <LoginStack.Screen name="FormStateDetails" component={FormStateDetailsSignUp} />
            <LoginStack.Screen name="AwaitVerification" component={AwaitVerification} />
            <LoginStack.Screen name="FormDetailsWorker" component={FormDetailsWorker} />
            <LoginStack.Screen name="FormStateDetailsWorker" component={FormStateDetailsWorker} />
            <LoginStack.Screen name="FormIDUploadWorker" component={FormIDUploadWorker} />
            <LoginStack.Screen name="FormImageUploadWorker" component={FormImageUploadWorker} />
            <LoginStack.Screen name="FormGuarrantorWorker" component={FormGuarrantorWorker} />
            <LoginStack.Screen name="FormDetailsDealer" component={FormDetailsDealer} />
            <LoginStack.Screen name="FormStateDetailsDealer" component={FormStateDetailsDealer} />
            <LoginStack.Screen name="FormIDUploadDealer" component={FormIDUploadDealer} />
            <LoginStack.Screen name="SignUpPinDealer" component={SignUpPinDealer} />
            
            
            
            
        </LoginStack.Group>

    )
};




