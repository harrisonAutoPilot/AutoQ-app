import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";

import { getUser } from "@Request/auth";
import credentials from "@Request/credentials";
import { logout } from "@Store/auth";

// Routes
import SplashScreen from "@Screen/Splash";
import Onboarding from "@Screen/Onboarding";
import PreRegister from "@Screen/PreRegister";
import Login from "@Screen/Login";
import Register from "@Screen/Register";
import PhoneVerification from "@Screen/PhoneVerification";
import AccountCreation from "@Screen/AccountCreation";
import VIP from "@Screen/VerificationInProgress";
import BrowseProduct from "@Screen/BrowseProducts";
import Search from "@Screen/Search";
import ForgotPin from "@Screen/ForgotPin";
import Filter from "@Screen/Filter";
import SavedItem from "@Screen/SavedItems";
import OrderDetails from "@Screen/OrderDetails";
import TrackOrder from "@Screen/TrackOrder";
import CheckOut from "@Screen/CheckOut";
import TransactionDetail from "@Screen/TransactionDetail";
import CartSuccess from "@Screen/CartSuccess";
import NotificationDetail from "@Screen/NotificationDetail";
import ConfirmCheckOut from "@Screen/ConfirmCheckOut";
import Loader from "@Screen/NavigationLoader";
import Network from "@Screen/Network";

import DrawerNavigator from "./Drawer";
import { config, closeConfig } from "./Animation";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const VIPStack = createStackNavigator();
const LoaderStack = createStackNavigator();
const PhoneVerificationStack = createStackNavigator();
const SplashStack = createStackNavigator();
const NetworkStack = createStackNavigator();

const SplashStackNavigator = () => {
    return (
        <SplashStack.Group >
            <SplashStack.Screen name="Splash" component={SplashScreen} />
        </SplashStack.Group>
    )
};

const NetworkStackNavigator = () => {
    return (
        <NetworkStack.Group   
        screenOptions={{
            presentation: 'modal',
          }}>
            <NetworkStack.Screen name="Network" component={Network} />
        </NetworkStack.Group>
    )
};

const RootStackNavigator = () => {

    return (
        <>
            <RootStack.Group>
                <RootStack.Screen name="Root" component={DrawerNavigator} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="CartSuccess" component={CartSuccess} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Search" component={Search} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="SavedItem" component={SavedItem} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="BrowseProduct" component={BrowseProduct} />
                <RootStack.Screen name="Filter" component={Filter} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="TransactionDetail" component={TransactionDetail} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="NotificationDetail" component={NotificationDetail} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="CheckOut" component={CheckOut} />
                <RootStack.Screen name="ConfirmCheckOut" component={ConfirmCheckOut} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="OrderDetails" component={OrderDetails} />
                <RootStack.Screen name="TrackOrder" component={TrackOrder} />
            </RootStack.Group>

        </>
    )
};

const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            <LoginStack.Screen name="Onboarding" component={Onboarding} />
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="PreRegister" component={PreRegister} />
            <LoginStack.Screen name="Register" component={Register} />
            <LoginStack.Screen name="ForgotPin" component={ForgotPin} />
            <LoginStack.Screen name="AccountCreation" component={AccountCreation} />
        </LoginStack.Group>
    )
}

const VIPStackNavigator = () => {
    return (
        <VIPStack.Group>
            <VIPStack.Screen name="VIP" component={VIP} />
        </VIPStack.Group>
    )
};

const LoaderStackNavigator = () => {
    return (
        <LoaderStack.Group>
            <LoaderStack.Screen name="Loader" component={Loader} />
        </LoaderStack.Group>
    )
};

const PhoneVerificationStackNavigator = () => {
    return (
        <PhoneVerificationStack.Group>
            <PhoneVerificationStack.Screen name="PhoneVerification" component={PhoneVerification} />
        </PhoneVerificationStack.Group>
    )
};

const StackNavigator = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, userVerified, signedIn, userStatus } = useSelector((state) => state.auth);
    const [timer, setTimer] = useState(false);
    // const [authenticatedRoute, setAuthenticatedRoute] = useState(false);
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
        });
        return () => removeNetInfoSubscription();
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    useEffect(() => {
        wait(1000).then(() => setTimer(true));
        (async () => {
            const checkCredential = await credentials();
            if (!checkCredential) {
                dispatch(logout());
            }
        })()
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser());
        }
    }, [isAuthenticated]);

    // useEffect(() => {
    //     if (errors?.msg === false) {
    //         setAuthenticatedRoute(false)
    //     } 
    //     // else if (Object.keys(user).length) {
    //     //     setAuthenticatedRoute(true)
    //     // }
    //     else {
    //         setAuthenticatedRoute(true)
    //     }
    // }, [errors]);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                ...TransitionPresets.SlideFromRightIOS,
                animation: "fade"
            }}
        >
            {
            // !isOffline 
            // ?
                timer 
                ?
                    isAuthenticated 
                    ?
                        // authenticatedRoute 
                        // ?
                        signedIn ?
                            userStatus === "pending" || userStatus === "idle" 
                            ?
                                LoaderStackNavigator() :
                                userStatus === "success" ?
                                    userVerified ?
                                        RootStackNavigator()
                                        :
                                        VIPStackNavigator()
                                    :
                                    PhoneVerificationStackNavigator()
                            :
                            RootStackNavigator():
                        //     PhoneVerificationStackNavigator()
                        // :
                        LoginStackNavigator()
                    :
                    SplashStackNavigator()
                // :
                // NetworkStackNavigator()
            }
        </Stack.Navigator>
    )
};


export default StackNavigator;

