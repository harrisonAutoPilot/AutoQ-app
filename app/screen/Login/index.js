import React, { useState, useEffect, useCallback } from "react";
import LinearGradient from 'react-native-linear-gradient';
import {
    View, Text, Image, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, ImageBackground,
    StatusBar, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from "./style";
import { AuthBtn as Btn, FormikValidator, InputField } from "@Component/index";
import { login } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import { loginSchema } from "@Helper/Schema";
import Loader from "@Screen/Loader";
import RetrievePin from "@Screen/RetrievePin"

const Login = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [showRetrieve, setShowRetrieve] = useState(false);

    const { status, errors } = useSelector((state) => state.auth);

    const loginState = {
        phone: "",
        password: ""
    };

    useEffect(() => {
      
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            dispatch(cleanup())
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        }
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
    }, [status]);

    const dismissKeyboard = () => Keyboard.dismiss();

    const showPin = () => setPinVisibility(!pinVisibility)

    const submit = async (data) => {
        setErrMsg("");
        setLoader(true)
        await dispatch(login(data));

    };

    const redirectToForgotPin = () => {
        props.navigation.navigate('ForgotPin')
    };

    return (
        <View style={styles.mainBody}>
            <StatusBar hidden />
            <View style={styles.agentCover}>
                <ImageBackground style={styles.agentImg} source={require("@Assets/image/AgentElipse.png")} >
                    <LinearGradient colors={['#B1FF5C', 'transparent']} style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }} />
                </ImageBackground>
                <View style={styles.blueCover}>
                    <Image style={styles.blueImg} source={require("@Assets/image/blueImg.png")} />
                    <View style={styles.innerCover}>
                        <Image source={require("@Assets/image/rh_logo_splashscreen.png")} style={styles.logoImg} />

                        <View style={styles.textCover}>
                            <Text style={styles.smText}>Remedial Health</Text>
                            <Text style={styles.bgText}>AGENT</Text>
                        </View>
                    </View>
                </View>

            </View>

            <View style={[styles.bottomCover, isKeyboardVisible ? styles.keyboardUp : null]}>

                <View style={styles.loginTextCover}>
                    <Text style={styles.loginText}>Account Log In</Text>
                </View>
                <View style={styles.errCover}>
                    {errMsg ? <Toast config={toastConfig} /> : null}
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
                    <KeyboardAwareScrollView>
                        <View style={styles.inputCover}>

                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

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
                                                            autoFocus={true}
                                                            maxLength={13}
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
                                                
                                                    <Btn title="Proceed" onPress={props.handleSubmit} style={styles.submit} />
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
                    </KeyboardAwareScrollView>
                </ScrollView>
            </View>

            <Loader isVisible={loader} />

            <RetrievePin
                visibleRetrieve={showRetrieve}
                returnBack={() => setShowRetrieve(false)}
            />
        </View>
    )
};

export default Login;