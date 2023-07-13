import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "./style";
import { LoginHeader, PinInputField, FormikValidator, OnboardinBtn } from "@Component2";
import { register, getPhoneVerificationPin } from "@Request2/Auth";
import { cleanRegisterStatus } from "@Store2/Auth";
import { pinSchema } from "@Helper2/Schema";
import Loader from "@Screen2/loader";


const ConfirmPin = ({ navigation }) => {


    const dispatch = useDispatch();


    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);

    const [checkPin, setCheckPin] = useState(false);


    const inputRefs = useRef([]);


    const { registerStatus, errors, user } = useSelector((state) => state.auth);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTime = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

            dispatch(cleanRegisterStatus())


        });

    }, []);


    useEffect(() => {

        if (registerStatus === "failed") {

            setLoader(false)

            setErrMsg(errors?.msg);

            console.log("the final response",errors )

            waitTime();

        } else if (registerStatus === "success") {

            setLoader(false);

            dispatch(getPhoneVerificationPin());

            console.log("it is successful")

            navigation.navigate("SignUpSuccess");

        }

    }, [registerStatus]);

  


    const goBack = () => navigation.goBack();


    const pinState = {
        p0: "",
        p1: "",
        p3: "",
        p4: ""
    };


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {

        const { p0, p1, p2, p3 } = data;

        const values = { ...user, c_password: `${p0}${p1}${p2}${p3}` }

        console.log("the values i am sending", values)

        setErrMsg(null)

        if (user.password !== values.c_password){

            setErrMsg("Password does not match");

        //    setCheckPin(false)

        }else {
            setLoader(true);

            // setCheckPin(true);

            await dispatch(register(values));
        }

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
                   percentage={'98%'}
                />
            </LoginHeader>


            <View style={styles.signupPinTitleContainer}>

                <Text style={styles.signupTitle}>Confirm Pin</Text>

                <Text style={styles.signupDesc}>Confirm your 4-Digit Pin</Text>

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

                                            />



                                        </View>

                                        <View style={styles.submitLoginBtnContainer}>

                                            <OnboardinBtn
                                                title="CONTINUE"
                                                onPress={props.handleSubmit}
                                                backgroundColor="#3353CB"
                                                color="#fff"
                                                disabled={
                                                    Object.keys(props.touched).length === 0 ?
                                                    Object.keys(props.errors).length === 0 :
                                                    Object.keys(props.touched).length !== 0 && Object.keys(props.errors).length !== 0 
                                                    
                                                    
                                                }
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
            
            <Loader isVisible={loader} />

        </View>

    )
};

export default ConfirmPin;