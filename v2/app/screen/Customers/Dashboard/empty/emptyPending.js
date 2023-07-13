import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyPending = (props) => (
  
    <View style={styles.emptyCover}>
        <View style={styles.imgCoverBg}>
            <Image source={require("@Assets2/image/customer.png")} style={styles.emptyImg} />
        </View>
        <Text style={styles.emptyTextBg}>Nothing here</Text>
        <Text style={styles.emptyTextSm}>Pending customers will show here</Text>
      
       
    </View>
    );
