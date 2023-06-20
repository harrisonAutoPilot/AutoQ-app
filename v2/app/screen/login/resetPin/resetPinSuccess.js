import React, { useEffect } from "react";
import { View, Text, Image, StatusBar, BackHandler } from "react-native";


import styles from "../style";
import { OnboardinBtn } from "@Component2";


const ResetPinSuccesScreen = ({ navigation }) => {
    

    const goBactToLogin = () => {
        navigation.navigate("Login");
    }

    const handleBackButton = () => {
        if (props.navigation.isFocused()) {
            goBack()
            return true;
        }
    };


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButton);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        }
    }, []);


    return (
        <View style={styles.resetPinContainer}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.resetFlexUp}>

                <View style={styles.resetPinImageView}>
                    <Image source={require("@Assets2/image/success_confetti.png")} />
                </View>

                <View style={styles.resetPinTitleView}>
                    <Text style={styles.resetPinTitle}> Reset Successful!</Text>
                    <Text style={styles.resetPinDesc}> Check your email, your PIN has been reset.</Text>
                </View>

            </View>

            <View style={styles.resetFlexDown}>
                <OnboardinBtn
                    backgroundColor="#3353CB"
                    color="#fff"
                    title="DONE"
                    onPress={goBactToLogin}
                />
            </View>


        </View>
    )
};

export default ResetPinSuccesScreen;