import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Text, Keyboard,TouchableWithoutFeedback, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "./style";
import { LoginHeader,InputField,  FormikValidator, OnboardinBtn } from "@Component2";
import { checkSignupSchema } from "@Helper2/Schema";
import CountryCodeDropdown from "@Screen2/login/phoneNumber/CountryCodeDropdown";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import { getUserDetails } from "@Store2/Auth";
import { cleanState } from "@Store2/State";
import Loader from "@Screen2/loader";
import disable from "@Helper2/disable";
import { getState } from '@Request2/State';
import { cleanCheckAddress } from '@Store2/Auth';
import { checkAddressDetails } from '@Request2/Auth';
import { cleanup } from '@Store2/Stores';
import { createStoreV2, getStore } from "@Request2/Store";
import AddressBottomSheet from "@Screen2/signupDealer/component/bottomSheetAddress";





const FormStateDetailsDealer = ({ navigation }) => {


    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);


    const goBack = () => navigation.goBack();

    const [data, setData] = useState([]);

    const [title, setTitle] = useState(null);

    const [keys, setKeys] = useState(null);

    const [proffesion, setProffesion] = useState("")

    const [stateId, setStateId] = useState(null);

    const [lgaId, setLgaId] = useState([]);

    const [err, setErr] = useState(null);

    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);

    const [lga, setLga] = useState([])

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);


    const { states, stateStatus, errors } = useSelector((state) => state.state);

  
    const [addressProps, setAddressProps] = useState(null);
  
    const [addressNotFound, setAddressNotFound] = useState(false);
  

    const addressBottomSheet = useRef(null);
  
    const [showRetrieve, setShowRetrieve] = useState(false);
  
    useEffect(() => {
  
      if (stateStatus === "failed") {
        setErr(errors.msg)
      } else {
        setErr(null)
      }
  
    }, [stateStatus])
  

const choicePro = (id) =>{
    console.log("the response",id)
    setProffesion(id)
    setShowRetrieve(false) 
}

const changeProf = () =>{
    setShowRetrieve(true)  
}
  
    const confirmProcess = () => {
      console.log("say i got here")
      setShowConfirmModal(true);
    }
  
    const waitTime = useCallback(() => {
  
      wait(5000).then(() => {
  
          setErrMsg(null);
  
          // dispatch(cleanCheckEmail())
  
      });
  
  }, []);

  

  useEffect(() => {
    wait(1000).then(() => {
        setShowRetrieve(true)
      });

}, [])


  
  
    const proceed = () => {
  
      setShowConfirmModal(false);
  
      checkAddressExists(myValues)
    };
  
  
    const checkAddressExists = (data) => {
  
      dispatch(cleanCheckAddress());
  
      setErrMsg(null);
  
      setLoader(true);
  
      dispatch(checkAddressDetails({ address: myValues.store_address }))
        .unwrap()
        .then((suc) => {
  
            submit(data);
  
        }).catch((err) => {
          // handle error here
          setLoader(false);
  
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
  
  
    const showAddressBottomsheet = (props) => {
  
      setAddressProps(props)
  
      addressBottomSheet.current?.present();
  
    };
  
  
    const closeAddressBottomsheet = () => {
  
      dismissKeyboard()
  
      addressBottomSheet.current?.close();
  
    };
  


  
    const close = () => {
  
      wait(100).then(() => {
  
        closeAddressBottomsheet();
  
      });
  
    };
  
    const closeModal = () => setShowConfirmModal(false);
  

    useEffect(() => {

        setShowRetrieve(true)

    }, [])

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

        navigation.navigate("FormIDUploadDealer");

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

                <Text style={styles.signupTitle}>Business Location</Text>

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
                                            placeholder="State of Residence"
                                            name="state_id"
                                            {...props}
                                            title="State of Residence"
                                            dropDown={() => getStateDetails(props, "state_id")}
                                               
                                                
                                            
                                        />
                                    </View>

                                    <View>

                                            {addressNotFound ?
                                            <>
                                                <View style={styles.countryCodeView}>

                                                <InputField
                                                    title="Store/Business Address"
                                                    placeholder="Store/Business Address"
                                                    placeholderTextColor="#757575"
                                                    name="business_address"
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
                                                <Text style={styles.label}>Store/Business Address</Text>
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
                                   

                                </View>

                                <SafeAreaView>
                                    <View style={styles.scrollViewBottom}>

                                        <OnboardinBtn
                                            title="CONTINUE"
                                            onPress={props.handleSubmit}
                                            backgroundColor="#9ACD32"
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
       {/* <Specialization
        visibleRetrieve={showRetrieve}
        returnBack={() => setShowRetrieve(false)}
        nextScreen={choicePro}
        title="Incorrect Credential"
        message="Sorry wrong credential Please contact admin : 08062585929"
      /> */}

      {errMsg && <View style={styles.toastCover}>
        <View style={styles.errView} >
          <MIcon name="error-outline" size={22} color="#fff" />
          <Text style={styles.errText}>{errMsg}</Text>
        </View>

      </View>}
      <Loader isVisible={loader} />
     
        </View>

    )
};

export default FormStateDetailsDealer;