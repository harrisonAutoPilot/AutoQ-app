import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default ListEmptyComponent = () => (
    <View style={styles.emptyCover}>
            <Image source={require("@Assets2/image/Group.png")} style={styles.emptyImg} />
        <Text style={styles.emptyText}>No Items</Text>
        <Text style={styles.emptyTextDesc}>Items will show here</Text>
    </View>
);