import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";


import styles from "../style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import CountryCodeDropdown from "./CountryCodeDropdown";
import { loginSchema } from "@Helper2/Schema";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import { countryCodeList, } from "@Request2/Auth";
import { cleanCountryCodeStatus } from "@Store2/Auth";
import disable from "@Helper2/disable";



const Login = (props) => {


    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);


    const goBack = () => props.navigation.goBack();

    const [err, setErr] = useState(null);

    const [add] = useState("+");

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);


    const { countryCodeStatus, countryCodeData, errors } = useSelector((state) => state.auth);


    const loginState = {
        phone: "",
        code: ""
    
    };

    // console.log("the code", countryCodeData)


    useEffect(() => {
        if(countryCodeStatus === "failed"){
            setErr(errors.msg)
        }else {
            setErr(null)
        }

    },[countryCodeStatus])


    const showDropDownBottomSheet = async (prop, name) => {

        setProps(prop);

        setPropsName(name);

        bottomSheetCode.current?.present();

        if (countryCodeStatus !== "success") {
            // console.log("did it get here", countryCodeStatus)
                dispatch(countryCodeList());

        }

    };


    const closeDropDownBottomSheet = () => {

        if(countryCodeStatus === "failed"){
            dispatch(cleanCountryCodeStatus());
        }

        bottomSheetCode.current?.close();
    }


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {
        const newData = { phone: `${data.code}${data.phone}` }
      
        props.navigation.navigate("Pin", { data: newData });

    };


    const redirectToForgotPin = () => props.navigation.navigate("ForgotPin");


    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                onPress={goBack}
                name="arrow-back"
                color="#1B1B1F"
            />

            <SafeAreaView>

            <View style={styles.loginTitleContainer}>

                <Text style={styles.loginTitle}>Log In to your account</Text>

                <Text style={styles.loginDesc}>Enter your registered mobile number to Log In</Text>

                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>

                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={loginState}
                                validationSchema={loginSchema}
                                onSubmit={(values) => {
                                    submit(values)
                                }}>

                                {props => (

                                    <View style={styles.formFlex}>

                                        <View style={styles.formInputFieldFlex}>

                                            <View style={styles.inputFieldView}>

                                                <CountryCodeDropdown
                                                    dropDown={() =>showDropDownBottomSheet(props, "code")}
                                                    width={"30%"}
                                                    {...props}
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
                        
                                                />

                                            </View>

                                            <TouchableOpacity style={styles.forgotNumberView} onPress={redirectToForgotPin}>
                                                <Text style={styles.forgotNumberTitle}>Forgot PIN?</Text>
                                            </TouchableOpacity>

                                        </View>

                                        <View style={styles.submitBtnContainer}>
                                       
                                            <OnboardinBtn
                                                title="NEXT"
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


            <CountryCodeBottomSheet
                bottomSheetRef={bottomSheetCode}
                closeBottomSheet={closeDropDownBottomSheet}
                data={countryCodeData}
                name="Select Country Code"
                status={countryCodeStatus}
                keys={1}
                itemKey="dial_code"
                err={err}
                getProps={getProps}
                propsname={propsname}

            />

        </View>

    )
};

export default Login;