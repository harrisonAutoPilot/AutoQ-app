import React, { useState,useRef, useEffect, useCallback } from "react";
import { SafeAreaView, TouchableOpacity,FlatList, View,Text,Image } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";

import Icon from 'react-native-vector-icons/AntDesign';
import styles from "./style";

const ConfirmDeleteBottomSheet = (props) => {
  const [option, setOption] = useState("")
  const bottomSheetDelete = useRef();


  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheetDelete} height={220} radius={1} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >
     <View style={styles.trashCover}>
     <Image source={require("@Assets/image/bin.png")} style={styles.trashImg} />
     </View>
   <View style={styles.bgTitleCover}>
      <Text style={styles.bgTitleText}>Confirm order delete</Text>
    </View>
   
   

  

  
 
<View style={styles.btnContainer}>
<TouchableOpacity style={styles.getLocCoverActive} onPress={props.proceed}>
    <Text style={styles.touchTextActive}>Confirm</Text>
    </TouchableOpacity>
   
    <TouchableOpacity style={styles.getLocCoverActive1} onPress={props.nope}>
    <Text style={styles.touchTextActive1}>Cancel</Text>
    </TouchableOpacity> 
</View>


     </BottomSheet>
    </SafeAreaView>
  );
};



export default ConfirmDeleteBottomSheet;