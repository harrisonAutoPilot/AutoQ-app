import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MIcon from "react-native-vector-icons/MaterialIcons";
import {
  useBottomSheetTimingConfigs,
  BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import Animated, {
  Easing, Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import disable from "@Helper2/disable";

import HeaderComponent from "../component/headerComponent"
import { updateUserPassword } from "@Request2/Auth";
import { cleanUserPasswordDetails } from "@Store2/Auth";
import { FormikValidator, InputField, OnboardinBtn } from "@Component2";
import { changePinSchema } from "@Helper2/Schema";
import Loader from "@Screen2/loader";
import styles from './style';


const PinBottomSheet = (props) => {

  const dispatch = useDispatch();

  const { errors, updatePassword, user } = useSelector((state) => state.auth);

  const [errMsg, setErrMsg] = useState(null);

  const [successMsg, setSuccessMsg] = useState(null);

  const [loader, setLoader] = useState(false);


  const changePinState = {
    current_password: "",
    new_password: "",
    retype_password: ""
  };


  const dismissKeyboard = () => Keyboard.dismiss();


  useEffect(() => {

    if (updatePassword === "success") {
      setLoader(false);
      setSuccessMsg("Password updated successfully");

       wait(5000).then(() => {

        dispatch(cleanUserPasswordDetails());

        setSuccessMsg(null)

      })
     

      props.redirectBack();

    } else if (updatePassword === "failed") {

      setLoader(false);

  

      setErrMsg(errors?.msg);

      wait(5000).then(() => {

      dispatch(cleanUserPasswordDetails());

        setErrMsg(null)

      })

    }
  }, [updatePassword]);




  const submit = async (values) => {

    const { new_password, retype_password, current_password } = values;

    const newValues = { new_password, current_password, retype_password, id: user.id };

    setLoader(true);

    await dispatch(updateUserPassword(newValues));

  };


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

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

 




  return (

    <BottomSheetModalProvider>

      <BottomSheetModal
        ref={props.bottomSheetRef}
        index={1}
        initialSnapIndex={1}
        snapPoints={['95%', "95%"]}
        animationConfigs={animationConfigs}
        backdropComponent={CustomBackdrop}
        animateOnMount={true}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ display: "none" }}
      >

        <HeaderComponent
          onPress={props.closeBottomSheet}
          name="Change PIN"
        />

        <BottomSheetScrollView contentContainerStyle={styles.scrollStyle}>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.formFlex}>

              <FormikValidator
                style={styles.formFlex}
                initialValues={changePinState}
                validationSchema={changePinSchema}
                onSubmit={(values) => {
                  submit(values)
                }}>
                {props => (
                  <View style={styles.formFlex}>
                    <View style={styles.formInputFieldFlex}>

                      <View style={styles.countryCodeView}>
                        <InputField
                          title="CURRENT PASSWORD"
                          placeholder="****"
                          keyboardType="number-pad"
                          placeholderTextColor="#757575"
                          name="current_password"
                          {...props}
                          width="100%"
                          secureTextEntry={true}
                        />
                      </View>

                      <View style={styles.countryCodeView}>
                        <InputField
                          title="NEW PIN"
                          placeholder="****"
                          keyboardType="number-pad"
                          placeholderTextColor="#757575"
                          name="new_password"
                          {...props}
                          width="100%"
                          secureTextEntry={true}
                        />
                      </View>

                      <View style={styles.countryCodeView}>
                        <InputField
                          title="RETYPE NEW PIN"
                          placeholder="****"
                          keyboardType="number-pad"
                          placeholderTextColor="#757575"
                          name="retype_password"
                          {...props}
                          width="100%"
                          secureTextEntry={true}
                        />
                      </View>

                    </View>

                    <OnboardinBtn
                      title="CONTINUE"
                      onPress={props.handleSubmit}
                      backgroundColor="#3353CB"
                      color="#fff"
                      disabled={disable(props)}
                      disabledBackgroundColor="rgba(31, 31, 31, 0.12)"

                    />

                  </View>
                )}
              </FormikValidator>
            </View>

          </TouchableWithoutFeedback>
        </BottomSheetScrollView>


      </BottomSheetModal>

      <Loader isVisible={loader} />

      <View style={styles.toastCover}>
        {errMsg ? <View style={styles.errView} >
        <MIcon name="error-outline" size={22} color="#fff" />
        <Text style={styles.errText}>{errMsg}</Text>
      </View> : null}

      {successMsg ? <View style={styles.successView} >
        <MIcon name="check-circle" size={22} color="#fff" />
        <Text style={styles.successText}>{successMsg}</Text>
      </View> : null}
       
      </View>

    </BottomSheetModalProvider>


  )
};

export default PinBottomSheet;