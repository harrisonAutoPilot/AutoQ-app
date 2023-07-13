import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyActive = (props) => (
  
    <View style={styles.emptyCover}>
        <View style={styles.imgCoverBg}>
            <Image source={require("@Assets2/image/customer.png")} style={styles.emptyImg} />
        </View>
        <Text style={styles.emptyTextBg}>Nothing here</Text>
        <Text style={styles.emptyTextSm}>Active customers will show here</Text>
      
       
    </View>
    );
