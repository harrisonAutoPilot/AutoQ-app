import React from "react";
import { View, Text, Image } from "react-native";
import { TrackBtn } from "@Component/index";

import styles from './style';
const home = () => props.navigation.navigate("Search");

export default AddListEmpty = (props) => (
  
    <View style={styles.emptyCover}>
        <View style={styles.imgCoverBig}>
            <Image source={require("@Assets/image/EmptyCart.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing here yet</Text>
        <Text style={styles.emptyText}>Add items to your cart and start shopping</Text>
        
       
    </View>
    );
