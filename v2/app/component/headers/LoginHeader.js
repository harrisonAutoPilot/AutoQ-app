import React from "react";
import { View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";

import style from "./style";


export default LoginHeader = ({ onPress, children, name, color }) => {

    return (
        <SafeAreaView>

            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

            <View style={style.loginInnerContainer}>
             
                <TouchableOpacity style={style.loginIconContainer} onPress={onPress}>
                    <MIcon name={name} size={24} color={color} />
                </TouchableOpacity>
                <View style={{width: "84%"}}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
}