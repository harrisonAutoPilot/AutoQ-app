import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Keyboard,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    ScrollView,
  } from 'react-native';
  import { useSelector, useDispatch } from 'react-redux';

import styles from "./style";
// import Icon from "react-native-vector-icons/Feather";
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from "react-native-vector-icons/MaterialIcons";
import { InputField, FormikValidator, OnboardinBtn,ContinueBtn, SuccessMsgBottom} from "@Component2";
import { addStoreSchema2 } from "@Helper2/Schema";
import { getState } from '@Request2/State';
import { cleanState } from '@Store2/State';
import { cleanCheckAddress } from '@Store2/Auth';
import { checkAddressDetails } from '@Request2/Auth';
import AddressBottomSheet from "@Screen2/signup/component/bottomSheetAddress";
import CountryCodeBottomSheet from '@Screen2/countryCodeBottomSheet';
import CountryCodeDropdown from '@Screen2/login/phoneNumber/CountryCodeDropdown';
import Loader from '@Screen2/loader';
import disable from "@Helper2/disable";
import { countryCodeList, } from "@Request2/Auth";
import { cleanCountryCodeStatus } from "@Store2/Auth";
import SelectPayment from "./SelectPayment";
// import SelectState from "./SelectState"
// import SelectLga from "./SelectLga"

const Step2 = (props) => {
    const dispatch = useDispatch();
    const registerState2 = props.details;
    const {submit, redirect} = props;
    const dismissKeyboard = () => Keyboard.dismiss();
    const [state_id, setState_id] = useState({});
  

    const { user } = useSelector((state) => state.auth);

    const { states, stateStatus } = useSelector(state => state.state);

console.log("the submittt", props.submit)

    const bottomSheetCode = useRef(null);

    const addressBottomSheet = useRef(null);


  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [myStoreImg, setMyStoreImg] = useState([]);

  const [mylicenseImg, setMyLicenceImg] = useState([])

  const [data, setData] = useState([]);

  const [myValues, setMyValues] = useState({})

  const [title, setTitle] = useState(null);

  const [keys, setKeys] = useState(null);

  const [stateId, setStateId] = useState(null);

  const [lgaId, setLgaId] = useState(null);

  const [err, setErr] = useState(null);

  const [getProps, setProps] = useState(null);

  const [propsname, setPropsName] = useState(null);

  const [loader, setLoader] = useState(false);

  const [errMsg, setErrMsg] = useState(null);

  const [addressProps, setAddressProps] = useState(null);

  const [addressNotFound, setAddressNotFound] = useState(false);




      const waitTime = useCallback(() => {
    
        wait(5000).then(() => {
    
            setErrMsg(null);
    
            // dispatch(cleanCheckEmail())
    
        });
    
    }, []);
    
    
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
    
        props.setFieldValue("address", "")
        console.log("the address", props.values.store_address)
    
        setAddressNotFound(false);
    
      }
    
      console.log("the address", props?.values) 
    
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

      const showDropDownBottomSheet = () => {
        bottomSheetCode.current?.present();
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
    
      const removeLicence = (mylicenseImg, item, props) => {
    
        let arr = mylicenseImg;
    
        arr = arr.filter(x => x !== item);
    
        props.setFieldValue('images', arr)
    
        setMyLicenceImg(arr)
    
      }
    
    
      const removeStore = (myStoreImg, item, props) => {
    
        let arr = myStoreImg;
    
        arr = arr.filter(x => x !== item);
    
        props.setFieldValue('images2', arr)
    
        setMyStoreImg(arr)
    
      }
      const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      };
    

    return (
       

      
                <View style={{flex:1}}>
                   
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>
                            <View style={{justifyContent:'space-between'}}>

                                <View style={styles.formContainer}>
                                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <View style={styles.formContainer}>
                                   <FormikValidator
                                        initialValues={registerState2}
                                        validationSchema={addStoreSchema2}
                                        onSubmit={(values, actions) => {
                                            submit(values)
                                        }}
                                        
                                    >
                                        {props => (
                                        <View style={styles.formContainerStep2}>

                                                <View>
                                                <View style={styles.formFlexInside}>
                                                    <View style={styles.formInputFieldFlex}>
                                                    <View style={styles.inputContainer}>
                                                        <InputField
                                                        title="Store Name"
                                                        placeholder="Store Name"
                                                        placeholderTextColor="#757575"
                                                        name="store_name"
                                                        {...props}
                                                        width="100%"
                                                        />
                                                    </View>

                                                    <View style={styles.inputContainer}>
                                                        <CountryCodeDropdown
                                                        width="100%"
                                                        placeholder="State"
                                                        name="state_id"
                                                        {...props}
                                                        title="State"
                                                        dropDown={() => {
                                                            getStateDetails(props, "state_id")
                                                        }}
                                                        />
                                                    </View>
                                                    {
                                                        props.values.state_id === "" ?
                                                        null
                                                        :
                                                        <View style={styles.inputContainer}>
                                                            <CountryCodeDropdown
                                                            width="100%"
                                                            title="Local Government Area"
                                                            placeholder="Local Government Area"
                                                            name="lga_id"
                                                            {...props}
                                                            dropDown={() => getLgaDetails(props, "lga_id")}

                                                            />
                                                        </View>
                                                    }

                                                    <View>

                                                        {addressNotFound ?
                                                        <>
                                                            <View style={styles.countryCodeView}>

                                                            <InputField
                                                                title="Store Address"
                                                                placeholder="Store Address"
                                                                placeholderTextColor="#757575"
                                                                name="address"
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
                                                    </View>
                                                </View>
                                                </View>

                                            <View style={styles.submitBtnContainerStep2}>
                                            <ContinueBtn
                                            title="Next"
                                            onPress={props.handleSubmit} 
                                            backgroundColor="#3353CB"
                                            color="#fff"   
                                              />
                                              
                                            </View>

                                        </View>
                                        )}
                                    </FormikValidator>
                                    </View>
                                </TouchableWithoutFeedback>
                                </View>

                            </View>

                        </TouchableWithoutFeedback>
                      

                    {errMsg && <View style={styles.toastCover}>
                        <View style={styles.errView} >
                        <MIcon name="error-outline" size={22} color="#fff" />
                        <Text style={styles.errText}>{errMsg}</Text>
                        </View>

                        </View>}
                        <Loader isVisible={loader} />
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
                       
                </View>
            

           
           
       
    )
};

export default Step2;