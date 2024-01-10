import React, { useRef, useState, useEffect } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";


import styles from "./style";
import { LoginHeader, PinInputField, FormikValidator, OnboardinBtn } from "@Component2";
import { pinSchema } from "@Helper2/Schema";
import { getUserDetails } from "@Store2/Auth";
import disable from "@Helper2/disable";



const SignUpPin = ({ navigation }) => {


    const dispatch = useDispatch();


    const inputRefs = useRef([]);

    const [progress, setProgress] = useState(0.625);


    const goBack = () => navigation.goBack();


    const pinState = {
        p0: "",
        p1: "",
        p3: "",
        p4: ""
    };


    const dismissKeyboard = () => Keyboard.dismiss();


    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(0.75)
            }, 300);
        }, 800);

    }, [])


    const submit = async ({ p0, p1, p2, p3 }) => {

        dispatch(getUserDetails({ password: `${p0}${p1}${p2}${p3}` }));

        navigation.navigate("FormConfirmPinDetails");

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
                   percentage={'80%'}
                />
            </LoginHeader>

            {/* <SafeAreaView> */}

            <View style={styles.signupPinTitleContainer}>

                <Text style={styles.signupTitle}>Create Pin</Text>

                <Text style={styles.signupDesc}>Create your 4-Digit Pin</Text>

                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>

                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={pinState}
                                validationSchema={pinSchema}
                                onSubmit={(values) => {
                                    submit(values)
                                }}>
                                {props => (
                                    <View style={styles.formFlex}>

                                        <View style={styles.formInputFieldFlex2}>

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
            {/* </SafeAreaView> */}

        </View>

    )
};

export default SignUpPin;