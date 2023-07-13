import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProgressBar from "./ProgressBar";


import styles from "./style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import { emailSignupSchema } from "@Helper2/Schema";
import { getUserDetails, cleanCheckEmail } from "@Store2/Auth";
import { checkEmailDetails } from "@Request2/Auth";
import Loader from "@Screen2/loader";
import disable from "@Helper2/disable";


const FormEmailDetails = ({ navigation }) => {


    const dispatch = useDispatch();


    const goBack = () => navigation.goBack();


    const [errMsg, setErrMsg] = useState(null);

    const [loader, setLoader] = useState(false);

    const [progress, setProgress] = useState(60);

    const { registerStatus, errors, user } = useSelector((state) => state.auth);


    const signupState = {

        email: ""

    };


    const dismissKeyboard = () => Keyboard.dismiss();


    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(58)
            }, 300);
        }, 800);


        return () => {

            dispatch(cleanCheckEmail())
        }

    }, [])


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTime = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

            dispatch(cleanCheckEmail())

        });

    }, []);


    const submit = (data) => {

        dispatch(getUserDetails({ email: data.email }))
      

        navigation.navigate("FormStateDetails");
        console.log("the email check screen", ...user)
    };


    const checkEmailExists = (data) => {

        dispatch(cleanCheckEmail());

        setErrMsg(null);

        setLoader(true);


        dispatch(checkEmailDetails({ email: data.email }))
            .unwrap()
            .then((suc) => {
                if (suc) {

                    submit(data);

                    setLoader(false);
                }
            }).catch((err) => {

                setLoader(false)

                setErrMsg(err.msg);

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
                   percentage={'50%'}
                />
            </LoginHeader>

            <SafeAreaView>

            <View style={styles.signupTitleContainer}>

                <Text style={styles.signupTitle}>Email</Text>

                <Text style={styles.signupDesc}>We’ll send you important updates, features and benefits.</Text>

                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>

                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={signupState}
                                validationSchema={emailSignupSchema}
                                onSubmit={(values) => {
                                    checkEmailExists(values)
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

                                            <InputField
                                                title="Email Address"
                                                placeholder="xxxx@gmail.com"
                                                placeholderTextColor="#757575"
                                                name="email"
                                                {...props}
                                                width="100%"
                                            />

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

export default FormEmailDetails;