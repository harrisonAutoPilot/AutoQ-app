import React from "react";
import { View, Text,Image } from "react-native";


import styles from "./style";


const ForeGround = (props) => {


    return (
        <View style={styles.container}>

            <View style={styles.imgCover}>
            <Image source={require("@Assets/image/rh_logo.png")} style={styles.logoImg} />
            </View>

            <View style={styles.content}>

            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.bodyText} numberOfLines={3}>{props.body}</Text>
            
            </View>

        </View>
    )
};

export default ForeGround;