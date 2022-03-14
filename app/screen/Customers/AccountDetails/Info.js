import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import Dropdown from './Dropdown';
// import StoreView from "@Screen/StoreOverlay"

import styles from "./style";
import globalStyles from "@Helper/GlobalStyles";
import { FormikValidator, InputField, SuccessMsgViewTwo } from "@Component";
import { profileSchema } from "@Helper/Schema";
import { updateUserDetails, getUser } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import Loader from "@Screen/Loader";
import data from './data'

const CustomerInfo = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);
    const [selected, setSelected] = useState({});
    const bottomSheetStore = useRef();
    const bottomSheetStoreDetail = useRef();
    const details = props.details;

    useEffect(() => {
        dispatch(cleanup())
    }, []);

    const { } = useSelector((state) => state.agent);

    const closeSheet = () => {
        bottomSheetStore.current.close();
    };

    const viewStore = () => {
        bottomSheetStore.current.show();
    };

    const profileState = {
        firstname: details?.name?.substr(0, details.name.indexOf(' ')) ,
        surname:  details?.name.substr(details?.name.indexOf(' ') + 1),
        phone:  details?.phone,
    };

    const submit = async (values) => {
        const { firstname, surname, phone, amount } = values;
        const newValue = { name: `${firstname} ${surname} ${phone} ${amount}` };
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

    // useEffect(() => {
    //     if (update === "failed") {
    //         setSuccessMsg("");
    //         waitTime(errors?.msg);
    //     } else if (update === "success") {
    //         dispatch(getUser());
    //         waitTime("", "User Updated");
    //     } else {
    //         setSuccessMsg("");
    //         setErrMsg("");
    //     }
    // }, [update]);

    const data = [

        { label: 'CHEMIST', value: 'CHEMIST', },
        { label: 'HOSPITAL', value: 'HOSPITAL', },
        { label: 'PHARMACY', value: 'PHARMACY', },
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollStyle}
            >
                <View style={styles.bottomCover}>
                    <View style={styles.statusContainer}>
                        <View style={styles.dateCover}>
                            <Text style={styles.dateTitle}>Date Registered</Text>
                            <Text style={styles.date}>24/10/22</Text>
                        </View>
                        <View style={styles.statusCover}>
                            <Text style={styles.statusTitle}>Status</Text>
                            <View style={styles.activeBtn}>
                                <Text style={styles.activeBtnText}>Active</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCover} >
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioText}>BIO DATA</Text>
                        </View>
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

                                                    </View>
                                                    <View>
                                                        <View style={[styles.inputHolder, props.touched.surname && props.errors.surname ? styles.inputErrHolder : null]}>
                                                            <View style={styles.labelView}>
                                                                <Text style={styles.label}>PHONE</Text>
                                                            </View>
                                                            <InputField
                                                                style={styles.innerLabelPhone}
                                                                value={props.values.phone}
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
                                                            <View style={styles.flag}>
                                                                <Image style={styles.nigImg} source={require("@Assets/image/nigeria.png")} />
                                                            </View>
                                                        </View>

                                                    </View>
                                                </View>

                                            </View>
                                        )}

                                    </FormikValidator>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>

                    </View>

                    <View style={styles.cardCover} >
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioText}>STORE DETAILS</Text>
                        </View>
                        <View style={styles.inputMainHolder}>

                            <View style={styles.inputHolderSelect}>
                                <View style={styles.labelView}>
                                    <Text style={styles.label}>TYPE OF STORE</Text>
                                </View>
                                <Dropdown label="Select store type" storeAddress="" data={data} onSelect={setSelected} />

                            </View>
                            <TouchableOpacity onPress={viewStore} style={styles.viewStoreTitleCover}>
                                    <Text style={styles.viewStoreTitleText}>VIEW STORE(S)</Text>
                                    <Image style={styles.rightImg} source={require("@Assets/image/blueRight.png")} />
                           
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.cardCover} >
                        <View style={styles.inputMainHolder}>
                            <View style={styles.docTitleCover}>
                                <Text style={styles.bioText}>DOCUMENTATION</Text>
                            </View>
                            <View style={styles.smCardCover}>
                                <View style={styles.smCard}>
                                    <View>
                                        <Text style={styles.docTitle}>Pharmacy License</Text>
                                    </View>

                                    <View style={styles.docFeature}>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={styles.docViewText}>VIEW</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={styles.docChangeText}>CHANGE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.smCardCover}>
                                <View style={styles.smCard}>
                                    <View>
                                        <Text style={styles.docTitle}>Pharmacy License</Text>
                                    </View>

                                    <View style={styles.docFeature}>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={styles.docViewText}>VIEW</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={styles.docChangeText}>CHANGE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.smCardCover}>
                                <View style={styles.smCard}>
                                    <View>
                                        <Text style={styles.docTitle}>Pharmacy License</Text>
                                    </View>

                                    <View style={styles.docFeature}>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={styles.docViewText}>VIEW</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={styles.docChangeText}>CHANGE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>







                </View>

                <Loader isVisible={loader} />
                {errMsg ? <Toast config={toastConfig} /> : null}
                {successMsg ? <Toast config={toastConfig} /> : null}
                <View style={[styles.btnCover]}>
                    {/* <Btn title="Update Information" onPress={props.handleSubmit} style={styles.submit} styles={styles.btnText} /> */}
                </View>
            </ScrollView>

            {/* <StoreView
                bottomSheetStore={bottomSheetStore}
                bottomSheetClose = {closeSheet}
               
            /> */}



        </View>
    )
};

export default CustomerInfo;