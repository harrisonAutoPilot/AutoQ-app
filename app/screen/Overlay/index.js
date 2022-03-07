import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import styles from '@Screen/Home/style';
import globalStyle from "@Helper/GlobalStyles";
import { addToCart} from "@Request/Cart";
import commafy from "@Helper/Commafy";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { SuccessMsgViewTwo } from "@Component";
import { cleanup } from "@Store/Cart";
import BottomSheet from "react-native-gesture-bottom-sheet";
import SmallCard from './SmallCard';
import { searchProducts } from "@Request/Product";

const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(1);
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const { addCart, errors } = useSelector((state) => state.cart);

    useEffect(() => {
        if (addCart === "failed") {
            refreshView(errors?.msg ? errors?.msg :"An error occurred", "")
            console.log("ko")
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

        wait(3000).then(() => { dispatch(cleanup()); })
    }, []);

    const increaseCart = () => {
        setErr("")
        if (result.quantity_available > cartAmount) return setCartAmount(cartAmount + 1)
    };

    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, globalStyle.marginTop]}>
                <FIcon name="exclamation-circle" color="#fff" style={globalStyle.exclaImg} size={20} />
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
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
        const cartDetails = { quantity: cartAmount, product_id: result.id }
            dispatch(addToCart(cartDetails));
    };


    const ModalView = () => (
        <View>
            <BottomSheet hasDraggableIcon ref={props.bottomSheet} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.20} radius={50} styles={styles.addStoreBottomSheet}>
                <View style={globalStyle.dragIcon}><FIcon name="minus" color="gray" size={35} /></View>

                <View style={globalStyle.errInCoverNew}>
                    {errMsg ? <Toast config={toastConfig} /> : null}
                    {successMsg ? <Toast config={toastConfig} /> : null}
                </View>
                <TouchableOpacity onPress={props.onPress} style={styles.modalPaddingLayout}>

                    <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
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

                                <View style={styles.modalDiscount}>
                                    <View>
                                        <Icon name="info" size={18} color="#00319D" />
                                    </View>
                                    <View style={styles.modalDiscountTextView}>
                                        <Text style={styles.modalDiscountText}>Discount on Carton: {result.discount_on_carton}</Text>
                                    </View>
                                </View>

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
                                        <TouchableOpacity style={styles.modalBtnView} onPress={addItemsToCart}>
                                            <Icon name="shopping-cart" size={16} color="#fff" />
                                            <View style={styles.modalBtnOverlay} >
                                                <Text style={styles.modalBtnText}>Add to Cart</Text>
                                            </View>

                                        </TouchableOpacity> : null}
                                </View>
                            </View>

                        </View>
                        : null}
                </ScrollView>
            </BottomSheet>
        </View>
    );

    return (
        <View>
            {ModalView()}
        </View>
    )
};

export default Overlay;