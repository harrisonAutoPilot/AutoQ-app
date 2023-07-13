import React from "react";
import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";

import style from "./style";


export default TransactionHeader = ({ onPress, title }) => {
    return (
        <SafeAreaView>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"

            />
            <View style={style.transactionContainer}>

                <TouchableOpacity onPress={onPress} style={style.arrowCoverTransaction}>
                    <Image
                        source={require("@Assets2/image/backArrow.png")}
                        style={style.backImg}
                    />
                </TouchableOpacity>

                <View style={style.textCoverTransaction}>
                    <Text style={style.titleNew}>{title}</Text>
                </View>

                <View style={style.evenView} />
                
            </View>
        </SafeAreaView>
    )
}