import React from "react";
import { View, Text, Image } from "react-native";

import styles from './walletStyle';

export default EmptyTransaction = () => (
  
    <View style={styles.emptyCoverOrder1}>
        <View style={styles.imgCoverBigOrder}>
            <Image source={require("@Assets/image/finance.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing Here Yet</Text> 
        <View style={[styles.addBtnCoverCart, styles.orderBtn]} />

    </View>
    );
