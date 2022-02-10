import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import styles from "./style";
import globalStyles from "@Helper/globalStyles";
import { Btn, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import { changePinSchema } from "@Helper/schema";
import { updateUserPassword } from "@Request/auth";
import { cleanup } from "@Store/auth";
import Loader from "@Screen/Loader";

const Pin = () => {

    const dispatch = useDispatch();
    const { errors, update, user } = useSelector((state) => state.auth);
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        dispatch(cleanup());
        setStatus(true)
    }, []);

    const dismissKeyboard = () => Keyboard.dismiss();
    const showPin = () => setPinVisibility(!pinVisibility)

    const changePinState = {
        current_password: '',
        new_password: "",
        retype_password: ""
    };

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


    useEffect(() => {
        if (update === "failed" && status) {
            waitTime(errors?.msg, "");
        } else if (update === "success" && status) {
            waitTime("", "Password Updated");
        } else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);

    const submit = async (values) => {
        const { new_password, retype_password, current_password } = values;
        const newValues = { new_password, current_password, retype_password, id: user.id };
        setLoader(true);
        await dispatch(updateUserPassword(newValues));
    };

    return (
        <View style={styles.inputMainHolder}>


            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View>


                    <FormikValidator
                        initialValues={changePinState}
                        validationSchema={changePinSchema}
                        onSubmit={(values) => {
                            submit(values)
                        }}>
                        {props => (
                            <View>
                                <View style={styles.inputOuterView}>
                                    <View>
                                        <View style={[styles.inputHolder, props.touched.current_password && props.errors.current_password ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>CURRENT PIN</Text>
                                            </View>

                                            <InputField
                                                style={styles.innerLabel}
                                                value={props.values.current_password}
                                                onBlur={props.handleBlur('current_password')}
                                                placeholder="****"
                                                secureTextEntry={pinVisibility}
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                onChangeText={(val) => {
                                                    props.setFieldValue('current_password', val)
                                                    props.setFieldTouched('current_password', true, false);
                                                    setErrMsg("")
                                                }}
                                            />
                                            <View style={styles.changeCover}>
                                                {pinVisibility ?
                                                    <TouchableOpacity style={styles.showCover} onPress={showPin}>
                                                        <Text style={styles.showTextPin}>SHOW</Text>
                                                    </TouchableOpacity> :
                                                    <TouchableOpacity style={styles.showCover} onPress={showPin}>
                                                        <Text style={styles.showTextPin}>HIDE</Text>
                                                    </TouchableOpacity>}
                                            </View>
                                        </View>

                                        {props.touched.current_password && props.errors.current_password ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.current_password}</Text>
                                            </View>) : null}
                                    </View>

                                    <View>
                                        <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.new_password && props.errors.new_password ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>NEW PIN</Text>
                                            </View>

                                            <InputField
                                                style={styles.innerLabel}
                                                value={props.values.new_password}
                                                onBlur={props.handleBlur('new_password')}
                                                placeholder="****"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                secureTextEntry={pinVisibility}
                                                onChangeText={(val) => {
                                                    props.setFieldValue('new_password', val)
                                                    props.setFieldTouched('new_password', true, false);
                                                    setErrMsg("");
                                                }}

                                            />
                                            <View style={styles.changeCover}>
                                                {pinVisibility ?
                                                    <TouchableOpacity style={styles.showCover} onPress={showPin}>
                                                        <Text style={styles.showTextPin}>SHOW</Text>
                                                    </TouchableOpacity> :
                                                    <TouchableOpacity style={styles.showCover} onPress={showPin}>
                                                        <Text style={styles.showTextPin}>HIDE</Text>
                                                    </TouchableOpacity>}
                                            </View>


                                        </View>
                                        {props.touched.new_password && props.errors.new_password ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.new_password}</Text>
                                            </View>) : null}
                                    </View>

                                    <View>
                                        <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.retype_password && props.errors.retype_password ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>RE-TYPE NEW PIN</Text>
                                            </View>

                                            <InputField
                                                style={styles.innerLabel}
                                                value={props.values.retype_password}
                                                onBlur={props.handleBlur('retype_password')}
                                                placeholder="****"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                secureTextEntry={pinVisibility}
                                                onChangeText={(val) => {
                                                    props.setFieldValue('retype_password', val)
                                                    props.setFieldTouched('retype_password', true, false);
                                                    setErrMsg("")
                                                }}

                                            />
                                            <View style={styles.changeCover}>
                                                {pinVisibility ?
                                                    <TouchableOpacity style={styles.showCover} onPress={showPin}>
                                                        <Text style={styles.showTextPin}>SHOW</Text>
                                                    </TouchableOpacity> :
                                                    <TouchableOpacity style={styles.showCover} onPress={showPin}>
                                                        <Text style={styles.showTextPin}>HIDE</Text>
                                                    </TouchableOpacity>}
                                            </View>


                                        </View>
                                        {props.touched.retype_password && props.errors.retype_password ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.retype_password}</Text>
                                            </View>) : null}
                                    </View>
                                </View>
                                {errMsg ? <Toast config={toastConfig} /> : null}
                                {successMsg ? <Toast config={toastConfig} /> : null}
                                <View style={[styles.btnCover, errMsg || successMsg ? styles.btnCover2 : null]}>
                                    <Btn title="Change PIN" onPress={props.handleSubmit} style={styles.submit} styles={styles.btnText} />
                                </View>
                            </View>
                        )}

                    </FormikValidator>

                </View>

            </TouchableWithoutFeedback>

            <Loader isVisible={loader} />

        </View>
    )
};

export default Pin;