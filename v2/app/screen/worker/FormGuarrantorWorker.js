import React, { useState, useEffect } from "react";
import { View, Text, Keyboard, ScrollView,TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";


import styles from "./style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import { nameSignupSchema } from "@Helper2/Schema";
import { getUserDetails } from "@Store2/Auth";
import disable from "@Helper2/disable";



const FormGuarrantorWorker = ({ navigation }) => {


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

        navigation.navigate("FormStateDetailsWorker");

    };


    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >
               
                <ProgressBar
                    percentage={'90%'}
                />
            </LoginHeader>

            <SafeAreaView>

                <View style={styles.signupTitleContainer}>

                    <Text style={styles.signupTitleMd}>Guarrantor & Reference Info</Text>

                    <Text style={styles.signupDesc}>Civil Servant, Business Man,Working With Private Firm or Other Responsible Member Of The Society </Text>

                    <ScrollView
                        indicatorStyle="white"
                        contentContainerStyle={[styles.scrollContentContainer]}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        bounces={false}>
                        <View style={styles.formContainerMd}>

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

                                            <View style={styles.formFlexMd}>

                                                <View style={styles.formInputFieldFlex}>

                                                

                                                        <InputField
                                                            title="Guarrantor Name"
                                                            placeholder="Guarrantor Name"
                                                            placeholderTextColor="#757575"
                                                            name="guarrantor_name"
                                                            {...props}
                                                            width="100%"
                                                        />
                                                
                                                    <InputField
                                                        title="Guarrantor Proffession"
                                                        placeholder="Guarrantor Proffession"
                                                        placeholderTextColor="#757575"
                                                        name="guarrantor_proffession"
                                                        {...props}
                                                        width="100%"
                                                    />
                                                    <InputField
                                                        title="Guarrantor Office / Business Address"
                                                        placeholder="Guarrantor Office / Business Address"
                                                        placeholderTextColor="#757575"
                                                        name="guarrantor_address"
                                                        {...props}
                                                        width="100%"
                                                    />
                                                    <InputField
                                                        title="Guarrantor Phone"
                                                        placeholder="Guarrantor Phone"
                                                        placeholderTextColor="#757575"
                                                        name="guarrantor_phone"
                                                        {...props}
                                                        width="100%"
                                                    />
                                                    <View style={styles.storeCover}>
                                                    <Text style={styles.bioTitleText}>
                                                        REFERENCE INFO
                                                    </Text>
                                                    </View>
                                                    <InputField
                                                            title="Reference Name"
                                                            placeholder="Reference Name"
                                                            placeholderTextColor="#757575"
                                                            name="reference_name"
                                                            {...props}
                                                            width="100%"
                                                        />
                                                    <InputField
                                                        title="Reference Phone"
                                                        placeholder="Reference Phone"
                                                        placeholderTextColor="#757575"
                                                        name="referencephone"
                                                        {...props}
                                                        width="100%"
                                                    />
                                                </View>

                                                <View style={styles.submitBtnContainer}>
                                                    <OnboardinBtn
                                                        title="CONTINUE"
                                                        onPress={props.handleSubmit}
                                                        backgroundColor="#9ACD32"
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
                    </ScrollView>       
                </View>

            </SafeAreaView>

           
        </View>

    )
};

export default FormGuarrantorWorker;