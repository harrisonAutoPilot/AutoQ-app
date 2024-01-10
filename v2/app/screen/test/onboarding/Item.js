import React from "react";
import { View, Text, Image, ImageBackground, useWindowDimensions } from "react-native";


import style from "./style";



 export default onBoardingItem = ({ item }) => {

    const { width } = useWindowDimensions();


    return <View style={[style.onboardingView, { width }]}>

        <ImageBackground
            source={item.img}
            style={[style.onBoardingImg, { width }]}
            resizeMode="stretch"
        >

            <View style={style.onBoardingInnerContainer}>

                <View style={style.logoContainer}>
                    <Image 
                    source={require("@Assets2/image/logo.png")}
                    style={style.logo}
                    />
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
        </ImageBackground>

    </View>

 }