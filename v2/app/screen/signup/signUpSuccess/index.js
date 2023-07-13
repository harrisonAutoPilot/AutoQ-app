import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { TransactionHeader, OnboardinBtn} from "@Component2";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {InputField} from "@Component2";
import commafy from "@Helper2/commafy";
import styles from './style';






const SignUpSuccess = (props) => {
  
// const item = props.route.params.item

const submit = () =>{
  props.navigation.navigate("PhoneVerification")
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
              <Text style={styles.bgText}>Success!!</Text>
              <Text style={styles.smText}>Your account has been created successfully.!</Text>
            </View>

           
       </View>
    
         <View style={styles.btnCover}>
         <OnboardinBtn
              title="PROCEED TO VERIFY ACCOUNT"
              onPress={submit}
              backgroundColor="#3353CB"
              color="#fff"
          />
         </View>
         </View>
    </View>
  );
};

export default SignUpSuccess;
