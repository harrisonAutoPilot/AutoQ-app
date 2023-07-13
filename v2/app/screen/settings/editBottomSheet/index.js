import React, { useMemo } from 'react';
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import {
  useBottomSheetTimingConfigs,
  BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import Animated, {
  Easing, Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';


import { OnboardinBtn } from "@Component2";
import HeaderComponent from "../component/headerComponent"
import styles from './style';


const EditProfileBottomSheet = (props) => {

  const { user } = useSelector((state) => state.auth);

  const first_name = `${user?.name?.substr(0, user?.name.indexOf(' '))}`

  const last_name = `${user?.name?.substr(user?.name.indexOf(' ') + 1)}`

  const code = `${user?.phone?.substring(0, 3)}`

  const phone = user?.phone?.substr(user?.phone?.length - 10)


  const submit = () => {

    props.support();

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


  return (

    <BottomSheetModalProvider>

      <BottomSheetModal
        ref={props.editBottomSheetRef}
        index={1}
        initialSnapIndex={1}
        snapPoints={['95%', "95%"]}
        animationConfigs={animationConfigs}
        backdropComponent={CustomBackdrop}
        animateOnMount={true}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ display: "none" }}
      >

        <View style={styles.mainContainer}>

          <HeaderComponent 
          onPress={props.closeEditBottomSheet} 
          name=" Edit Profile"
          />

          <BottomSheetScrollView
            contentContainerStyle={styles.scrollViewContainer}
            bounces={false}>

            <View style={styles.formContainer}>

              <View style={styles.formInputFieldFlex}>

                <View style={styles.inputContainer}>
                  <View style={styles.labelStyle}><Text style={styles.labelText}>First Name</Text></View>
                  <View style={styles.formCover}><Text style={styles.fadeText}>{first_name}</Text></View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.labelStyle}><Text style={styles.labelText}>Last Name</Text></View>
                  <View style={styles.formCover}><Text style={styles.fadeText}>{last_name}</Text></View>
                </View>

                <View style={styles.inputFieldView}>
                  <View style={styles.labelStyle}><Text style={styles.labelText}>Country</Text></View>
                  <View style={styles.codeCover}><Text style={styles.fadeText}>+{code}</Text></View>

                  <View>
                    <View style={styles.labelStyle}><Text style={styles.labelText}>Phone</Text></View>
                    <View style={styles.formCoverMd}><Text style={styles.fadeText}>{phone}</Text></View>
                  </View>

                </View>
                {user?.email &&
                  <View style={styles.inputContainer}>
                    <View style={styles.labelStyle}><Text style={styles.labelText}>Email</Text></View>
                    <View style={styles.formCover}><Text style={styles.fadeText}>{user.email}</Text></View>
                  </View>
                }
              </View>

              <View style={styles.submitBtnContainer}>
                <OnboardinBtn
                  title="Contact Support"
                  onPress={submit}
                  backgroundColor="#3353CB"
                  color="#fff"

                />
              </View>

            </View>

          </BottomSheetScrollView>
        </View>

      </BottomSheetModal>
    </BottomSheetModalProvider>

  )
};

export default EditProfileBottomSheet;