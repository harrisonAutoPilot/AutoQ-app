import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default ListEmptyComponent = () => (
    <View style={styles.emptyCover}>
        <View >
            <Image source={require("@Assets/image/EmptyCart.png")} style={styles.emptyImg} />
        </View>
        <Text style={styles.emptyTextSm}>Nothing here yet</Text>
        <Text style={styles.emptyText}>Shop items and see your orders here</Text>
    </View>
);