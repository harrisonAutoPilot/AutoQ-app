import React from "react";
import { View,Text,Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";

import style from "./style";



export default OrderHeader = ({onPress,onPressFilter, showFilter,title}) => {
    return (
        <SafeAreaView>
             <StatusBar barStyle="dark-content" backgroundColor='#FFFFFF' hidden={false} />
            <View style={style.orderContainer}>
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
                        {
                        showFilter === true ?
                        <TouchableOpacity  onPress={onPressFilter}>
                        <Image 
                            source={require("@Assets2/image/filter_list.png")}
                            style={style.backImg}
                            />
                        </TouchableOpacity>
                        :
                       <View />
                        }
                       
                    </View>
            </View>
        </SafeAreaView>
    )
}