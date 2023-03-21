import React, { useState } from "react";
import { View, Text, Image,TouchableOpacity, Pressable} from "react-native";
import Modal from "react-native-modal";
import styles from "./style";


const FileSizeBottomSheet = (props) => {
  const [showRetrieve, setShowRetrieve] = useState(false);


  return (
    <Modal
      isVisible={props.visibleRetrieve}
      onBackdropPress={props.returnBack}
      onSwipeComplete={() => setShowRetrieve(false)}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      // backdropColor="#5f9a32"
      backdropOpacity={0.8}
      coverScreen={true}>
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowRetrieve(false);
          }
        }} >
        <View style={styles.body5}>

          <View style={styles.imageHolder}>

            <View style={styles.padCover}>
            <Image source={require("@Assets/image/bin.png")} style={styles.padImg} />
            </View>
          
            <Text style={styles.titleText}>{props.title}</Text>

          </View>
          <View style={styles.reasonCover}>
            <Text style={styles.reasonText}>{props.message}</Text>
          </View>
        <View>
        
        </View>
        <View style={styles.btnContainer}>
<TouchableOpacity style={styles.getLocCoverActive} onPress={props.proceed}>
    <Text style={styles.touchTextActive}>Confirm</Text>
    </TouchableOpacity>
   
    <TouchableOpacity style={styles.getLocCoverActive1} onPress={props.nope}>
    <Text style={styles.touchTextActive1}>Cancel</Text>
    </TouchableOpacity> 
</View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default FileSizeBottomSheet