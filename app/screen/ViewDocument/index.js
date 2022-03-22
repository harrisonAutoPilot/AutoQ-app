import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import Modal from "react-native-modal";
import styles from "./style";
import FIcon from "react-native-vector-icons/Foundation"
import Icon from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";

const ViewDocument = (props) => {
  const [showDocument, setShowDocument] = useState(false);


  return (
    <Modal
      isVisible={props.visibleDocument}
      onBackdropPress={props.returnBack}
      onSwipeComplete={() => setShowDocument(false)}
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
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowDocument(false);
          }
        }} >
        <View style={styles.body5}>

          <View style={styles.imageHolder}>
           
            <View style={styles.delCover}>
            <TouchableOpacity >
              <Icon name="md-trash-outline" color="red" size={20} style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
           
            <View style={styles.docCover}>
              <Image source={require("@Assets/image/certBg.png")} style={styles.certImg} />
            </View>

          </View>



        </View>
      </Pressable>
    </Modal>
  )
};

export default ViewDocument