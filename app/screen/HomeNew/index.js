import React, { useState, useEffect, useCallback, StatusBar } from "react";
import LinearGradient from 'react-native-linear-gradient';
import {
    View, Text, Image, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, ImageBackground,
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import styles from "./style";
import globalStyles from "@Helper/globalStyles";
import { Btn, FormikValidator, InputField } from "@Component/index";
import { login } from "@Request/auth";
import { cleanup } from "@Store/auth";
import { loginSchema } from "@Helper/schema";
import Loader from "@Screen/Loader";
import NavHeader from "@Component/NavHeader";

const HomeNew = (props) => {
    const dispatch = useDispatch();
    const [signedIn, setSignedIn] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [loader, setLoader] = useState(false);

    const { status, errors } = useSelector((state) => state.auth);

    const loginState = {
        phone: "",
        password: ""
    };

    useEffect(() => {
        return () => dispatch(cleanup())
    }, []);

    const toastConfig = {

        error: () =>
        (
            <View style={[globalStyles.errMainView3]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        )
    };


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((msg) => {
        wait(1000).then(() => {
            setLoader(false);
            setErrMsg(msg);
            Toast.show({
                type: 'error',
                visibilityTime: 5000,
                autoHide: true,
                position: 'top',
                topOffset: 0
            })
        });

    }, []);

    useEffect(() => {
        if (status === "failed" && props.navigation.isFocused()) {
            waitTime(errors?.msg);
        }
    }, [errors]);

    const redirectToPreviousScreen = () => props.navigation.goBack();

    const dismissKeyboard = () => Keyboard.dismiss();

    const showPin = () => setPinVisibility(!pinVisibility)

    const submit = async (data) => {
        setErrMsg("");
        setLoader(true)
        await dispatch(login(data));
    };
    const staySignedIn = () => setSignedIn(!signedIn);
    const redirectToForgotPin = () => props.navigation.navigate("ForgotPin");
    const redirectToPreRegister = () => props.navigation.navigate("PreRegister");

    return (
        <View style={styles.mainBody}>
            <View style={styles.agentCover}>
            <ImageBackground style={styles.agentImg} source={require("@Assets/image/AgentElipse.png")} > 
            <LinearGradient colors={['#B1FF5C', 'transparent']} style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }} />
             </ImageBackground>
             <View style={styles.blueCover}>
             <Image style={styles.agentImg} source={require("@Assets/image/blueImg.png")} /> 
             <View style={styles.innerCover}>
               <Image source={require("@Assets/image/rh_logo_splashscreen.png")} style={styles.logoImg} />

               <View style={styles.textCover}>
                   <Text style={styles.smText}>Remedial  Home View</Text>
                   <Text style={styles.bgText}>AGENT</Text>
               </View>
            </View> 
             </View>  
                {/* </LinearGradient> */}
                {/* <Image source={require("@Assets/image/AgentElipse.png")} style={styles.agentImg} /> */}
            </View>
            <View style={styles.bottomCover}>
                <View style={styles.loginTextCover}>
                    <Text style={styles.loginText}>Account Log In</Text>
                </View>
                <View style={styles.inputCover}>
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <View>
                         <View style={styles.errCover}>
                        {errMsg ? <Toast config={toastConfig} /> : null}
                        </View>
                        <FormikValidator
                            initialValues={loginState}
                            validationSchema={loginSchema}
                            onSubmit={(values) => {
                                submit(values)
                            }}>
                            {props => (
                                <View>
                                    <View>
                                        <View style={[styles.inputHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>PHONE NUMBER</Text>
                                            </View>

                                            <InputField
                                                value={props.values.phone}
                                                style={styles.input}
                                                onBlur={props.handleBlur('phone')}
                                                placeholder="234809XXXXXXX"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                onChangeText={(val) => {
                                                    props.setFieldValue('phone', val)
                                                    props.setFieldTouched('phone', true, false);
                                                    setErrMsg("")
                                                }}
                                                style={styles.label2}
                                            />
                                        </View>
                                        {props.touched.phone && props.errors.phone ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.phone}</Text>
                                            </View>) : null}
                                    </View>

                                    <View>
                                        <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.password && props.errors.password ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>4 DIGIT PIN</Text>
                                            </View>
                                            <View style={styles.pinInputView}>
                                                <InputField
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
                                                    style={styles.label2}

                                                />
                                                {pinVisibility ?
                                                    <TouchableOpacity onPress={showPin}>
                                                        <Text style={styles.showTextPin}>SHOW</Text>
                                                    </TouchableOpacity> :
                                                    <TouchableOpacity onPress={showPin}>
                                                        <Text style={styles.showTextPin}>HIDE</Text>
                                                    </TouchableOpacity>}
                                            </View>

                                        </View>
                                        {props.touched.password && props.errors.password ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.password}</Text>
                                            </View>) : null}
                                    </View>

                                    <View style={styles.signedView}>
                                       
                                    </View>

                                    <View style={styles.btnCover}>
                                        <Btn title="Proceed" onPress={props.handleSubmit} style={styles.submit} />
                                    </View>
                                </View>
                            )}

                        </FormikValidator>

                        <View style={styles.forgotPswdView}>
                            <View>
                                <Icon name="help-circle" color="#757575" size={16} />
                            </View>
                            <TouchableOpacity style={styles.forgotPswdTitleView} onPress={redirectToForgotPin}>
                                <Text style={styles.forgotPswTitle}>Forgot your PIN?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
};

export default HomeNew;