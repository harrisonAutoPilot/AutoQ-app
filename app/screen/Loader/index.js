import React from "react";
import { View, Animated, Easing, StatusBar } from "react-native";
import Modal from "react-native-modal";

import styles from "./style";

const Loader = (props) => {

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
        <Modal
            isVisible={props.isVisible}
            animationIn="slideInUp"
            animationInTiming={300}
            animationOut="slideOutDown"
            animationOutTiming={300}
            useNativeDriver={false}
            hasBackdrop={true}
            backdropColor="#000"
            backdropOpacity={0.8}
            coverScreen={true}>
            <View style={styles.body}>
                <View style={styles.imageHolder}>
                    <StatusBar backgroundColor="rgba(0,0,0,0.97)" barStyle="light-content" />
                    <Animated.Image
                        style={{
                            transform: [{ rotate: spin }], width: 100,
                            height: 100
                        }}
                        source={require("@Assets/image/rh_logo_splashscreen.png")} resizeMode="contain" />
                </View>
            </View>
        </Modal>
    )
};

export default Loader