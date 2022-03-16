import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Keyboard, ScrollView, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import FIcon from "react-native-vector-icons/MaterialIcons";

import styles from "./style";
import globalStyles from "@Helper/GlobalStyles";
import {  BtnLg, AuthBtn as BtnPre, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component";
import { profileSchema, registerSchema } from "@Helper/Schema";
import { updateUserDetails, getUser } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import Loader from "@Screen/Loader";
import SelectState from "./SelectState"
import SelectLga from "./SelectLga"
import data2 from "./data2";

const Step2 = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);

    const [activeId, setActiveId] = useState(1);
    const [search, setSearch] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [category, setCategory] = useState("");
    const [active, setActive] = useState("0");

    const selectUserType = id => {
        setActive(id);
    };

    const redirectToRegisterDetails = () => {
        if (!category.length) {
            setErrMsg("Please select a category")
        } else {
            props.navigation.navigate("Register", { category });
        }
    };


    useEffect(() => {
        dispatch(cleanup())
    }, []);

    const { user, errors, update } = useSelector((state) => state.auth);


    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: user.id };
        setLoader(true)
        await dispatch(updateUserDetails(newValue))
    };
    const redirectToPreviousScreen = () => props.navigation.goBack();

    const redirectToLogin = () => props.navigation.navigate("Login");
    const showPin = () => setPinVisibility(!pinVisibility)

    const registerState = {
        phone: "",
        email: "",
        password: "",
        firstname: "",
        surname: "",
        store: "",
        c_password: ""
    };
    const redirectToSort = () => {

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


    const RenderItem = ({ item, index }) => {
        return (
            <View>
                {data2.map((item) => (
                    <View style={[styles.optionView, item.id === "1" ? styles.optionViewBetween1 : styles.optionViewBetween2]} key={item.id}>
                        <View style={active === item.id ? styles.optionIconView : styles.optionIconView2}>
                            <TouchableOpacity onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                                {active === item.id ?
                                    <TouchableOpacity style={styles.iconCircle} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                                        <FIcon name="lens" size={12} color="#469D00" style={styles.icon} />
                                    </TouchableOpacity >
                                    :
                                    <TouchableOpacity style={styles.iconCircle2} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>

                                    </TouchableOpacity>
                                }
                            </TouchableOpacity>
                        </View>
                        {active === item.id ?
                            <TouchableOpacity style={styles.optionTextViewNew} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                                <Text style={styles.optionText}>{item.title}</Text>
                                <View style={styles.optionMiniTextView}>
                                    <Text style={styles.onboardSubTitle1}>{item.desc}</Text>
                                </View>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.optionTextView} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                                <Text style={styles.optionText}>{item.title}</Text>
                                <View style={styles.optionMiniTextView}>
                                    <Text style={styles.onboardSubTitle1}>{item.desc}</Text>
                                </View>
                            </TouchableOpacity>}
                    </View>
                ))}
            </View>
        )
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
                            <Text style={styles.bioTitleText}>STORE</Text>
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
                                                <View>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STORE NAME</Text>
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
                                                            <Text style={styles.label}>STREET ADDRESS</Text>
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
                                                    <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STATE</Text>
                                                        </View>

                                                        <SelectState />

                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View>
                                                    <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>LGA</Text>
                                                        </View>

                                                        <SelectLga />

                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
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
                        <BtnLg title="Complete" onPress={props.handleSubmit} style={styles.submitStep2} stylea={styles.angleImg} styles={styles.preText1} />
                    </View>
                </View>


                <Loader isVisible={loader} />
            </ScrollView>
        </View>
    )
};

export default Step2;