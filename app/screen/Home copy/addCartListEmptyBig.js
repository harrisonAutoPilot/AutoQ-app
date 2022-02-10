import React from "react";
import { View, Text, Image } from "react-native";
import { TrackBtn } from "@Component/index";

import styles from './style';


export default AddCartListEmptyBig = (props) => {
   
  
    return (    <View style={styles.emptyCover}>
      <View style={styles.imgCoverBig}>
            <Image source={require("@Assets/image/addCart.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing here yet</Text>
        <Text style={styles.emptyText}>Add items to your cart and start shopping</Text>
        
        <View style={[styles.addBtnCoverCart, styles.orderBtn]} >
             <TrackBtn title="Shop now" style={styles.addressBtn2}  onPress={props.browse}/>
        </View>
    </View>
    )
};
