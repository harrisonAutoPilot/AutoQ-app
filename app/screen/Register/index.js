import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "@Screen/Login/style";

import { Btn, FormikValidator, InputField } from "@Component/index";
import { register, getUser, getPhoneVerificationPin } from "@Request/auth";
import { registerSchema } from "@Helper/schema";
import globalStyles from "@Helper/globalStyles";
import NavHeader from "@Component/NavHeader";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { heightPercentageToDP } from "react-native-responsive-screen";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Register = (props) => {

    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);

    const { status, errors } = useSelector((state) => state.auth);

    const registerState = {
        phone: "",
        password: "",
        firstname: "",
        surname: "",
        store: "",
        c_password: ""
    };

    useEffect(() => {
        if (status === "failed" && props.navigation.isFocused()) {
            setErrMsg(errors?.msg)
        }
    }, [errors]);

    const redirectToPreviousScreen = () => props.navigation.goBack();

    const dismissKeyboard = () => Keyboard.dismiss();

    const showPin = () => setPinVisibility(!pinVisibility)

    const submit = async (data) => {
        const newData = {
            phone: data.phone,
            password: data.password,
            c_password: data.c_password,
            name: `${data.firstname} ${data.surname}`,
            user_type: props.route.params?.category
        }
        await dispatch(register(newData));

        if (status === "success") {
            setErrMsg("");
            dispatch(getUser());
            dispatch(getPhoneVerificationPin());
            props.navigation.navigate("PhoneVerification", { phone });
        }

    };

    const redirectToLogin = () => props.navigation.navigate("Login");

    return (
        <View style={globalStyles.mainBody}>
            <NavHeader styleView={globalStyles.mainViewBackground} mainView={globalStyles.mainView} onPress={redirectToPreviousScreen}/>
          
                <View style={globalStyles.subBody3}>
                        <View style={styles.topCover}>

                            <View style={globalStyles.logoImgView}>
                                <Image source={require("@Assets/image/rh_logo.png")} style={globalStyles.logoImg} />
                            </View>

                            <View style={styles.titleCover}>
                                <Text style={globalStyles.onboardTitle}>Create your Account</Text>
                            </View>
                        </View>
                      
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle2}>
                        <KeyboardAwareScrollView >
                            <View style={styles.formCover}>
                                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <View>

                                        {errMsg ? <View style={globalStyles.errMainView}>
                                            <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
                                        </View> : null}

                                        <FormikValidator
                                            initialValues={registerState}
                                            validationSchema={registerSchema}
                                            onSubmit={(values, actions) => {
                                                submit(values)
                                            }}
                                        >
                                            {props => (
                                                <View>
                                                    <View>
                                                        <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                            <View style={styles.labelView}>
                                                                <Text style={styles.label}>FIRST NAME</Text>
                                                            </View>

                                                            <InputField
                                                                style={{ color: 'gray' }}
                                                                value={props.values.firstname}
                                                                onBlur={props.handleBlur('firstname')}
                                                                placeholder="Kingsley"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="default"
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('firstname', val)
                                                                    props.setFieldTouched('firstname', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                            />
                                                        </View>
                                                        {props.touched.firstname && props.errors.firstname ? (
                                                            <View style={styles.errView}>
                                                                <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                            </View>) : null}
                                                    </View>

                                                    <View>
                                                        <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.surname && props.errors.surname ? styles.inputErrHolder : null]}>
                                                            <View style={styles.labelView}>
                                                                <Text style={styles.label}>SURNAME</Text>
                                                            </View>

                                                            <InputField
                                                                style={{ color: 'gray' }}
                                                                value={props.values.surname}
                                                                onBlur={props.handleBlur('surname')}
                                                                placeholder="James"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="default"
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('surname', val)
                                                                    props.setFieldTouched('surname', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                            />
                                                        </View>
                                                        {props.touched.surname && props.errors.surname ? (
                                                            <View style={styles.errView}>
                                                                <Text style={styles.errText}>{props.errors.surname}</Text>
                                                            </View>) : null}
                                                    </View>
                                                    <View>
                                                        <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                            <View style={styles.labelView}>
                                                                <Text style={styles.label}>PHONE NUMBER</Text>
                                                            </View>

                                                            <InputField
                                                                style={{ color: 'gray' }}
                                                                value={props.values.phone}
                                                                onBlur={props.handleBlur('phone')}
                                                                placeholder="234809XXXXXXX"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('phone', val)
                                                                    props.setFieldTouched('phone', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                            />
                                                        </View>
                                                        {props.touched.phone && props.errors.phone ? (
                                                            <View style={styles.errView}>
                                                                <Text style={styles.errText}>{props.errors.phone}</Text>
                                                            </View>) : null}
                                                    </View>

                                                    <View>
                                                        <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.password && props.errors.password ? styles.inputErrHolder : null]}>
                                                            <View style={styles.labelView}>
                                                                <Text style={styles.label}>4 DIGIT PIN</Text>
                                                            </View>
                                                            <View >
                                                                <InputField
                                                                    style={{ color: 'gray' }}
                                                                    value={props.values.password}
                                                                    onBlur={props.handleBlur('password')}
                                                                    placeholder="****"
                                                                    placeholderTextColor="#757575"
                                                                    keyboardType="number-pad"
                                                                    secureTextEntry={pinVisibility}
                                                                    onChangeText={(val) => {
                                                                        props.setFieldValue('password', val)
                                                                        props.setFieldTouched('password', true, false);
                                                                        setErrMsg("")
                                                                    }}

                                                                />
                                                                <View style={styles.changeCover}>
                                                                {pinVisibility ?
                                                                    <TouchableOpacity onPress={showPin}>
                                                                        <Text style={styles.showTextPin}>SHOW</Text>
                                                                    </TouchableOpacity> :
                                                                    <TouchableOpacity onPress={showPin}>
                                                                        <Text style={styles.showTextPin}>HIDE</Text>
                                                                    </TouchableOpacity>}
                                                                    </View>
                                                            </View>
                                                                    
                                                        </View>
                                                        {props.touched.password && props.errors.password ? (
                                                            <View style={styles.errView}>
                                                                <Text style={styles.errText}>{props.errors.password}</Text>
                                                            </View>) : null}
                                                    </View>

                                                    <View>
                                                        <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.c_password && props.errors.c_password ? styles.inputErrHolder : null]}>
                                                            <View style={styles.labelView}>
                                                                <Text style={styles.label}>CONFIRM PIN</Text>
                                                            </View>
                                                            <View >
                                                                <InputField
                                                                    style={{ color: 'gray' }}
                                                                    value={props.values.c_password}
                                                                    onBlur={props.handleBlur('c_password')}
                                                                    placeholder="****"
                                                                    placeholderTextColor="#757575"
                                                                    keyboardType="number-pad"
                                                                    secureTextEntry={pinVisibility}
                                                                    onChangeText={(val) => {
                                                                        props.setFieldValue('c_password', val)
                                                                        props.setFieldTouched('c_password', true, false);
                                                                        setErrMsg("")
                                                                    }}

                                                                />
                                                            </View>

                                                        </View>
                                                        {props.touched.c_password && props.errors.c_password ? (
                                                            <View style={styles.errView}>
                                                                <Text style={styles.errText}>{props.errors.c_password}</Text>
                                                            </View>) : null}
                                                    </View>

                                                    <View>
                                                        <Btn title="Register" onPress={props.handleSubmit} style={styles.submit} />
                                                    </View>
                                                </View>
                                            )}

                                        </FormikValidator>
                                    </View>

                                </TouchableWithoutFeedback>

                                <View style={styles.registerImgView}>
                                    <View style={styles.registerAccountView}>
                                        <View>
                                            <Text style={styles.createAccountlabel}>Already have an account?</Text>
                                        </View>
                                        <TouchableOpacity onPress={redirectToLogin}>
                                            <Text style={styles.createNewAccountText}>  LOG IN</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        
                            </KeyboardAwareScrollView>

                    </ScrollView>
                </View>
       
        </View>
    )
};

export default Register;