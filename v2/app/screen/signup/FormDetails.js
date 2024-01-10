import React, { useState, useEffect } from "react";
import { View, Text, Keyboard,Image, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";


import styles from "./style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import { nameSignupSchema } from "@Helper2/Schema";
import { getUserDetails } from "@Store2/Auth";
import disable from "@Helper2/disable";


const FormDetails = ({ navigation }) => {


    const dispatch = useDispatch();


    const [progress, setProgress] = useState(25);


    const goBack = () => navigation.goBack();


    const signupState = {

        firstname: "",
        lastname: "",
        other_name:""

    };



    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(30)
            }, 300);
        }, 800);


    }, [])


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {

    console.log("the other name", data)
        dispatch(getUserDetails({ name: `${data.firstname} ${data.lastname}` }));

        navigation.navigate("FormPhoneDetails");

    };


    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >
               
               
            </LoginHeader>

                <View style={styles.flexBody}>
                <Image source={require('@Assets2/image/74521518-broken-car-on-the-road-and-unhappy-driver-with-red-warning-triangle-black-and-white-concept.jpg')}
                 style={styles.carImg} />
                </View>
            <SafeAreaView>

                <View style={styles.signupTitleContainer}>

                    

                   


                    <View style={styles.formContainerNew}>
                    <Text style={styles.signupTitle}>Welcome! Create Account</Text>
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>

                            <View style={styles.formFlex}>

                                <FormikValidator
                                    style={styles.formFlex}
                                    initialValues={signupState}
                                    validationSchema={nameSignupSchema}
                                    onSubmit={(values) => {
                                        submit(values)
                                    }}>

                                    {props => (

                                        <View style={styles.formFlex}>

                                            <View style={styles.formInputFieldFlex}>

                                               

                                                    <InputField
                                                        title="First Name"
                                                        placeholder="First Name"
                                                        placeholderTextColor="#757575"
                                                        name="firstname"
                                                        {...props}
                                                        width="100%"
                                                    />
                                             
                                                <InputField
                                                    title="Last Name"
                                                    placeholder="Last Name"
                                                    placeholderTextColor="#757575"
                                                    name="lastname"
                                                    {...props}
                                                    width="100%"
                                                />
                                                 <InputField
                                                    title="Email"
                                                    placeholder="Email Address"
                                                    placeholderTextColor="#757575"
                                                    name="email"
                                                    {...props}
                                                    width="100%"
                                                />
                                                  <InputField
                                                    title="Phone"
                                                    placeholder="Phone number"
                                                    placeholderTextColor="#757575"
                                                    name="phone"
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


        </View>

    )
};

export default FormDetails;