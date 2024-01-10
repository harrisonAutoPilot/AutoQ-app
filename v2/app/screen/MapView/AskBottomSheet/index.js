import React, { useRef } from "react";
import { SafeAreaView, TouchableOpacity, View,Text,Image } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import styles from "./style";

const AskBottomSheet = (props) => {
  // Needed in order to use .show()
  const bottomSheet = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheet} height={350} hasDraggableIcon={false} >
    <View style={styles.imgCover}>
    <Image
          style={styles.logImg}
          source={require('@Assets2/image/car.png')}
        />
    </View>
    <View style={styles.welcomeCover}>
        <Text style={styles.smText}>Holla!</Text>
        <Text style={styles.bgText}>Where are you?</Text>
    </View>
    <View style={styles.touchCover}>
        <TouchableOpacity style={styles.getLocCover} onPress={props.getAutoLoc}>
        {/* <Image source={require("../../../assets/pin.png")} style={styles.smLogImg} /> */}
            <Text style={styles.touchText}>Get my location authomatically</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.getLocCover}>
        {/* <Image source={require("../../../assets/pin.png")} style={styles.smLogImg} /> */}
        <Text style={styles.touchText}>Enter my location manually</Text>
        </TouchableOpacity>

    </View>
     </BottomSheet>
    </SafeAreaView>
  );
};



export default AskBottomSheet;