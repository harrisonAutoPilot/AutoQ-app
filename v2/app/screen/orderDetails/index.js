import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Zcon from 'react-native-vector-icons/AntDesign';
import MIcon from "react-native-vector-icons/MaterialIcons";


import { TransactionHeader } from '@Component2';
import { getRating } from '@Request2/Rating';
import { reOrder } from '@Request2/CustomerOrder';
import { cleanList } from '@Store2/Cart';
import { cleanReorder } from '@Store2/CustomerOrder';
import { cleanup as cleanRating } from '@Store2/Rating';
import styles from './style';
import Loader from '@Screen2/loader';
import { listCart } from '@Request2/Cart';
import OrderDetailsBottomSheet from './component/BottomSheet';


const OrderDetails = props => {

  const dispatch = useDispatch();

  const { errors, reorderStatus } = useSelector(state => state.order);

  const { rating, ratingStatus } = useSelector(state => state.rating);

  const bottomSheetRef = useRef(null);


  const items = props.route.params.item;

  const [errMsg, setErrMsg] = useState(null);

  const [loader, setLoader] = useState(false);

  const seeReview = rating => props.navigation.navigate('ViewReview', { rating });

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  const returnBack = () => {
    props.navigation.goBack();
  };

  const navigateToCancelOrder = () => {
    props.navigation.navigate("CancelOrder", {id:items.id})
  }

  useEffect(() => {

    bottomSheetRef?.current?.present();

    dispatch(getRating(items.id));

    return () => dispatch(cleanRating());

  }, [])


  const reOrders = () => {

    const details = { order_group_id: items?.id };

    setLoader(true);

    dispatch(reOrder(details));
  };

  const checkStatus = items => {
    props.navigation.navigate('OrderStatus', { items });
  }

  const reviewOrder = items => {
    props.navigation.navigate('Review', { items });
  };


  useEffect(() => {
    if (reorderStatus === 'failed') {

      setLoader(false);

      setErrMsg(errors?.msg);

      wait(5000).then(() => {
        dispatch(cleanReorder());
        setErrMsg(null)
      })

    } else if (reorderStatus === 'success') {

      dispatch(cleanReorder());

      dispatch(cleanList());

      dispatch(listCart(1));

      setLoader(false);

      props.navigation.navigate('Cart');

    }
  }, [reorderStatus]);



  const ListRender = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardLeft}>
          <View style={styles.countCover}>
            <Text style={styles.countText}>{index + 1}</Text>
          </View>
          <View style={styles.descCover}>
            <Text style={styles.nameText} numberOfLines={1}>
              {item.product.name}
            </Text>
            <Text style={styles.qtyText}>QTY: {item.quantity}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.amountText}>₦{commafy(item.total_amount)}</Text>
        </View>
      </View>

    );
  };


  return (
    <View style={styles.container}>
      <TransactionHeader title="Order Details" onPress={returnBack} />

      <View style={styles.topInner}>
        <View style={styles.topContainer}>

          <View>
            <Text style={styles.orderNumber}>NO #{items.ref_no}</Text>
            <Text style={styles.orderDate}>
              {items.created_at
                .substring(0, 10)
                .split('-')
                .reverse()
                .join('/')}
            </Text>
          </View>

          {items.status_text === 'cancelled' ? (
          <View style={styles.statusCoverCancelled}>
          <Text style={styles.cancelledStatusText}>{items.status_text}</Text>
        </View>
          ) : items.status_text === 'delivered' ? (
            <View style={styles.statusCoverDelivered}>
              <Zcon name="checkcircleo" color="#fff" size={10} />
              <Text style={styles.deliveredStatusText}>{items.status_text}</Text>
            </View>
          ) : 
            (
              <View style={styles.statusCoverPending}>
                <Icon
                  name="checkbox-blank-circle-outline"
                  color="#00658B"
                  size={10}
                />
                <Text style={styles.pendingStatusText}>{items.status_text}</Text>
              </View>
          )}
        </View>

        <View style={styles.itemTitleCover}>
          <Text style={styles.itemTitle}>Items</Text>
        </View>


        <View style={{ flex: 0.68 }}>
          <FlatList
            data={items?.orders}
            renderItem={ListRender}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
        
      </View>

      <View style={styles.toastCover}>
        {errMsg ? <View style={styles.errView} >
          <MIcon name="error-outline" size={22} color="#fff" />
          <Text style={styles.errText}>{errMsg}</Text>
        </View> : null}
      </View>


      <Loader isVisible={loader} />

      <OrderDetailsBottomSheet
        items={items}
        bottomSheetRef={bottomSheetRef}
        reOrders={reOrders}
        checkStatus={() => checkStatus(items.id)}
        review={() => reviewOrder(items.id)}
        seeReview={() => seeReview(rating)}
        cancelOrder={navigateToCancelOrder}
        rating={rating}
        ratingStatus={ratingStatus}
      />

    </View>
  );
};

export default OrderDetails;
