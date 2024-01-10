import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import LoginBottomSheet from './LoginSheet';
import styles from './style';


const Onboarding = props => {
  const bottomSheet = useRef();

const redirect = (id) =>{
  console.log('check id', id)
  if(id == '1'){
    bottomSheet.current.close();
    props.navigation.navigate('FormDetails');
  }else if (id == '2'){
    bottomSheet.current.close();
    props.navigation.navigate('FormDetailsWorker');
  }else{
    bottomSheet.current.close();
    props.navigation.navigate('FormDetailsDealer');
   
  }
}


  const callLogin = () => {
    bottomSheet.current.show();
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const login = () =>{
    bottomSheet.current.close();
    props.navigation.navigate('Login');
  }

  const goNext = () => {
    bottomSheet.current.close();
    wait(1000).then(() => {
      props.navigation.navigate('Root');
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
        <View style={{ flexDirection:'row',paddingHorizontal:30, paddingTop:40}}>
       
          <Text style={{fontSize: 34, color: '#757575',fontFamily: 'AnekLatin-SemiBold'}}>Auto</Text>
           <LottieView
            source={require('@Assets2/image/steer.json')} autoPlay loop
            style={{ width:30, height:30,resizeMode:'contain', marginTop:5}}
             />
             <Text style={{fontSize: 44,color: '#00b300',fontFamily: 'AnekLatin-SemiBold', marginTop:-5}}>Q</Text>
        </View>

        

        <Image source={require('@Assets2/image/carr.png')} style={styles.carImg} />
     
     <LottieView
          source={require('@Assets2/image/Trade_slide.json')} autoPlay loop
          style={{width:200,height:120,alignSelf:'center', marginTop:-50, zIndex:1}}
          />


       
   
      <TouchableOpacity style={styles.startedButton} onPress={callLogin}>
        <Text style={styles.startedText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.downCover}>
        <View style={styles.downTitle}>
          <View style={styles.mdLine} />
          <Text style={styles.followText}>Follow Us On</Text>
          <View style={styles.mdLine} />
        </View>

        <View style={styles.socialContainer}>
          <View style={styles.socialCover}>
            <Image
              source={require('@Assets2/image/facebook.png')}
              style={styles.logoImg}
            />
          </View>
          <View style={styles.socialCover}>
            <Image
              source={require('@Assets2/image/google.png')}
              style={styles.logoImg}
            />
          </View>
          <View style={styles.socialCover}>
            <Image
              source={require('@Assets2/image/twitter.png')}
              style={styles.logoImg}
            />
          </View>
        </View>
      </View>
      <View style={styles.arrowCover1}>
        <View>
          <Text style={styles.swipeText1}>Powered by</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.swipeText2}>Toronet</Text>
        </TouchableOpacity>
      </View>
      <LoginBottomSheet
        bottomSheet={bottomSheet}
        id={redirect}
        login={login}
        next={goNext}
        closeSheet={() => bottomSheet.current.show()}
      />
    </View>
  );
};

export default Onboarding;
