import React from "react";
import { View, Text, Image } from "react-native";
// import { TrackBtn } from "@Component/index";

import styles from './style';


export default EmptyDeal = (props) => (
  
    <View style={styles.emptyCoverOrder}>
        <View style={styles.imgCoverBigDeal}>
            <Image source={require("@Assets/image/DealTag.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing Here Yet</Text>
        <Text style={styles.emptyTextSmDeal}> There are no deals here yet</Text>
      
        
        <View style={[styles.addBtnCoverCart, styles.orderBtn]} >
       
            
        </View>
    </View>
    );
