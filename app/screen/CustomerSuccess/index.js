import React, { useEffect } from "react";
import { View, Text,Image, BackHandler} from "react-native";
import { useDispatch } from "react-redux";
import styles from "./style";

import { AuthBtn as Btn, Success } from "@Component";
import commafy from "@Helper/Commafy";
import { cleanup } from "@Store/CustomerOrder";


const CustomerSuccess = (props) => {
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
        <Text style={styles.topText}>Success!!!</Text>
        <Text style={styles.downText}>Customer has been registered successfully.</Text>
      </View>
    <View style={styles.detailCover}>
      <Text style={styles.detailText}>DETAILS</Text>
    </View>
      <View style={styles.midCover}>
            <View style={styles.imgCover}>
            <Image style={styles.regImg} source={require("@Assets/image/cross.png")} />
            </View>
<View style={styles.itemCover}>
    <Image style={styles.itemImg} source={require("@Assets/image/whiteStore.png")} />
    <Text style={styles.itemText}>Medpharm</Text>
</View>
<View style={styles.itemCover}>
    <Image style={styles.itemImg} source={require("@Assets/image/map-pin.png")} />
    <Text style={styles.itemText}>12 Dignity Street, Ikeja, Lagos State</Text>
</View>
<View style={styles.itemCover}>
    <Image style={styles.itemImg} source={require("@Assets/image/whitePhone.png")} />
    <Text style={styles.itemText}>+234 802 432 0000</Text>
</View>
         </View>

    
      <View style={styles.sucBtnCover}>
        <Btn title="Done" style={styles.addressBtn2} styles={styles.sucBtnText} onPress={goBack}/>
      </View>
    </Success>
  )
};

export default CustomerSuccess;