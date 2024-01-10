import React, { useMemo } from "react";
import { View, Text,TouchableOpacity } from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';


import styles from '../style';
import { pack, price, store } from "./data";
import { OnboardinBtn } from "@Component2";



const BrowseItemProductsBottomSheet = (props) => {


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


    const setPropsPrice = (id) => {

            props.setSort(id);
       
    };

    const setPropsPack = (id) => {
    
            props.setPack(id);
       
    };

    const setPropsStore = (item) => {
    
        props.setStore(item.id);

        props.objList(item)
   
};



    const ListPrice = ({ data }) => {
        return (
            data?.map(item => (

                <TouchableOpacity key={item.id} style={styles.filterPriceList} onPress={() => setPropsPrice(item.id)}>
                      <Text style={item.id == props.sortId ? styles.filterPriceActiveListTitle:styles.filterPriceListTitle}>{item.type}</Text>
                    {item.id == props.sortId 
                    ?
                    <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={20} />:
                  
                    <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }

                </TouchableOpacity>

            ))
        )
    };



    const ListStore = ({ data }) => {
        return (
            data?.map(item => (

                <TouchableOpacity key={item.id} style={styles.filterPriceList} onPress={() => setPropsStore(item)}>
                      <Text style={item.id == props.storeId ? styles.filterPriceActiveListTitle:styles.filterPriceListTitle}>{item.type}</Text>
                    {item.id == props.storeId 
                    ?
                    <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={20} />:
                  
                    <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }

                </TouchableOpacity>

            ))
        )
    };


    const ListPack = ({ data }) => {
        return (
            data?.map(item => (

                <TouchableOpacity key={item.id} style={styles.filterPriceList} onPress={() => setPropsPack(item.id)}>
                      <Text style={item.id == props.packId ? styles.filterPriceActiveListTitle:styles.filterPriceListTitle}>{item.type}</Text>
                    {item.id == props.packId
                    ?
                    <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={20} />:
                  
                    <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }

                </TouchableOpacity>

            ))
        )
    };

    




    return (

            <BottomSheetModalProvider>

                <BottomSheetModal
                    ref={props.bottomSheetRef}
                    index={1}
                    initialSnapIndex={1}
                    snapPoints={['87%', "87%"]}
                    animationConfigs={animationConfigs}
                    backdropComponent={CustomBackdrop}
                    animateOnMount={true}
                >

                    <BottomSheetScrollView bounces={false}>
                        <View style={styles.bottomSheet}>
                            <View style={styles.filterHeader}>
                                <Text style={styles.filterHeaderText}>Filter by</Text>
                                <TouchableOpacity onPress={props.reset}>
                                    <Text style={styles.filterResetText}>Reset</Text>
                                </TouchableOpacity>
                            </View>
                        <View style={styles.filterPriceView}>
                                <Text style={styles.filterPriceTitle}>Store type</Text>
                            </View>

                            <ListStore data={store} />

                            <View style={styles.divider} />


                            <View style={styles.filterPriceView}>
                                <Text style={styles.filterPriceTitle}>Price</Text>
                            </View>

                            <ListPrice data={price} />

                            <View style={styles.divider} />

                            <View style={styles.filterPriceView}>
                                <Text style={styles.filterPriceTitle}>Pack Style</Text>
                            </View>

                            <ListPack data={pack} />

                            <View style={styles.filterBtn}>

                                <OnboardinBtn
                                    title="Apply"
                                    backgroundColor="#3353CB"
                                    color="#fff"
                                    onPress={props.apply}
                                    disabled={!props.sortId.length && !props.packId.length}
                                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                />
                            </View>


                        </View>
                    </BottomSheetScrollView>

                </BottomSheetModal>

            </BottomSheetModalProvider>

    )
};

export default BrowseItemProductsBottomSheet;