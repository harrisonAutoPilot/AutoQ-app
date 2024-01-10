import React, { useState, useEffect } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";


import { LoginHeader, OnboardinBtn } from "@Component2";
import style from "./style";
import data from "./data";
import { getUserDetails, cleanUserDetails } from "@Store2/Auth";



const SelectCategory = (props) => {


    const offset = useSharedValue(0);


    const dispatch = useDispatch();


    const [selected, setSelected] = useState(null);

    const [progress, setProgress] = useState(0);


    const goBack = () => props.navigation.goBack();


    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(0.125)
            }, 300);
        }, 800);

        dispatch(cleanUserDetails());

    }, [])


    const selectCategory = (id) => {

        setSelected(id);

        bounce()


    };

    const bounce = () => {

        offset.value = withSpring(0.1, {}, (finished) => {
            if (finished) {
                offset.value = withSpring(0)
            }

        });
    }


    const nextScreen = () => {

        dispatch(getUserDetails({ user_type: selected }));

        props.navigation.navigate("FormDetails");

    };


    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withSpring(offset.value * 255),
                },
            ],
        };
    });


    const RenderItem = ({ item }) => {

        return (
            <Animated.View
                style={item.id == selected && animatedStyles}
            >
                <TouchableOpacity
                    style={[style.renderItemContainer,
                    selected == item.id && style.activeRenderItemContainer]}
                    onPress={() => selectCategory(item.id)}>

                    <View style={style.categoryTitleView}>
                        <Text style={style.categoryTitle}>{item.title}</Text>

                        {selected === item.id &&

                            <Text style={style.categoryDesc}>{item.desc}</Text>
                        }
                    </View>

                    <View>
                        {
                            selected !== item.id
                                ?
                                <Icon name="radio-button-off" size={22} color="#C2C5DD" />
                                :
                                <Icon name="radio-button-on" size={22} color="#3353CB" />
                        }

                    </View>
                </TouchableOpacity>
            </Animated.View>

        )

    }

    return (
        <View style={style.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >
               <ProgressBar
                 percentage={'15%'}
                />
            </LoginHeader>

            <View style={style.signupPinTitleContainer}>

                <View style={style.signupMiniTitleContainer}>

                    <Text style={style.signupTitle}>Welcome Onboard</Text>

                    <Text style={style.signupDesc}>Tell us about your store so we can help find the right products and prices for you.</Text>

                </View>

                <View style={style.listContainer}>

                    <FlatList
                        data={data}
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}
                    />

                </View>


                <View style={style.continueBtnView}>
                    <OnboardinBtn
                        title="CONTINUE"
                        backgroundColor="#3353CB"
                        color="#fff"
                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                        disabled={!selected}
                        onPress={nextScreen}
                    />
                </View>

            </View>

        </View>
    )
};

export default SelectCategory;