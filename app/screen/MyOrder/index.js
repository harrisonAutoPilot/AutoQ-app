import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Modal from "./SortBy";
import commafy from "@Helper/commafy";
import { InputField } from "@Component/index";
import NavHeader from "@Component/NavHeader";
import { getOrders, reOrder } from "@Request/order";
import { cleanup } from "@Store/order";
import styles from "./style";
import globalStyles from "@Helper/globalStyles";
import Loader from "@Screen/Loader";
import AddCartListEmptyBig from "@Screen/Home/addCartListEmptyBig";
import AddOrderEmpty from "@Screen/Home/addOrderEmpty";
import MyOrderPlaceholder from "./MyOrderPlaceholder";

const MyOrder = (props) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [err, setErr] = useState("");
    const [loader, setLoader] = useState(false);
    const flatListRef = useRef()

    const browse = () => props.navigation.navigate("Home", {
        screen: 'Browse',
    });

    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })

    const { status, errors, orders, update, loaded } = useSelector((state) => state.order);

    const toastConfig = {
        error: () => (
            <View style={[{ marginHorizontal: 20 }, globalStyles.errMainView2, globalStyles.marginTop]}>
                <Text style={globalStyles.failedResponseText}>{err}</Text>
            </View>
        ),
    };

    const redirectToSort = () => {
        setShowModal(true)
    };

    useFocusEffect(
        useCallback(() => {
            dispatch(getOrders());
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

    const filterOrder = () => {
        let searched = orders.filter(val => {
            if (val.ref_no !== null && val.ref_no.toLowerCase().includes(search.toLowerCase())) {
                return val
            }
        });
        return setResult(searched)
    };

    const sortOrder = (id) => {
        setShowModal(false);
        let order = [...orders];
        let searched;

        switch (id) {
            case 1:
                searched = order.sort((a, b) => { return a.total_amount - b.total_amount })
                toTop()
                setResult(searched);
                break;
            case 2:
                searched = order.sort((a, b) => { return a.orders.length - b.orders.length });
                toTop()
                setResult(searched)
                break;
            case 3:
                searched = order.sort((a, b) => { return new Date(a.created_at) - new Date(b.created_at) })
                toTop()
                setResult(searched)
                break;

        }
    }

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
        dispatch(reOrder(details));
    };

    const dismissKeyboard = () => Keyboard.dismiss();
    const goToCat = () => props.navigation.navigate("Home");
    const details = (item) => props.navigation.navigate("OrderDetails", { item });

    const ListView = ({ item }) => (
        <TouchableOpacity onPress={() => details(item)}>
            <View style={[styles.card, styles.elevation]}>
                <View style={styles.cardUpCover}>
                    <View style={styles.cardUpTop}>
                        <Text style={styles.upTextOne}>Order No: {item.ref_no}</Text>
                        <Text style={styles.upTextTwo}>₦ {item.total_amount ? commafy(item.total_amount) : 0}</Text>
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
                        <Text style={styles.midTextTwo} numberOfLines={1}>{item.orders[0]?.product.name}.....</Text>
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

            <NavHeader title="Customer Orders" style={styles.btnText} onPress={goToCat} />
            <View style={{backgroundColor:'#00319D', marginTop:-1}}>
                <TouchableWithoutFeedback style={styles.touchstyle} onPress={dismissKeyboard}>
                    <View style={styles.blueColor}>
                        <View style={[styles.searchSection]}>
                            <Icon name="search" color="rgba(255, 255, 255, 0.8)" size={24} style={styles.searchIcon} />
                            <InputField
                                style={styles.inputField}
                                value={search}
                                placeholder="Search by order no..."
                                placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                onChangeText={(text) => setSearch(text)}
                            />
                        </View>

                        <View style={styles.exchangeCover}>
                            <Text style={styles.allOrderText}> All Orders</Text>
                            <TouchableOpacity style={styles.exchangeClickk} onPress={redirectToSort}>
                            <Icon name="refresh-cw" color="rgba(255, 255, 255, 0.8)" size={14} style={styles.searchIcon} />
                                {/* <Image source={require("@Assets/image/exchange.png")} style={styles.exchangeImg} /> */}
                                <Text style={styles.exchangeText}>Sort by</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </TouchableWithoutFeedback>

            </View>

            {err ? <Toast config={toastConfig} /> : null}

            <View style={styles.bottomCover}>
                {!orders.length && loaded === "success" ?
                    <AddOrderEmpty browse={browse} />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={!result.length ? orders : result}
                        renderItem={ListView}
                        ListEmptyComponent={MyOrderPlaceholder}
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
            <Modal isVisible={showModal}
                sort={sortOrder}
                onSwipeComplete={() => setShowModal(false)}
                close={() => setShowModal(!showModal)}
                onSwipeComplete1={() => setShowModal(false)}
            />

            <Loader isVisible={loader} />

        </View>
    )
};

export default MyOrder;