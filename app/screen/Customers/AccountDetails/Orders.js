import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';


import { EmptyPlaceHolder } from "@Component";
import { reOrder } from "@Request/CustomerOrder";
import { cleanReOrder } from "@Store/CustomerOrder";
import styles from "@Screen/CustomerOrder/style";
import Loader from "@Screen/Loader";
import CustomerPlaceholderCard from "@Screen/CustomerOrder/CustomerPlaceholderCard";
import { listCart } from "@Request/Cart";
import { cleanStatus, cleanList } from "@Store/Cart";
import { getCustomerOrder } from "@Request/Customer";

const Order = (props) => {

    const dispatch = useDispatch();


    const [err, setErr] = useState("");

    const [loader, setLoader] = useState(false);

    const [trackLoaded, setTrackLoaded] = useState(false);


    const flatListRef = useRef()
    

    const { errors, update } = useSelector((state) => state.order);
    
    const { orders, orderStatus, ordersCurrentPage } = useSelector((state) => state.customer);


    const reOrders = (id) => {

        const details = { order_group_id: id };

        setLoader(true)

        dispatch(reOrder(details));
    };
    

    useEffect(() => {
        if (update === "failed") {
            waitTime(errors?.msg);
        } else if (update === "success") {
            setLoader(false)
            dispatch(cleanReOrder())
            dispatch(cleanList())
            dispatch(cleanStatus())
            dispatch(listCart(1))
            props.cart();

        } else {
            setErr("")
        }
    }, [update]);


    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView]}>
                <Text style={globalStyles.failedResponseText}>{err}</Text>
            </View>
        ),

    };

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
            dispatch(cleanReOrder());
        })
    }, []);


    const loadMore = () => {
        setTrackLoaded(true)

        dispatch(getCustomerOrder({id: props?.details?.id, no: ordersCurrentPage?.current_page + 1}));

    };


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

                    {item?.status_text?.toLowerCase() === "cancelled" ?

                        <View style={styles.StatusCoverC}>
                            <Text style={styles.statusTextC}>{item.status_text}</Text>
                        </View>
                        :
                        item?.status_text?.toLowerCase() === "being processed" || item?.status_text?.toLowerCase() === "pending" ?

                            <View style={styles.StatusCoverB}>
                                <Text style={styles.statusText2}>{item.status_text}</Text>
                            </View> 
                            :
                            <View style={styles.StatusCover}>
                                <Text style={styles.statusText}>{item.status_text}</Text>
                            </View>
                    }

                    {item?.ref_no !== null ?
                        <TouchableOpacity style={styles.reorderCover} onPress={() => reOrders(item.id)}>
                            <Text style={styles.reOrderText}>RE-ORDER</Text>
                            <Image source={require("@Assets/image/refresh.png")} style={styles.refreshImg} />
                        </TouchableOpacity>
                        : null}

                </View>

            </View>

        </TouchableOpacity>

    )


    const Footer = () => (
        <View>
            {
               orderStatus === "pending" || orderStatus === "idle" ?
                    <View style={styles.activityInd}>
                        <ActivityIndicator color="green" size="large" />
                    </View>
                    :
                    null}
        </View>
    )


    return (
        <View style={styles.main2}>
         


            <View style={styles.bottomCover2}>
                {(orderStatus === "idle" || orderStatus === "pending") && !trackLoaded ?
                    <CustomerPlaceholderCard />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={orders}
                        renderItem={ListView}
                        ListEmptyComponent={EmptyPlaceHolder}
                        keyExtractor={item => item.id}
                        ref={flatListRef}
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

       
          {err ? <Toast config={toastConfig} /> : null}
   
            <Loader isVisible={loader} />

        </View>
    )
};

export default Order;