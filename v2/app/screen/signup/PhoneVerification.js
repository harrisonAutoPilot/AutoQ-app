import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity, BackHandler, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "./style";
import { LoginHeader, PinInputField, FormikValidator, OnboardinBtn } from "@Component2";
import { getPhoneVerificationPin, verifyPin, getUser } from "@Request2/Auth";
import { cleanPhoneVerificationStatus, logout } from "@Store2/Auth";
import { pinSchema } from "@Helper2/Schema";
import Loader from "@Screen2/loader";
import disable from "@Helper2/disable";



const PhoneVerification = (props) => {


    const dispatch = useDispatch();


    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);


    const [showResendBtn, setShowResendBtn] = useState(true);


    const inputRefs = useRef([]);


    const { loginStatus, errors } = useSelector((state) => state.auth);


    const resendVerification = () => {

        setLoader(true);

        setShowResendBtn(false);

        showResendBtnTimer()

        dispatch(getPhoneVerificationPin())
        .unwrap()
        .then(() => {

            setLoader(false);

        })
        .catch(err => {

            setLoader(false);

            console.log("Hello harrison",err.msg)
            setErrMsg(err.msg);
        })

    }

    const goBack = () => props.navigation.goBack();

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTime = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

            dispatch(cleanPhoneVerificationStatus())


        });

    }, []);

    const showResendBtnTimer = useCallback(() => {

        wait(15000).then(() => {

            setShowResendBtn(true)

        });

    }, []);


    useEffect(() => {

        if (loginStatus === "failed") {

            setLoader(false)

            setErrMsg(errors.msg);

            waitTime();

        }

    }, [loginStatus]);



    const pinState = {
        p0: "",
        p1: "",
        p3: "",
        p4: ""
    };


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {

        const { p0, p1, p2, p3 } = data;

        const values = { code: `${p0}${p1}${p2}${p3}` }

        setErrMsg(null);

        setLoader(true);

        dispatch(verifyPin(values))
        .unwrap()
        .then(() => {

            setLoader(false);

            dispatch(getUser());
         props.navigation.navigate("Login");

          

        })
        .catch(err => {

            setLoader(false);

            setErrMsg(err.msg);

        })

    };



    const handleBackBtn = (e, index) => {

        const { nativeEvent } = e;

        if (nativeEvent.key === "Backspace") {
            handleChange("", index)

        }

    };

    const handleChange = (val, index) => {

        if (val.length) return inputRefs?.current[index + 1]?.focus();

        return inputRefs?.current[index - 1]?.focus();
    }



    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >
                  <ProgressBar
                   percentage={'99%'}
                />
            </LoginHeader>


            <View style={styles.signupPinTitleContainer}>

                <Text style={styles.signupTitle}>Phone Verification</Text>

                <Text style={styles.signupDesc}>This helps to confirm your account
                    by verifying that’s it really you.</Text>

                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>


                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={pinState}
                                validationSchema={pinSchema}
                                onSubmit={(values, actions) => {
                                    submit(values)
                                    actions.resetForm();
                                }}>
                                {props => (
                                    <View style={styles.formFlex}>

                                        <View style={styles.formInputFieldFlex2}>

                                        {errMsg &&
                                                <View style={styles.errView} >
                                                    <Icon name="error-outline" size={22} color="#fff" />
                                                    <Text style={styles.errText}>{errMsg}</Text>
                                                </View>

                                            }

                                            <PinInputField
                                                placeholder="-"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                {...props}
                                                width="22%"
                                                length={4}
                                                refs={ref => {
                                                    if (ref && !inputRefs.current.includes(ref)) {
                                                        inputRefs.current = [...inputRefs.current, ref]
                                                    }
                                                }}
                                                onChangeText={handleChange}
                                                onKeyPress={handleBackBtn}
                                                style={styles.verificationField}

                                            />

                                            {showResendBtn &&

                                            <View style={styles.resendVerificationCode}>
                                                <Text style={styles.resendVerificationText}>Didn’t get your code? </Text>
                                                <TouchableOpacity onPress={resendVerification}>
                                                    <Text style={styles.resendVerificationActiveText}>Resend</Text>
                                                </TouchableOpacity>
                                            </View>
}

                                         

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
                </View>

            </View>
            
            <Loader isVisible={loader} />

        </View>

    )
};

export default PhoneVerification;