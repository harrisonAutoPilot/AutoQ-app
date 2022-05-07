import React, { useEffect, useState, useRef, useCallback, useMemo, Fragment } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, Dimensions, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { Portal } from 'react-native-portalize';
import styles from '@Screen/Home/style';
import { addToCart} from "@Request/Cart";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { SuccessMsgViewTwo } from "@Component";
import { cleanup } from "@Store/Cart";
// import BottomSheet from "react-native-gesture-bottom-sheet";
import { BottomSheetScrollView, useBottomSheetTimingConfigs, BottomSheetModal } from '@gorhom/bottom-sheet';
import {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import SmallCard from './SmallCard';
import { listCart } from "@Request/Cart";
import { searchProducts } from "@Request/Product";

const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(1);
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [adding, setAdding]  = useState(false);
    const { addCart, errors } = useSelector((state) => state.cart);

  console.log(props.isVisible);
  
    const snapPoints = useMemo(() => ['50%', '80%'], []);
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
            refreshView(errors?.msg ? errors?.msg :"An error occurred", "")
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


    const ModalView = () => (
        // <Portal>
        
        <Fragment>
           
            <BottomSheetModal
                    ref={props.bottomSheet}
                    index={1}
                    initialSnapIndex={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    style={[styles.addStoreBottomSheet]}
                    animationConfigs={animationConfigs}
                    backdropComponent={CustomBackdrop}
                    enablePanDownToClose
                    draggable={true}
                    animateOnMount={true}
                    handleIndicatorStyle={{display:"none"}}
                    hasDraggableIcon={true}
                >
        <View style={{flex: 1, borderRadius:70}}>
            
             <BottomSheetScrollView contentContainerStyle={styles.scrollStyle}  >
            {/* <BottomSheet hasDraggableIcon ref={props.bottomSheet} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.13} radius={50} styles={styles.addStoreBottomSheet}> */}
                <View style={globalStyles.dragIcon}><FIcon name="minus" color="gray" size={35} /></View>

                <View style={globalStyles.errInCoverNew}>
                    {errMsg ? <Toast config={toastConfig} /> : null}
                    {successMsg ? <Toast config={toastConfig} /> : null}
                </View>
                <TouchableOpacity onPress={props.onPress} style={styles.modalPaddingLayout}>
                    <Image source={require("@Assets/image/left.png")} style={globalStyles.backImg} />
                </TouchableOpacity>


                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} keyboardShouldPersistTaps="always">
                    {result?.id ?
                        <View>
                            <View style={styles.topModalView}>
                                <View style={styles.topModalImageView}>
                                    <SmallCard img={result.product_images} />
                                </View>
                                <View style={styles.modalTitleView}>
                                    <Text style={styles.modalTitle}>{result.name}</Text>
                                </View>
                                <View style={styles.modalTitleView}>
                                    <Text style={styles.modalTitle2}>{result.pack_size}</Text>
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

                                {/* <View style={styles.modalDiscount}>
                                    <View>
                                        <Icon name="info" size={18} color="#00319D" />
                                    </View>
                                    <View style={styles.modalDiscountTextView}>
                                        <Text style={styles.modalDiscountText}>Discount on Carton: {result.discount_on_carton}</Text>
                                    </View>
                                </View> */}

                                <View style={styles.increaseCartMainAmountView}>
                                    <View style={styles.cartAmountView}>
                                        <TouchableOpacity style={styles.increase} onPress={decreaseCart}>
                                            <Icon name="minus" color="#212121" />
                                        </TouchableOpacity>
                                        <View style={styles.increaseText}>
                                            <Text style={styles.productTitle}>{cartAmount}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.decrease} onPress={increaseCart}>
                                            <Icon name="plus" color="#212121" />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={styles.amountText}>&#8358;{commafy(result.price_per_pack * cartAmount)}</Text>
                                    </View>
                                </View>

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
                </ScrollView>
            {/* </BottomSheet> */}
           
            </BottomSheetScrollView>
        </View>
        </BottomSheetModal>
 
</Fragment>

// {/*  </Portal> */}
    );

    return (
        <View>
            {ModalView()}
        </View>
    )
};

export default Overlay;