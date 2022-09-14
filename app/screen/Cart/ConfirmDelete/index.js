import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import styles from "./style";


const ConfirmDelete = (props) => {
  const [showRetrieve, setShowRetrieve] = useState(false);

  const cancelReset =(event) =>{
    if (event.target == event.currentTarget) {
      setShowRetrieve(false);
    }
  }

 
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
      backdropColor="#000"
      backdropOpacity={0.8}
      coverScreen={true}>
        <View style={styles.body5}>

          <View style={styles.imageHolder}>

            <Image source={require("@Assets/image/bin.png")} style={styles.padImg} />
            
          </View>
          <View style={styles.reasonCover}>
            <Text style={styles.reasonText}>Are you sure you want to delete the whole list</Text>
          </View>
    
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={props.returnBack}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.Confirm}>
              <Text style={styles.confirmText}>Yes Continue</Text>
              </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
};

export default ConfirmDelete