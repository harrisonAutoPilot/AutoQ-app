import React, { useEffect, useState, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, Platform, Animated } from "react-native";
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
import { SuccessMsgViewTwo, AuthBtn as Btn, } from "@Component";
import { cleanup } from "@Store/Cart";
import SmallCard from './SmallCard';
import { listCart } from "@Request/Cart";
import { productNotification } from "@Request/Product";
import { cleanNotification } from "@Store/Product";

const Overlay = (props) => {
    const dispatch = useDispatch();

    const result = props.result;

    const regex = new RegExp("^0+(?!$)", 'g');

    const [cartAmount, setCartAmount] = useState(1);
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [adding, setAdding] = useState(false);
    const [notifying, setNotfying] = useState(false);

    const { addCart, errors } = useSelector((state) => state.cart);
    const { notifyStatus, notify } = useSelector((state) => state.product);

    const getProductNotification = () => {
        setNotfying(true)
        dispatch(productNotification(result.id))
    }

    // Bottom Sheet SnapPoints
    const snapPoints = useMemo(() => ["50%", "85%"], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 250,
        easing: Easing.exp,
    });

    const CustomBackdrop = ({ animatedIndex, style }) => {
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


    // UseEffects
    useEffect(() => {
        if (result.max_quantity_per_sale != 0  && cartAmount > result.max_quantity_per_sale) {
            refreshView("Max Quantity Exceeded", "")
           setCartAmount(1)
        } 
    }, [cartAmount]);

    // UseEffects
    useEffect(() => {
        if (addCart === "failed") {
            refreshView(errors?.msg ? errors?.msg : "An error occurred", "")
            setSuccessMsg("");
        } else if (addCart === "success") {
            setErr("");
            refreshView("", "Added to Cart");
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [addCart]);

    useEffect(() => {
        if (notifyStatus === "failed") {
            refreshNotifyView(errors?.msg ? errors?.msg : "An error occurred", "")
            setSuccessMsg("");
        } else if (notifyStatus === "success") {
            setErr("");
            refreshNotifyView("", notify.msg);
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [notifyStatus]);

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
                dispatch(listCart(1))
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

    const refreshNotifyView = useCallback((msg, suc) => {
        wait(300).then(() => {
            setSuccessMsg(suc);
            setErr(msg);
            setNotfying(false)
            if (suc) {
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

        wait(3000).then(() => { dispatch(cleanNotification()); })
    }, []);

    const increaseCart = () => {
        setErr("")
        if (result.stock_count > cartAmount)
            return setCartAmount(cartAmount + 1)
    };

    console.log("this is the result for", result)

    const decreaseCart = () => {
        setErr("")
        if (cartAmount > 1) return setCartAmount(cartAmount - 1);
    };

    const addItemsToCart = () => {
        setAdding(true)
        const cartDetails = { quantity: cartAmount, product_id: result.id }
        dispatch(addToCart(cartDetails));
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
                keyboardBehavior={Platform.OS === "ios"  ? "fillParent" : "fullscreen"}
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
                <BottomSheetScrollView contentContainerStyle={styles.scrollStyle} 
                 bounces={false}
                >

                    <View>
                        {result?.id ?
                            <View >
                                <View style={styles.topModalView}>
                                    <View style={styles.topModalImageView}>
                                        <SmallCard img={result.product_images} />
                                    </View>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitle}>{result.name}</Text>
                                    </View>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitle2}>{result.pack_size}</Text>
                                       
                                        {props.output && props.output != 0 ?
                                            <View style={styles.crossCover}>
                                                <Image source={require("@Assets/image/cross2.png")} style={styles.smCrossImg} />
                                                <Text style={styles.listPercent}>{props.output}</Text>
                                            </View>
                                            : null
                                        }
                                    </View>
                                    {
                                        result.description != null ?
                                        <View style={styles.descriptionCover}>
                                        <Text style={styles.descriptionTitle}>Combo Description</Text>
                                        <Text style={styles.descriptionContent}>{result.ddescription}</Text>
                                    </View>
                                    :
                                    null
                                    }
                                    
                                </View>
                                

                                <View style={styles.modalMiniBody}>
                                
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Category: <Text style={styles.modalminiSecondTitle}>{result.category.display_name}</Text></Text>
                                    </View>
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Available: {result.stock_count > 0 ? <Text style={{ color: "#469D00" }}>In Stock ({commafy(result.stock_count)})</Text> : <Text style={{ color: "red" }}>Out of Stock</Text>}</Text>
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
                                    <View style={styles.modalminiSecondView}>
                                        <Text style={styles.modalminiTitle}>Expiry Date: <Text style={{ color: "red" }}>{result.expiry_date}</Text></Text>
                                    </View>
                                    {
                                        result.max_quantity_per_sale > 0 ?
                                        <View style={styles.modalminiSecondView}>
                                         <Text style={styles.modalminiTitle}>Max Quantity Per Sales: <Text style={{ color: "red" }}>{result.max_quantity_per_sale}</Text></Text>
                                         </View>
                                         :
                                         null
                                    }
                                    

                                    {result.stock_count > 0 ?

                                        <View>

                                            <View style={styles.increaseCartMainAmountView}>
                                                <View style={styles.cartAmountView}>
                                                    <TouchableOpacity style={styles.increase} onPress={decreaseCart}>
                                                        <Icon name="minus" color="#212121" />
                                                    </TouchableOpacity>
                                                    <View style={styles.increaseText}>
                                                        <BottomSheetTextInput
                                                            style={styles.labelCart}
                                                            value={cartAmount.toString()}
                                                            onChangeText={(val) => {
                                                                val = val.replaceAll(regex, "")
                                                                if (val <= parseInt(result.stock_count) ) {
                                                                    setCartAmount(val.replace(/[^0-9]/g, ''))
                                                                }
                                                            }
                                                            }
                                                            keyboardType="numeric"
                                                        />
                                                    </View>
                                                    <TouchableOpacity style={styles.decrease} onPress={increaseCart}>
                                                        <Icon name="plus" color="#212121" />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: "57%" }}>
                                                    <Text style={styles.amountText}>&#8358;{commafy(result.price_per_pack * cartAmount)}</Text>
                                                </View>
                                            </View>


                                            <View style={styles.modalHeartIconView}>

                                                {
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
                                                }
                                            </View>
                                        </View>
                                        :
                                        result.has_notified ?
                                        <Btn title="Notification Sent" style={styles.notifyMeBtn2} />
                                    :

                                        notifying ?
                                            <View style={styles.modalBtnView} >
                                                <View style={styles.modalBtnOverlay} >
                                                    <Text style={styles.modalBtnText}>Sending ...</Text>
                                                </View>

                                            </View> :

                                            <Btn title="Notify Me" style={styles.notifyMeBtn} onPress={getProductNotification} />
                                    }
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

