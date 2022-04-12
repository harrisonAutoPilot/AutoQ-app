import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList, BackHandler } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

import Modal from "@Screen/CustomerOrder/SortBy";
import { InputField, COHeader as Header, EmptyPlaceHolder } from "@Component";
import { getCustomerPendingOrders, verifyOrder, verifyCode  } from "@Request/CustomerOrder";
import { cleanup } from "@Store/CustomerOrder";
import styles from "@Screen/CustomerOrder/style";
import Loader from "@Screen/Loader";
import CustomerPlaceholderCard from "@Screen/CustomerOrder/CustomerPlaceholderCard";
import BottomSheet from "@Screen/ConfirmCheckOut/ConfirmOrder";


const PendingOrder = (props) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [err, setErr] = useState("");
    const [loader, setLoader] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("")
    const [id, setId] = useState("")
    const flatListRef = useRef()
    const bottomSheet = useRef();

    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })

    const { errors, pendingOrders, update, loaded, verify, verificationStatus } = useSelector((state) => state.order);   
    
      const handleBackButton = () => {
        if (props.navigation.isFocused()) {
            props.navigation.navigate("Home");
          return true;
        }
      };
    
      useEffect(() => {
        dispatch(getCustomerPendingOrders());
        BackHandler.addEventListener("hardwareBackPress", handleBackButton);
        return () => {
          dispatch(cleanup())
          BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        }
      }, []);

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

    // useFocusEffect(
    //     useCallback(() => {
    //         dispatch(getCustomerPendingOrders());
    //         return () => dispatch(cleanup());
    //     }, [])
    // );

    useEffect(() => {
        if (search.length > 0) {
            filterOrder();
        }
    }, [search.length]);

    useEffect(() => {
        if (update === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (update === "success" && props.navigation.isFocused()) {
            waitTime("Order Placed Successfully")
        }

        if (verify === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (verify === "success" && props.navigation.isFocused()) {
            setLoader(false)
            dispatch(cleanup());
            dispatch(getCustomerPendingOrders())
            props.navigation.navigate("CheckoutSuccess", amount)
        }

        if (verificationStatus === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (verificationStatus === "success" && props.navigation.isFocused()) {
            setSuccessMsg("Verification code sent");
            bottomSheet.current.show();
        }

    }, [errors]);

    const filterOrder = () => {
        let searched = pendingOrders.orders.filter(val => {
            if (val.ref_no !== null && val.ref_no.toLowerCase().includes(search.toLowerCase())) {
                return val
            }
        });
        return setResult(searched)
    };

    const sortOrder = (id) => {
        setShowModal(false);
        let order = [...pendingOrders.orders];
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
    };

    const verifyToken = (a, b, c, d) => {
        const code = {code:parseInt(`${a}${b}${c}${d}`)}
        setLoader(true);
        dispatch(verifyCode(code));
    };

    const resendToken = (id) => {
        const details = { orderGroup_id: id};
        setLoader(true);
        dispatch(verifyOrder(details));
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
            dispatch(cleanup());
        })
    }, []);

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(getCustomerPendingOrders());
        wait(3000).then(() => setRefreshing(false));
    }, []);

    const dismissKeyboard = () => Keyboard.dismiss();
    const goToCat = () => props.navigation.navigate("Home",  { screen: 'HomeScreen' });
    const details = (item) => props.navigation.navigate("OrderDetails", { item });

    const ListView = ({ item }) => (
        <TouchableOpacity >
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

                    <View style={styles.StatusCoverB}>
                        <Text style={styles.statusText2}>Pending</Text>
                    </View>

                    {item.ref_no !== null ?
                        <TouchableOpacity style={styles.reorderCover} onPress={() => {resendToken(item.id); setPhone(item?.user?.phone); setId(item.id); setAmount(item.total_amount)}}>
                            <Text style={styles.reOrderText}>Re-Send Code</Text>
                            <Image source={require("@Assets/image/refresh.png")} style={styles.refreshImg} />
                        </TouchableOpacity>
                        : null}

                </View>

            </View>

        </TouchableOpacity>

    )

    return (
        <View style={styles.main}>
            <Header title="Pending Orders" style={styles.btnText} onPress={goToCat} />

                <TouchableWithoutFeedback  onPress={dismissKeyboard}>
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
                            <Text style={styles.allOrderText}> Pending Orders</Text>
                            {pendingOrders.orders?.length ?
                            <TouchableOpacity style={styles.exchangeClickk} onPress={ redirectToSort }>
                            <FIcon name="sort" color="rgba(255, 255, 255, 0.8)" size={14} style={styles.searchIcon} />
                                <Text style={styles.exchangeText}>Sort by</Text>
                            </TouchableOpacity>: null}
                        </View>
                    </View>


                </TouchableWithoutFeedback>

            {err ? <Toast config={toastConfig} /> : null}

            <View style={styles.bottomCover}>
                {loaded === "idle" || loaded === "pending" ?
                    <CustomerPlaceholderCard />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={!result.length ? pendingOrders.orders : result}
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
            <BottomSheet
                bottomSheet={bottomSheet}
                submit = {verifyToken}
                err ={err}
                success={successMsg}
                resendToken={() => resendToken(id)}
                phone= {phone}
            />

        </View>
    )
};

export default PendingOrder;