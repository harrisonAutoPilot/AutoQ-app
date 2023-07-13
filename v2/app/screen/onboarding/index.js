import React from "react";
import { View,Text, StatusBar, TouchableOpacity } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import slides from "./slides";
import OnBoardingItem from "./Item";

import style from "./style";



const Onboarding = (props) => {



    const redirectToLogin = () => props.navigation.navigate("Login");

    const redirectToSignUp = () => props.navigation.navigate("FormDetails");


    return (
        <View>

            <StatusBar translucent backgroundColor='transparent' />

                <SwiperFlatList
                    autoplay
                    autoplayDelay={5}
                    autoplayLoop
                    index={2}
                    paginationStyle={{position:'absolute', top:30}}
                    paginationStyleItem={style.paginationStyleItem}
                    paginationStyleItemInactive={style.paginationStyleItemInactive}
                    paginationStyleItemActive={style.paginationStyleItemActive}
                    showPagination
                    data={slides}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                    />

            <View style={style.bottomSheetCover} >
                <TouchableOpacity style={style.btnOne} onPress={redirectToLogin}>
                    <Text style={style.btnOneText}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.btnTwo} onPress={redirectToSignUp}>
                    <Text style={style.btnTwoText}>GET STARTED</Text>
                </TouchableOpacity>
               
            </View>
        </View>
    )
}

export default Onboarding;

