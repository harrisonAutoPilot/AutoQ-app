import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback,
     RefreshControl, FlatList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';


import Modal from "./SortBy";
import { InputField, COHeader as Header, EmptyPlaceHolder } from "@Component";
import { getCustomerOrders, reOrder } from "@Request/CustomerOrder";
import { cleanup, cleanOrder } from "@Store/CustomerOrder";
import styles from "./style";
import Loader from "@Screen/Loader";
import CustomerPlaceholderCard from "./CustomerPlaceholderCard";
import { listCart } from "@Request/Cart";
import { cleanStatus, cleanList } from "@Store/Cart";
import EmptyOrder from "@Component/Empty/emptyOrder"

const CustomerOrder = (props) => {

    const dispatch = useDispatch();


    const [search, setSearch] = useState("");

    const [result, setResult] = useState([]);

    const [refreshing, setRefreshing] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [err, setErr] = useState("");

    const [loader, setLoader] = useState(false);

    const [trackLoaded, setTrackLoaded] = useState(false);


    const flatListRef = useRef()

    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })


    const { errors, orders, update, status, ordersCurrentPage } = useSelector((state) => state.order);


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


    useEffect(() => {
        dispatch(cleanOrder())

        dispatch(getCustomerOrders(1));

        return () => {
            dispatch(cleanup());
        }
    }, []);


    useEffect(() => {
        if (search.length > 0) {
            filterOrder();
        }

    }, [search.length]);


    useEffect(() => {
        if (update === "failed" && props.navigation.isFocused()) {
            waitTime(errors?.msg);
        } else if (update === "success" && props.navigation.isFocused()) {
            setLoader(false)
            dispatch(cleanList())
            dispatch(cleanStatus())
            dispatch(listCart(1));
          
            props.navigation.navigate("Cart")
            dispatch(cleanup());
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

        dispatch(cleanOrder());

        dispatch(getCustomerOrders(1));
        
        wait(3000).then(() => setRefreshing(false));
    }, []);


    const reOrders = (id) => {
        const details = { order_group_id: id };

        setLoader(true)

        dispatch(reOrder(details));
    };


    const loadMore = () => {
        setTrackLoaded(true)

        dispatch(getCustomerOrders(ordersCurrentPage?.current_page + 1));
    };


    const dismissKeyboard = () => Keyboard.dismiss();


    const goToCat = () => props.navigation.navigate("Home", { screen: 'HomeScreen' });

    const details = (item) => props.navigation.navigate("OrderDetails", { item });


    const Footer = () => (
        <View>
            {
               status === "pending" || status === "idle" ?
                    <View style={styles.activityInd}>
                        <ActivityIndicator color="green" size="large" />
                    </View>
                    :
                    null}
        </View>
    )


    const ListView = ({ item }) => (
        <TouchableOpacity onPress={() => details(item)}>
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
                        <Text style={styles.midTextTwo} numberOfLines={1}>{item.orders[0]?.product?.name} .....</Text>
                    </View>
                </View>

                <View style={styles.cardDownCover}>
                    {item?.status_text?.toLowerCase() === "cancelled" ?

                        <View style={styles.StatusCoverC}>
                            <Text style={styles.statusTextC}>{item?.status_text}</Text>
                        </View>
                        :
                        item?.status_text?.toLowerCase() === "being processed" ||  item?.status_text?.toLowerCase() === "pending" ?

                            <View style={styles.StatusCoverB}>
                                <Text style={styles.statusText2}>{item?.status_text}</Text>
                            </View> :
                            <View style={styles.StatusCover}>
                                <Text style={styles.statusText}>{item?.status_text}</Text>
                            </View>
                    }

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
            <Header title="Customer Orders" style={styles.btnText} onPress={goToCat} />

            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={styles.blueColor}>
                    <View style={[styles.searchSection]}>
                        <Icon name="search" color="rgba(255, 255, 255, 0.8)" size={24} style={styles.searchIcon} />
                        <InputField
                            style={styles.inputField}
                            value={search}
                            placeholder="Search by name, order no..."
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onChangeText={(text) => setSearch(text)}
                        />
                    </View>

                    <View style={styles.exchangeCover}>
                        <Text style={styles.allOrderText}> All Orders</Text>
                        {orders?.length ?
                            <TouchableOpacity style={styles.exchangeClickk} onPress={redirectToSort}>
                                <FIcon name="sort" color="rgba(255, 255, 255, 0.8)" size={14} style={styles.searchIcon} />
                                <Text style={styles.exchangeText}>Sort by</Text>
                            </TouchableOpacity> : null}
                    </View>
                </View>


            </TouchableWithoutFeedback>

            {err ? <Toast config={toastConfig} /> : null}

            <View style={styles.bottomCover}>
                {(status === "pending" || status === "idle") && !trackLoaded ?
                    <CustomerPlaceholderCard />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={!result.length ? orders : result}
                        renderItem={ListView}
                        ListEmptyComponent={EmptyPlaceHolder}
                        keyExtractor={item => item.id}
                        ref={flatListRef}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        }
                        initialNumToRender={3}
                        getItemLayout={(data, index) => (
                            { length: 100, offset: 100 * index, index }
                        )}
                        onEndReached={() => {
                            if (ordersCurrentPage?.current_page < ordersCurrentPage?.last_page) {
                                loadMore()
                            }
                        }}
                        ListFooterComponent={Footer}
                        
                    />
                }
            </View>
            <Modal
                isVisible={showModal}
                sort={sortOrder}
                onSwipeComplete={() => setShowModal(false)}
                close={() => setShowModal(!showModal)}
                onSwipeComplete1={() => setShowModal(false)}
            />

            <Loader isVisible={loader} />

        </View>
    )
};

export default CustomerOrder;