import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { TransactionHeader, OnboardinBtn} from "@Component2";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {InputField} from "@Component2";
import commafy from "@Helper2/commafy";
import styles from './style';






const StoreSuccess = (props) => {
  
// const item = props.route.params.item

const submit = () =>{
  props.navigation.navigate("MyStore")
}

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
       <View style={styles.topCover}>
       <Image 
          source={require("@Assets2/image/success.png")}
          style={styles.successImg}
          />
            <View style={styles.captionCover}>
              <Text style={styles.bgText}>Store Created!!</Text>
              <Text style={styles.smText}>Your new store is under review and will be verified within 3 days.</Text>
            </View>

           
       </View>
    
         <View style={styles.btnCover}>
         <OnboardinBtn
              title="Done"
              onPress={submit}
              backgroundColor="#3353CB"
              color="#fff"
          />
         </View>
         </View>
    </View>
  );
};

export default StoreSuccess;
