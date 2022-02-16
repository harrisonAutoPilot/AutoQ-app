import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "@Request/Auth";
import credentials from "@Request/Credentials";
import { logout } from "@Store/Auth";

// Routes
import SplashScreen from "@Screen/Splash";
import Login from "@Screen/Login";

const Stack = createNativeStackNavigator();
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


// const RootStackNavigator = () => {

//     return (
//         <>
//             <RootStack.Group>
//                 <RootStack.Screen name="Root" component={DrawerNavigator} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="CartSuccess" component={CartSuccess} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="Search" component={Search} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="SavedItem" component={SavedItem} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="BrowseProduct" component={BrowseProduct} />
//                 <RootStack.Screen name="Filter" component={Filter} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="TransactionDetail" component={TransactionDetail} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="NotificationDetail" component={NotificationDetail} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="CheckOut" component={CheckOut} />
//                 <RootStack.Screen name="ConfirmCheckOut" component={ConfirmCheckOut} />
//             </RootStack.Group>

//             <RootStack.Group>
//                 <RootStack.Screen name="OrderDetails" component={OrderDetails} />
//                 <RootStack.Screen name="TrackOrder" component={TrackOrder} />
//             </RootStack.Group>

//         </>
//     )
// };

const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            <LoginStack.Screen name="Login" component={Login} />
            {/* <LoginStack.Screen name="Register" component={Register} />
            <LoginStack.Screen name="ForgotPin" component={ForgotPin} />
            <LoginStack.Screen name="AccountCreation" component={AccountCreation} /> */}
        </LoginStack.Group>
    )
}

// const LoaderStackNavigator = () => {
//     return (
//         <LoaderStack.Group>
//             <LoaderStack.Screen name="Loader" component={Loader} />
//         </LoaderStack.Group>
//     )
// };


const StackNavigator = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, userVerified, signedIn, userStatus } = useSelector((state) => state.auth);
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
             {/* {SplashStackNavigator()} */}
            {
                timer 
                ?
                    isAuthenticated 
                    ?
                    LoginStackNavigator()
                         :
                            
                       
                        LoginStackNavigator()
                    :
                    SplashStackNavigator()
            }
        </Stack.Navigator>
    )
};


export default StackNavigator;
