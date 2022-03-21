import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Keyboard, ScrollView, Image, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import globalStyles from "@Helper/GlobalStyles";
import { BtnLg, BtnPre, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import {registerSchema } from "@Helper/Schema";
import { updateUserDetails} from "@Request/Auth";
import Loader from "@Screen/Loader";
import RegConfirm from "./RegConfirmOverlay"

const Step3 = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);
    const bottomSheetRegConfirm = useRef();
    const [date, setDate] = useState('09-10-2021');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const closeSheet = () => {
        bottomSheetRegConfirm.current.close();
    };
    const openSheet = () => {
        bottomSheetRegConfirm.current.show();
    };

    const { user, errors, update } = useSelector((state) => state.auth);


    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: user.id };
        setLoader(true)
        await dispatch(updateUserDetails(newValue))
    };
 

    const registerState = {
        phone: "",
        email: "",
        password: "",
        firstname: "",
        surname: "",
        store: "",
        c_password: ""
    };
  
    

    return (
        <View style={styles.container}>
            <ScrollView
                indicatorStyle="white"
                contentContainerStyle={[
                    styles.scrollContentContainer,
                    { paddingBottom: 10 },
                ]}>

                <View style={styles.bottomCover}>
                    <View style={styles.card}>
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioTitleText}>DOCUMENTATION</Text>
                        </View>
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
                                                   
                                                <View >
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>PHARMACIST LICENSE</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                        <TouchableOpacity>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {props.touched.firstname && props.errors.firstname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View >
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STORE PHOTO 1</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                        <TouchableOpacity>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {props.touched.firstname && props.errors.firstname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                        </View>) : null}

                                                </View>
                                                <View>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STORE PHOTO 2</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                        <TouchableOpacity>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {props.touched.firstname && props.errors.firstname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                        </View>) : null}

                                                </View>



                                            </View>



                                        )}

                                    </FormikValidator>
                                </View>

                            </TouchableWithoutFeedback>



                        </View>

                    </View>

                    <View style={styles.btnStep2Cover}>
                        <BtnPre title="Previous" onPress={props.handleSubmit} style={styles.submitStep3} stylea={styles.angleImg} styles={styles.preText} />
                        <BtnLg title="Complete" onPress={openSheet} style={styles.submitStep2} stylea={styles.angleImg} styles={styles.preText1} />
                    </View>
                </View>


                <Loader isVisible={loader} />
            </ScrollView>

            <RegConfirm
                bottomSheetRegConfirm={bottomSheetRegConfirm}
                closeSheet={closeSheet}
            />
        </View>
    )
};

export default Step3;