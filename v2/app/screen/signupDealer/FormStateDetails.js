import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "./style";
import { LoginHeader,  FormikValidator, OnboardinBtn } from "@Component2";
import { checkSignupSchema } from "@Helper2/Schema";
import CountryCodeDropdown from "@Screen2/login/phoneNumber/CountryCodeDropdown";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import { getState } from "@Request2/State";
import { getUserDetails } from "@Store2/Auth";
import { cleanState } from "@Store2/State";
import Loader from "@Screen2/loader";
import disable from "@Helper2/disable";



const FormStateDetails = ({ navigation }) => {


    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);


    const goBack = () => navigation.goBack();

    const [data, setData] = useState([]);

    const [title, setTitle] = useState(null);

    const [keys, setKeys] = useState(null);

    const [stateId, setStateId] = useState(null);

    const [lgaId, setLgaId] = useState([]);

    const [err, setErr] = useState(null);

    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);

    const [lga, setLga] = useState([])

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);




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



    const signupState = {
        state_id: "",
        lgas: [],
    };


    const showDropDownBottomSheet = () => {

        bottomSheetCode.current?.present();

    };

   

    

    const getStateDetails = async (prop, name) => {

        prop.setFieldValue("lgas", []);

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
            setLga(response[0]?.lgas);
      
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



   

    const submit = async (data) => {
        
      const result = lga.filter(lgaa => lgaa.id === lgaId)

        const arr = result.map(object => object.id);
        
        dispatch(getUserDetails({  state_id: stateId, lgas:arr}));

        navigation.navigate("FormImageUpload");

    };


    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >

                <ProgressBar
                     percentage={'58%'}
                />

            </LoginHeader>

            <View style={styles.signupPinTitleContainer}>

                <Text style={styles.signupTitle}>State of Residence</Text>

                <Text style={styles.signupDesc}>Add a profile picture to identify you. Everyone will be able to see your picture.</Text>

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
                        validationSchema={checkSignupSchema}
                        onSubmit={(values) => {
                            submit(values)
                        }}>

                        {props => (

                            <ScrollView 
                            showsVerticalScrollIndicator={false} 
                            contentContainerStyle={styles.scrollViewContainer}>

                                <View style={styles.scrollViewTop}>

                                   

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

                                    { props.values.state_id === "" ?

                                    null:
                                    <View style={styles.countryCodeView}>
                                        <CountryCodeDropdown
                                            width="100%"
                                            title="Local Government Area"
                                            placeholder="Local Government Area"
                                            name="lgas"
                                            {...props}
                                            dropDown={() => getLgaDetails(props, "lgas")}

                                        />

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

        
            <Loader isVisible={loader} />

        </View>

    )
};

export default FormStateDetails;