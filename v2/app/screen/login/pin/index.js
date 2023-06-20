import React, { useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";


import styles from "../style";
import { LoginHeader, PinInputField, FormikValidator, OnboardinBtn } from "@Component2";
import { login } from "@Request2/Auth";
import { cleanLoginStatus } from "@Store2/Auth";
import { pinSchema } from "@Helper2/Schema";
import Loader from "@Screen2/loader";
import disable from "@Helper2/disable";



const Pin = ({ navigation, route }) => {

    const dispatch = useDispatch();


    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);


    const inputRefs = useRef([]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTime = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

            dispatch(cleanLoginStatus());


        });

    }, []);



    const goBack = () => navigation.goBack();


    const pinState = {
        p0: "",
        p1: "",
        p3: "",
        p4: ""
    };


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = (data) => {

        const { p0, p1, p2, p3 } = data;

        const values = { phone: route.params.data.phone, password: `${p0}${p1}${p2}${p3}` }

        console.log("this is the values", values)
        setErrMsg("");

        setLoader(true);

        dispatch(login(values))
        .unwrap()
        .then(() => {

            setLoader(false)
        })
        .catch(err => {

            setLoader(false);

            setErrMsg(err.msg);
           console.log("errrrr", err.msg) 

            waitTime();

            inputRefs.current.map((index) => {
                index.clear();
            });
        })


    };


    const redirectToForgotPin = () => props.navigation.navigate("ForgotPin");

    const handleBackBtn = (e, index) => {

        const { nativeEvent } = e;

        if (nativeEvent.key === "Backspace") {
            
            handleChange("", index)
        }

    };

    const handleChange = (val, index) => {
        
        if (index == 3) return dismissKeyboard()

        if (val.length) return inputRefs?.current[index + 1]?.focus();

        return inputRefs?.current[index - 1]?.focus();
    };


    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                onPress={goBack}
                name="arrow-back"
                color="#1B1B1F"
            />

            <SafeAreaView>

            <View style={styles.loginTitleContainer}>

                <Text style={styles.loginTitle}>4-Digit Pin</Text>

                <Text style={styles.loginDesc}>Enter your 4-Digit Passcode to confirm authorization</Text>

                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>

                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={pinState}
                                validationSchema={pinSchema}
                                onSubmit={(values, actions) => {
                                    submit(values)
                                    actions.resetForm()
                                    inputRefs?.current[0]?.focus()
                                }}>

                                {props => (

                                    <View style={styles.formFlex}>

                                        <View style={styles.formInputFieldFlex}>

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
                                            />

                                            {errMsg ? <View style={styles.errLoginView}>
                                                <Text style={styles.inputErrText}>{errMsg}</Text>
                                            </View> : null}


                                            <TouchableOpacity style={styles.forgotNumberView} onPress={redirectToForgotPin}>
                                                <Text style={styles.forgotNumberTitle}>Forgot PIN?</Text>
                                            </TouchableOpacity>


                                        </View>

                                        <View style={styles.submitBtnContainer}>

                                            <OnboardinBtn
                                                title="CONTINUE"
                                                onPress={props.handleSubmit}
                                                backgroundColor="#3353CB"
                                                color="#fff"
                                                disabled={disable(props)}
                                                disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                            />
                                        </View>
                                    </View>
                                )}

                            </FormikValidator>


                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>

            </SafeAreaView>
            
            <Loader isVisible={loader} />

        </View>

    )
};

export default Pin;