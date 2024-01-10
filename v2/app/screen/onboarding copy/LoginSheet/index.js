import React, { useState, useEffect,useRef, useCallback } from "react";
import {
    View, Text, Image, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, ImageBackground,
    StatusBar, ScrollView,FlatList, SafeAreaView,
} from "react-native";
// import Icon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/AntDesign';
// import globalStyles from "@Helper/globalStyles"
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { login,getPhoneVerificationPin, resendOtp } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import { loginSchema } from "@Helper/Schema";
import BottomSheet from "react-native-gesture-bottom-sheet";
import {FormikValidator, InputField,ErrorMsg, BtnLg } from "@Component/index";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
  } from 'react-native-reanimated';
  import Icon from 'react-native-vector-icons/MaterialIcons';
import data from './data';

import styles from "./style";

const LoginBottomSheet = (props) => {
  const dispatch = useDispatch();
  const { status, errors,resend, pin} = useSelector((state) => state.auth);
  const bottomSheet = useRef();

  const [userType, setUserType] = useState('');
  const [errMsg, setErrMsg] = useState("");
  const [mpPhone, setMpPhone] = useState("");
  const [pinVisibility, setPinVisibility] = useState(true);
  const [loader, setLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(true);

  const [active, setActive] = useState('');
  const type = '';
  const credit = '';

  const offset = useSharedValue(0);

  const [selected, setSelected] = useState("");

  const loginState = {
    phone: "",
    password: ""
};

useEffect(() => {
    return () => dispatch(cleanup())
}, []);

useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setKeyboardVisible(true); // or some other action
        }
    );
    
    const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setKeyboardVisible(false); // or some other action
        }
    );

    return () => {
       // dispatch(cleanup())
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
    }
}, []);

useEffect(() => {
    if (type) {
      setUserType(type);
    }
  }, [type]);

  useEffect(() => {
    if (credit?.name) {
      setPayment(credit.name);
    }
  }, [credit]);

  const selectUserType = (id, name) => {
      props.id(id)
    setActive(id);
    setUserType(name);
    bounce();
  };

  changeOption = () => {
    setShowPaymentOption(true);
  };

  const bounce = () => {
    offset.value = withSpring(0.1, {}, finished => {
      if (finished) {
        offset.value = withSpring(0);
      }
    });
  };


  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value * 255),
        },
      ],
    };
  });

useEffect(() => {
    if (status === "failed" && props.navigation.isFocused()) {
        waitTime(errors?.msg)
        if (errors?.msg === "Account not verified")
        {
          
           dispatch(resendOtp({phone:mpPhone}))
            props.navigation.navigate('Otp', {phone:mpPhone});
           
        }
    }
}, [errors]);



const waitTime = useCallback((err, suc) => {
    wait(1000).then(() => {
        setLoader(false);

        if (suc) {
            setSuccessMsg(suc);
            Toast.show({
                type: 'tomatoToast',
                visibilityTime: 5000,
                autoHide: true,
                position: 'top',
                topOffset: 0
            });
            dispatch(getUser())
            
        } else {
            setErrMsg(err);
            Toast.show({
                type: 'error',
                visibilityTime: 5000,
                autoHide: true,
                position: 'top',
                topOffset: 0
            })
        }

    });

    wait(4000).then(() => { dispatch(cleanup()) })
}, []);

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};




const toastConfig = {
    error: () => (
        <View style={[styles.errMainView, styles.inputOuterView2]}>
          <View style={styles.imgCoverE}>
          {/* <Image style={styles.smLogo} source={require("@Assets/image/gross-dark-cross.png")} /> */}
        </View>
            <Text style={styles.failedResponseText}>{errMsg}</Text>
        </View>
    ),
    tomatoToast: () => (
        <View style={[styles.errMainView, styles.inputOuterView2]}>
        <View style={styles.imgCover}>
          {/* <Image style={styles.smLogo} source={require("@Assets/image/check-mark.png")} /> */}
        </View>
            <Text style={styles.failedResponseText}>{successMsg}</Text>
        </View>

    )
};


const submit = async (data) => {
    setErrMsg("");
    setLoader(true)
    setMpPhone(data.phone)
    if(data.phone === "08062585929" && data.pin === "1234"){
        props.closeSheet()
       props.next()
        
    }else{
      waitTime("Wrong/Incorrect Login Credential")
    }
    // await dispatch(login(data));
};

const RenderItem = ({item}) => {
    return (
      <Animated.View style={item.id == selected && animatedStyles}>
        <TouchableOpacity
          style={[
            styles.renderItemContainer,
            active !== item.id && styles.activeRenderItemContainer,
          ]}
          onPress={() => {
            selectUserType(item.id, item.title.toLowerCase());
          }}>
          <View style={styles.categoryTitleView}>
            <Text style={styles.categoryTitle}>{item.title}</Text>

            <Text style={styles.categoryDesc}>{item.desc}</Text>
          </View>

          <View>
          <Icon name="radio-button-off" size={22} color="#00b300" />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };
const dismissKeyboard = () => Keyboard.dismiss();


  return (
    <SafeAreaView style={styles.container}>
      
      <BottomSheet  ref={props.bottomSheet} height={500} radius={1} sheetBackgroundColor="#fff"  hasDraggableIcon={true} >
     
           <View style={styles.btnCover}>

           <FlatList
                data={data}
                renderItem={RenderItem}
                keyExtractor={item => item.id}
            />
             <TouchableOpacity style={styles.startedButton} onPress={props.login}>
                    <Text style={styles.startedText}>LOG IN</Text>
                </TouchableOpacity>
           </View>

     </BottomSheet>
    </SafeAreaView>
  );
};



export default LoginBottomSheet;