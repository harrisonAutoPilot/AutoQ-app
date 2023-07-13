import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";


import Modal from "react-native-modal";
import styles from "./style";


const CancelModal = (props) => {

  const closeModal = () => {

    props.returnBack();

  };

  return (
    <Modal
      isVisible={props.visibleModal}
      onBackdropPress={closeModal}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      backdropColor="rgba(52, 52, 52, 0.8)"
      backdropOpacity={0.8}
      coverScreen={true}>
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowPaymentOption(false);
          }
        }} >
        <View style={styles.container}>
          <TouchableOpacity onPress={closeModal}>
            <View style={styles.xCover}>

              <Image
                source={require("@Assets2/image/icon.png")}
                style={styles.xImg}
              />

            </View>
          </TouchableOpacity>
          <View style={styles.captionCover}>
            <Text style={styles.captionText}>Cancel Order</Text>
            <Text style={styles.captionTextSm}>Are you sure you want to cancel this order, this action is irreversible?</Text>
          </View>
          <View style={styles.optionCover}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.cancelText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmCover} onPress={props.proceed}>
              <Text style={styles.confirmText}>YES, CONFIRM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default CancelModal