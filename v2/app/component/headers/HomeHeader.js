import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";


import styles from "./style";


export default HomeHeader = (props) => {

    return (
        <SafeAreaView style={styles.homeHeaderContainer}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#DDE1FF" />

            <View style={styles.homeHeaderInnerView}>
                {props.children}
            </View>
        </SafeAreaView>
    )
};
