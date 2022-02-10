import React from "react";
import { View, Animated, Easing, StatusBar } from "react-native";

import styles from "@Screen/Loader/style";

const Loader = () => {

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
        <View style={styles.body3}>
            <View style={styles.imageHolder}>
                <StatusBar backgroundColor="rgba(0,0,0,0.97)" barStyle="light-content" />
                <Animated.Image
                    style={{
                        transform: [{ rotate: spin }], width: 100,
                        height: 100
                    }}
                    source={require("@Assets/image/rh_logo.png")} resizeMode="contain" />
            </View>
        </View>
    )
};

export default Loader