import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import styles from "./style";


const ConfirmDelete = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const cancelReset =(event) =>{
    if (event.target == event.currentTarget) {
      setShowConfirm(false);
    }
  }

 
  return (
    <Modal
      isVisible={props.visibleConfirm}
      onBackdropPress={props.returnBack}
      onSwipeComplete={() => setShowConfirm(false)}
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
            <Text style={styles.titleText}>Delete Account</Text>

          </View>
          <View style={styles.reasonCover}>
            <Text style={styles.reasonText}>Are you sure you want to delete your account ?</Text>
          </View>
    
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={props.returnBack}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.deleteAccount}>
              <Text style={styles.confirmText}>Yes Continue</Text>
              </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
};

export default ConfirmDelete