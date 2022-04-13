import React, { useEffect } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import { useDispatch } from "react-redux";
import styles from "./style";

import { AuthBtn as Btn, Success } from "@Component";
import { cleanup } from "@Store/Customer";
import { getCustomerOrders } from "@Request/CustomerOrder";
// import { listCart} from "@Request/Cart";


const CustomerSuccess = (props) => {
  const dispatch = useDispatch();
  const details = props.route.params?.details

  const goBack = () => {
    dispatch(getCustomerOrders());
    dispatch(cleanup());
    // dispatch(listCart());
    props.navigation.navigate("CustomersDashboard")
  };

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
      dispatch(getCustomerOrders());
      // dispatch(listCart());
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }
  }, []);

  return (
    <Success style={{ marginTop: -50 }}>
      <View style={styles.afterTop}>
        <Text style={styles.topText}>Success!!!</Text>
        <Text style={styles.downText}>Customer has been registered successfully.</Text>
      </View>
      <View style={styles.detailCover}>
        <Text style={styles.detailText}>DETAILS</Text>
      </View>
      <View style={styles.midCover}>
        <View style={styles.itemCover}>
          <Image style={styles.itemImg} source={require("@Assets/image/whiteStore.png")} />
          <Text style={styles.itemText}>{details.store_name}</Text>
        </View>
        <View style={styles.itemCover}>
          <Image style={styles.itemImg} source={require("@Assets/image/map-pin.png")} />
          <Text style={styles.itemText}>{details.address}</Text>
        </View>
        <View style={styles.itemCover}>
          <Image style={styles.itemImg} source={require("@Assets/image/whitePhone.png")} />
          <Text style={styles.itemText}>+{details.phone}</Text>
        </View>
      </View>


      <View style={styles.sucBtnCover}>
        <Btn title="Done" style={styles.addressBtn2} styles={styles.sucBtnText} onPress={goBack} />
      </View>
    </Success>
  )
};

export default CustomerSuccess;