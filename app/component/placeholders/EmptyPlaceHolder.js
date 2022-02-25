import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyPlaceHolder = () => (
  
    <View style={styles.emptyCoverOrder}>
        <View style={styles.imgCoverBigOrder}>
            <Image source={require("@Assets/image/EmptyCart.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing here yet</Text>

    </View>
);
