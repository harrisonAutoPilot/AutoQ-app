import React, { useEffect, useState, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image,  Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import {
    BottomSheetScrollView, useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { AuthBtn, COHeader as Header } from "@Component/index";

import styles from './style';
import { addDealToCart } from "@Request/Deal";
import commafy from "@Helper/Commafy";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { cleanup } from "@Store/Deal";
import SmallCard from '@Screen/Overlay/SmallCard';


const Overlay = (props) => {

    const dispatch = useDispatch();

    const result = props.result;

    console.log("the result oooo", result)
    const regex = new RegExp("^0+(?!$)", 'g');


    const [errMsg, setErr] = useState("");
    const [adding, setAdding] = useState(false);
    const [amount, setAmount] = useState(0)


    const { addDeal, addDealStatus, errors } = useSelector((state) => state.deal);


    const snapPoints = useMemo(() => ['55%', '90%'], []);


    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 250,
        easing: Easing.exp,
    });

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

 


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {

        setAdding(false)

        if (suc) {
            setErr("");
            //props.onPress()
           

        } else {
            setErr(msg);
            Toast.show({
                type: 'error',
                visibilityTime: 4000,
                autoHide: true,
                position: 'top',
                topOffset: 0
            })
        }

        wait(4000).then(() => { dispatch(cleanup()); })
    }, []);




    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, globalStyles.marginTop, { marginHorizontal: 20 }]}>
                <FIcon name="exclamation-circle" color="#fff" style={globalStyles.exclaImg} size={20} />
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        )
    };


    const ModalView = () => (

        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheetPrompt}
                index={1}
                initialSnapIndex={1}
                snapPoints={snapPoints}
                style={styles.addStoreBottomSheet}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                handleIndicatorStyle={{ display: "none" }}
                 >

                <Header title="Send Code"
                onPress={backToCart}
                styleView={styles.body}
                styles={styles.headerText}
                />


                <BottomSheetScrollView
                    contentContainerStyle={styles.scrollStyle}
                    bounces={false}
                >

                 

                </BottomSheetScrollView>

            </BottomSheetModal>

        </BottomSheetModalProvider>

    );

    return (
        ModalView()
    )
};

export default Overlay;