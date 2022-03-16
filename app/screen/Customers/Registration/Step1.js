import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import FIcon from "react-native-vector-icons/MaterialIcons";

import styles from "./style";
import globalStyles from "@Helper/GlobalStyles";
import { BtnLg, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component";
import { profileSchema, registerSchema } from "@Helper/Schema";
import { updateUserDetails, getUser } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import Loader from "@Screen/Loader";
import data2 from "./data2";

const Step1 = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);
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


    const registerState = {
        phone: "",
        email: "",
        password: "",
        firstname: "",
        surname: "",
        store: "",
        c_password: ""
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


    const RenderItem = ({ item }) => {
        return (
            <View style={[styles.optionView, active === item.id ? styles.optionViewBetween1 : styles.optionViewBetween2]} key={item.id}>
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
        )
    };

    return (
            <ScrollView
                indicatorStyle="white"
                contentContainerStyle={[
                    styles.scrollContentContainer
                ]}
                horizontal={false} showsVerticalScrollIndicator={false} 
                >
                       <ScrollView
                        horizontal={true}
              >

                <View style={styles.bottomCover}>
                    <View style={styles.card}>
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioTitleText}>BIO DATA</Text>
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
                                                            <Text style={styles.label}>FIRST NAME</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.label3}
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
                                                            style={styles.label3}
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
                                                            <Text style={styles.label}>PHONE</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.innerLabelPhone}
                                                            value={props.values.phone}
                                                            onBlur={props.handleBlur('phone')}
                                                            placeholder="234809XXXXXXX"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('phone', val)
                                                                props.setFieldTouched('phone', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                        <View style={styles.flag}>
                                                            <Image style={styles.nigImg} source={require("@Assets/image/nigeria.png")} />
                                                        </View>
                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View>
                                                    <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.email && props.errors.email ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>EMAIL</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.label3}
                                                            value={props.values.email}
                                                            onBlur={props.handleBlur('email')}
                                                            placeholder="jameskingsley@email.com"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="number-pad"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('email', val)
                                                                props.setFieldTouched('email', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                    </View>
                                                    {props.touched.email && props.errors.email ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.email}</Text>
                                                        </View>) : null}
                                                </View>

                                            </View>
                                        )}

                                    </FormikValidator>
                                </View>

                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                    <View style={styles.card1}>
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioTitleText}>TYPE OF STORE</Text>
                        </View>
                        <View style={styles.flatCover}>

                            <FlatList
                                data={data2}
                                renderItem={RenderItem}
                                keyExtractor={item => item.id}

                            />

                        </View>

                    </View>
                    <View style={styles.btnCover}>
                        <BtnLg title="Next" onPress={props.handleSubmit} style={styles.submit} stylea={styles.angleImg} />
                    </View>
                </View>

                <Loader isVisible={loader} />
                </ScrollView>
            </ScrollView>
    )
};

export default Step1;