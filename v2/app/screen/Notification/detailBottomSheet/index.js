import React, {useState,useEffect,useMemo, useRef, useCallback } from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from "react-redux";
import { InputField, FormikValidator, OnboardinBtn} from "@Component2";
import HeaderComponent from "./headerComponent"
import MiddleComponent from "./middleComponent"
import globalStylesV2 from "@Helper2/globalStyles";
import { addTeamSchema } from "@Helper2/Schema";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import CountryCodeDropdown from '@Screen2/login/phoneNumber/CountryCodeDropdown';
import { countryCodeList } from "@Request2/Auth";
import { cleanCountryCodeStatus } from "@Store2/Auth";

// import { cleanup } from "@Store2/team";
import Loader from "@Screen2/loader";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

import styles from './style';


const DetailBottomSheet = (props) => {


    const dispatch = useDispatch();

    const { countryCodeStatus, countryCodeData} = useSelector((state) => state.auth);
  
    // const { create, errors } = useSelector((state) => state.team);
  
  
    const [countryCode, setCountryCode] = useState(null);
   
    const [err, setErr] = useState(null);
  
    const [errMsg, setErrMsg] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const [add] = useState("+");
  
    const [getProps, setProps] = useState(null);
  
    const [propsname, setPropsName] = useState(null);
  
    const addTeamState = {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      code: countryCode
    };
  
    const bottomSheetCode = useRef(null);
  
  useEffect(() => {
    if(countryCodeStatus === "failed"){
  
        setErr(errors.msg);
  
    }else {
  
        setErr(null);
  
    }
  
  },[countryCodeStatus])
  
  
  const showDropDownBottomSheet = async (prop, name) => {
  
    setProps(prop);
  
    setPropsName(name);
  
    bottomSheetCode.current?.present();
  
    if (countryCodeStatus !== "success") {
  
         dispatch(countryCodeList());
  
    }
  
  };
  const submit = async (data) => {
    // console.log("the form inputs", newData);
    const newData = { phone: `${data.code}${data.phone}`, email:data.email,name: `${data.first_name} ${data.last_name}` }
 
    setLoader(true);
  
    await dispatch(addTeam(newData));
  
  };
  
  
  
  const closeDropDownBottomSheet = () => {
  
    if(countryCodeStatus === "failed"){
  
        dispatch(cleanCountryCodeStatus());
  
    };
  
    bottomSheetCode.current?.close();
  }
  
  const dismissKeyboard = () => Keyboard.dismiss();
  
  
  // useEffect(() => {
  //   if (create === "success") {
  //       // dispatch(cleanup())
  //       props.closeBottomSheet()
  //       props.redirect
  //   } else if(create === "failed" ) {
  //       refreshView(errors?.msg)
  //   }
  // }, [create]);
  
  const toastConfig = {
    error: () => (
        <View style={[globalStylesV2.errMainViewBottom, { marginHorizontal: 20 }]}>
            <Text style={globalStylesV2.failedResponseText}>{errMsg}</Text>
        </View>
    )
  };
  
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  
 
  const refreshView = useCallback((msg, suc) => {
    wait(1000).then(() => {
      setLoader(false)
      if (msg) {
        setErrMsg(msg);
        Toast.show({
          type: 'error',
          visibilityTime: 5000,
          autoHide: true,
          position: 'top',
          topOffset: 0
        })
  
      } else {
        setSuccessMsg(suc);
        Toast.show({
          type: 'tomatoToast',
          visibilityTime: 5000,
          autoHide: true,
          position: 'top',
          topOffset: 0
        })
      }
    })
  
    wait(4000).then(() => { 
        dispatch(cleanup())
    })
  }, []);

  


    const CustomBackdrop = ({ animatedIndex, style }) => {
        // animated variables
        const containerAnimatedStyle = useAnimatedStyle(() => ({
            opacity: interpolate(
                animatedIndex.value,
                [0, 1],
                [0, 1],
                Extrapolate.CLAMP
            ),
        }));

        const containerStyle = useMemo(
            () => [
                style,
                {
                    backgroundColor: "rgba(0,0,0,0.6)"
                },
                containerAnimatedStyle,
            ],
            [style, containerAnimatedStyle]
        );

        return <Animated.View style={containerStyle} />;
    };



    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 350,
        easing: Easing.exp,
    });


    return (
 
 <BottomSheetModalProvider>

    <BottomSheetModal
        ref={props.bottomSheetRef}
        index={1}
        initialSnapIndex={1}
        snapPoints={['98%', "98%"]}
        animationConfigs={animationConfigs}
        backdropComponent={CustomBackdrop}
        animateOnMount={true}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ display: "none" }}
        >

    <LinearGradient
        colors={['#ffffff','#e6e8ff']}
        start={{ x: 0, y: 0}}
        end={{ x: 0, y: 1}}
         style={styles.mainContainer}
            >
          <BottomSheetScrollView contentContainerStyle={styles.scrollStyle2}>
        
         <KeyboardAwareScrollView >
          <>
          <HeaderComponent onPress={props.closeBottomSheet} />

          <MiddleComponent status="Invite members to enable access and seamless teamwork." />
       
         
          <View style={styles.contentContainer}>
          
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.formFlex}>
     
            <FormikValidator
                style={styles.formFlex}
              
                initialValues={addTeamState}
                validationSchema={addTeamSchema}
                onSubmit={(values) => {
                    submit(values)
                }}>

                {props => (
      
 
              <View style={styles.formContainer}>

                 <View style={styles.formInputFieldFlex}>

                     <View style={styles.inputContainer}>
                         <InputField
                             title="First Name"
                             labelType = "team"
                             placeholder="John"
                             placeholderTextColor="#757575"
                             name="first_name"
                             {...props}
                             width="100%"
                         />
                     </View>

                     <View style={styles.inputContainer}>
                         <InputField
                             title="Last Name"
                             labelType = "team"
                             placeholder="Sulaimon"
                             placeholderTextColor="#757575"
                             name="last_name"
                             {...props}
                             width="100%"
                         />
                     </View>
                     <View style={styles.inputFieldView}>
                       <View style={styles.codeCover}>
                       <CountryCodeDropdown
                                  dropDown={() =>showDropDownBottomSheet(props, "code")}
                                  width={"100%"}
                                  labelType="team"
                                  {...props}
                                  placeholder="+000"
                                  name="code"
                                  title="Code"
                                  add={add}
                                  

                              />
                       </View>

                        <InputField
                            title="Phone"
                            placeholder="8094XXXXXX"
                            placeholderTextColor="#757575"
                            keyboardType="number-pad"
                            labelType="team"
                            name="phone"
                            {...props}
                            width="65%"

                        />

                        </View>

                     <View style={styles.inputContainer}>
                         <InputField
                             title="Email"
                             labelType = "team"
                             placeholder="johnsulaimon@gmail.com"
                             placeholderTextColor="#757575"
                             name="email"
                             {...props}
                             width="100%"
                         />
                     </View>


                 </View>

              <View style={styles.submitBtnContainer}>
                  <OnboardinBtn
                      title="Send Invitation"
                      onPress={props.handleSubmit}
                      backgroundColor="#3353CB"
                      color="#fff"
                      disabled={!Object.keys(props.touched).length ?
                          Object.keys(props.errors).length :
                          Object.keys(props.touched).length && Object.keys(props.errors).length}
                      disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                  />
              </View>
             </View>
      
           

 
         )}

            </FormikValidator>
   
          </View>

          </TouchableWithoutFeedback>
          </View>
          </>
          </KeyboardAwareScrollView>
      

          </BottomSheetScrollView>


      </LinearGradient>
      <CountryCodeBottomSheet
            bottomSheetRef={bottomSheetCode}
            closeBottomSheet={closeDropDownBottomSheet}
            data={countryCodeData}
            name="Select Country Code"
            status={countryCodeStatus}
            keys={1}
            itemKey="dial_code"
            err={err}
            getProps={getProps}
            propsname={propsname}

        />
   
      <View style={styles.toastCover}>
        {errMsg ? <Toast config={toastConfig} /> : null}
        </View>
                    <BottomSheetScrollView bounces={false}>
                     
                    </BottomSheetScrollView>

                </BottomSheetModal>
            <Loader isVisible={loader} />
     </BottomSheetModalProvider>
    

    )
};

export default DetailBottomSheet;