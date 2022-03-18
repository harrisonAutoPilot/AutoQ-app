import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyCustomer = (props) => (
  
    <View style={styles.emptyCoverOrder}>
        <View style={styles.imgCoverBigOrder}>
            <Image source={require("@Assets/image/group.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing Here Yet</Text>
      
        
        <View style={[styles.addBtnCoverCart, styles.orderBtn]} >
             {/* <TrackBtn title="Shop now" style={styles.addressBtn2}  onPress={props.browse}/> */}
        </View>
    </View>
    );
