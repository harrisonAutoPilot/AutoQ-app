import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default AddListEmptyComponentMd = () => (
    <View style={styles.emptyCover}>
        <View style={styles.imgCoverMd}>
            <Image source={require("@Assets/image/EmptyCart.png")} style={styles.emptyImgMd} />
        </View>
        <Text style={styles.emptyTextBig}>Nothing here yet</Text>
        <Text style={styles.emptyText}>Add Favourite items here for easy shopping</Text>
    </View>
    );
