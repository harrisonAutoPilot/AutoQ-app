import 'react-native-gesture-handler';
import React, { useMemo,useState, useRef} from "react";
import { View, Text,TouchableOpacity, ScrollView} from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetView, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import styles from './style';
// import { TouchableOpacity } from "react-native-gesture-handler";
import { period, track } from "./data";
import { OnboardinBtn,CalendarSheet } from "@Component2";
import {COLORS} from "@Helper2/constant";

import BottomSheet from "react-native-gesture-bottom-sheet";


const OrderBottomSheet = (props) => {
    const bottomSheetCalendar = useRef(null);

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

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


    const setPropsTrack = (id) => {

        props.setTrack(id);

    };

    const setPropsPeriod = (id) => {
        console.log("the period ...", id)
        if(id == 'last_3_months'){
          
           bottomSheetCalendar.current?.show();
           const date = {startDate:startDate, endDate: endDate}
           console.log("just to know the start and end date", date)
           props.setPeriod(date && date);
           props.setEnd(endDate)
           props.setStart(startDate)
        }else{
            props.setPeriod(id);
            setStartDate("")
            setEndDate("")
            console.log("just to know the start and end date", id)
        }
       
        

       

    };

    const closeCalendar = () =>{
        bottomSheetCalendar.current?.close();
    }


    const ListTrack = ({ data }) => {
        return (
            data?.map(item => (

                <TouchableOpacity key={item.id} style={styles.filterPriceList} onPress={() => setPropsTrack(item.id)}>
                    <Text style={item.id == props.priceId ? styles.filterPriceActiveListTitle : styles.filterPriceListTitle}>{item.type}</Text>
                    {item.id == props.trackId
                        ?
                        <Icon name="radio-button-checked" color={COLORS.primary} size={20} /> :

                        <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }

                </TouchableOpacity>

            ))
        )
    };

    const ListPeriod = ({ data }) => {
        return (
            data?.map(item => (

                <TouchableOpacity key={item.id} style={styles.filterPriceList} onPress={() => setPropsPeriod(item.id)}>
                    <Text style={item.id == props.periodId ? styles.filterPriceActiveListTitle : styles.filterPriceListTitle}>{item.type}</Text>
                    {item.id == props.periodId
                        ?
                        <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={20} /> 

                        : item.id === 'last_3_months' && endDate != "" ?

                        <View style={styles.smDateBtn}>
                            <Text style={styles.smDateBtnText}>Date Selected</Text>
                        </View>

                        :

                        <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }

                </TouchableOpacity>

            ))
        )
    };



    return (
  
                 <BottomSheet hasDraggableIcon ref={props.bottomSheetRef} height={600} >

                <View style={styles.filterHeader}>
                    <Text style={styles.filterHeaderText}>Filter by</Text>
                    <TouchableOpacity onPress={props.reset}>
                        <Text style={styles.filterResetText}>Reset</Text>
                    </TouchableOpacity>
                </View>

               <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    <View style={styles.bottomSheet}>

                        <View style={styles.filterPriceView}>
                            <Text style={styles.filterPriceTitle}>Orders</Text>
                        </View>

                        <ListTrack data={track} />

                        <View style={styles.divider} />

                        <View style={styles.filterPriceView}>
                            <Text style={styles.filterPriceTitle}>Date</Text>
                        </View>

                        <ListPeriod data={period} />

                        <View style={styles.filterBtn}>

                            <OnboardinBtn
                                title="Apply"
                                backgroundColor="#3353CB"
                                color="#fff"
                                onPress={props.apply}
                                disabled={!props.periodId.length && !props.trackId.length && !props.start.length}
                                disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                            />
                        </View>
                    </View>
              </ScrollView>

              <CalendarSheet 
                bottomSheetCalendar = {bottomSheetCalendar}
                closeCalendar={closeCalendar}
                startDate={(date) => {
                    props.start(date)
                    setStartDate(date)
                }}   
                endDate={(date) => {
                    props.end(date)
                    setEndDate(date)
                }}
              />
                </BottomSheet>

    
    
      
    )
};

export default OrderBottomSheet;