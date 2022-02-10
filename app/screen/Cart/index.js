import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import AddCartPlaceholder from './addCartPlaceholder';
import globalStyle from "@Helper/globalStyles";
import styles from "./style";
import { listCart, deleteCart, updateCart } from "@Request/cart";
import { addToWishlistProducts, removeFromWishlistProducts } from "@Request/products";
import AddCardListEmptyBig from "@Screen/Home/addCartListEmptyBig";
import commafy from "@Helper/commafy";
import Header from "@Component/Header";
import URL from "@Helper/constant";
import { TrackBtn, SuccessMsgViewTwo } from "@Component/index";
import Loader from "@Screen/Loader";
import { cleanup } from "@Store/cart";
import { cleanup as clean } from "@Store/product";

const Cart = (props) => {
    const dispatch = useDispatch();
    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [remove, setRemove] = useState(false);
    const [loader, setLoader] = useState(false);
    const [cartAmount2, setCartAmount2] = useState([]);
    const [copyCartAmount, setCopyCartAmount] = useState([]);
    const [finalAmount, setFinalAmount] = useState();
    const [copyCart, setCopyCart] = useState([]);

    const { items, removeCart, errors, updateCartItems, loaded } = useSelector((state) => state.cart);
    const { wishlistStatus } = useSelector((state) => state.product);
    const [scrollText, setScrollText] = useState(true);

    const browse = () => props.navigation.navigate("Browse");

    useFocusEffect(
        useCallback(() => {
            dispatch(listCart());
            return () => dispatch(cleanup());
        }, [])
    );
    useEffect(() => {
        if (items.carts && items.carts.length) {
            setCopyCart(items.carts)
        }

    }, [items.carts])


    useEffect(() => {
        if (items.carts && items.carts.length) {
            let quantity = items.carts.map((item) => {
                setFinalAmount(item.total_amount)
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

    useEffect(() => {
        // Change the state every second or the time given by User.
        const interval = setInterval(() => {
            setScrollText((scrollText) => !scrollText);
        }, 1000);
        return () => clearInterval(interval);
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

    useEffect(() => {
        if (wishlistStatus === "success") {
            refreshView("", "Added to Saved Items");
        } else if (wishlistStatus === "failed") {
            refreshView(errors?.msg, "")
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [wishlistStatus]);


    const openDrawer = () => props.navigation.openDrawer();
    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 })
    const openNotification = () => props.navigation.navigate("Notification");

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
            console.log(res)
        }
    };

    const decreaseCart = (id, item, quantity) => {
        if (item < quantity) {
            let filteredCart = cartAmount2.filter(quantity => {
                if (quantity.cart_id === id && quantity.quantity > 1) {
                    quantity.quantity = quantity.quantity - 1
                    quantity.total_amount = quantity.price_per_pack * quantity.quantity
                    return { quantity: quantity.quantity, cart_id: quantity.cart_id, total_amount: quantity.total_amount, price_per_pack: quantity.price_per_pack }

                }
            })
            setCopyCartAmount(filteredCart)
            var res = cartAmount2.map(obj => copyCartAmount.find(quantity => quantity.cart_id === obj.cart_id) || obj);
            console.log(res)
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

    const itemsAddedToWishlist = async (id) => {
        const productId = { product_id: id }
        await dispatch(addToWishlistProducts(productId));
    };

    const itemsRemovedFromWishlist = async (id) => {
        setRemove(true)
        await dispatch(removeFromWishlistProducts(id));
    };

    const ListView = ({ item }) => (
        <View >
            <View style={[styles.midCard, styles.elevation]}>
                <View style={styles.cover}>
                    <View style={styles.imgCover}>
                        <Image source={{ uri: `${URL}${item.product.product_images[0].url}` }} style={styles.drugImg} />
                    </View>
                    <View style={styles.descCover}>
                        <View>
                            <Text style={styles.descText} numberOfLines={2}>{item.product.name}</Text>
                        </View>

                        {cartAmount2.map(quantity => (
                            quantity.cart_id === item.id ?
                                <View style={styles.priceCover} key={quantity.cart_id}>
                                    <Text style={styles.priceText}>₦ {quantity.total_amount !== "" ? commafy(quantity.total_amount) : 0}</Text>
                                </View> : null
                        ))}

                    </View>

                    <View style={styles.rightCover}>
                        <View style={styles.iconCover}>

                            {!item.product.is_saved_item ?
                                <TouchableOpacity onPress={() => itemsAddedToWishlist(item.product.id)}>
                                    <Icon name="heart" size={18} color="#BDBDBD" />
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={() => itemsRemovedFromWishlist(item.product.id)}>
                                    <FIcon name="cards-heart" size={18} color="#7CCF24" />
                                </TouchableOpacity>}

                            <TouchableOpacity style={styles.thrash} onPress={() => deleteFromCart(item.id)}>
                                <Icon name="trash-2" size={18} color="#D32F2F" />
                            </TouchableOpacity >
                        </View>

                        <View style={styles.increaseCartMainAmountView}>
                            <View style={styles.cartAmountView}>
                                <TouchableOpacity style={styles.increase} onPress={() => { decreaseCart(item.id, item.quantity, item.product.quantity_available); }}>
                                    <Icon name="minus" color="#757575" />
                                </TouchableOpacity>
                                <View style={styles.increaseText}>
                                    {cartAmount2.map(quantity => (
                                        quantity.cart_id === item.id ?
                                            <Text style={styles.productTitle} key={quantity.cart_id}>{quantity.quantity}</Text> : null
                                    ))}
                                </View>
                                <TouchableOpacity style={styles.decrease} onPressOut={() => { increaseCart(item.id, item.quantity, item.product.quantity_available); }}>
                                    <Icon name="plus" color="#757575" />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </View>
            </View>
        </View>

    )

    return (
        <View style={styles.view}>
            <View style={styles.body}>
                {/* <Header drawer={openDrawer} title="My Cart" favourite={openFavourite} notify={openNotification} /> */}
                <Header drawer={openDrawer} title="My Cart" favourite={openFavourite} />
            </View>

            <View style={styles.mainBody}>
                {err ? <Toast config={toastConfig} /> : null}
                {successMsg ? <Toast config={toastConfig} /> : null}
            </View>

            <View style={styles.bottomCover}>
                {items.carts && !items.carts.length && loaded === "success" 
                ?
                    <AddCardListEmptyBig browse={browse}/> :

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={copyCart}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={AddCartPlaceholder}
                        renderItem={ListView}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        columnWrapperStyle={styles.column}
                    />}


                {items.total_amount ?
                    <View>
                        <View style={styles.bottomDownCover}>

                            <View style={styles.orderCover}>

                                <Text style={styles.orderText}>Order Summary</Text>
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

                            <View style={[styles.addBtnCover, styles.orderBtn]}>
                                <TrackBtn title="CheckOut" style={styles.addressBtn2} onPress={redirectToCheckOut} />
                            </View>

                        </View>
                    </View> : null}

            </View>
            <Loader isVisible={loader} />

        </View>
    )
};

export default Cart;