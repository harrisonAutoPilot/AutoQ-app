import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";


import styles from "../style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import CountryCodeDropdown from "../phoneNumber/CountryCodeDropdown";
import { loginSchema } from "@Helper2/Schema";
import { forgotPin, countryCodeList } from "@Request2/Auth";
import Loader from "@Screen2/loader";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import { cleanForgotPinStatus, cleanCountryCodeStatus } from "@Store2/Auth";
import disable from "@Helper2/disable";


const ForgotPin = ({ navigation }) => {

    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);


    const { resetPinStatus, errors, countryCodeStatus, countryCodeData, } = useSelector((state) => state.auth);


    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);

    const [countryCode, setCountryCode] = useState(null);

    const [add] = useState("+");

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);


    const goBack = () => navigation.goBack();


    const resetPinState = {

        phone: "",
        code: countryCode

    };


    const showDropDownBottomSheet = async (prop, name) => {

        setProps(prop);

        setPropsName(name);

        bottomSheetCode.current?.present();

        if (countryCodeStatus !== "success") {

            dispatch(countryCodeList());

        }

    };


    const closeDropDownBottomSheet = () => {

        if (countryCodeStatus === "failed") {
            dispatch(cleanCountryCodeStatus());
        }

        bottomSheetCode.current?.close();

    }


    useEffect(() => {

        if (resetPinStatus === "failed") {

            setErrMsg(errors?.msg);

            setLoader(false);

            waitTime();

        }
        else if (resetPinStatus === "success") {

            setErrMsg(null);

            setLoader(false);

            navigation.navigate("ResetPwdSuccess");

            dispatch(cleanForgotPinStatus())

        }
    }, [resetPinStatus]);


    useEffect(() => {
        if (countryCodeStatus === "failed") {

            setErrMsg(errors.msg);

        } else {

            setErrMsg(null);
            
        }

    }, [countryCodeStatus])


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTime = useCallback(() => {

        wait(8000).then(() => {

            setErrMsg(null);

            dispatch(cleanForgotPinStatus());

        });

    }, []);


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {

        const newData = { phone: `${data.code}${data.phone}` }

        setLoader(true);

        await dispatch(forgotPin(newData));

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

                <Text style={styles.loginTitle}>Reset PIN</Text>

                <Text style={styles.loginDesc}>Enter your phone number below to get a reset message</Text>


                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>

                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={resetPinState}
                                validationSchema={loginSchema}
                                onSubmit={(values, actions) => {
                                    submit(values);
                                    actions.resetForm();
                                    setCountryCode(null);

                                }}>

                                {props => (
                                    <View style={styles.formFlex}>

                                        <View style={styles.formInputFieldFlex}>

                                            <View style={styles.inputFieldView}>

                                                <CountryCodeDropdown
                                                     dropDown={() =>showDropDownBottomSheet(props, "code")}
                                                    codeValue={countryCode}
                                                    {...props}
                                                    width={"30%"}
                                                    placeholder="+000"
                                                    name="code"
                                                    title="Code"
                                                    add={add}
                                                />

                                                <InputField
                                                    title="Phone"
                                                    placeholder="8094XXXXXX"
                                                    placeholderTextColor="#757575"
                                                    keyboardType="number-pad"
                                                    name="phone"
                                                    {...props}
                                                    width="65%"
                                                    err={errMsg}
                                                />
                                            </View>

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

                    <CountryCodeBottomSheet
                        bottomSheetRef={bottomSheetCode}
                        closeBottomSheet={closeDropDownBottomSheet}
                        countryCode={setCountryCode}
                        codeValue={countryCode}
                        data={countryCodeData}
                        name="Select Country Code"
                        status={countryCodeStatus}
                        keys={1}
                        itemKey="dial_code"
                        err={errMsg}
                        getProps={getProps}
                        propsname={propsname}
                    />


        </View>

    )
};

export default ForgotPin;