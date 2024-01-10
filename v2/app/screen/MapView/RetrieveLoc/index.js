import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import styles from "./style";


const RetrieveLoc = (props) => {
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

            {/* <Image source={require("../../assets/law1.jpg")} style={styles.padImg} /> */}
            <Text style={styles.titleText}>{props.title}</Text>

          </View>
          <View style={styles.reasonCover}>
          <View style={styles.reasonCover}>
            <Text style={styles.reasonText1}>You are around</Text>
            <Text style={styles.reasonText}> {props.address}</Text>

          </View>
          </View>
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btnCover1} onPress={props.disAgree}>
        <Text>NO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCover1} onPress={props.agree}>
        <Text>YES</Text>
      </TouchableOpacity>
    </View>

        </View>
      </Pressable>
    </Modal>
  )
};

export default RetrieveLoc