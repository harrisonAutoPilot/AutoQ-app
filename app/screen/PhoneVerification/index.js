import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, StatusBar, SafeAreaView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";

import globalStyles from "@Helper/globalStyles";
import style from "./style";
import { getPhoneVerificationPin, verifyPin } from "@Request/auth";
import { logout } from "@Store/auth";

const PhoneVerification = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");
    const [inputThree, setInputThree] = useState("");
    const [inputFour, setInputFour] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const inputOneRef = useRef(null);
    const inputTwoRef = useRef(null);
    const inputThreeRef = useRef(null);
    const inputFourRef = useRef(null);

    const { status, errors, isAuthenticated, pin } = useSelector((state) => state.auth);

    const submit = () => {

        if (inputOne && inputTwo && inputThree && inputFour) {
            const values = { code: `${inputOne}${inputTwo}${inputThree}${inputFour}` }
            dispatch(verifyPin(values))
        }
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    useEffect(() => {
        inputOneRef.current.focus()
    }, []);

    useEffect(() => {
        if ((status === "failed" || pin === "failed") && props.navigation.isFocused()) {
            setErrMsg(errors?.msg);
            setSuccessMsg("");
        }
        else if (status === "success" && props.navigation.isFocused()) {
            setErrMsg("");
            setSuccessMsg("Phone number verified successfully.")
            // dispatch(getUser());
        }
    }, [errors]);

    useEffect(() => {
        if (pin === "success" && props.navigation.isFocused()) {
            setErrMsg("");
            setSuccessMsg("Verification pin sent successfully.")
        }
    }, [pin]);

    useEffect(() => {
        if (!isAuthenticated && props.navigation.isFocused()) {
            props.navigation.navigate("Onboarding")
        }

    }, [isAuthenticated]);

    useEffect(() => {
        if (inputFour.length) {
            submit()
        }
    }, [inputFour]);

    const resendPhoneVerificationPin = () => dispatch(getPhoneVerificationPin())

    const redirectToPreviousScreen = async () => {
        console.log("hi")
        await dispatch(logout());
    };

    const dismissKeyboard = () => Keyboard.dismiss();

    return (
        <View style={globalStyles.mainBody}>
            <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={false} />
            <SafeAreaView>
                <View style={globalStyles.subBody}>
                        <TouchableOpacity style={globalStyles.redirectIcon} onPress={redirectToPreviousScreen}>
                            <Image source={require("@Assets/image/left.png")} style={globalStyles.backImg}/>
                        </TouchableOpacity>
                </View>
                </SafeAreaView>
                <View style={globalStyles.logoImgView}>
                    <Image source={require("@Assets/image/rh_logo.png")} style={globalStyles.logoImg} />
                </View>

                <View>
                    <Text style={globalStyles.onboardTitle}>Phone Verification</Text>
                </View>
                <View style={style.subTextView}>
                    <Text style={[globalStyles.forgotPswTitle, { fontWeight: "400" }]}>Please enter the SMS code sent to <Text style={{ color: "#212121" }}>{props.route.params?.phone}</Text> for confirmation. The code is valid for 30 minutes.</Text>
                </View>

                {errMsg ? <View style={[globalStyles.errMainView, globalStyles.marginTop, style.body]}>
                    <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
                </View> : null}

                {successMsg ? <View style={[globalStyles.phoneNoVerifySuccessView, globalStyles.marginTop, style.body]}>
                    <View style={globalStyles.phoneNoVerifySuccessIconView}>
                        <Icon name="check" color="rgba(67, 160, 71, 1)" size={14} />
                    </View>
                    <View style={globalStyles.phoneNoInnerView} />
                    <Text style={globalStyles.successResponseText}>{successMsg}</Text>
                </View> : null}

                <TouchableWithoutFeedback onPress={dismissKeyboard}>

                    <View style={style.pinHolder}>
                        <View style={style.pinView}>
                            <TextInput

                                style={styles.inputF}
                                ref={inputOneRef}

                                ref={inputOneRef}

                                placeholder="-"
                                placeholderTextColor="#757575"
                                keyboardType="number-pad"
                                onChangeText={(inputOne) => {
                                    setInputOne(inputOne);
                                    setErrMsg("");
                                    if (inputOne !== "") {
                                        inputTwoRef.current.focus()
                                    }
                                }}
                                value={inputOne}
                                maxLength={1}
                            />
                        </View>
                        <View style={style.pinView}>
                            <TextInput
                                style={styles.inputF}
                                ref={inputTwoRef}

                                ref={inputTwoRef}
                                placeholder="-"
                                placeholderTextColor="#757575"
                                keyboardType="number-pad"
                                onChangeText={(inputTwo) => {
                                    setInputTwo(inputTwo);
                                    setErrMsg("");
                                    if (inputTwo !== "") {
                                        inputThreeRef.current.focus()
                                    }
                                }}
                                maxLength={1}
                                value={inputTwo}
                            />
                        </View>
                        <View style={style.pinView}>
                            <TextInput

                                ref={inputTwoRef}

                                style={styles.inputF}
                                ref={inputThreeRef}

                                ref={inputThreeRef}

                                placeholder="-"
                                placeholderTextColor="#757575"
                                keyboardType="number-pad"
                                onChangeText={(inputThree) => {
                                    setInputThree(inputThree);
                                    setErrMsg("");
                                    if (inputThree !== "") {
                                        inputFourRef.current.focus()
                                    }
                                }}
                                maxLength={1}
                                value={inputThree}

                            />
                        </View>
                        <View style={style.pinView}>
                            <TextInput

                                style={styles.inputF}
                                ref={inputFourRef}

                                ref={inputFourRef}

                                placeholder="-"
                                placeholderTextColor="#757575"
                                keyboardType="number-pad"
                                onChangeText={(inputFour) => {
                                    setInputFour(inputFour);
                                    setErrMsg("");
                                }}
                                maxLength={1}
                                value={inputFour}
                            />
                        </View>
                    </View>

                </TouchableWithoutFeedback>

                <View>
                    <Text style={[globalStyles.createAccountlabel, { textAlign: "center" }]}>Yet to receive SMS code? <Text style={{ color: "#7CCF24", fontWeight: "600" }} onPress={resendPhoneVerificationPin}>Resend</Text></Text>
                </View>
        </View>
    )
};

export default PhoneVerification;