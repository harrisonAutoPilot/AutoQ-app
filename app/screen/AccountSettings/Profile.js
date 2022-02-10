import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import styles from "./style";
import globalStyles from "@Helper/globalStyles";
import { Btn, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import { profileSchema } from "@Helper/schema";
import { updateUserDetails, getUser } from "@Request/auth";
import { cleanup } from "@Store/auth";
import Loader from "@Screen/Loader";

const Profile = () => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        dispatch(cleanup())
    }, []);

    const { user, errors, update } = useSelector((state) => state.auth);

    const profileState = {
        firstname: user?.name ? user.name.substr(0, user.name.indexOf(' ')) : '',
        surname: user?.name ? user.name.substr(user.name.indexOf(' ') + 1) : "",
    };
    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: user.id };
        setLoader(true)
        await dispatch(updateUserDetails(newValue))
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            setErrMsg(errmsg);
            setSuccessMsg(sucmsg);
            if (sucmsg) {
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
            <View style={[globalStyles.errMainView]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
        <SuccessMsgViewTwo title={successMsg} />
        )
    };

    useEffect(() => {
        if (update === "failed") {
            setSuccessMsg("");
            waitTime(errors?.msg);
        } else if (update === "success") {
            dispatch(getUser());
            waitTime("", "User Updated");
        } else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);

    return (
        <View style={styles.inputMainHolder}>
           
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View>
                   

                    <FormikValidator
                        initialValues={profileState}
                        validationSchema={profileSchema}
                        onSubmit={(values) => {
                            submit(values)
                        }}>
                        {props => (
                            <View>
                                <View style={styles.inputOuterView}>
                                    <View>
                                        <View style={[styles.inputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>FIRST NAME</Text>
                                            </View>

                                            <InputField
                                                style={styles.innerLabel}
                                                value={props.values.firstname}
                                                onBlur={props.handleBlur('firstname')}
                                                placeholder="Kingsley"
                                                placeholderTextColor="#757575"
                                                onChangeText={(val) => {
                                                    props.setFieldValue('firstname', val)
                                                    props.setFieldTouched('firstname', true, false);
                                                    setErrMsg("");
                                                    setSuccessMsg("")
                                                }}
                                            />
                                        </View>
                                        {props.touched.firstname && props.errors.firstname ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.firstname}</Text>
                                            </View>) : null}
                                    </View>
                                    <View>
                                        <View style={[styles.inputHolder, props.touched.surname && props.errors.surname ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>LAST NAME</Text>
                                            </View>
                                            <InputField
                                                style={styles.innerLabel}
                                                value={props.values.surname}
                                                onBlur={props.handleBlur('surname')}
                                                placeholder="James"
                                                placeholderTextColor="#757575"
                                                onChangeText={(val) => {
                                                    props.setFieldValue('surname', val)
                                                    props.setFieldTouched('surname', true, false);
                                                    setErrMsg("");;
                                                    setSuccessMsg("")
                                                }}
                                            />
                                        </View>
                                        {props.touched.surname && props.errors.surname ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.surname}</Text>
                                            </View>) : null}
                                    </View>
                                </View>
                                {errMsg ? <Toast config={toastConfig} /> : null}
                                  {successMsg ? <Toast config={toastConfig} /> : null}
                                <View style={[styles.btnCover]}>
                                    <Btn title="Update Account" onPress={props.handleSubmit} style={styles.submit} styles={styles.btnText} />
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

export default Profile;