import React, { useEffect, useState, useCallback, useRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, RefreshControl, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import Acon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import { useIsFocused } from '@react-navigation/native';
import styles from "./style";
import { searchProducts } from "@Request/Product";
import { SuccessMsgViewTwo, COHeader as Header } from "@Component/index";
import BottomSheet from "@Screen/Overlay";
import List from "./ListView";
import ProductPlaceholderCard from "./ProductPlaceholderCard";
import { listCart } from "@Request/Cart";
import PriceBottomSheet from "./PriceBottomSheet"

import { cleanup, cleanProducts } from "@Store/Product";
import { getPaymentOptions } from "@Request/paymentOptions";

const Products = (props) => {
    // const odi = props?.route.params?.priceCat;
    const isFocused = useIsFocused();

    const dispatch = useDispatch();
   
    const [err, setErr] = useState("");

    const [refreshing, setRefreshing] = useState(false);

    const [result, setResult] = useState({});

    const [successMsg, setSuccessMsg] = useState("");

    const [visible, setVisible] = useState(false);

    const [priceCat, setPriceCat] = useState (props?.route.params?.priceCat)

    const [searchArray, setSearchArray] = useState([]);

    const [objectValues, setObjectValues] = useState(props?.route.params?.objectValues)


    const bottomSheet = useRef();

    const bottomSheetPrice = useRef();

    const { status, errors, searchedProducts, searchProductsData } = useSelector((state) => state.product);
    const { items } = useSelector((state) => state.cart);

   

    useEffect(() => {
  
   
        dispatch(searchProducts({search: props.route.params?.category, category_id:props.route.params?.category_id, no:1, type:objectValues?.option, idd:objectValues?.idd}));

        dispatch(listCart(1));

        dispatch(getPaymentOptions());

        return () => {

            dispatch(cleanup())

            dispatch(cleanProducts());
        }
    }, []);

    useEffect(() => {
  
   
        dispatch(searchProducts({search: props.route.params?.category, category_id:props.route.params?.category_id, no:1, type:objectValues?.option, idd:objectValues?.idd}));

        dispatch(listCart(1));

        return () => {

            dispatch(cleanup())

            dispatch(cleanProducts());
        }
    }, [objectValues]);

   
    const loadMore = () => {
        dispatch(searchProducts({ search: props.route.params?.category, category_id:props.route.params?.category_id, no: searchProductsData?.current_page + 1,type:objectValues?.option, idd:objectValues?.idd }));
    }

console.log("the option log", objectValues?.idd)

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

    const callPrice = () => {
        bottomSheetPrice?.current?.show();
    
      };

    const sortPrice = (item) => {
      setPriceCat(item)
      console.log("the selected", item)
      bottomSheetPrice?.current?.close()
    }


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setErr("");
        setRefreshing(true);
        dispatch(searchProducts({search: props.route.params?.category, category_id:props.route.params?.category_id, no:1,type:objectValues?.option,idd:objectValues?.idd}));
        wait(3000).then(() => setRefreshing(false));
    }, []);


    const goBack = () => props.navigation.goBack();
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
        console.log("the id", id)
        setVisible(true);
        bottomSheet.current?.present()
    };

    // Filter Products and show them in the Modal
    const filterProduct = (id) => {
        console.log("the filter", id)
        let resultArray = searchedProducts.filter(item => item.id === id)[0];
        return setResult(resultArray)
    };

    const ListView = ({ item }) => {

        return <List
            item={item}
            getItem={() => getItem(item.id)}
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
                <TouchableOpacity style={styles.cartCover} onPress={callPrice}>
                    <Acon name="tag" color="#fff" size={16} />
                    <Text style={styles.cartText}>{priceCat}</Text>
                    <Acon name="down" color="#fff" size={14} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.miniHeaderView}>
                        <Icon name="grid" size={14} color="#616161" />
                        <View style={styles.margin}>
                            <Text style={[styles.inputTitle, styles.color]} numberOfLines={1}>All {props.route.params?.display_name}</Text>
                        </View>
                    </View>
                    {/* {searchedProducts.length ?
                        <TouchableOpacity style={[styles.miniHeaderView2, styles.filterView]} onPress={redirectToFilter}>
                            <Icon name="chevron-down" size={14} color="#212121" />
                            <View style={styles.margin}>
                                <Text style={styles.filterText}>Filter</Text>
                            </View>
                        </TouchableOpacity> : null} */}
                </View>

                {err ? <View style={[globalStyles.errMainView, { marginBottom: 10 }]}>
                    <Text style={globalStyles.failedResponseText}>{err}</Text>
                </View>
                    : null}

            </View>
         
            <FlatList
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

                <PriceBottomSheet
                bottomSheet={bottomSheetPrice} 
                props={props}
                objList = {(item) =>  setObjectValues(item)}
                sort={sortPrice}
                />

        </View> 
    )
};

export default Products;