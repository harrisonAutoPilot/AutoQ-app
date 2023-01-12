import React, { useEffect, useState,useRef, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, TouchableWithoutFeedback, Keyboard,Animated, TextInput } from "react-native";
import Toast from 'react-native-toast-message';

import styles from './style';
import FIcon from "react-native-vector-icons/FontAwesome5";
import { SuccessMsgViewTwo } from "@Component";
import {
    BottomSheetScrollView, useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import { AuthBtn as Btn } from "@Component";
import {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';


const Overlay = (props) => {
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");
    const [inputThree, setInputThree] = useState("");
    const [inputFour, setInputFour] = useState("");
    const inputOneRef = useRef(null);
    const inputTwoRef = useRef(null);
    const inputThreeRef = useRef(null);
    const inputFourRef = useRef(null);


    const dismissKeyboard = () => Keyboard.dismiss();
 
    const snapPoints = useMemo(() => ['80%', '85%'], []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 250,
        easing: Easing.exp,
    });

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

 
  
    const ModalView = () => (
        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheet}
                index={1}
                initialSnapIndex={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                style={styles.addStoreBottomSheet}
                enablePanDownToClose={false}
                enableTouchOutsideToClose={false}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                handleIndicatorStyle={{ display: "none" }}
                 >

                <View style={globalStyles.dragIcon}>
                    <FIcon name="minus" color="gray" size={35} />
                    </View>

                <View style={globalStyles.errInCoverNew2}>
              
                    {props.err ? <View style={[globalStyles.errMainView, globalStyles.marginTop, { marginHorizontal: 20,marginTop:100, position:'absolute', zIndex:9000 }]}>
                        <FIcon name="exclamation-circle" color="#fff" style={globalStyles.exclaImg} size={20} />
                        <Text style={globalStyles.failedResponseText}>{props.err}</Text>
                       
                    </View> : null}
                    {props.success ? <SuccessMsgViewTwo title={props.success} /> : null}
                  
                </View>
                <View style={styles.modalPadding}>
                    
                    <TouchableOpacity onPress={props.close} style={styles.backCover}>
                        <Image source={require("@Assets/image/leading-iconn.png")} style={globalStyles.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Confirm Order</Text>
                </View>

                <BottomSheetScrollView contentContainerStyle={styles.scrollStyle} 
                 bounces={false}
                >

                    <View style={styles.modalView}>

                        <View style={styles.topPrompt}>
                            <View style={styles.topPromptTextCover}>
                                <Text style={styles.topPromptText}>
                                    Please enter the SMS confirmation code sent to the registered number <Text style={styles.phone}>+{props?.phone}</Text>.
                                    The code is valid for 15 minutes.
                                </Text>
                            
                            </View>
                        </View>
                        <View style={styles.labelCover}>
                            <Text style={styles.label3}>SMS CODE</Text>
                           
                        </View>
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>
                            <View>
                                <View style={styles.pinHolder}>
                                    <View style={styles.pinView}>
                                        <TextInput
                                            style={styles.inputF}
                                            ref={inputOneRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputOne) => {
                                                setInputOne(inputOne);
                                                if (inputOne !== "") {
                                                    inputTwoRef.current.focus()
                                                }
                                            }}
                                            value={inputOne}
                                            maxLength={1}
                                        />
                                    </View>
                                    <View style={styles.pinView}>
                                        <TextInput
                                            style={styles.inputF}
                                            ref={inputTwoRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputTwo) => {
                                                setInputTwo(inputTwo);
                                                if (inputTwo !== "") {
                                                    inputThreeRef.current.focus()
                                                }
                                            }}
                                            maxLength={1}
                                            value={inputTwo}
                                        />
                                    </View>
                                    <View style={styles.pinView}>
                                        <TextInput
                                            style={styles.inputF}
                                            ref={inputThreeRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputThree) => {
                                                setInputThree(inputThree);
                                                if (inputThree !== "") {
                                                    inputFourRef.current.focus()
                                                }
                                            }}
                                            maxLength={1}
                                            value={inputThree}

                                        />
                                    </View>
                                    <View style={styles.pinView}>
                                        <TextInput
                                            style={styles.inputF}
                                            ref={inputFourRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputFour) => {
                                                setInputFour(inputFour);
                                            }}
                                            maxLength={1}
                                            value={inputFour}
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.labelCover2} onPress={props.resendToken}>
                                    <Text style={styles.label4}>Yet to receive SMS code? {props.showResendPin ? <Text style={styles.label5}>Resend</Text> : null}</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </BottomSheetScrollView>
                <View style={[styles.addBtnCover2]}>
                    {inputOne.length && inputTwo.length && inputThree.length && inputFour.length ?
                        <Btn title="Confirm Order" style={styles.addressBtn2} onPress={() => props.submit(inputOne, inputTwo, inputThree, inputFour)} />
                        : null}
                </View>
                </BottomSheetModal>

</BottomSheetModalProvider>

);

return (
    ModalView()
)
};

export default Overlay;