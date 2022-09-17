import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, RefreshControl, TouchableOpacity, Animated, } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

import styles from "./style";
import { searchProducts } from "@Request/Product";
import { SuccessMsgViewTwo, COHeader as Header } from "@Component/index";
import BottomSheet from "@Screen/Overlay";
import List from "./ListView";
import ProductPlaceholderCard from "./ProductPlaceholderCard";
import { listCart } from "@Request/Cart";
// import BrowseCardPlaceholder from "./browseCardPlaceholder";
import { cleanup, cleanProducts } from "@Store/Product";
import { getPaymentOptions } from "@Request/paymentOptions";

const Products = (props) => {
    const dispatch = useDispatch();
    const scrollY = useRef(new Animated.Value(0)).current;

    const ITEM_SIZE = 130
    const [err, setErr] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const [result, setResult] = useState({});
    const [successMsg, setSuccessMsg] = useState("");
    const [visible, setVisible] = useState(false);
    const [searchArray, setSearchArray] = useState([]);
    const [textArray, setTextArray] = useState([]);
    const bottomSheet = useRef();

    const { status, errors, searchedProducts, searchProductsData } = useSelector((state) => state.product);
    const { items } = useSelector((state) => state.cart);


    useEffect(() => {
        dispatch(searchProducts({search: props.route.params?.category, no:1}));
        dispatch(listCart());
        dispatch(getPaymentOptions());
        return () => {
            dispatch(cleanup())
            dispatch(cleanProducts());
        }
    }, []);

    const loadMore = () => {
        dispatch(searchProducts({ search: props.route.params?.category, no: searchProductsData?.current_page + 1 }));
    }

    useEffect(() => {
        if (status === "failed" && props.navigation.isFocused()) {
            setErr(errors?.msg)
        }
    }, [errors]);

    useEffect(() => {
        if (props.route.params?.item) {
            setSearchArray(props.route.params.item)
        }
    }, [props.route.params?.item]);


    const closeSheet = () => {
        setVisible(false)
        bottomSheet.current.close();
        
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setErr("");
        setRefreshing(true);
        dispatch(searchProducts({search: props.route.params?.category, no:1}));
        wait(3000).then(() => setRefreshing(false));
    }, []);


    const goBack = () => props.navigation.navigate("Catalogue");
    const redirectToFilter = () => props.navigation.navigate("Filter", { display_name: props.route.params?.display_name, category: props.route.params?.category, name: "Product" });
    const redirectToSearch = () => props.navigation.navigate("Search");

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, globalStyles.marginTop, { marginHorizontal: 20 }]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    // Get the ID of the product to filter and show the Modal
    const getItem = (id) => {
        filterProduct(id);
        setVisible(true);
        bottomSheet.current?.present()
    };

    // Filter Products and show them in the Modal
    const filterProduct = (id) => {
        let resultArray = searchedProducts.filter(item => item.id === id)[0];
        return setResult(resultArray)
    };

    const ListView = ({ item, index}) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] });

        return <List
            item={item}
            getItem={() => getItem(item.id)}
            scale={scale}
            creditType={props.route.params?.creditType ? props.route.params.creditType : ""}
        />
    };

    const openCart = () => props.navigation.navigate("Cart");

    return (
        <View style={styles.body}>
    
            <Header title={props.route.params?.display_name} styleView={styles.body2} onPress={goBack} titleCover={styles.titleCover}>
                <View style={styles.headerSubIconView}>
                    <TouchableOpacity onPress={redirectToSearch}>
                        <IonIcon name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerSubLastIconView} onPress={openCart}>
                        <IonIcon name="md-cart-outline" size={20} color="#fff" />
                        {items.carts && items.carts.to > 0 ?
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{items?.carts?.total}</Text>
                            </View>
                            : null}
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
                            <Text style={[styles.inputTitle, styles.color]} numberOfLines={1}>All {props.route.params?.display_name}</Text>
                        </View>
                    </View>
                    {searchedProducts.length ?
                        <TouchableOpacity style={[styles.miniHeaderView2, styles.filterView]} onPress={redirectToFilter}>
                            <Icon name="chevron-down" size={14} color="#212121" />
                            <View style={styles.margin}>
                                <Text style={styles.filterText}>Filter</Text>
                            </View>
                        </TouchableOpacity> : null}
                </View>

                {err ? <View style={[globalStyles.errMainView, { marginBottom: 10 }]}>
                    <Text style={globalStyles.failedResponseText}>{err}</Text>
                </View>
                    : null}

            </View>
         
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                showsVerticalScrollIndicator={false}
                data={!searchArray.length ? searchedProducts : searchArray}
                keyExtractor={item => item.id}
                renderItem={ListView}
                ListEmptyComponent={ProductPlaceholderCard}
                ListFooterComponent={<View style={{ height: 40 }} />}
                columnWrapperStyle={styles.column}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                }
                initialNumToRender={8}
                getItemLayout={(data, index) => (
                    { length: 100, offset: 100 * index, index }
                )}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (searchProductsData?.current_page < searchProductsData?.last_page) {
                        loadMore()
                    }
                }}
            />

            <BottomSheet
                bottomSheet={bottomSheet}
                onPress={closeSheet}
                result={result}
                isVisible={visible}
            />

        </View>
    )
};

export default Products;