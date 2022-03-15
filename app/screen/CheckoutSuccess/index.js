import React, { useEffect } from "react";
import { View, Text, BackHandler} from "react-native";
import { useDispatch } from "react-redux";
import styles from "./style";

import { AuthBtn as Btn, Success } from "@Component";
import commafy from "@Helper/Commafy";
import { cleanup } from "@Store/CustomerOrder";


const CheckoutSuccess = (props) => {
  const dispatch = useDispatch();
  const amount = props.route.params

  const goBack = () => {
    props.navigation.navigate("CustomerOrder");
    dispatch(cleanup())
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
      dispatch(cleanup())
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
               <Text style={styles.itemText}>₦{commafy(amount)}</Text>
            </View>
            <View style={styles.midItem}>
               <Text style={styles.itemText}>Delivery Fee:</Text>
               <Text style={styles.itemText}>FREE</Text>
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