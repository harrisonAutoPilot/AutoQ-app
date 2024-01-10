import React, { useState, useEffect } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { View, Text, FlatList, TouchableOpacity, Pressable } from "react-native";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import LottieView from 'lottie-react-native';
import styles from "./style";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LoginHeader, OnboardinBtn } from "@Component2";
import { getUserDetails, cleanUserDetails } from "@Store2/Auth";
import data from "../data";

const Specialization = (props) => {
  const [showRetrieve, setShowRetrieve] = useState(false);

  const offset = useSharedValue(0);


  const dispatch = useDispatch();


  const [selected, setSelected] = useState(null);

  const [progress, setProgress] = useState(0);


  const goBack = () => props.navigation.goBack();


  useEffect(() => {

      setTimeout(() => {
          setInterval(() => {
              setProgress(0.125)
          }, 300);
      }, 800);

      dispatch(cleanUserDetails());

  }, [])


  const selectCategory = (id) => {

      setSelected(id);

      bounce()


  };

  const bounce = () => {

      offset.value = withSpring(0.1, {}, (finished) => {
          if (finished) {
              offset.value = withSpring(0)
          }

      });
  }


  const nextScreen = () => {
        console.log("the selected", selected)
      props.nextScreen(selected)

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

  const RenderItem = ({ item }) => {

    return (
        <Animated.View
            style={item.id == selected && animatedStyles}
        >
            <TouchableOpacity
                style={[styles.renderItemContainer,
                selected == item.id && styles.activeRenderItemContainer]}
                onPress={() => selectCategory(item.id)}>

                <View style={styles.categoryTitleView}>
                    <Text style={styles.categoryTitle}>{item.title}</Text>

                    {selected === item.id &&

                        <Text style={styles.categoryDesc}>{item.desc}</Text>
                    }
                </View>

                <View>
                    {
                        selected !== item.id
                            ?
                            <Icon name="radio-button-off" size={22} color="#9ACD32" />
                            :
                            <Icon name="radio-button-on" size={22} color="#9ACD32" />
                    }

                </View>
            </TouchableOpacity>
        </Animated.View>

    )

}

  return (
    <Modal
      isVisible={props.visibleRetrieve}
      onBackdropPress={props.returnBack}
      onSwipeComplete={() => setShowRetrieve(false)}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      // backdropColor="#fff"
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

            {/* <Image source={require("../../assets/law1.jpg")} style={styles.padImg} /> */}
          <View style={styles.steerCover}>
          <LottieView
                  source={require('@Assets2/image/steer.json')} autoPlay loop
                  style={styles.padImg}
                  />
          </View>
      

          </View>
          <View style={styles.signupPinTitleContainer}>

<View style={styles.signupMiniTitleContainer}>

    <Text style={styles.signupTitle}>Welcome Onboard</Text>

    <Text style={styles.signupDesc}>Tell us about your Proffession</Text>

</View>

<View style={styles.listContainer}>

  <View>
  <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
    />
  </View>
<View style={styles.continueBtnView}>
    <OnboardinBtn
        title="CONTINUE"
        backgroundColor="#9ACD32"
        color="#fff"
        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
        disabled={!selected}
        onPress={nextScreen}
    />
</View>
</View>




</View>

        </View>
      </Pressable>
    </Modal>
  )
};

export default Specialization