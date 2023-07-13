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
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from "react-native-vector-icons/MaterialIcons";


import {
  InputField,
  TransactionHeader,
  FormikValidator,
  OnboardinBtn,
} from '@Component2';
import { storeSignupSchema } from '@Helper2/Schema';
import CountryCodeDropdown from '@Screen2/login/phoneNumber/CountryCodeDropdown';
import CountryCodeBottomSheet from '@Screen2/countryCodeBottomSheet';
import { getState } from '@Request2/State';
import { cleanState } from '@Store2/State';
import { cleanCheckAddress } from '@Store2/Auth';
import { checkAddressDetails } from '@Request2/Auth';
import { cleanup } from '@Store2/Stores';
import { createStoreV2, getStore } from "@Request2/Store";
import styles from './style';
import Loader from '@Screen2/loader';
import ConfirmModal from './confirmModal';
import disable from "@Helper2/disable";
import AddressBottomSheet from "@Screen2/signup/component/bottomSheetAddress";



const AddStore = (props) => {

  const [showInfo, setShowInfo] = useState(false);

  const [showImages, setShowImages] = useState(false);

  const [showLicence, setShowLicence] = useState(false);

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


  const { user } = useSelector((state) => state.auth);

  const { states, stateStatus } = useSelector(state => state.state);

  const { createStore, errors } = useSelector(state => state.store);

  const bottomSheetCode = useRef(null);

  const addressBottomSheet = useRef(null);

  const dispatch = useDispatch();

  const addStoreState = {
    store_name: "",
    address: "",
    state_id: "",
    lga_id: "",
    images: [],
    images2: []
  };


  useEffect(() => {

    if (stateStatus === "failed") {
      setErr(errors.msg)
    } else {
      setErr(null)
    }

  }, [stateStatus])

  useEffect(() => {
    if (createStore === "success") {

      setLoader(false);

      props.navigation.navigate("StoreSuccess");

      dispatch(cleanup());

      dispatch(getStore());

    } else if (createStore === "failed") {

      refreshView(errors?.msg)

    }
  }, [createStore]);

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

  const returnBack = () => {
    props.navigation.goBack();
  };

  const hideInfo = () => {
    setShowInfo(true);
  };

  const viewInfo = () => {
    setShowInfo(false);
  };

  const hideImages = () => {
    setShowImages(true);
  };

  const viewImages = () => {
    setShowImages(false);
  };

  const viewLicence = () => {
    setShowLicence(false);
  }

  const hideLicence = () => {
    setShowLicence(true)
  }

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


  const licenseImg = (id, props) => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: false,
      mediaType: 'photo',
    })
      .then(images => {
        setErrMsg(null);
        if (id === 1) {

          const img = images.map(img => {
            const uri =
              Platform.OS === 'android'
                ? img.path
                : img.path.replace('file:///', '');
            const filename = img.path.split('/').pop();
            const match = /\.(\w+)$/.exec(filename);
            const ext = match?.[1];
            const imageFile = {
              uri,
              name: `image.${ext}`,
              type: img.mime,
            };
            return (imageFile)

          })

          setMyLicenceImg(img);

          props.setFieldValue('images', img)

        } else {

          const img = images.map(img => {
            const uri =
              Platform.OS === 'android'
                ? img.path
                : img.path.replace('file:///', '');
            const filename = img.path.split('/').pop();
            const match = /\.(\w+)$/.exec(filename);
            const ext = match?.[1];
            const imageFile = {
              uri,
              name: `image.${ext}`,
              type: img.mime,
            };
            return (imageFile)

          })

          setMyStoreImg(img);

          props.setFieldValue('images2', img)
        }
      })
      .catch(err => {
        console.log(err);
      });
  };


  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  const submit = ({ store_name, store_address, images, images2 }) => {

    const newValues = {
      name: store_name, address: store_address, state_id: stateId,
      lga_id: lgaId, images2: images2, images: images, user_id: user.id
    };

    dispatch(createStoreV2(newValues))

  };


  const refreshView = useCallback((msg) => {
    wait(100).then(() => {

      setLoader(false);
    
      setErrMsg(msg);
 
    })

    wait(4000).then(() => {

      dispatch(cleanup());

      setErrMsg(null);

    });

  }, []);

  // this is to display the licence images
  const LicenceImageSelection = ({props}) =>
    mylicenseImg?.map((item, index) => (
      <View style={styles.photoCo} key={index}>
        <Image source={{ uri: `${item?.uri}` }} style={styles.photoCover} />
        <TouchableOpacity style={styles.cancelCover} onPress={() => removeLicence(mylicenseImg, item, props)}>
          <Image
            source={require('@Assets2/image/cancel.png')}
            style={styles.cancelImg}
          />
        </TouchableOpacity>
      </View>
    ));

  // this is to display the licence images
  const StoreImageSelection = ({props}) =>
    myStoreImg?.map((item, index) => (
      <View style={styles.photoCo} key={index}>
        <Image source={{ uri: `${item?.uri}` }} style={styles.photoCover} />
        <TouchableOpacity style={styles.cancelCover} onPress={() => removeStore(myStoreImg, item, props)}>
          <Image
            source={require('@Assets2/image/cancel.png')}
            style={styles.cancelImg}
          />
        </TouchableOpacity>
      </View>
    ));


  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <View style={styles.container}>

      <TransactionHeader title="Add Store" onPress={returnBack} />

      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.scrollStyle}
      >
        <View style={styles.titleCover}>
          <Text style={styles.titleText}>STORE INFORMATION</Text>

          {showInfo ? (
            <TouchableOpacity onPress={viewInfo}>
              <Icon name="chevron-up" size={20} color="#000" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={hideInfo}>
              <Icon name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.formContainer}>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.formContainer}>
              <FormikValidator
                style={styles.formContainer}
                initialValues={addStoreState}
                validationSchema={storeSignupSchema}
                onSubmit={values => {
                  setMyValues(values);
                  confirmProcess(values);

                }}>
                {props => (
                  <View style={styles.formContainer}>
                    <View style={styles.formContainer}>
                      {!showInfo ? (
                        <View>
                          <View style={styles.formFlexInside}>
                            <View style={styles.formInputFieldFlex}>
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
                                  dropDown={() => {
                                    getStateDetails(props, "state_id")
                                  }}
                                />
                              </View>
                              {
                                props.values.state_id === "" ?
                                  null
                                  :
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
                              }

                              <View>

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
                            </View>
                          </View>
                        </View>
                      ) : null}

                      <View style={styles.titleCoverImage}>
                        <Text style={styles.titleText}>LICENCE IMAGES</Text>
                        {showLicence ? (
                          <TouchableOpacity onPress={viewLicence}>
                            <Icon name="chevron-up" size={20} color="#000" />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={hideLicence}>
                            <Icon name="chevron-down" size={20} color="#000" />
                          </TouchableOpacity>
                        )}
                      </View>

                      {!showLicence ? (
                        <View style={styles.bottomCover}>
                          <TouchableOpacity
                            style={styles.addBtn}
                            onPress={() => licenseImg(1, props)}>
                            <Icon
                              name="camera-plus-outline"
                              color="#767680"
                              size={18}
                            />
                            <Text style={styles.addText}>Add Licenses</Text>
                          </TouchableOpacity>

                          <View style={styles.photoContainer}>

                            <LicenceImageSelection  props={props}/>

                          </View>

                        </View>
                      ) : null}

                      <View style={styles.titleCoverImage}>
                        <Text style={styles.titleText}>STORE IMAGES</Text>

                        {showImages ? (
                          <TouchableOpacity onPress={viewImages}>
                            <Icon name="chevron-up" size={20} color="#000" />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={hideImages}>
                            <Icon name="chevron-down" size={20} color="#000" />
                          </TouchableOpacity>
                        )}
                      </View>

                      {!showImages ? (
                        <View style={styles.bottomCover}>
                          <TouchableOpacity
                            style={styles.addBtn}
                            onPress={() => licenseImg(2, props)}>
                            <Icon
                              name="camera-plus-outline"
                              color="#767680"
                              size={18}
                            />
                            <Text style={styles.addText}>Add Photos</Text>
                          </TouchableOpacity>

                          <View style={styles.photoContainer}>

                            <StoreImageSelection props={props}/>
                          </View>


                        </View>
                      ) : null}
                    </View>

                    <View style={styles.submitBtnContainer}>
                      <OnboardinBtn
                        title="CONTINUE"
                        onPress={props.handleSubmit}
                        backgroundColor="#3353CB"
                        color="#fff"
                        disabled= {!props.values.images.length}
                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                      />
                    </View>

                  </View>
                )}
              </FormikValidator>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>


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

      <ConfirmModal
        visibleModal={showConfirmModal}
        returnBack={closeModal}
        proceed={proceed}
      />

      <AddressBottomSheet
        bottomSheetRef={addressBottomSheet}
        closeBottomSheet={closeAddressBottomsheet}
        prop={addressProps}
        setAddressNotFound={showAddressNotFound}
        wait={close}
      />

      {errMsg && <View style={styles.toastCover}>
        <View style={styles.errView} >
          <MIcon name="error-outline" size={22} color="#fff" />
          <Text style={styles.errText}>{errMsg}</Text>
        </View>

      </View>}
      <Loader isVisible={loader} />


    </View>
  );
};

export default AddStore;
