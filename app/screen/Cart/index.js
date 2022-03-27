import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import CartPlaceholderComponent from "./CartPlaceholderComponent";
import globalStyle from "@Helper/GlobalStyles";
import styles from "./style";
import { listCart, deleteCart, updateCart } from "@Request/Cart";
import commafy from "@Helper/Commafy";
import URL from "@Helper/Constant";
import { AuthBtn as Btn, SuccessMsgViewTwo, COHeader as Header, AddCartListEmptyBig } from "@Component";
import Loader from "@Screen/Loader";
import { cleanup } from "@Store/Cart";
import { cleanup as clean } from "@Store/Product";

const Cart = (props) => {
    const dispatch = useDispatch();
    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [cartAmount2, setCartAmount2] = useState([]);
    const [copyCartAmount, setCopyCartAmount] = useState([]);
    const [copyCart, setCopyCart] = useState([]);
    const [scrollText, setScrollText] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const { items, removeCart, errors, updateCartItems, loaded } = useSelector((state) => state.cart);

    const browse = () => props.navigation.navigate("Catalogue");
    const openCart = () =>  dispatch(listCart());
    const redirectToSearch = () => props.navigation.navigate("Search");

    useEffect(() => {
        if (items.carts && items.carts.length) {
            setCopyCart(items.carts)
        }

    }, [items.carts])


    useEffect(() => {
        if (items.carts && items.carts.length) {
            let quantity = items.carts.map((item) => {
                return {
                    quantity: item.quantity,
                    cart_id: item.id,
                    total_amount: item.total_amount,
                    price_per_pack: parseInt(item.product.price_per_pack)
                }
            })
            setCartAmount2(quantity)
        }

    }, [items.carts])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {
        wait(500).then(() => {
            setErr(msg);
            setSuccessMsg(suc);
            if (suc) {
                setLoader(false)
                dispatch(listCart())
            } else {
                setLoader(false)
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 150
                })
            }
        })
        wait(2000).then(() => {
            dispatch(cleanup());
            dispatch(clean())
        })
    }, []);

    const refreshView2 = useCallback((msg, suc) => {
        wait(500).then(() => {
            setErr(msg);
            if (suc) {
                setLoader(false)
                props.navigation.navigate("CheckOut");
            } else {
                setLoader(false)
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        })
        wait(2000).then(() => {
            dispatch(cleanup());
            dispatch(clean())
        })
    }, []);


    const refreshCartView = useCallback(() => {
        setRefreshing(true);
        dispatch(listCart());
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        dispatch(listCart());
        // Change the state every second or the time given by User.
        const interval = setInterval(() => {
            setScrollText((scrollText) => !scrollText);
        }, 1000);
        return () =>{ 
            clearInterval(interval);
            dispatch(cleanup());
        }
    }, []);


    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, { marginBottom: 10 }]}>
                <Text style={globalStyle.failedResponseText}>{err}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    const redirectToCheckOut = () => {
        setLoader(true)
        dispatch(updateCart(cartAmount2))
    }

    useEffect(() => {
        if (removeCart === "failed") {
            refreshView(errors?.msg, "")
        } else if (removeCart === "success") {
            refreshView("", "Item removed")
        } else {
            setSuccessMsg("");
            setErr("");
        }
    }, [removeCart]);

    useEffect(() => {
        if (updateCartItems === "failed") {
            refreshView2(errors?.msg, "")
        } else if (updateCartItems === "success") {
            refreshView2("", "Item added")
        } else {
            setSuccessMsg("");
            setErr("");
        }
    }, [updateCartItems]);

    const goBack = () => props.navigation.goBack();

    const increaseCart = (id, item, quantity) => {
        if (item < quantity) {
            let filteredCart = cartAmount2.filter(quantity => {
                if (quantity.cart_id === id) {
                    quantity.quantity = quantity.quantity + 1
                    quantity.total_amount = quantity.price_per_pack * quantity.quantity
                    return { quantity: quantity.quantity, cart_id: quantity.cart_id, total_amount: quantity.total_amount, price_per_pack: quantity.price_per_pack }

                }
            })
            setCopyCartAmount(filteredCart)
            var res = cartAmount2.map(obj => copyCartAmount.find(quantity => quantity.cart_id === obj.cart_id) || obj);
            return res
        }
    };

    const decreaseCart = (id, item, quantity) => {
        if (item < quantity || item === quantity) {
            let filteredCart = cartAmount2.filter(quantity => {
                if (quantity.cart_id === id && quantity.quantity > 1) {
                    quantity.quantity = quantity.quantity - 1
                    quantity.total_amount = quantity.price_per_pack * quantity.quantity
                    return { quantity: quantity.quantity, cart_id: quantity.cart_id, total_amount: quantity.total_amount, price_per_pack: quantity.price_per_pack }

                }
            })
            setCopyCartAmount(filteredCart)
            var res = cartAmount2.map(obj => copyCartAmount.find(quantity => quantity.cart_id === obj.cart_id) || obj);
            return res

        }
    };

    const calculateFinalAmount = () => {
        return commafy(cartAmount2.map(item => item.total_amount).reduce((prev, curr) => prev + curr, 0))
    }

    const deleteFromCart = (id) => {
        let deletedItem = copyCart.filter((item => item.id !== id))
        setCopyCart(deletedItem)
        dispatch(deleteCart(id))
    };

    const ListView = ({ item }) => (
        <View style={styles.midCard}>
            <View style={styles.cover}>
                <View style={styles.imgCover}>
                    <Image source={{ uri: `${URL}${item.product.product_images[0].url}` }} style={styles.drugImg} />
                </View>
                <View style={styles.descCover}>
                    <View style={styles.descTextView}>
                        <Text style={styles.descText} numberOfLines={2}>{item.product.name}</Text>
                    </View>

                    {cartAmount2.map(quantity => (
                        quantity.cart_id === item.id ?
                            <View style={styles.increaseCartMainAmountView} key={quantity.cart_id}>

                                <View style={styles.cartAmountView}>
                                    <TouchableOpacity style={styles.increase} onPress={() => { decreaseCart(item.id, quantity.quantity, item.product.quantity_available); }}>
                                        <Icon name="minus" color="#757575" />
                                    </TouchableOpacity>
                                    <View style={styles.increaseText}>
                                        <Text style={styles.productTitle} >{quantity.quantity}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.decrease} onPressOut={() => { increaseCart(item.id, quantity.quantity, item.product.quantity_available); }}>
                                        <Icon name="plus" color="#757575" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : null

                    ))}

                </View>

                <View>
                    {cartAmount2.map(quantity => (
                        quantity.cart_id === item.id ?
                            <View style={styles.priceCover} key={quantity.cart_id}>
                                <Text style={styles.priceText}>₦{quantity.total_amount !== "" ? commafy(quantity.total_amount) : 0}</Text>
                            </View> : null
                    ))}

                    <View style={styles.iconCover}>
                        <TouchableOpacity style={styles.thrash} onPress={() => deleteFromCart(item.id)}>
                            <Text style={styles.productTitle}>Remove</Text>
                        </TouchableOpacity >
                    </View>

                </View>

            </View>
        </View>

    )

    return (
        <View style={styles.view}>
            <Header onPress={goBack} title="Cart" styleView={styles.body2} >
                <View style={styles.headerSubIconView}>
                    <TouchableOpacity onPress={redirectToSearch}>
                        <IonIcon name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerSubLastIconView} onPress={openCart}>
                        <IonIcon name="md-cart-outline" size={20} color="#fff" />
                        {items.carts?.length ?
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{items.carts?.length}</Text>
                            </View>
                            : null}
                    </TouchableOpacity>
                </View>
            </Header>

            <View style={styles.mainBody}>
                {err ? <Toast config={toastConfig} /> : null}
                {successMsg ? <Toast config={toastConfig} /> : null}
            </View>

            <View style={styles.bottomCover}>
                {(items.carts && !items.carts.length && loaded === "success") && !copyCart.length
                    ?
                    <AddCartListEmptyBig browse={browse} />
                    :

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={copyCart}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={CartPlaceholderComponent}
                        renderItem={ListView}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        columnWrapperStyle={styles.column}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={refreshCartView} />
                        }
                        extraData={copyCart}
                    />}


                {items.total_amount ?
                    <View style={styles.bottomDownCover}>

                        <View style={styles.orderCover}>

                            <Text style={styles.orderText}>ORDER SUMMARY</Text>
                            {(items.carts.length > 3) ?
                                <View style={[styles.scrollTextCover, { display: scrollText ? 'none' : 'flex' }
                                ]} >
                                    <Text
                                        style={styles.textStyle}>
                                        Scroll down to view more Items
                                    </Text>
                                </View>
                                : null}


                        </View>
                        <View style={styles.subtotalCover}>
                            <Text style={styles.subText}>Subtotal</Text>
                            <Text style={styles.subText}>₦{items.total_amount !== "" ? calculateFinalAmount() : null}</Text>
                        </View>
                        <View style={styles.totalCover}>
                            <Text style={styles.totalText2}>Total</Text>

                            <Text style={styles.totalText2}>₦{items.total_amount !== "" ? calculateFinalAmount() : null}</Text>

                        </View>

                        <View style={styles.addBtnCover}>
                            <Btn title="Proceed to Check out" style={styles.addressBtn2} onPress={redirectToCheckOut} />
                        </View>
                    </View> : null}

            </View>
            <Loader isVisible={loader} />

        </View>
    )
};

export default Cart;