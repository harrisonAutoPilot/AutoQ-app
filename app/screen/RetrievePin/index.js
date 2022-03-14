import React, { useState } from "react";
import { View, Text, Image, Pressable} from "react-native";
import Modal from "react-native-modal";
import styles from "./style";


const RetrievePin = (props) => {
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
      backdropColor="#3858CF"
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

            <Image source={require("@Assets/image/padlock.png")} style={styles.padImg} />
            <Text style={styles.titleText}>Retrieve your PIN</Text>

          </View>
          <View style={styles.reasonCover}>
            <Text style={styles.reasonText}>To retrieve your PIN, contact the Remedial Admin</Text>
          </View>
    

        </View>
      </Pressable>
    </Modal>
  )
};

export default RetrievePin