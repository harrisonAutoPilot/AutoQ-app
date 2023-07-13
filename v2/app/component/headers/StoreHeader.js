import React from "react";
import { View,Text,Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";

import style from "./style";



export default StoreHeader = ({onPress,onPressFilter, title}) => {
    return (
        <SafeAreaView>
            <View style={style.storeContainer}>
                    <View  style={style.arrowCover1}>
                      
                        <TouchableOpacity  onPress={onPress}>
                        <Image 
                            source={require("@Assets2/image/backArrow.png")}
                            style={style.backImg}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.textCover1}>
                        <Text style={style.myTitle}>{title}</Text>
                    </View>

                   <View  style={style.arrowCover1}>
                        {/* <TouchableOpacity  onPress={onPressFilter}>
                        <Image 
                            source={require("@Assets2/image/settings.png")}
                            style={style.backImg}
                            />
                        </TouchableOpacity> */}
                    </View>
            </View>
        </SafeAreaView>
    )
}