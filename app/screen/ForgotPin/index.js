import React, { useState, useEffect, useCallback,  } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import styles from "./style";
import { AuthBtn as Btn, FormikValidator, InputField, NavHeader,SuccessMsgViewTwo  } from "@Component/index";
 import { forgotPin } from "@Request/Auth";
import { cleanup} from "@Store/Auth";
import { forgotSchema } from "@Helper/Schema";

import Loader from "@Screen/Loader";


const ForgotPin = (props) => {
    const dispatch = useDispatch();
    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [values, setValues] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [loader, setLoader] = useState(false);

    const { status, errors, reset, update, attemptHeader} = useSelector((state) => state.auth);

   const forgotState = {
        phone: "",
      
    };

    useEffect(() => {
        return () => dispatch(cleanup())
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((err, suc) => {
        wait(1000).then(() => {
            setLoader(false);
            setErrMsg(err);
            setSuccessMsg(suc);
            if (suc) {
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            } else {
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }

        });

        wait(4000).then(() => { dispatch(cleanup()) })
    }, []);


    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, styles.inputOuterView]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };


 



    useEffect((props) => {
        if (update === "failed" && status) {
            waitTime(errors?.msg, "");
        } else if (update === "success" && status) {
            setValues("");
            waitTime("", "Reset PIN sent to your email");
           
        } else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);





    const submit = async (values) => {
        const { phone } = values;
        const newValues = {phone};
        setLoader(true);
        await dispatch(forgotPin(newValues));
        

    };
  
    const redirectToForgotPin = () => props.navigation.navigate("ForgotPin");
    const redirectToPreRegister = () => props.navigation.navigate("PreRegister");
    const redirectToPreviousScreen = () => props.navigation.goBack();
    const showPin = () => setPinVisibility(!pinVisibility);
    const dismissKeyboard = () => Keyboard.dismiss();

    return (
        <View style={globalStyles.mainBody}>
            
            <NavHeader styleView={globalStyles.mainViewBackground} mainView={globalStyles.mainView} onPress={redirectToPreviousScreen} screen={"login"} attempt={attemptHeader} />
            <View style={globalStyles.subBody}>

                <View style={globalStyles.logoImgView}>
                    <Image source={require("@Assets/image/rh_logo.png")} style={globalStyles.logoImg} />
                </View>

                <View style={styles.forgotCover}>
                    <Text style={styles.recoverText}>Recover my PIN</Text>
                </View>

                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <View>
                         <View style={styles.errCover}>
                        {errMsg ? <Toast config={toastConfig} /> : null}
                        </View>
                        <FormikValidator
                            initialValues={forgotState}
                            validationSchema={forgotSchema}
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
                                                // value={props.values.phone}
                                                onBlur={props.handleBlur('phone')}
                                                placeholder="234809XXXXXXX"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                onChangeText={(val) => {
                                                    props.setFieldValue('phone', val)
                                                    props.setFieldTouched('phone', true, false);
                                                    setErrMsg("")
                                                    setValues(val)
                                                }}
                                                // onChangeText={(phone) => setValues(phone)}
                                                value={values}
                                                style={styles.label2}
                                                autoFocus={true}
                                                maxLength={13}
                                                testID="phone"
                                            />
                                        </View>
                                        {props.touched.phone && props.errors.phone ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.phone}</Text>
                                            </View>) : null}
                                    </View>

                                  

                                    <View style={styles.signedView} />
                                    {errMsg ? <Toast config={toastConfig} /> : null}
                                   {successMsg ? <Toast config={toastConfig} /> : null}
                                    <View style={styles.btnCover}>
                                        <Btn title="Send SMS Verification" onPress={props.handleSubmit} style={styles.submit}  testID="LoginID"/>
                                    </View>
                                </View>
                            )}

                        </FormikValidator>

                        <View style={styles.forgotPswdView}>
                            {/* <View>
                                <Icon name="help-circle" color="#757575" size={16} />
                            </View> */}
                            {/* <TouchableOpacity style={styles.forgotPswdTitleView} onPress={redirectToForgotPin}>
                                <Text style={styles.forgotPswTitle}>Forgot your PIN?</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>

                </TouchableWithoutFeedback>
            </View>

            <View style={styles.afriCover} >
                <Image source={require("@Assets/image/afri.png")} style={styles.afriImg} />
            </View>
            <View style={styles.loginImgView}>
                <ImageBackground source={require("@Assets/image/login.png")} style={styles.loginImg}>
                    <View style={styles.createNewAccountView}>
                        <View>
                            <Text style={styles.createAccountlabel}>Don't have an account yet?</Text>
                        </View>
                        <TouchableOpacity onPress={redirectToPreRegister}>
                            <Text style={styles.createNewAccountText}> CREATE NOW</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>

            <Loader isVisible={loader} />

        </View>
    )
};

export default ForgotPin;