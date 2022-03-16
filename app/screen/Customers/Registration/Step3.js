import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Keyboard, ScrollView, Image, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import FIcon from "react-native-vector-icons/MaterialIcons";
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'
import styles from "./style";
import globalStyles from "@Helper/GlobalStyles";
import { BtnLg, BtnPre, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import { profileSchema, registerSchema } from "@Helper/Schema";
import { updateUserDetails, getUser } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import Loader from "@Screen/Loader";
import SelectState from "./SelectState"
import SelectLga from "./SelectLga"
import RegConfirm from "./RegConfirmOverlay"
// import { DatePicker } from "./DatePicker";
import data from './data'
import data2 from "./data2";

const Step3 = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);
    const bottomSheetRegConfirm = useRef();
    const [activeId, setActiveId] = useState(1);
    const [search, setSearch] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [category, setCategory] = useState("");
    const [date, setDate] = useState('09-10-2021');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);





    const closeSheet = () => {
        bottomSheetRegConfirm.current.close();
    };
    const openSheet = () => {
        bottomSheetRegConfirm.current.show();
    };

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
                                                <View>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>NAME OF REGISTERED PHARMACIST</Text>
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

                                                <View style={styles.inputCover2}>
                                                    <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.surname && props.errors.surname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>EXPIRATION DATE</Text>
                                                        </View>

                                                        <DatePicker
                                                            style={styles.datePickerStyle}
                                                            iconSource={require("@Assets/image/date.png")}
                                                            date={date}
                                                            mode="date"
                                                            placeholder="select date"
                                                            format="DD/MM/YYYY"
                                                            minDate="01-01-1900"
                                                            maxDate="01-01-2000"
                                                            confirmBtnText="Confirm"
                                                            cancelBtnText="Cancel"
                                                            customStyles={{
                                                                dateIcon: {
                                                                    position: 'absolute',
                                                                    right: -5,
                                                                    top: 4,
                                                                    marginLeft: 0,
                                                                    width: 25,
                                                                    height: 25,
                                                                    resizeMode: 'contain'
                                                                },
                                                                dateInput: {
                                                                    borderColor: "gray",
                                                                    alignItems: "flex-start",
                                                                    borderWidth: 0,
                                                                    borderBottomWidth: 0,
                                                                },
                                                                placeholderText: {
                                                                    fontSize: 17,
                                                                    color: "gray"
                                                                },
                                                                dateText: {
                                                                    fontSize: 17,
                                                                }
                                                            }}
                                                            onDateChange={(date) => {
                                                                setDate(date);
                                                            }}
                                                        />
                                                    </View>
                                                    {props.touched.surname && props.errors.surname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.surname}</Text>
                                                        </View>) : null}
                                                </View>


                                                <View style={styles.inputCoverr}>
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
                                                <View style={styles.inputCoverr}>
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
                                                <View style={styles.inputCoverr}>
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