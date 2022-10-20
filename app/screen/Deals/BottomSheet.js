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


import styles from './style';
import { addDealToCart } from "@Request/Deal";
import commafy from "@Helper/Commafy";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { cleanup } from "@Store/Deal";
import SmallCard from '@Screen/Overlay/SmallCard';


const Overlay = (props) => {

    const dispatch = useDispatch();

    const result = props.result;


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

    useEffect(() => {
        setAmount(result.buy)
    }, [props.isVisible])


    useEffect(() => {

        if (addDealStatus === "failed") {
            refreshView(errors?.msg, "")
        } else if (addDealStatus === "success") {
            refreshView("", addDeal.message);
        }

    }, [addDealStatus]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {

        setAdding(false)

        if (suc) {
            setErr("");
            props.onPress()
           

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


    const addItemsToCart = () => {

        if (amount.toString()[0] === "0") {

            refreshView("Invalid Amount", "");

        } else if (amount < result.buy) {

            refreshView(`Amount cannot be less than ${result.buy}`, "");

        }
        else if (amount >= result.buy && amount.toString()[0] !== "0") {

            setAdding(true)

            const cartDetails = { quantity: amount, id: result.id }

            dispatch(addDealToCart(cartDetails));

        }

    };


    const sentenceCase = (str) => {

        if (str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        }

    };



    const ModalView = () => (

        <BottomSheetModalProvider>


            <BottomSheetModal
                ref={props.bottomSheet}
                index={1}
                initialSnapIndex={1}
                snapPoints={snapPoints}
                style={styles.addStoreBottomSheet}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                handleIndicatorStyle={{ display: "none" }}
                 >

                <TouchableOpacity onPress={props.onPress} style={styles.modalPaddingLayout}>
                    <Image source={require("@Assets/image/left.png")} style={globalStyles.backImg} />
                </TouchableOpacity>


                <BottomSheetScrollView
                    contentContainerStyle={styles.scrollStyle}
                    bounces={false}
                >

                    <View >
                        <View style={styles.toastCover}>

                        </View>
                        <View style={globalStyles.errInCoverNew}>
                            {errMsg ? <Toast config={toastConfig} /> : null}
                        </View>
                        <View>

                            <View style={styles.topModalImageView}>
                                <SmallCard img={result.product?.product_images} style={styles.smallCardCover} />
                            </View>

                            <View style={styles.promoContainer}>
                                <Text style={styles.modalTitle3} numberOfLines={1}>{result.title}</Text>
                            </View>
                            <View style={styles.modalTitleView}>
                                <Text style={styles.modalTitle2}>{result.product?.name}</Text>
                                <Text style={styles.modalTitle2}>{result.pack_size}</Text>
                            </View>
                        </View>

                        <View style={styles.modalMiniBody}>
                            <Text style={styles.aboutText}>About this product</Text>
                            <Text style={styles.aboutDesText}>{sentenceCase(result.description)}</Text>

                        </View>

                        <View style={styles.modalMiniBody}>
                            <View style={styles.modalminiSecondView}>
                                <Text style={styles.modalminiTitle}>Category: <Text style={styles.modalminiSecondTitle}>{result?.product?.category?.display_name}</Text></Text>
                            </View>

                            <View style={styles.modalminiSecondView}>
                                <Text style={styles.modalminiTitle}>Price/Pack: <Text style={{ color: "#469D00" }}>&#8358;{result.product?.price_per_pack ? commafy(result.product?.price_per_pack) : null}</Text></Text>
                            </View>

                            <View style={styles.modalminiSecondView}>
                                <Text style={styles.modalminiTitle}>Pack Quantity: <Text style={{ color: "#469D00" }}>{result.quantity}</Text></Text>
                            </View>

                            <View style={styles.modalminiSecondView}>
                                <Text style={styles.modalminiTitle}>Expiry Date: <Text style={{ color: "red" }}>{result.product?.expiry_date}</Text></Text>
                            </View>

                        </View>

                        <View style={styles.modalMiniBody2}>

                            <View style={styles.increaseCartMainAmountView}>

                                <View style={styles.cartAmountView}>

                                    <BottomSheetTextInput
                                        style={styles.label2}
                                        value={amount?.toString()}
                                        onChangeText={(val) => {
                                            val = val.replaceAll(regex, "")
                                            if (val <= result.quantity) {
                                                setAmount(val.replace(/[^0-9]/g, ''))
                                            }

                                        }
                                        }
                                        keyboardType="numeric"

                                    />

                                </View>

                                <View style={{ width: "57%" }}>
                                    <Text style={styles.amountText}>&#8358;{commafy(parseInt(result.product?.price_per_pack) * amount)}</Text>
                                </View>
                            </View>
                            {!adding ?


                                <TouchableOpacity style={styles.modalBtnView} onPress={addItemsToCart}>
                                    <Icon name="shopping-cart" size={16} color="#212121" />
                                    <View style={styles.modalBtnOverlay} >
                                        <Text style={styles.modalBtnText}>Add to Cart</Text>
                                    </View>

                                </TouchableOpacity>
                                :
                                <View style={styles.modalBtnView}>
                                    <View style={styles.modalBtnOverlay} >
                                        <Text style={styles.modalBtnText}>Loading</Text>
                                    </View>

                                </View>
                            }
                        </View>

                    </View>


                </BottomSheetScrollView>

            </BottomSheetModal>

        </BottomSheetModalProvider>

    );

    return (
        ModalView()
    )
};

export default Overlay;