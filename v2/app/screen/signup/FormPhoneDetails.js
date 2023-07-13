import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProgressBar from "./ProgressBar";

import styles from "./style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import CountryCodeDropdown from "@Screen2/login/phoneNumber/CountryCodeDropdown";
import { loginSchema } from "@Helper2/Schema";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import { countryCodeList, checkPhoneDetails,getPhoneVerificationPin } from "@Request2/Auth";
import { getUserDetails, cleanCountryCodeStatus, cleanCheckPhone } from "@Store2/Auth";
import Loader from "@Screen2/loader";
import disable from "@Helper2/disable";



const FormPhoneDetails = ({ navigation }) => {


    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);


    const goBack = () => navigation.goBack();


    const [err, setErr] = useState(null);

    const [errMsg, setErrMsg] = useState(null);

    const [add] = useState("+");

    const [loader, setLoader] = useState(false);

    const [progress, setProgress] = useState(35);

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);


    const { errors, countryCodeStatus, countryCodeData } = useSelector((state) => state.auth);


    const phoneState = {
        phone: "",
        code: ""
    };


    const showDropDownBottomSheet = (prop, name) => {

        setProps(prop);

        setPropsName(name);

        bottomSheetCode.current?.present();

        if (countryCodeStatus !== "success") {

            dispatch(countryCodeList());

        }
    };


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTime = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

            dispatch(cleanCheckPhone())

        });

    }, []);

    useEffect(() => {
        if (countryCodeStatus === "failed") {

            setErr(errors.msg);

        } else {

            setErr(null);

        }

    }, [countryCodeStatus])

   



    const closeDropDownBottomSheet = () => {

        if (countryCodeStatus === "failed") {

            dispatch(cleanCountryCodeStatus());

        }

        bottomSheetCode.current?.close();

    }

    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {

        dispatch(getUserDetails({ phone: `${data.code}${data.phone}` }))
        dispatch(getPhoneVerificationPin());
        // navigation.navigate("PhoneVerification");
        navigation.navigate("FormEmailDetails");
    };


    const checkPhoneExists = (data) => {

        dispatch(cleanCheckPhone());

        setErrMsg(null);

        setLoader(true);

        dispatch(checkPhoneDetails({ phone: `${data.code}${data.phone}` }))
            .unwrap()
            .then((suc) => {

                if (suc) {

                    submit(data);

                    setLoader(false);
                }
            }).catch((err) => {
                // handle error here
                setLoader(false)

                setErrMsg(err?.msg);

                waitTime()
            })
    };




    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >
                <ProgressBar
                  percentage={'35%'}
                />
            </LoginHeader>

            <SafeAreaView>

            <View style={styles.signupTitleContainer}>

                <Text style={styles.signupTitle}>Phone</Text>

                <Text style={styles.signupDesc}>We’ll send you important updates, features and benefits.</Text>

                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>

                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={phoneState}
                                validationSchema={loginSchema}
                                onSubmit={(values) => {
                                    checkPhoneExists(values)
                                }}>

                                {props => (

                                    <View style={styles.formFlex}>

                                        <View style={styles.formInputFieldFlex}>

                                        {errMsg &&
                                                <View style={styles.errView} >
                                                    <Icon name="error-outline" size={22} color="#fff" />
                                                    <Text style={styles.errText}>{errMsg}</Text>
                                                </View>

                                            }

                                            <View style={styles.inputFieldView}>

                                                <CountryCodeDropdown
                                                dropDown={() =>showDropDownBottomSheet(props, "code")}
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
                                                />


                                            </View>

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
                name="Select Country Code"
                data={countryCodeData}
                status={countryCodeStatus}
                keys={1}
                itemKey="dial_code"
                err={err}
                getProps={getProps}
                propsname={propsname}
            />

            <Loader isVisible={loader} />


        </View>

    )
};

export default FormPhoneDetails;