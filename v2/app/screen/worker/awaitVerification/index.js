import React, {useRef} from 'react';
import {View, BackHandler, Text} from 'react-native';
import { OnboardinBtn} from "@Component2";
import { useSelector, useDispatch } from "react-redux";
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import { logout, getUserDetails} from "@Store2/Auth";

import styles from './style';




 


const AwaitVerification = (props) => {
  const dispatch = useDispatch();
const animationRef = useRef<Lottie>(null)

const submit = () =>{
  BackHandler.exitApp();
  // props.navigation.navigate("Onboarding")
}

const logUserOut = () => {

dispatch(logout())
  
}


  return (
    <View style={styles.container}>
      <View style={styles.flex}>
       <View style={styles.topCover}>
   
         
           <LottieView
            source={require('../../../asset/image/96957-lock.json')} autoPlay loop
            style={styles.successImg}
             />

            <View style={styles.captionCover}>
              <Text style={styles.bgText}>Account not verified! </Text>
              <Text style={styles.smText}>Please contact support!</Text>
              <Text style={styles.smText}>Kindly note that it takes about 24 hours for account activation </Text>
            </View>

           
       </View>
    
         <View style={styles.btnCover}>
         <OnboardinBtn
              title="CLOSE"
              onPress={submit}
              backgroundColor="#3353CB"
              color="#fff"
          />
         </View>
         </View>
    </View>
  );
};

export default AwaitVerification;
