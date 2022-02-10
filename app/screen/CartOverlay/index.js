import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, Dimensions  } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import Modal from "react-native-modal";
import styles from '@Screen/Home/style';
import globalStyle from "@Helper/globalStyles";
import { addToCart, updateCart, listCart } from "@Request/cart";
import commafy from "@Helper/commafy";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { Btn, SuccessMsgViewTwo } from "@Component/index";
import { cleanup } from "@Store/cart";
import { cleanup as clean } from "@Store/product";
import { addToWishlistProducts } from "@Request/products";
import GestureRecognizer from 'react-native-swipe-gestures';
import BottomSheet from "react-native-gesture-bottom-sheet";
import SmallCard from './smallCard';


const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(props.cartAmount);
    const [cartNewAmount, setCartNewAmount] = useState(1);
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const { addCart, errors, updateCartItems } = useSelector((state) => state.cart)
    const { wishlistStatus } = useSelector((state) => state.product);
    // console.log(props.cartAmount)

    useEffect(() => {
        if (addCart === "failed") {
            refreshView(errors?.msg, "")
            setSuccessMsg("");
            setCartAmount(1)
        } else if (addCart === "success") {
            setErr("");
            refreshView("", "Added to Cart");
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [addCart]);

    useEffect(() => {
        setCartNewAmount(props.cartNewAmount)
    }, [props.cartNewAmount]);

    useEffect(() => {
        setCartAmount(1);
        setCartNewAmount(props.cartNewAmount)
    }, [props.isVisible]);

    useEffect(() => {
        if (updateCartItems === "failed") {
            refreshView(errors?.msg, "")
        } else if (updateCartItems === "success") {
            refreshView("", "Added to Cart");
        } else {
            setSuccessMsg("");
            setErr("");
        }
    }, [updateCartItems]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {
        wait(300).then(() => {
            setSuccessMsg(suc);
            setErr(msg);
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

        wait(2000).then(() => { dispatch(cleanup()); })
    }, []);

    const increaseCart = () => {
        setErr("")
        if (props.cartItem === result.id) {
            if (result.quantity_available > cartNewAmount) return setCartNewAmount(cartNewAmount + 1)
        } else {
            if (result.quantity_available > cartAmount) return setCartAmount(cartAmount + 1)
        }

    };

    useEffect(() => {
        if (wishlistStatus === "success") {
            setErr("");
            refreshView2("", "Added to Saved Items");
        } else if (wishlistStatus === "failed") {
            setSuccessMsg("");
            refreshView2(errors?.msg, "")
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [wishlistStatus]);

    const refreshView2 = useCallback((msg, suc) => {
        wait(1000).then(() => {
            if (msg) {
                setErr(msg);
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 140
                })

            } else {
                setSuccessMsg(suc);
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: Platform.OS === "ios" ? 90 : 50
                })
            }
        })

        wait(4000).then(() => { dispatch(clean()); })
    }, []);

    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, globalStyle.marginTop, { marginHorizontal: 20 }]}>
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
      
        if (props.cartItem === result.id) {
            if (cartNewAmount > 1) return setCartNewAmount(cartNewAmount - 1); 
        }else{
            if (cartAmount > 1) return setCartAmount(cartAmount - 1);
        }
    };

    const addItemsToCart = () => {
        const cartDetails = { quantity: cartAmount, product_id: result.id }
        if (cartAmount > 0) {
            dispatch(addToCart(cartDetails));
        } else {
            refreshView("Please select amount", "");
        }
    };


    const updateToCart = () => {
        if (cartNewAmount > 0) {
            const cartDetails = [{ quantity: cartNewAmount, cart_id: props.cartItemId }]
            dispatch(updateCart(cartDetails))
        } else {
            refreshView("Please select amount", "");
        }
    };

    // Add Items to Wishlist
    const itemsAddedToWishlist = async (id) => {
        const productId = { product_id: id }
        await dispatch(addToWishlistProducts(productId));
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
                                    {/* <Image source={{ uri: `${URL}${result.product_images[0].url}` }} style={styles.modalImg} /> */}
                                </View>
                                <View style={styles.modalTitleView}>
                                    <Text style={styles.modalTitle}>{result.name}</Text>
                                </View>
                            </View>

                            <View style={styles.modalMiniBody} showsVerticalScrollIndicator={true}>
                                <View style={styles.modalminiSecondView}>
                                    <Text style={styles.modalminiTitle}>Category: <Text style={styles.modalminiSecondTitle}>{result.description}</Text></Text>
                                </View>
                                <View style={styles.modalminiSecondView}>
                                    <Text style={styles.modalminiTitle}>Available: {result.quantity_available > 0 ? <Text style={{ color: "#469D00" }}>In Stock</Text> : <Text style={{ color: "red" }}>Out of Stock</Text>}</Text>
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
                                            <Text style={styles.productTitle}>{props.cartItem === result.id ? cartNewAmount : cartAmount}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.decrease} onPress={increaseCart}>
                                            <Icon name="plus" color="#212121" />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={styles.amountText}>&#8358;{props.cartItem === result.id ? commafy(result.price_per_pack * cartNewAmount) : commafy(result.price_per_pack * cartAmount)}</Text>
                                    </View>
                                </View>

                                <View style={styles.modalHeartIconView}>
                                    {result.is_saved_item ?
                                        <View style={styles.modalHeartInnerIconView} /> :
                                        <TouchableOpacity style={styles.modalHeartInnerIconView} onPress={() => itemsAddedToWishlist(result.id)}>

                                            <View style={styles.modalHeartIcon} onPress={props.wishlist}>
                                                <Icon name="heart" size={16} color="#BDBDBD" />
                                            </View>
                                            <View>
                                                <Text style={styles.productTitle}>Add to My Items</Text>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                    {result.quantity_available > 0
                                        ?
                                        <TouchableOpacity style={styles.modalBtnView} onPress={props.cartItem === result.id ? updateToCart : addItemsToCart}>
                                            <Icon name="shopping-cart" size={16} color="#212121" />
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