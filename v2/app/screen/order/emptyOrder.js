import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyOrder = () => (

    <View style={styles.emptyNoteCover}>
        <View style={styles.imgCoverBg}>
            <Image source={require("@Assets2/image/emptyBox.png")} style={styles.emptyNoteImg} />
            <View style={styles.textCover}>
                <Text style={styles.emptyTextBg}>Nothing here</Text>
                <Text style={styles.emptyTextSm}>Seems you have not placed an order recently</Text>
            </View>
        </View>



    </View>
);
