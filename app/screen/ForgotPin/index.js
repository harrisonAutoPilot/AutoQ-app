import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ImageBackground} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "@Screen/Login/style";
import globalStyles from "@Helper/globalStyles";

import { Btn, FormikValidator, InputField } from "@Component/index";
import { login } from "@Store/auth";
import { loginSchema } from "@Helper/schema"
import NavHeader from "@Component/NavHeader";

const ForgotPin = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");

    const { status, errors } = useSelector((state) => state.auth);

    const loginState = {
        phone: ""
    };

    useEffect(() => {

        if (status === "failed" && props.navigation.isFocused()) {
            setErrMsg(errors?.msg)
        }
        else if (status === "success" && props.navigation.isFocused()) {
            setErrMsg("");
            props.navigation.navigate("Login")
        }
    }, [errors]);

    const redirectToPreviousScreen = () => props.navigation.goBack();

    const dismissKeyboard = () => Keyboard.dismiss();

    const submit = async (data) => {
        await dispatch(login(data));
    };

    return (
        <View style={globalStyles.mainBody}>
            <NavHeader styleView={globalStyles.mainViewBackground} mainView={globalStyles.mainView} onPress={redirectToPreviousScreen}/>
            <View style={globalStyles.subBody}>

                <View style={globalStyles.logoImgView}>
                    <Image source={require("@Assets/image/rh_logo.png")} style={globalStyles.logoImg} />
                </View>

                <View>
                    <Text style={globalStyles.onboardTitle}>Recover my PIN</Text>
                </View>

                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <View>

                        {errMsg ? <View>
                            <Text style={styles.failedResponseText}>{errMsg}</Text>
                        </View>
                            : null}

                        <FormikValidator
                            initialValues={loginState}
                            validationSchema={loginSchema}
                            onSubmit={(values, actions) => {
                                submit(values)
                            }}
                        >
                            {props => (
                                <View>
                                    <View>
                                        <View style={[styles.inputHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>PHONE NUMBER</Text>
                                            </View>

                                            <InputField
                                                onChangeText={props.handleChange('phone')}
                                                value={props.values.phone}
                                                onBlur={props.handleBlur('phone')}
                                                placeholder="2348134091515"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                            />
                                        </View>
                                        {props.touched.phone && props.errors.phone ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.phone}</Text>
                                            </View>) : null}
                                    </View>

                                    <View>
                                        <Btn title="Send SMS Verification" onPress={props.handleSubmit} style={styles.submit} />
                                    </View>
                                </View>
                            )}

                        </FormikValidator>
                    </View>

                </TouchableWithoutFeedback>

            </View>

            <View style={styles.loginImgView}>
                <ImageBackground source={require("@Assets/image/login.png")} style={styles.loginImg}>
                    <View style={styles.createNewAccountView}>
                        <View>
                            <Text style={styles.label}>Don't have an account yet?</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.createNewAccountText}>CREATE NOW</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
};

export default ForgotPin;