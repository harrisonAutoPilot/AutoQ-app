import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "@Request/Auth";
import credentials from "@Request/Credentials";
import { logout } from "@Store/Auth";

// Routes
import SplashScreen from "@Screen/Splash";
import Login from "@Screen/Login";
import CustomerOrderDetails from "@Screen/CustomerOrderDetails";
import DrawerNavigator from "./Drawer";
import Deals from "@Screen/Deals";
import Notification from "@Screen/Notification";
import TrackOrder from "@Screen/TrackOrder";

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SplashStack = createNativeStackNavigator();
// const NetworkStack = createStackNavigator();

const SplashStackNavigator = () => {
    return (
        <SplashStack.Group >
            <SplashStack.Screen name="Splash" component={SplashScreen} />
        </SplashStack.Group>
    )
};


const RootStackNavigator = () => {

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
                <RootStack.Screen name="Notification" component={Notification} />
                {/* <RootStack.Screen name="NotificationDetail" component={NotificationDetail} /> */}
            </RootStack.Group>

        </>
    )
};

const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            <LoginStack.Screen name="Login" component={Login} />
            {/* <LoginStack.Screen name="ForgotPin" component={ForgotPin} /> */}
        </LoginStack.Group>
    )
}


const StackNavigator = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, userVerified, userStatus } = useSelector((state) => state.auth);
    const [timer, setTimer] = useState(false);
    const [isOffline, setOfflineStatus] = useState(false);


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


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: "horizontal",
                // ...TransitionPresets.SlideFromRightIOS,
                // animation: "fade"
            }}
        >
            {
                timer 
                ?
                    isAuthenticated 
                    ?
                    RootStackNavigator()
                         :
                        LoginStackNavigator()
                    :
                    SplashStackNavigator()
            }
        </Stack.Navigator>
    )
};


export default StackNavigator;
