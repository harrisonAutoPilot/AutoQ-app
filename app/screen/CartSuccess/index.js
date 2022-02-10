import React, { useEffect } from "react";
import { View, Text, Image,  BackHandler } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style";

import { TrackBtn } from "@Component/index";
import commafy from "@Helper/commafy";
import { cleanup } from "@Store/order";

const CartSuccess = (props) => {
   const dispatch = useDispatch();
   const amount = props.route.params

   const goBack = () => {
      props.navigation.navigate("MyOrder");
      dispatch(cleanup())
   }


   const handleBackButton = () => {
      if(props.navigation.isFocused()){
         goBack()
        return true;
      }
    };
  
    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handleBackButton);
      return () => {
         dispatch(cleanup())
         BackHandler.removeEventListener('hardwareBackPress', handleBackButton);}
    }, []);

   return (
      <View style={styles.main}>
      <View style={styles.top}>
         <Image source={require("@Assets/image/Group2.png")} style={styles.groupImg} />
        <View style={styles.topCircle}>
            <Image source={require("@Assets/image/Frame2.png")} style={styles.frameImg} />
        </View>
      </View>
           <View style={styles.afterTop}>
            <Text style={styles.topText}>Order Confirmed!</Text>
            <Text style={styles.downText}>Your order has been confirmed. You’ll receive an SMS shortly</Text>
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
               
               {/* <Text style={styles.itemText}>ORDER NO: 2841782754</Text> */}
            </View>

            <View>
             <TrackBtn title="Done" style={styles.addressBtn2} onPress={goBack}/>
            </View>
      </View>
   )
};

export default CartSuccess;