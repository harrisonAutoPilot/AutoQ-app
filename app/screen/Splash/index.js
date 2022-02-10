import React from "react";
import { View, Image, StatusBar } from "react-native";
import styles from "./style";

const SplashScreen = () => {
    return (
        <View style={styles.body}>
            <StatusBar hidden />
            <View style={styles.imageHolder}>
                <Image source={require("@Assets/image/rh_logo_splashscreen.png")} style={styles.image} resizeMode="contain" />
            </View>
        </View>
    )
};

export default SplashScreen;
