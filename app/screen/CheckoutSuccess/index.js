import React, { useEffect } from "react";
import { View, Text, BackHandler} from "react-native";
import { useDispatch } from "react-redux";
import styles from "./style";

import { AuthBtn as Btn, Success } from "@Component";
import { cleanup} from "@Store/CustomerOrder";
import { idle } from "@Store/Cart";
import { getCustomerOrders, getCustomerPendingOrders } from "@Request/CustomerOrder";
import { cleanOrder } from "@Store/CustomerOrder";

const CheckoutSuccess = (props) => {
  const dispatch = useDispatch();
  const {amount, delivery_price} = props.route.params

  const goBack = () => {
    dispatch(cleanup())
    dispatch(cleanOrder())
    dispatch(idle())
    dispatch(getCustomerOrders(1))
    dispatch(getCustomerPendingOrders(1))
    props.navigation.navigate("CustomerOrder");
   
  }


  const handleBackButton = () => {
    if (props.navigation.isFocused()) {
      goBack()
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      dispatch(cleanup());
      dispatch(idle());
      dispatch(cleanOrder())
      dispatch(getCustomerOrders(1));
      dispatch(getCustomerPendingOrders(1));
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }
  }, []);

  return (
    <Success>
      <View style={styles.afterTop}>
        <Text style={styles.topText}>Order Confirmed!</Text>
        <Text style={styles.downText}>Your order has been confirmed. You'll receive an SMS shortly</Text>
      </View>

      <View style={styles.midCover}>
            <View style={styles.midItem}>
               <Text style={styles.itemText}>Subtotal:</Text>
               <Text style={styles.itemText}>{amount ? commafy(amount - delivery_price) : 0}</Text>
            </View>
            <View style={styles.midItem}>
               <Text style={styles.itemText}>Delivery Fee:</Text>
               <Text style={styles.itemText}>₦{delivery_price ? commafy(delivery_price): 0}</Text>
            </View>

            <View style={styles.midItemColor}>
               <Text style={styles.itemTextColor}>Total:</Text>
               <Text style={styles.itemTextColor}>₦{commafy(amount)}</Text>
            </View>

         </View>

      <View style={styles.orderItem}>
      </View>

      <View style={styles.sucBtnCover}>
        <Btn title="Done" style={styles.addressBtn2} styles={styles.sucBtnText} onPress={goBack}/>
      </View>
    </Success>
  )
};

export default CheckoutSuccess;