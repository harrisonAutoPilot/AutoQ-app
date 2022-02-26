import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, RefreshControl, TouchableOpacity, Animated,} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

import globalStyle from "@Helper/GlobalStyles";
import styles from "./style";
import { searchProducts} from "@Request/Product";
import { SuccessMsgViewTwo, COHeader as Header } from "@Component/index";
// import ModalView from "@Screen/CartOverlay";
import List from "./ListView";
// import BrowseCardPlaceholder from "./browseCardPlaceholder";
import { cleanup } from "@Store/Product";
// import { listCart } from "@Request/cart";

const BrowseProducts = (props) => {
    const dispatch = useDispatch();
    const scrollY = useRef(new Animated.Value(0)).current;

    const ITEM_SIZE = 120
    const [err, setErr] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const [searchArray, setSearchArray] = useState([]);
    const [result, setResult] = useState({});
    const [successMsg, setSuccessMsg] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [remove, setRemove] = useState(false);
    const [liked, setLiked] = useState(0);
    const [likedId, setLikedId] = useState();
    const [cartItem, setCartItem] = useState("");
    const [cartNewAmount, setCartNewAmount] = useState(1);
    const [cartItemId, setCartItemId] = useState("");
    const bottomSheet = useRef();

    const { status, errors, searchedProducts, update, wishlistStatus } = useSelector((state) => state.product);
    // const { items } = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(searchProducts(props.route.params?.category));
        // dispatch(listCart())
    }, []);

    useEffect(() => {
        if (status === "failed" && props.navigation.isFocused()) {
            setErr(errors?.msg)
        }
    }, [errors]);

    useEffect(() => {
        if (update === "success" && props.navigation.isFocused()) {
            setSuccessMsg("Added");
            setErr("");
            dispatch(searchProducts(props.route.params?.category));
        } else if (update === "failed" && props.navigation.isFocused()) {
            setSuccessMsg("");
            setErr(errors?.msg);
        }
    }, [update]);


    const closeSheet = () => {
        bottomSheet.current.close();
    }
    const openSheet = () => {
        bottomSheet.current.show();
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setErr("");
        setRefreshing(true);
        dispatch(searchProducts(props.route.params?.category));
        wait(3000).then(() => setRefreshing(false));
    }, []);


    const goBack = () => props.navigation.navigate("Catalogue");
    const redirectToFilter = () => props.navigation.navigate("Filter");

    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, globalStyle.marginTop, { marginHorizontal: 20 }]}>
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
                <SuccessMsgViewTwo title={successMsg} />
        )
    };

    // Get the ID of the product to filter and show the Modal
    const getItem = (id) => {
        filterProduct(id);
        bottomSheet.current.show();
        checkCart(id)
    };
    
    // Filter Products and show them in the Modal
    const filterProduct = (id) => {
        let resultArray = searchedProducts.filter(item => item.id === id)[0];
        return setResult(resultArray)
    };

    const checkCart = (id) => {
        const cartItems = items.carts.filter((item) => {
            if (item.product_id === id) {
                setCartItem(item.product_id)
                setCartNewAmount(item.quantity)
                setCartItemId(item.id)
            }
        })
        return cartItems
    }

    const ListView = ({ item, index }) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] });

        return <List
            item={item}
            onPress={() => itemsAddedToWishlist(item.id)}
            getItem={() => getItem(item.id)}
            onRemove={() => itemsRemovedFromWishlist(item.id)}
            scale={scale}
            liked={liked}
            likedId={likedId}
        />
    }

    return (
        <View style={styles.body}>
             <Header title={props.route.params?.display_name} styleView={styles.body2}  onPress={goBack} titleCover={styles.titleCover}>
               <View style={styles.headerSubIconView}>
                   <TouchableOpacity>
                   <IonIcon name="search" size={20} color="#fff"/>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.headerSubLastIconView}>
                   <IonIcon name="md-cart-outline" size={20} color="#fff"/>
                   </TouchableOpacity>
               </View>
                 </Header>

            {err ? <Toast config={toastConfig} /> : null}
            {successMsg ? <Toast config={toastConfig} /> : null}

            <View style={styles.mainBody}>
                <View style={styles.header}>
                    <View style={styles.miniHeaderView}>
                        <Icon name="grid" size={14} color="#616161" />
                        <View style={styles.margin}>
                            <Text style={[styles.inputTitle, styles.color]}>All {props.route.params?.display_name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.miniHeaderView2, styles.filterView]} onPress={redirectToFilter}>
                        <Icon name="chevron-down" size={14} color="#212121" />
                        <View style={styles.margin}>
                            <Text style={styles.filterText}>Filter</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {err ? <View style={[globalStyle.errMainView, { marginBottom: 10 }]}>
                    <Text style={globalStyle.failedResponseText}>{err}</Text>
                </View>
                    : null}

            </View>
            <Animated.FlatList
             onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                showsVerticalScrollIndicator={false}
                data={!searchArray.length ? searchedProducts : searchArray}
                keyExtractor={item => item.id}
                renderItem={ListView}
                ListFooterComponent={<View style={{ height: 40 }} />}
                columnWrapperStyle={styles.column}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                }
                initialNumToRender={8}
                    getItemLayout={(data, index) => (
                        {length: 100, offset: 100 * index, index}
                      )}
            />

              {/* <ModalView
                bottomSheet={bottomSheet}
                onPress={closeSheet}
                // onSwipeComplete1={closeCart}
                result={result}
                wishlist={() => itemsAddedToWishlist(result.id)}
                cartNewAmount = {cartNewAmount}
                cartItem = {cartItem}
                cartItemId = {cartItemId}
            />  */}

        </View>
    )
};

export default BrowseProducts;