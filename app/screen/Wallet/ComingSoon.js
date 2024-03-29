import React from "react";
import { View, Text,Image } from "react-native";

import styles from "./style";

const ComingSoon = () => {

    return (
        <View style={styles.inputMainHolder2}>
            <View style={styles.comingSoonCover}>
           <Text style={styles.comingSoonText}>Wallet Coming Soon...</Text>
           <View style={styles.comingSoonCover2}>
           <Image source={require("@Assets/image/rafiki.png")} style={styles.comingSoonImg} />
           </View>
         
           </View>
        </View>

    )
};

export default ComingSoon;