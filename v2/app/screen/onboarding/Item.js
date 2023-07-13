import React from "react";
import { View, Text, Image, ImageBackground, useWindowDimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import style from "./style";



export default onBoardingItem = ({ item }) => {

    const { width } = useWindowDimensions();


    return <View style={[style.onboardingView, { width }]}>

        <ImageBackground
            source={item.img}
            style={[style.onBoardingImg, { width }]}
            resizeMode="cover"
        >
           

                <LinearGradient
                    colors={['transparent','#5BA200']}
                    start={{ x: 0, y: 0.2}}
                    end={{ x: 0, y: 0.1}}
                    style={{ position: 'absolute', top: 0, bottom: 100, left: 0, right: 0,}}
                    >

            <View style={style.onBoardingInnerContainer}>

                <View style={style.logoContainer}>
                    <Image
                        source={require("@Assets2/image/logo.png")}
                        style={style.logo}
                    />
                        <View style={style.titleCover}>
                            <Text style={style.title}>Agent</Text>
                        </View>
                </View>

                <View style={style.onBoardingInnerImgContainer}>

                    <Image
                        source={require("@Assets2/image/backgroundImg.png")}
                        style={style.onBoardingInnerImg}
                    />

                </View>

                <View style={style.onBoardingTitleContainer}>
                    <Text style={style.onBoardingTitle}>{item.title}</Text>
                    <Text style={style.onBoardingDesc}>{item.desc}</Text>
                </View>


            </View>
            </LinearGradient>
        </ImageBackground>

    </View>

}