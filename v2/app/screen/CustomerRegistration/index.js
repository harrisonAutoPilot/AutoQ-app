import React from "react";
import { View,Text, StatusBar } from "react-native";
import styles from "./style";

const CustomerRegistration = () => {
   

    return (
        <View style={styles.body}>
            <StatusBar hidden />
            <View style={styles.imageHolder}>
            <Text>Customer Registration goes here</Text>
            </View>
        </View>
    )
};

export default CustomerRegistration;
