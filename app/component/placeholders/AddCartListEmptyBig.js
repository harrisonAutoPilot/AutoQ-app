import React from "react";
import { View, Text, Image } from "react-native";
import { AuthBtn as Btn } from "@Component";

import styles from './style';

export default AddCartListEmptyBig = (props) => {

    return (
    <View style={styles.emptyCover}>
        <View style={styles.imgCoverBig}>
            <Image source={require("@Assets/image/addCart.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing here yet</Text>
        <Text style={styles.emptyText}>Add items to cart and start shopping</Text>

        <View style={[styles.addBtnCoverCart]} >
            <Btn title="Shop now" style={styles.addressBtn2} onPress={props.browse} />
        </View>
    </View>
    )
};
