import React from "react";
import { View,Text,Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";

import style from "./style";



export default CrossHeader = ({onPress, title}) => {
    return (
        <SafeAreaView>
            <View style={style.crossContainer}>
                    <View  style={style.arrowCover}>
                        {/* <StatusBar backgroundColor={"#fff"}/> */}
                        <TouchableOpacity  onPress={onPress}>
                        <Image 
                           source={require("@Assets2/image/trailing-icon.png")}
                            style={style.crossImg}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.textCover}>
                        <Text style={style.title}>{title}</Text>
                    </View>

                <View style={style.evenView} />
            </View>
        </SafeAreaView>
    )
}