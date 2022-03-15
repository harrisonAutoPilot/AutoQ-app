import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import commafy from "@Helper/Commafy";
import { InputField, COHeader as Header, EmptyPlaceHolder } from "@Component";
import { getCustomerOrders } from "@Request/CustomerOrder";
import { cleanup } from "@Store/CustomerOrder";
import styles from "@Screen/CustomerOrder/style";
import globalStyles from "@Helper/GlobalStyles";
import Loader from "@Screen/Loader";
// import MyOrderPlaceholder from "./MyOrderPlaceholder";

const Order = (props) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const [err, setErr] = useState("");
    const [loader, setLoader] = useState(false);
    const flatListRef = useRef()

    const { errors, orders, update, loaded } = useSelector((state) => state.order);
    console.log(orders)

    const toastConfig = {
        error: () => (
            <View style={[{ marginHorizontal: 20 }, globalStyles.errMainView2, globalStyles.marginTop]}>
                <Text style={globalStyles.failedResponseText}>{err}</Text>
            </View>
        ),
    };

    useFocusEffect(
        useCallback(() => {
            dispatch(getCustomerOrders());
            return () => dispatch(cleanup());
        }, [])
    );

    useEffect(() => {
        if (search.length > 0) {
            filterOrder();
        }
    }, [search.length]);

    useEffect(() => {
        if (update === "failed" && props.navigation.isFocused()) {
            waitTime(errors?.msg);
        } else if (update === "success" && props.navigation.isFocused()) {
            props.navigation.navigate("Home", {
                screen: 'Cart',
            })
        } else {
            setErr("")
        }
    }, [update]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((msg) => {
        wait(1000).then(() => {
            setLoader(false);
            setErr(msg)
            Toast.show({
                type: 'error',
                visibilityTime: 5000,
                autoHide: true,
                position: 'top',
                topOffset: 0
            })
        });
        wait(4000).then(() => {
            dispatch(cleanup());
        })
    }, []);

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(getOrders());
        wait(3000).then(() => setRefreshing(false));
    }, []);

    const reOrders = (id) => {
        const details = { order_group_id: id };
        setLoader(true)
        // dispatch(reOrder(details));
    };

    const dismissKeyboard = () => Keyboard.dismiss();

    const ListView = ({ item }) => (
        <TouchableOpacity onPress={() => props.detailsScreen(item)}>
            <View style={[styles.card, styles.elevation]}>
                <View style={styles.cardUpCover}>
                    <View style={styles.cardUpTop}>
                        <Text style={styles.upTextOne}>Order No: {item.ref_no}</Text>
                        <Text style={styles.upTextTwo}>₦{item.total_amount ? commafy(item.total_amount) : 0}</Text>
                    </View>
                    <View style={styles.cardUpDown}>
                        <Text style={styles.downTextOne}>{item.created_at.substring(0, 10).split('-').reverse().join('-')}</Text>
                    </View>
                </View>
                <View style={styles.cardMidCover}>
                    <View style={styles.cardMidTop}>
                        <Text style={styles.midTextOne}>{item.orders.length} {item.orders.length > 1 ? "Items" : "Item"}</Text>
                    </View>
                    <View style={styles.cardMidDown}>
                        <Text style={styles.midTextTwo} numberOfLines={1}>{item.orders[0]?.product.name} .....</Text>
                    </View>
                </View>

                <View style={styles.cardDownCover}>

                    <View style={styles.StatusCover}>
                        <Text style={styles.statusText}>delivered</Text>
                    </View>

                    {item.ref_no !== null ?
                        <TouchableOpacity style={styles.reorderCover} onPress={() => reOrders(item.id)}>
                            <Text style={styles.reOrderText}>RE-ORDER</Text>
                            <Image source={require("@Assets/image/refresh.png")} style={styles.refreshImg} />
                        </TouchableOpacity>
                        : null}

                </View>

            </View>

        </TouchableOpacity>

    )

    return (
        <View style={styles.main}>
            {err ? <Toast config={toastConfig} /> : null}

            <View style={styles.bottomCover2}>
                {orders.orders && !orders.orders.length && loaded === "success" ?
                    <EmptyPlaceHolder />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={orders.orders}
                        renderItem={ListView}
                        // ListEmptyComponent={MyOrderPlaceholder}
                        keyExtractor={item => item.id}
                        ref={flatListRef}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        }
                        initialNumToRender={3}
                        getItemLayout={(data, index) => (
                            { length: 100, offset: 100 * index, index }
                        )}
                    />
                }
            </View>

            <Loader isVisible={loader} />

        </View>
    )
};

export default Order;