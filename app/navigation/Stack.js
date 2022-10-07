import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import VersionCheck from 'react-native-version-check';
import { Platform } from "react-native";
import { getUser } from "@Request/Auth";

import credentials from "@Request/Credentials";
import { logout } from "@Store/Auth";
import { SplashStackNavigator, SoftUpdateNavigator, RootStackNavigator, LoginStackNavigator } from "./StackFiles"

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, loggedIn } = useSelector((state) => state.auth);
    const [timer, setTimer] = useState(false);
    const [versionStatus, setVersionState] = useState(false);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const checkAndroidUpdate = async () => {

        try {
            const currentVersion = VersionCheck.getCurrentVersion();
            const res = await fetch(
                `https://play.google.com/store/apps/details?id=${VersionCheck.getPackageName()}&hl=en`
            );
            const text = await res.text();

            const match = text.match(/\[\[\["([\d.]+?)"\]\]/);
            if (match) {
                const latestVersion = match[1].trim();
                if (latestVersion > currentVersion) {
                    setVersionState(true)
                } else {
                    setVersionState(false)
                }

            } else return null;
        } catch (error) {
            setVersionState(false)
        }

    }

    const checkIosUpdate = async () => {

        try {
            const currentVersion = VersionCheck.getCurrentVersion();
            const latestVersion = await VersionCheck.getLatestVersion({provider: 'appStore'  })

                if (latestVersion > currentVersion) {
                    setVersionState(true)
                } else {
                    setVersionState(false)
                }

        } catch (error) {
            setVersionState(false)
        }

    }

    useEffect(() => {

        Platform.OS === "android" ? checkAndroidUpdate(): checkIosUpdate();

        wait(1000).then(() => setTimer(true));

        (async () => {
            const checkCredential = await credentials();
            if (!checkCredential) {
                dispatch(logout());
            }
        })()
    }, []);

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(logout());
        }

        if(isAuthenticated && !loggedIn){
            dispatch(getUser())
        }
    }, [isAuthenticated, loggedIn]);


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                timer
                    ?
                    !versionStatus ?
                        isAuthenticated
                            ?
                            RootStackNavigator()
                            :
                            LoginStackNavigator()
                        :
                         SoftUpdateNavigator()
                        // RootStackNavigator()

                    :
                    SplashStackNavigator()
            }
        </Stack.Navigator>
    )
};


export default StackNavigator;
