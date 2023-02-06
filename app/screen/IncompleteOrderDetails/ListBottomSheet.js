import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image,FlatList, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import {
    BottomSheetScrollView,BottomSheetFlatList , useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

import { AuthBtn, COHeader as Header } from "@Component/index";
import styles from './style';
import { getCustomerPendingOrders, verifyOrder, verifyCode , verifyCodeIncomplete} from "@Request/CustomerOrder";
import commafy from "@Helper/Commafy";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { cleanup } from "@Store/Deal";
import SmallCard from '@Screen/Overlay/SmallCard';


const Overlay = (props) => {

    const dispatch = useDispatch();

    const [results, setResults] = useState(props?.result)
    // const results = props?.result

    const textRef = useRef()
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

 const closePrompt = () => {
    bottomSheetPrompt.current.close()
 }

 const ListView = ({ item, index }) => (
    <View style={styles.listContent}>
       <Text style={styles.itemList}>{item.product.name}</Text>
        <Text style={styles.qtyList}>{item.product.quantity_available}</Text>
    </View>
 );

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


    const ListItemView = () => (

        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheetList}
                index={1}
                initialSnapIndex={1}
                snapPoints={snapPoints}
                style={styles.addStoreBottomSheet}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                handleIndicatorStyle={{ display: "none" }}
                 >

                <View style={styles.modalPadding}>
                    
                    <TouchableOpacity onPress={props.onPressList} style={styles.backCover}>
                        <Image source={require("@Assets/image/leading-iconn.png")} style={globalStyles.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Items out of Stock</Text>
                </View>

              
                 <View style={styles.flexCover}>
                 <View style={styles.midListContainer}>
                     <View style={styles.listHeader}>
                        <Text style={styles.itemTitle}>Items</Text>
                        <Text style={styles.qtyTitle}>QTY</Text>
                    </View>       
                     
                       <View style={{height:"80%",}}>
                        <FlatList
                            data={props?.result}
                            renderItem={ListView}
                            vertical
                            initialNumToRender={10}
                            keyExtractor={(item) => item?.id}
                            showsVerticalScrollIndicator={false}
                            maxToRenderPerBatch={10}
                            windowSize={7} 
                        />
                        </View> 
                       
                       
                          
                    </View>
                 
                    <View style={[styles.addBtnCover2]}>
                        <AuthBtn title="Proceed without Items" style={styles.addressBtn2} styles={styles.btnText2} onPress={props.proceed} />
                     </View>
                 </View>
              

            </BottomSheetModal>

        </BottomSheetModalProvider>

    );

    return (
        ListItemView()
    )
};

export default Overlay;