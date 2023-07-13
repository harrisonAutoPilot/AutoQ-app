import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, RefreshControl, } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fcon from 'react-native-vector-icons/Feather';
import MIcon from "react-native-vector-icons/MaterialIcons";


import { getCustomerOrders, orderFilter } from "@Request2/CustomerOrder";
import { cleanOrderFilter, cleanPlaceOrder  } from "@Store2/CustomerOrder";
import styles from './style';
import OrderPlaceholderLoader from "./orderPlaceholderLoader";
import EmptyOrder from "./emptyOrder";
import { OrderHeader, OrderBottomSheet } from "@Component2";


const Order = (props) => {


  const dispatch = useDispatch();


  const { orderStatus, orders, errors, orderFilterStatus, orderFilterData } = useSelector((state) => state.order);

  const { user } = useSelector((state) => state.auth);


  const bottomSheetRef = useRef(null);

  const flatListRef = useRef();

  const [errMsg, setErrMsg] = useState(null);

  const [search, setSearch] = useState("");

  const [result, setResult] = useState([]);

  const [filterCheck, setFilterCheck] = useState(false)

  const [trackId, setTrackId] = useState("");

  const [periodId, setPeriodId] = useState("");

  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  const returnBack = () => {
    reset()
    props.navigation.goBack();
  };


  useEffect(() => {

    dispatch(getCustomerOrders());

    return () => {

      dispatch(cleanPlaceOrder());
      
    }

  }, []);



  useEffect(() => {
    
    if(filterCheck  && search.length){

      filterResult();

    } else if (search.length) {

      filterOrder();

    }

  }, [search.length, filterCheck]);


  const callFilter = () => {

    bottomSheetRef.current?.present();

  };


  const closeBottomSheet = () => {

    bottomSheetRef.current?.close();

  };

  useEffect(() => {

    if (orderFilterStatus === "success") {

      setResult(orderFilterData);

      setFilterCheck(true);

    }

    else if (orderFilterStatus === "failed") {

      setErrMsg(errors?.msg);

      wait(5000).then(() => {

        dispatch(cleanOrderFilter());

        setErrMsg(null)

      })

    }

  }, [orderFilterStatus]);
  

  useEffect(() => {

    if (orderStatus === "failed") {

      setErrMsg(errors?.msg);

    }

  }, [orderStatus]);


  const applyFilter = () => {

    closeBottomSheet();

    dispatch(orderFilter({ id: user.id, stat: trackId, date: periodId }));
    
  };


  const filterOrder = () => {

    let searched = orders.filter(val => {

      if (val.ref_no !== null && val.ref_no.toLowerCase().includes(search.toLowerCase())) {

        return val
      }
    });

    return setResult(searched)

  };


  const filterResult = () => {

    let searched = result.filter(val => {

      if (val.ref_no !== null && val.ref_no.toLowerCase().includes(search.toLowerCase())) {

        return val
      }
    });

    return setResult(searched)

  };

  const reset = () => {

    closeBottomSheet();

    dispatch(cleanOrderFilter());

    setPeriodId("");

    setTrackId("");

    setFilterCheck(false);

  };


  const refreshViewList = useCallback(() => {

    setRefreshing(true);

    setErrMsg(null);

      setFilterCheck(false);

      dispatch(cleanOrderFilter());

      setPeriodId("");

      setTrackId("");

    dispatch(getCustomerOrders())
      .unwrap()
      .then(() => {

        setRefreshing(false)

      })
      .catch(err => {

        setRefreshing(false);

      })

  }, []);


  const details = (item) => { props.navigation.navigate("OrderDetails", { item }) }


  const OrderView = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => details(item)}>
          <View style={styles.cardCover}>
            <View>
              <View style={styles.cardTop}>
                <Text style={styles.orderNumberText}>Order: {item.ref_no}</Text>
                <Text style={styles.descText} numberOfLines={1}>{item.orders[0]?.product.name}</Text>
              </View>
              <View style={styles.cardTop}>
                {item.status_text === "pending" ?
                  <View style={styles.statusCover}>
                    <Text style={styles.statusText}>Pending</Text>
                  </View>
                  : item.status_text === "delivered" ?
                    <View style={styles.deliveredCover}>
                      <Icon name='check-circle-outline' size={14} color="#fff" />
                      <Text style={styles.deliverText}>Delivered</Text>
                    </View>
                    :
                    <View style={styles.cancelCover}>
                      <Text style={styles.cancelText}>Cancelled</Text>
                    </View>
                }
                <Text style={styles.countText}>{item.orders.length} Item(s)</Text>
              </View>
            </View>
            <View style={styles.amountCover}>
              <Text style={styles.amountText}>₦{item.total_amount ? commafy(item.total_amount) : 0}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  };



  return (
    <View style={styles.container}>

      <OrderHeader
        title="Orders"
        onPressFilter={callFilter}
        onPress={returnBack}
        showFilter={orders.length > 0}
      />


      {orders.length > 0 ?
        <View style={styles.inputCover}>
          <Fcon name="search" size={14} style={styles.searchIcon} color="#767680" />
          <TextInput
            style={styles.inputStyle}
            value={search}
            placeholder='Search'
            placeholderTextColor={"#5A5D72"}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
        :
        null
      }


      <View style={styles.bottomContainer}>

        {errMsg && <View style={styles.errView} >
        <MIcon name="error-outline" size={22} color="#fff" />
        <Text style={styles.errText}>{errMsg}</Text>
      </View>}

        {orderStatus === "idle" || orderStatus === "pending" || orderFilterStatus == "pending" ?

          <OrderPlaceholderLoader />

          :
          
          <FlatList
            showsVerticalScrollIndicator={false}
            data={search.length > 0 || filterCheck ? result : orders}
            renderItem={OrderView}
            ListEmptyComponent={<EmptyOrder />}
            keyExtractor={item => item.id}
            ref={flatListRef}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refreshViewList} />
            }
            initialNumToRender={4}
            getItemLayout={(data, index) => (
              { length: 100, offset: 100 * index, index }
            )}
            ListFooterComponent={<View style={{ height: 20 }} />}
          />

        }

      </View>

      <OrderBottomSheet
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={closeBottomSheet}
        setPeriod={setPeriodId}
        setTrack={setTrackId}
        periodId={periodId}
        trackId={trackId}
        reset={reset}
        apply={applyFilter}
      />
    </View>
  );
};

export default Order;
