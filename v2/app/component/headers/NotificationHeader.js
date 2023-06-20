import React from "react";
import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import style from "./style";



export default NotificationHeader = ({ onPress, onPressFilter, title }) => {
    return (
        <SafeAreaView>
            <View style={style.noteContainer}>
                <View style={style.arrowCover1}>

                    <TouchableOpacity onPress={onPress}>
                        <Image
                            source={require("@Assets2/image/backArrow.png")}
                            style={style.backImg}
                        />
                    </TouchableOpacity>
                </View>
                <View style={style.textCover1}>
                    <Text style={style.myTitle}>{title}</Text>
                </View>

                <View style={style.arrowCover1}>
                    <TouchableOpacity onPress={onPressFilter}>
                        <Icon name="playlist-check" color="#767680" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}