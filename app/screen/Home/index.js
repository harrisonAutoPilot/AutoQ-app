import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl, ScrollView, Image, Dimensions,ImageBackground,} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';

import styles from './style';
import globalStyle from "@Helper/globalStyles";
import { InputField } from "@Component/index";
import { listCart } from "@Request/cart";
import { listProducts, listWishlistProducts, addToWishlistProducts, listPopularProducts, removeFromWishlistProducts } from "@Request/products";
import BookCardPlaceholder from "./bookCardPlaceholderComponent";
import Header from "@Component/Header";
import ModalView from "@Screen/CartOverlay";
import AddListEmpty from "@Screen/Home/addListEmpty";
import List from "./ListView";
import { cleanup } from "@Store/product";

const Home = (props) => {
    const dispatch = useDispatch();
    const [result, setResult] = useState({});
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const [copiedWishList, setCopiedWishList] = useState([]);
    const [type, setType] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [remove, setRemove] = useState(false);
    const [like, setLike] = useState(0);
    const [id, setId] = useState();
    const [cartItem, setCartItem] = useState("");
    const [cartItemId, setCartItemId] = useState("");
    const [cartNewAmount, setCartNewAmount] = useState(1);

    const { errors, wishList, update, popularProducts, wishlistStatus, loaded } = useSelector((state) => state.product);
    const { items } = useSelector((state) => state.cart)
    const bottomSheet = useRef();
    // const closeCart = () => setShowModal(!showModal);
    // const swipeCart = () => setShowModal(false);

    useFocusEffect(
        useCallback(() => {
            dispatch(cleanup())
            dispatch(listCart())
            dispatch(listProducts());
            dispatch(listWishlistProducts())
            dispatch(listPopularProducts())

        }, [])
    );

    useEffect(() => {
        if (update === "success" && props.navigation.isFocused()) {
            setSuccessMsg("Added");
            setErr("");
            dispatch(listPopularProducts());
            dispatch(listWishlistProducts());
        } else if (update === "failed" && props.navigation.isFocused()) {
            setSuccessMsg("");
            setErr(errors?.msg);
        }
    }, [update]);

    useEffect(() => {
        setCopiedWishList([...wishList])
    }, [wishList]);

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(listProducts());
        dispatch(listWishlistProducts())
        dispatch(listPopularProducts())
        wait(3000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        if (wishlistStatus === "success" && props.navigation.isFocused()) {
            if (remove) return refreshView2("", "Removed from Saved Items");
            refreshView2("")
        } else if (wishlistStatus === "failed" && props.navigation.isFocused()) {
            setSuccessMsg("");
            refreshView2(errors, "")
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [wishlistStatus]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView2 = useCallback((msg) => {
        wait(1000).then(() => {
            if (msg) {
                setErr(msg);
                setLike(0)
                setId()
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 60
                })

            } else {
                dispatch(listWishlistProducts())
                dispatch(listPopularProducts())
            }
        })

        wait(4000).then(() => { dispatch(cleanup()); })
    }, []);


    const toastConfig = {
        tomatoToast: () => (
            <View style={[globalStyle.errMainView4]}>
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),
        // tomatoToast: () => (
        //         <SuccessMsgViewTwo title={successMsg} />
        // )
    };

    const search = () => props.navigation.navigate("Search");
    const openDrawer = () => props.navigation.openDrawer();
    const viewAll = (id) => props.navigation.navigate("SavedItem", { id });

    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 });
    const openNotification = () => props.navigation.navigate("Notification");

    const getItem = (id, type, product) => {
        filterProduct(type, id);
        bottomSheet.current.show();
        setType(type)
        checkCart(product)
        // setShowMsg(true);
    };

    const closeSheet = () => {
        bottomSheet.current.close();
    }
    const openSheet = () => {
        bottomSheet.current.show();
    }

    const filterProduct = (type, id) => {
        let resultArray;
        if (type === "wishlist") {
            resultArray = wishList.filter(item => item.id === id)[0];
            return setResult(resultArray.product)
        } else {
            resultArray = popularProducts.filter(item => item.id === id)[0]
            return setResult(resultArray)
        }
    };

    const itemsAddedToWishlist = async (id, item) => {
        const productId = { product_id: id }
        setLike(1);
        setId(id)
        copiedWishList.push(item)
        await dispatch(addToWishlistProducts(productId));
    };

    const itemsRemovedFromWishlist = async (id) => {
        setRemove(true);
        setLike(1);
        setId(id)
        let items = copiedWishList.filter(item => item.id !== id);
        setCopiedWishList(items)
        await dispatch(removeFromWishlistProducts(id));
    };

    const checkCart = (id) => {
        if (items.carts && items.carts.length) {

            const cartItems = items.carts.filter((item) => {
                console.log(item, id)
                if (item.product_id === id) {

                    setCartItem(item.product_id)
                    console.log(item.quantity, "ho")
                    setCartNewAmount(item.quantity);
                    setCartItemId(item.id)
                }
            })
            return cartItems
        }
    }

    const ListItem = ({ item }) => (
        <List
            item={item}
            onPress={() => itemsAddedToWishlist(item.id, item)}
            onRemove={() => itemsRemovedFromWishlist(item.id)}
            getItem={() => getItem(item.id, !item.product ? "product" : "wishlist", !item.product ? item.id : item.product.id)}
            like={like}
            likedId={id}

        />
    );

    return (
        <View style={styles.miniMainBody}>
            <View style={styles.topCover}>
                <Header drawer={openDrawer} favourite={openFavourite} />
                <View style={styles.agentFaceCover}>
                    <Image style={styles.agentImg} source={require("@Assets/image/agentFace.png")} />
                </View>
                <View style={styles.welcomeCover}>
                    <Image style={styles.sunImg} source={require("@Assets/image/sun.png")} />
                    <Text style={styles.welcomeText}>Good Morning Isaac</Text>
                </View>
            </View>
            <View style={styles.bottomCover}>
                <View style={styles.sectorCover}>
                    <Text style={styles.titleCover}>Agent Dashboard</Text>
                </View>
                <View style={styles.cardCover}>
                    <View style={styles.cardOne}>
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/ArrowsClockwise.png")} />
                            <Text style={styles.cardBgText}>12</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>New & Pending Registration</Text>
                        </View>

                    </View>
                    <View style={styles.cardTwo}>
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/tag.png")} />
                            <Text style={styles.cardBgText}>05</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>All Orders</Text>
                        </View>

                    </View>
                    <View>
                    <ImageBackground style={styles.cardThree} source={require("@Assets/image/frame9.png")} > 
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/download.png")} />
                            <Text style={styles.cardBgText}>0</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>Special Deals</Text>
                        </View>
                     </ImageBackground>
                    </View>
                    <View style={styles.cardFour}>
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/UsersThree.png")} />
                            <Text style={styles.cardBgText}>20</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>Inactive Customers</Text>
                        </View>

                    </View>
                    {/* <View style={styles.card}>

            </View>
            <View style={styles.card}>

            </View>         
            <View style={styles.card}>

            </View>    */}



                </View>



            </View>
        </View>
    )
};

export default Home;