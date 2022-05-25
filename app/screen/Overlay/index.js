import React, { useEffect, useState, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, Platform, Dimensions, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { BottomSheetScrollView, useBottomSheetTimingConfigs, BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput, } from '@gorhom/bottom-sheet';
import {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

import styles from '@Screen/Home/style';
import { addToCart } from "@Request/Cart";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { SuccessMsgViewTwo } from "@Component";
import { cleanup } from "@Store/Cart";
import SmallCard from './SmallCard';
import { listCart } from "@Request/Cart";
import { searchProducts } from "@Request/Product";

const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(1);
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [adding, setAdding] = useState(false);
    const { addCart, errors } = useSelector((state) => state.cart);


    const snapPoints = useMemo(() => ["50%", "85%"], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

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
                    backgroundColor: "rgba(0,0,0,0.6)",

                },
                containerAnimatedStyle,
            ],
            [style, containerAnimatedStyle]
        );

        return <Animated.View style={containerStyle} />;
    };


    useEffect(() => {
        if (addCart === "failed") {
            refreshView(errors?.msg ? errors?.msg : "An error occurred", "")
            setSuccessMsg("");
        } else if (addCart === "success") {
            // dispatch(searchProducts(props.route?.params?.category));
            setErr("");
            refreshView("", "Added to Cart");
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [addCart]);

    useEffect(() => {
        setCartAmount(1);
    }, [props.isVisible]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {
        wait(300).then(() => {
            setSuccessMsg(suc);
            setErr(msg);
            setAdding(false)
            if (suc) {
                dispatch(listCart())
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: Platform.OS === "ios" ? 90 : 50
                })

            } else {
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        })

        wait(3000).then(() => { dispatch(cleanup()); })
    }, []);

    const increaseCart = () => {
        setErr("")
        if (result.quantity_available > cartAmount) return setCartAmount(cartAmount + 1)
    };

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, globalStyles.marginTop]}>
                <FIcon name="exclamation-circle" color="#fff" style={globalStyles.exclaImg} size={20} />
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    const decreaseCart = () => {
        setErr("")
        if (cartAmount > 1) return setCartAmount(cartAmount - 1);
    };

    const addItemsToCart = () => {
        setAdding(true)
        const cartDetails = { quantity: cartAmount, product_id: result.id }
        dispatch(addToCart(cartDetails));
    };
    const regex = new RegExp("^0+(?!$)", 'g');

    const ModalView = () => (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={props.bottomSheet}
                index={1}
                initialSnapIndex={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                style={[styles.addStoreBottomSheet]}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore"
                enablePanDownToClose
                draggable={true}
                animateOnMount={true}
                handleIndicatorStyle={{ display: "none" }}
            // hasDraggableIcon={true}
            >

                <TouchableOpacity onPress={props.onPress} style={styles.modalPaddingLayout}>
                    <Image source={require("@Assets/image/left.png")} style={globalStyles.backImg} />
                </TouchableOpacity>

                <View style={globalStyles.errInCoverNew}>
                    {errMsg ? <Toast config={toastConfig} /> : null}
                    {successMsg ? <Toast config={toastConfig} /> : null}
                </View>
                <BottomSheetScrollView contentContainerStyle={styles.scrollStyle} >

                    <View >
                        {result?.id ?
                            <View  >
                                <View style={styles.topModalView}>
                                    <View style={styles.topModalImageView}>
                                        <SmallCard img={result.product_images} />
                                    </View>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitle}>{result.name}</Text>
                                    </View>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitle2}>{result.pack_size}</Text>
                                        { props.output && props.output  != 0 ?
                                        <View style={styles.crossCover}>
                                        <Image source={require("@Assets/image/cross2.png")} style={styles.smCrossImg} />
                                        <Text style={styles.listPercent}>{props.output}</Text>
                        </View>
                        : null
                           }
                                    </View>
                                </View>

                                <View style={styles.modalMiniBody} showsVerticalScrollIndicator={true}>
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Category: <Text style={styles.modalminiSecondTitle}>{result.category.display_name}</Text></Text>
                                    </View>
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Available: {result.quantity_available > 0 ? <Text style={{ color: "#469D00" }}>In Stock ({result.quantity_available})</Text> : <Text style={{ color: "red" }}>Out of Stock</Text>}</Text>
                                    </View>
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Price/Roll: <Text style={{ color: "#469D00" }}>&#8358;{commafy(result.price_per_pack)}</Text></Text>
                                    </View>
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Carton Quantity: <Text style={{ color: "#469D00" }}>{result.quantity_per_carton}</Text></Text>
                                    </View>
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Pack Quantity: <Text style={{ color: "#469D00" }}>{result.quantity_per_pack}</Text></Text>
                                    </View>

                                    {result.quantity_available > 0 ?

                                        <View style={styles.increaseCartMainAmountView}>
                                            <View style={styles.cartAmountView}>
                                                <TouchableOpacity style={styles.increase} onPress={decreaseCart}>
                                                    <Icon name="minus" color="#212121" />
                                                </TouchableOpacity>
                                                <View style={styles.increaseText}>
                                                    <BottomSheetTextInput
                                                        style={styles.label2}
                                                        value={cartAmount.toString()}
                                                        onChangeText={(val) => {
                                                            if (result.quantity_available >= val) {
                                                                val = val.replaceAll(regex, "")
                                                                setCartAmount(val.replace(/[^0-9]/g, ''))
                                                            }
                                                        }
                                                        }
                                                        keyboardType="numeric"
                                                    />
                                                    {/* <Text style={styles.productTitle}>{cartAmount}</Text> */}
                                                </View>
                                                <TouchableOpacity style={styles.decrease} onPress={increaseCart}>
                                                    <Icon name="plus" color="#212121" />
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <Text style={styles.amountText}>&#8358;{commafy(result.price_per_pack * cartAmount)}</Text>
                                            </View>
                                        </View>
                                        : null}

                                    <View style={styles.modalHeartIconView}>

                                        {result.quantity_available > 0
                                            ?
                                            !adding ?
                                                <TouchableOpacity style={styles.modalBtnView} onPress={addItemsToCart}>
                                                    <Icon name="shopping-cart" size={16} color="#fff" />
                                                    <View style={styles.modalBtnOverlay} >
                                                        <Text style={styles.modalBtnText}>Add to Cart</Text>
                                                    </View>

                                                </TouchableOpacity>
                                                :
                                                <View style={styles.modalBtnView} >
                                                    <Icon name="shopping-cart" size={16} color="#fff" />
                                                    <View style={styles.modalBtnOverlay} >
                                                        <Text style={styles.modalBtnText}>Loading</Text>
                                                    </View>

                                                </View>
                                            : null}
                                    </View>
                                </View>

                            </View>
                            : null}
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

