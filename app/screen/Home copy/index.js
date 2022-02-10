import React, { useEffect, useState,useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl, ScrollView, Dimensions  } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';

import styles from './style';
import globalStyle from "@Helper/globalStyles";
import { InputField} from "@Component/index";
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
        if(items.carts && items.carts.length){
            
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
            getItem={() => getItem(item.id, !item.product ? "product" : "wishlist", !item.product ? item.id: item.product.id)}
            like={like}
            likedId= {id}
          
        />
    );

    return (
        <View style={styles.miniMainBody}>
            {/* <Header drawer={openDrawer} favourite={openFavourite} notify={openNotification}> */}
            <Header drawer={openDrawer} favourite={openFavourite} >
                <TouchableOpacity style={styles.inputHolder} onPress={search}>
                    <Icon name="search" style={styles.searchIcon} size={20} color="#a1a1a1" />
                    <View style={styles.inputText}>
                        <InputField
                            style={styles.inputF}
                            placeholder="I am looking for..."
                            placeholderTextColor="#9E9E9E"
                            // style={styles.inputTitle}
                            editable={false}
                        />
                    </View>
                </TouchableOpacity>
            </Header>
            {errMsg ? <Toast config={toastConfig} /> : null}

            {copiedWishList.length ?
                <ScrollView style={styles.secondView} showsVerticalScrollIndicator={false}>

                    <View style={styles.miniHeadingIconView}>
                        <View>
                            <Text style={globalStyle.title}>MY ITEMS</Text>
                        </View>
                        <TouchableOpacity style={styles.miniHeadingIconView} onPress={() => viewAll(1)}>
                            <View>
                                <Text style={styles.miniSecondHeadingTitle}>VIEW ALL</Text>
                            </View>
                            <View style={styles.miniSecondHeadingIconView}>
                                <Icon name="chevron-right" color="#3858CF" size={16} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.productCardView} />

                    <FlatList data={copiedWishList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={ListItem}
                        ListEmptyComponent={BookCardPlaceholder}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        }
                    />

                    <View style={styles.miniHeadingIconView}>
                        <View>
                            <Text style={globalStyle.title}>POPULAR ITEMS</Text>
                        </View>
                        <TouchableOpacity style={styles.miniHeadingIconView} onPress={() => viewAll(2)}>
                            <View>
                                <Text style={styles.miniSecondHeadingTitle}>VIEW ALL</Text>
                            </View>
                            <View style={styles.miniSecondHeadingIconView}>
                                <Icon name="chevron-right" color="#3858CF" size={16} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.productCardView} />

                    <FlatList data={popularProducts}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={ListItem}
                        ListEmptyComponent={BookCardPlaceholder}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        initialNumToRender={4}
                        getItemLayout={(data, index) => (
                            { length: 100, offset: 100 * index, index }
                        )}
                    />
                </ScrollView>
                :
                <View style={[styles.secondView, { flex: 1 }]}>
                    <View style={styles.miniHeadingIconView}>
                        <View>
                            <Text style={globalStyle.title}>POPULAR ITEMS</Text>
                        </View>
                        <TouchableOpacity style={styles.miniHeadingIconView} onPress={() => viewAll(2)}>
                            <View>
                                <Text style={styles.miniSecondHeadingTitle}>VIEW ALL</Text>
                            </View>
                            <View style={styles.miniSecondHeadingIconView}>
                                <Icon name="chevron-right" color="#3858CF" size={16} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productCardView} />
                    {/* <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
                        <ScrollView horizontal={true}> */}
                            <FlatList data={popularProducts}
                                horizontal={false}
                                numColumns={2}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={item => item.id}
                                renderItem={ListItem}
                                ListEmptyComponent={BookCardPlaceholder}
                                ListFooterComponent={<View style={{ height: 30 }} />}
                            />
                        {/* </ScrollView>
                    </ScrollView> */}

                </View>

            }

            <ModalView
                bottomSheet={bottomSheet}
                onPress={closeSheet}
                result={result}
                wishlist={() => itemsAddedToWishlist(result.id)}
                removeWishlist={() => itemsRemovedFromWishlist(result.id)}
                type={type}
                cartAmount={1}
                cartNewAmount = {cartNewAmount}
                cartItem = {cartItem}
                cartItemId = {cartItemId}

            />

        </View>
    )
};

export default Home;