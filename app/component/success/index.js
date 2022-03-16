import React from "react";
import { View, Image, StatusBar } from "react-native";
import styles from "./style";

const Success = (props) => {
 
    return (
        <View style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor='rgba(70, 157, 0, 1)' />
            <View style={styles.top}>
                <Image source={require("@Assets/image/Group2.png")} style={styles.groupImg} />
                <View style={styles.topCircle}>
                    <Image source={require("@Assets/image/tick.png")} style={styles.frameImg} />
                </View>
            </View>
            {props.children}

        </View>
    )
};

export default Success;