import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, 
    RefreshControl, FlatList, ActivityIndicator} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import Modal from "@Screen/CustomerOrder/SortBy";
import { InputField, COHeader as Header, EmptyPlaceHolder, ConfirmBottomSheet } from "@Component";
import { getCustomerPendingOrders ,reAddToCart} from "@Request/CustomerOrder";
import { cleanup, cleanReOrder } from "@Store/CustomerOrder";
import styles from "@Screen/CustomerOrder/style";
import Loader from "@Screen/Loader";
import CustomerPlaceholderCard from "@Screen/CustomerOrder/CustomerPlaceholderCard";


const PendingOrder = (props) => {


    const dispatch = useDispatch();

    const [errMsg, setErrMsg] = useState("");

    const [successMsg, setSuccessMsg] = useState("");

    const [loader, setLoader] = useState(false);

    const [search, setSearch] = useState("");

    const [result, setResult] = useState([]);

    const [refreshing, setRefreshing] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [trackLoaded, setTrackLoaded] = useState(false);

    const [cartItems, setCartItems] = useState ("")


    const flatListRef = useRef();

    const bottomSheet = useRef();


    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })


    const { pendingOrders, loaded, pendingOrdersCurrentPage, addToCart,errors } = useSelector((state) => state.order);  
    
    
      useEffect(() => {
       
        dispatch(getCustomerPendingOrders(1));

        return () => {

          dispatch(cleanup())
        }
      }, []);



  useEffect(() => {
    if (addToCart  === "failed" && props.navigation.isFocused()) {
        setLoader(false)
      setSuccessMsg("");
      refreshView(errors?.msg, "")
    } else if (addToCart  === "success" && props.navigation.isFocused()) {
        setLoader(false)
      setErrMsg("");
      props.navigation.navigate("Cart")
    
    }
  }, [addToCart ]);


    const redirectToSort = () => {
        setShowModal(true)
    };

    const reAdd =(item) =>{
        setCartItems(item?.delivery_type?.pivot?.order_group_id)
        bottomSheet.current.show()
      
    }

    const closePrompt = () =>{
        bottomSheet.current.close()
    }

    const readdItem = () =>{
        bottomSheet.current.close()
        setLoader(true)
        // console.log("we just readded .....", cartItems);
        dispatch(reAddToCart(cartItems))
    }


    useEffect(() => {
        if (search.length > 0) {
            filterOrder();
        }
    }, [search.length]);


    const filterOrder = () => {
        let searched = pendingOrders.filter(val => {
            if (val.ref_no !== null && val.ref_no.toLowerCase().includes(search.toLowerCase())) {
                return val
            }
        });
        return setResult(searched)
    };

    const sortOrder = (id) => {
        setShowModal(false);
        let order = [...pendingOrders];
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

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshViewLoad = useCallback(() => {
        setRefreshing(true);
        dispatch(cleanup())
        dispatch(getCustomerPendingOrders(1));
        wait(3000).then(() => setRefreshing(false));
    }, []);

    
      const refreshView = useCallback((msg, suc) => {
        wait(1000).then(() => {
          setLoader(false)
          if (msg) {
            setErrMsg(msg);
            Toast.show({
              type: 'error',
              visibilityTime: 5000,
              autoHide: true,
              position: 'top',
              topOffset: 0
            })
    
          } else {
            setSuccessMsg(suc);
            Toast.show({
              type: 'tomatoToast',
              visibilityTime: 5000,
              autoHide: true,
              position: 'top',
              topOffset: 0
            })
          }
        })
    
        wait(4000).then(() => { dispatch(cleanReOrder()); })
      }, []);

      const toastConfig = {

        error: () =>
        (
          <View style={[globalStyles.errMainView3]}>
            <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
          </View>
        ),
        tomatoToast: () => (
          <SuccessMsgViewTwo title={successMsg} />
        )
      };
    
    

    const dismissKeyboard = () => Keyboard.dismiss();


    const goToCat = () => props.navigation.navigate("Home",  { screen: 'HomeScreen' });


    const details = (item) => props.navigation.navigate("IncompleteOrderDetails", { item });





    const loadMore = () => {
        setTrackLoaded(true)

        dispatch(getCustomerPendingOrders(pendingOrdersCurrentPage?.current_page + 1));
    };


    const Footer = () => (
        <View>
            {
               loaded === "pending" || loaded === "idle" ?
                    <View style={styles.activityInd}>
                        <ActivityIndicator color="green" size="large" />
                    </View>
                    :
                    null}
        </View>
    )
    

    const ListView = ({ item }) => (
            <TouchableOpacity style={[styles.card, styles.elevation]} onPress={() => details(item)}>
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
                        <Text style={styles.statusText2}>Incomplete</Text>
                    </View>

                  
                        {/* <TouchableOpacity style={styles.reorderCover} onPress={() => reAdd(item)}>
                            <Text style={styles.reOrderText}>Re-Add to cart</Text>
                        </TouchableOpacity> */}
                

                </View>

            </TouchableOpacity>

    )

    return (
        <View style={styles.main}>
            <Header title="Incomplete Orders" style={styles.btnText} onPress={goToCat} />
            {errMsg ? <Toast config={toastConfig} /> : null}
            {successMsg ? <Toast config={toastConfig} /> : null}
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
                            <Text style={styles.allOrderText}>Incomplete  Orders</Text>
                            {pendingOrders.length ?
                            <TouchableOpacity style={styles.exchangeClickk} onPress={ redirectToSort }>
                            <FIcon name="sort" color="rgba(255, 255, 255, 0.8)" size={14} style={styles.searchIcon} />
                                <Text style={styles.exchangeText}>Sort by</Text>
                            </TouchableOpacity>: null}
                        </View>
                    </View>


                </TouchableWithoutFeedback>

            <View style={styles.bottomCoverPending}>
                {(loaded === "idle" || loaded === "pending") && !trackLoaded  ?
                    <CustomerPlaceholderCard />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={!result.length ? pendingOrders : result}
                        renderItem={ListView}
                        ListEmptyComponent={EmptyPlaceHolder}
                        keyExtractor={item => item.id}
                        ref={flatListRef}
                        initialNumToRender={5}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={refreshViewLoad} />
                        }
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if (pendingOrdersCurrentPage?.current_page < pendingOrdersCurrentPage?.last_page) {
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


            <ConfirmBottomSheet 
           bottomSheet = {bottomSheet}
           proceed={readdItem}
           nope ={closePrompt}

            />

<Loader isVisible={loader} />
        </View>
    )
};

export default PendingOrder;