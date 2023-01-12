import React from "react";
import { View, Text, Image } from "react-native";
// import { TrackBtn } from "@Component/index";

import styles from './style';


export default EmptyCategory = (props) => (
  
    <View style={styles.emptyCoverOrder}>
        <View style={styles.imgCoverBigOrder}>
            <Image source={require("@Assets/image/EmptyCart.png")} style={styles.emptyCartImg1} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing Here Yet</Text>
      
        
        <View style={[styles.addBtnCoverCart, styles.orderBtn]} >
             {/* <TrackBtn title="Shop now" style={styles.addressBtn2}  onPress={props.browse}/> */}
        </View>
    </View>
    );
