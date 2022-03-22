import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyCustomer = (props) => (
  
    <View style={styles.emptyCoverOrder}>
        <View style={styles.imgCoverBigOrder}>
            <Image source={require("@Assets/image/empty-folder.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>No Customer</Text>
      
        <View style={[styles.addBtnCoverCart, styles.orderBtn]} >
             {/* <TrackBtn title="Shop now" style={styles.addressBtn2}  onPress={props.browse}/> */}
        </View>
    </View>
    );
