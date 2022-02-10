import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default AddListEmptyComponentB = (props) => (
    <View style={styles.emptyCoverB}>
        <View style={styles.imgCover}>
            <Image source={require("@Assets/image/addCart.png")} style={styles.emptyCartImg} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing here yet</Text>
        <Text style={styles.emptyText}>Add items to you cart and start shopping</Text>
    </View>
    );
