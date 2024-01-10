import React, { useRef, useState } from "react";
import { View, FlatList, Animated, StatusBar } from "react-native";

import slides from "./slides";
import Paginator from "./Paginator";
import OnBoardingItem from "./Item";
import { OnboardinBtn } from "@Component2";

import style from "./style";


const OnboardingTest = (props) => {


    const scrollX = useRef(new Animated.Value(0)).current;

    const slideRef = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0);


    const redirectToLogin = () => props.navigation.navigate("Login");

    const redirectToSignUp = () => props.navigation.navigate("Wallet");


    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;


    return (
        <View>
            
        <StatusBar translucent backgroundColor='transparent' />

        <FlatList
            data={slides}
            horizontal
            pagingEnabled
            bounces={false}
            renderItem={({item}) => <OnBoardingItem item={item} />}
            keyExtractor={item => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            ref={slideRef}
            showsHorizontalScrollIndicator={false}
        />

        

          <Paginator data={slides} scrollX={scrollX}/>

          <View style={style.onBoardingBtnView}>
                    <OnboardinBtn
                        backgroundColor="#88DC32"
                        color="#0E2000"
                        title="LOG IN"
                        onPress={redirectToLogin}
                    />

                    <OnboardinBtn
                        backgroundColor="#fff"
                        color="#0E2000"
                        title="CREATE AN ACCOUNT"
                        onPress={redirectToSignUp}
                    />

                </View>

        </View>
    )
}

export default OnboardingTest;

