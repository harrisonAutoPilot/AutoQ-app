import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";

const StoreHeaderOne = (props) => {
  return (
    <View style={styles.storeOuterCoverOne}>
      <StatusBar barStyle="dark-content" backgroundColor='#ffffff' hidden={false} />
      <SafeAreaView style={styles.storeCoverOne}>

        <TouchableOpacity onPress={props.onPress}>
          <Image source={require("@Assets/image/left.png")} style={styles.backImg} />
        </TouchableOpacity>

        <View >
          <Text style={props.styles === undefined ? styles.btnText : props.styles}>{props.title}</Text>
        </View>

        <View style={styles.storeCoverOneImage}>
          <Image source={require("@Assets/image/trailing-icon.png")} style={styles.storeImg} />
        </View>
      </SafeAreaView>

    </View>
  )
};

export default StoreHeaderOne