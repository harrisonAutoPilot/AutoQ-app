import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Pressable } from "react-native";

import Modal from "react-native-modal";
import styles from "./style";


const LogoutModal = (props) => {

  const closeModal = () => {
    props.returnBack();

  }



  return (
    <Modal
      isVisible={props.logoutModal}
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
     <View style={styles.logoutCover}>
        <Image 
          source={require("@Assets2/image/logout.png")}
          style={styles.logoutImg}
          />
     </View>
          <View style={styles.captionCover}>
            <Text style={styles.captionText}>Log out your Account</Text>
            <Text style={styles.captionTextSm}>Are you sure you want to sign out of your Remedial Helath Account?</Text>
          </View>  
          <View style={styles.optionCover}>
            <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                <Text style={styles.cancelText}>Cancel</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.confirmCover} onPress={props.proceed}>
               <Text style={styles.confirmText}>Log Out</Text>
           </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default LogoutModal