import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, TouchableWithoutFeedback, Keyboard, TextInput } from "react-native";
import Toast from 'react-native-toast-message';

import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { SuccessMsgViewTwo } from "@Component";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { AuthBtn as Btn } from "@Component";


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

    const ModalView = () => (
        <View>
            <BottomSheet draggable={false} ref={props.bottomSheet} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.20} radius={50} styles={styles.addStoreBottomSheet}>
                <View style={globalStyle.dragIcon}><FIcon name="minus" color="gray" size={35} /></View>

                <View style={globalStyle.errInCoverNew2}>
                    {props.err ? <View style={[globalStyle.errMainView, globalStyle.marginTop, { marginHorizontal: 20 }]}>
                        <FIcon name="exclamation-circle" color="#fff" style={globalStyle.exclaImg} size={20} />
                        <Text style={globalStyle.failedResponseText}>{props.err}</Text>
                    </View> : null}
                    {props.success ? <SuccessMsgViewTwo title={props.success} /> : null}
                </View>
                <View style={styles.modalPadding}>
                    <TouchableOpacity onPress={props.close} style={styles.backCover}>
                        <Image source={require("@Assets/image/leading-iconn.png")} style={globalStyle.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Confirm Withdrawal</Text>
                </View>

                <ScrollView>

                    <View style={styles.modalView}>

                        <View style={styles.topPrompt}>
                            <View style={styles.topPromptTextCover}>
                                <Text style={styles.topPromptText}>
                                    Please enter the SMS confirmation code sent to the registered number <Text style={styles.phone}>+{ }</Text>.
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

                                <View style={styles.labelCover2}>
                                    <Text style={styles.label4}>Yet to receive SMS code? <Text style={styles.label5} onPress={props.resendToken}>Resend</Text></Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </ ScrollView >
                <View style={[styles.addBtnCover2]}>
                    <Btn title="Confirm Order" style={styles.addressBtn2} onPress={() => props.submit(inputOne, inputTwo, inputThree, inputFour)} />
                </View>
            </BottomSheet>
        </View>
    );

    return (
        <View>
            {ModalView()}
        </View>
    )
};

export default Overlay;