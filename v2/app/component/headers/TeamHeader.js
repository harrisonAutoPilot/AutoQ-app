import React from "react";
import { View,Text,Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";

import style from "./style";



export default TeamHeader = ({onPress,onPressFilter, title}) => {
    return (
        <SafeAreaView>
             <StatusBar barStyle="dark-content" backgroundColor='#FFFFFF' hidden={false} />
            <View style={style.teamContainer}>
                    <View  style={style.arrowCover1}>
                      
                        <TouchableOpacity  onPress={onPress}>
                        <Image 
                            source={require("@Assets2/image/trailing-icon.png")}
                            style={style.backImThinny}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.textCover1}>
                        <Text style={style.myTitle}>{title}</Text>
                    </View>

                   <View  style={style.arrowCover1}>
                        <TouchableOpacity  onPress={onPressFilter}>
                        <Image 
                            source={require("@Assets2/image/more_horiz.png")}
                            style={style.backImg}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        </SafeAreaView>
    )
}