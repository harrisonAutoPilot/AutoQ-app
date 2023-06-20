import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as Progress from 'react-native-progress';
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "./style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import { storeSignupSchema } from "@Helper2/Schema";
import CountryCodeDropdown from "@Screen2/login/phoneNumber/CountryCodeDropdown";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import { getState } from "@Request2/State";
import { getUserDetails, cleanCheckAddress } from "@Store2/Auth";
import { cleanState } from "@Store2/State";
import { checkAddressDetails } from "@Request2/Auth";
import Loader from "@Screen2/loader";
import AddressBottomSheet from "./component/bottomSheetAddress";
import disable from "@Helper2/disable";



const FormStoreDetails = ({ navigation }) => {


    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);

    const addressBottomSheet = useRef(null);


    const goBack = () => navigation.goBack();

    const [data, setData] = useState([]);

    const [title, setTitle] = useState(null);

    const [keys, setKeys] = useState(null);

    const [stateId, setStateId] = useState(null);

    const [lgaId, setLgaId] = useState(null);

    const [err, setErr] = useState(null);

    const [progress, setProgress] = useState(0.5);

    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);

    const [addressProps, setAddressProps] = useState(null);

    const [addressNotFound, setAddressNotFound] = useState(false);


    const { states, stateStatus, errors } = useSelector((state) => state.state);


    useEffect(() => {

        if (stateStatus === "failed") {
            setErr(errors.msg)
        } else {
            setErr(null)
        }

    }, [stateStatus])


    useEffect(() => {

        if (stateStatus === "failed") {
            setErr(errors.msg)
        } else {
            setErr(null)
        }

    }, [stateStatus])

    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(0.625)
            }, 300);
        }, 800);

    }, [])


    const signupState = {
        store_address: "",
        store_name: "",
        state_id: "",
        lga_id: ""
    };


    const showDropDownBottomSheet = () => {

        bottomSheetCode.current?.present();

    };

    const showAddressBottomsheet = (props) => {

        setAddressProps(props)

        addressBottomSheet.current?.present();

    };

    const closeAddressBottomsheet = () => {

        dismissKeyboard()

        addressBottomSheet.current?.close();

    };

    const getStateDetails = async (prop, name) => {

        prop.setFieldValue("lga_id", "");

        setErr(null);

        showDropDownBottomSheet();

        setData([]);

        setTitle("Select State");

        setKeys(2);

        setProps(prop);

        setPropsName(name);


        if (stateStatus !== "success" && stateStatus !== "pending") {

            const response = await dispatch(getState());

            setData(response.payload);

        } else {
            setData(states)
        }
    };


    const getLgaDetails = (prop, name) => {

        showDropDownBottomSheet();

        setData([]);

        setTitle("Select Lga");

        setKeys(3);

        setProps(prop);

        setPropsName(name);

        if (!prop.values.state_id) {

            setErr("Select a State");

        }

        if (states.length) {

            const response = states.filter(lga => {

                return lga.name === prop.values.state_id

            });
            setData(response[0]?.lgas);
        }
    };


    const closeDropDownBottomSheet = () => {

        if (stateStatus === "failed") {

            dispatch(cleanState());

        }

        bottomSheetCode.current?.close();

    };


    const dismissKeyboard = () => Keyboard.dismiss();


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTime = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

            dispatch(cleanCheckAddress())

        });

    }, []);

    const close = useCallback(() => {

        wait(100).then(() => {

            closeAddressBottomsheet();
          

        });

    }, []);


    const submit = async ({ store_name, store_address }) => {

        dispatch(getUserDetails({ store_name, store_address, state_id: stateId, lga_id: lgaId }));

        navigation.navigate("FormPinDetails");

    };

    const checkAddressExists = (data) => {

        dispatch(cleanCheckAddress());

        setErrMsg(null);

        setLoader(true);

        dispatch(checkAddressDetails({ address: data.store_address }))
            .unwrap()
            .then((suc) => {

                if (suc) {

                    submit(data);

                    setLoader(false);
                }
            }).catch((err) => {
                // handle error here
                setLoader(false)

                setErrMsg(err?.msg);

                waitTime()
            })
    };

    const showAddressNotFound = () => {

        setAddressNotFound(true);

        closeAddressBottomsheet();

    };

    const showAddressFound = (props) => {

        props.setFieldValue("store_address", "")

        setAddressNotFound(false);

    }



    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >

                <Progress.Bar
                    progress={progress}
                    width={null}
                    color="rgba(132, 217, 148, 1)"
                    height={4}
                    unfilledColor="rgba(226, 225, 236, 1)"
                    borderWidth={0}

                />

            </LoginHeader>

            <View style={styles.signupPinTitleContainer}>

                <Text style={styles.signupTitle}>Store Address</Text>

                <Text style={styles.signupDesc}>By law we need your address to complete your registration</Text>

                {errMsg &&
                    <View style={styles.errView} >
                        <Icon name="error-outline" size={22} color="#fff" />
                        <Text style={styles.errText}>{errMsg}</Text>
                    </View>

                }

                <TouchableWithoutFeedback onPress={dismissKeyboard}>

                    <FormikValidator
                        style={styles.formFlex}
                        initialValues={signupState}
                        validationSchema={storeSignupSchema}
                        onSubmit={(values) => {
                            checkAddressExists(values)
                        }}>

                        {props => (

                            <ScrollView 
                            showsVerticalScrollIndicator={false} 
                            contentContainerStyle={styles.scrollViewContainer}>

                                <View style={styles.scrollViewTop}>

                                    <View style={styles.countryCodeView}>

                                        <InputField
                                            title="Store Name"
                                            placeholder="Store Name"
                                            placeholderTextColor="#757575"
                                            name="store_name"
                                            {...props}
                                            width="100%"
                                        />

                                    </View>
                                    

                                    <View style={styles.countryCodeView}>

                                        <CountryCodeDropdown
                                            width="100%"
                                            placeholder="State"
                                            name="state_id"
                                            {...props}
                                            title="State"
                                            dropDown={() => getStateDetails(props, "state_id")}
                                        />
                                    </View>


                                    <View style={styles.countryCodeView}>
                                        <CountryCodeDropdown
                                            width="100%"
                                            title="Local Government Area"
                                            placeholder="Local Government Area"
                                            name="lga_id"
                                            {...props}
                                            dropDown={() => getLgaDetails(props, "lga_id")}

                                        />

                                    </View>

                                    {addressNotFound ?

                                        <>
                                            <View style={styles.countryCodeView}>

                                                <InputField
                                                    title="Store Address"
                                                    placeholder="Store Address"
                                                    placeholderTextColor="#757575"
                                                    name="store_address"
                                                    {...props}
                                                    width="100%"
                                                />

                                            </View>
                                            <TouchableOpacity style={styles.addressFoundView} onPress={() => showAddressFound(props)}>
                                                <Text style={styles.labelTitle}>Search for Address?</Text>
                                            </TouchableOpacity>
                                        </>

                                        :

                                        <View style={styles.inputHolder}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>Store Address</Text>
                                            </View>
                                            <View style={styles.getAddressView}>
                                                <Text style={styles.labelTitleAddress}>{props.values.store_address}</Text>
                                                <TouchableOpacity style={styles.getAddress} onPress={() => showAddressBottomsheet(props)}>
                                                    <Text style={styles.getAddressText}>Get address</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    }

                                </View>

                                <SafeAreaView>
                                    <View style={styles.scrollViewBottom}>

                                        <OnboardinBtn
                                            title="CONTINUE"
                                            onPress={props.handleSubmit}
                                            backgroundColor="#3353CB"
                                            color="#fff"
                                            disabled={disable(props)}
                                            disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                        />

                                    </View>
                                </SafeAreaView>
                            </ScrollView>


                        )}

                    </FormikValidator>
                </TouchableWithoutFeedback>

            </View>


            <CountryCodeBottomSheet
                bottomSheetRef={bottomSheetCode}
                closeBottomSheet={closeDropDownBottomSheet}
                name={title}
                data={data}
                status={stateStatus}
                keys={keys}
                itemKey="name"
                err={err}
                ids={keys == 3 ? setLgaId : setStateId}
                getProps={getProps}
                propsname={propsname}
            />

            <AddressBottomSheet
                bottomSheetRef={addressBottomSheet}
                closeBottomSheet={closeAddressBottomsheet}
                prop={addressProps}
                setAddressNotFound={showAddressNotFound}
                wait={close}
            />

            <Loader isVisible={loader} />

        </View>

    )
};

export default FormStoreDetails;