import React from "react";
import { View, StatusBar, Animated, Easing } from "react-native";
import styles from "./style";
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';


const SplashScreen = () => {
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    return (
        <View style={styles.body}>
            <StatusBar hidden />
            <View style={styles.imageHolder}>
            {/* <Animated.Image    
                source={require("@Assets/image/rh_logo_splashscreen.png")} 
                style={[styles.image, {transform: [{ rotate: spin }], width: 100,
                height: 100}]} resizeMode="contain"  /> */}
           <LottieView
            source={require('@Assets2/image/steer.json')} autoPlay loop
            style={styles.successImg}
             />
            </View>
        </View>
    )
};

export default SplashScreen;
