import React, { useEffect } from "react";
import { View, Text, Image,  BackHandler, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style";

import { AuthBtn as Btn } from "@Component/index";
import commafy from "@Helper/commafy";
import { cleanup } from "@Store/order";

const WalletSuccess = (props) => {
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
         <StatusBar  barStyle="light-content"/>
      <View style={styles.top}>
         <Image source={require("@Assets/image/Group2.png")} style={styles.groupImg} />
        <View style={styles.topCircle}>
            <Image source={require("@Assets/image/tick.png")} style={styles.frameImg} />
        </View>
      </View>
           <View style={styles.afterTop}>
            <Text style={styles.topText}>Success</Text>
            <Text style={styles.downText}>Your funds withdrawal was successful</Text>
           </View>

         <View style={styles.midContainer}>
         <View style={styles.midCover}>
             <View style={styles.midItem}>
               <Text style={styles.itemText}>Amount:</Text>
              <Text style={styles.itemTextBg}>₦55,112</Text>
            </View>
            <View style={styles.midItem}>
               <Text style={styles.itemTextMd}>Beneficiary:</Text>
           <View style={styles.benCover}>
           <Text style={styles.itemTextMd2}>0010204456 - Wema Bank </Text>                         
         <Text style={styles.itemTextMd2}>Isaac Jamal</Text> 
           </View>
            </View>

            

           </View>
         </View>

           <View style={styles.orderItem}>
               
               {/* <Text style={styles.itemText}>ORDER NO: 2841782754</Text> */}
            </View>

            <View style={styles.sucBtnCover}>
             <TrackBtn title="Done" style={styles.addressBtn2} styles={styles.sucBtnText} />
            </View>
      </View>
   )
};

export default WalletSuccess;