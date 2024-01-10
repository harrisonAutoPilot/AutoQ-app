import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./style";

const CompletdDetail = (props) => {
  const [showRetrieve, setShowRetrieve] = useState(false);
  const [requestBrief, setRequestBrief] = useState("");
  const [showBtn, setShowBtn] = useState(false)



  return (
    <Modal
      isVisible={props.visibleRetrieve}
      onBackdropPress={props.returnBack}
      onSwipeComplete={() => setShowRetrieve(false)}
      swipeDirection="down"
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

          <Image source={{uri: props.message.img}} style={styles.padImg} />
            <Text style={styles.titleText}>{props.title}</Text>

          </View>
         <View style={styles.topCover}>
            <View style={styles.capCover}>
            <Text style={styles.nameText}>Name:</Text>
            <Text style={styles.priceText}>Profession:</Text>
            <Text style={styles.priceText}>Service Fee:</Text>
           
            <Text style={styles.priceText}>Start Date:</Text>
            <Text style={styles.priceText}>Completion Date:</Text>
            </View>
            <View style={styles.bioCover}>
              <Text style={styles.nameText1}>{props.message.name} </Text>
              <Text style={styles.priceText1}>{props.message.profession}</Text>
              <Text style={styles.priceText1}>₦ {props.message.service_fee}</Text>
              <Text style={styles.priceText1}>{props.message.start_date}</Text>
              <Text style={styles.priceText1}>{props.message.end_date}</Text>
             
            
            </View>
         </View>
         

       
       
         <View style={styles.smBtnCover}>
         <TouchableOpacity style={styles.btnCover1} onPress={props.submit}>
          <Text style={styles.btnText1}>REQUEST AGAIN</Text>
        </TouchableOpacity>
       
         </View>
        <TouchableOpacity style={styles.btnCover} onPress={props.submit}>
          <Text style={styles.btnText1}>CLOSE</Text>
        </TouchableOpacity>

   
        </View>
      </Pressable>
    </Modal>
  )
};

export default CompletdDetail