import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyNotification = () => (
  
    <View style={styles.emptyNoteCover}>
        <View style={styles.imgCoverBg}>
            <Image source={require("@Assets2/image/bell.png")} style={styles.emptyNoteImg} />
        </View>

        <View style={styles.textCover}>
            <Text style={styles.emptyTextBg}>No Notification</Text>
            <Text style={styles.emptyTextSm}>Check back to see any new announcement, news & order status</Text>
        </View>

    </View>
    );
