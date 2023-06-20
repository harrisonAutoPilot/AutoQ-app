import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, Platform, ActivityIndicator } from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput, BottomSheetFlatList
} from '@gorhom/bottom-sheet';
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';


import styles from './style';
import RenderItem from "./RenderItem";



const Overlay = (props) => {


    const [filteredCode, setFilteredCode] = useState(null);

    const [filterResult, setFilteredResult] = useState([]);



    const filterCode = (val) => {
        if (val) {
            setFilteredCode(val);

            let item = props.data.filter(item => {
                let name = item.name.toLowerCase().includes(val.toLowerCase())
                return name
            });

            setFilteredResult(item)

        } else {
            setFilteredCode(null);
        }

    };



    const CustomBackdrop = ({ animatedIndex, style }) => {
        // animated variables
        const containerAnimatedStyle = useAnimatedStyle(() => ({
            opacity: interpolate(
                animatedIndex.value,
                [0, 1],
                [0, 1],
                Extrapolate.CLAMP
            ),
        }));

        const containerStyle = useMemo(
            () => [
                style,
                {
                    backgroundColor: "rgba(0,0,0,0.6)"
                },
                containerAnimatedStyle,
            ],
            [style, containerAnimatedStyle]
        );

        return <Animated.View style={containerStyle} />;
    };


    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 350,
        easing: Easing.exp,
    });

    const clearSearch = () => {
        setFilteredCode(null)
    }


    return (

        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheetRef}
                index={1}
                initialSnapIndex={1}
                snapPoints={['90%', "90%"]}
                style={styles.bottomSheetContainer}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                animateOnMount={true}
                keyboardBehavior={Platform.OS === "ios" ? "fillParent" : "fullscreen"}
                keyboardBlurBehavior="restore"
                enableHandlePanningGesture={false}
                draggable={false}
                handleIndicatorStyle={{ display: "none" }}
                enableContentPanningGesture={false}

            >

                <View style={styles.headerView}>
                    <TouchableOpacity
                        onPress={props.closeBottomSheet}
                        style={styles.headerCloseIcon}>
                        <Icon name="close" size={24} color="#1B1B1F" />
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.headerTitle}>{props.name}</Text>
                    </View>
                </View>

                {props.data?.length && props.status == "success" ?

                    <View style={styles.bottomSheetTextInputContainer}>
                        <View style={styles.bottomSheetTextInputInnerContainer}>
                            <Icon name="search" size={22} color="#767680" />

                            <BottomSheetTextInput
                                style={styles.bottomSheetTextInput}
                                placeholder="Search"
                                placeholderTextColor="#45464F"
                                onChangeText={(val) => filterCode(val)}
                            />

                        </View>

                        <TouchableOpacity style={styles.bottomSheetTextInputCloseIconView} onPress={clearSearch}>
                            <Icon name="cancel" size={22} color="#767680" />
                        </TouchableOpacity>

                    </View>
                    : null
                }


                {
                    props.err !== null && props.err !== undefined ?
                        <View style={styles.errView} >
                            <Icon name="error-outline" size={22} color="#fff" />
                            <Text style={styles.errText}>{props.err}</Text>
                        </View> :

                        props.status == "idle" || props.status == "pending" ?

                            <ActivityIndicator color="#3353CB" />
                            :

                            <BottomSheetFlatList
                                data={filteredCode ? filterResult : props.data}
                                renderItem={({ item }) =>
                                    <RenderItem item={item}
                                        closeBottomSheet={props.closeBottomSheet}
                                        resetSearch={clearSearch}
                                        keys={props.keys}
                                        itemKey={props.itemKey}
                                        ids={props?.ids}
                                        getProps={props.getProps}
                                        propsname={props.propsname}
                                    />}
                                keyExtractor={item => item.name}
                                bounces={false}
                                ListFooterComponent={<View style={styles.bottomsheetFooter} />}

                            />
                }



            </BottomSheetModal>

        </BottomSheetModalProvider>

    )
};

export default Overlay;