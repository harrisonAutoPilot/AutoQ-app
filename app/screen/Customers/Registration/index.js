import React, { useState, useCallback,useRef} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

import { NavHeader as Header } from "@Component";
import styles from "./style";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { cleanup } from "@Store/Auth";
import { getState } from "@Request/State";
import { getPendingUserStore } from "@Request/Store";
import { cleanup as clean } from "@Store/Stores";

const Registration = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const [storePhotoOne, setStorePhotoOne] = useState("");
    const [storePhotoTwo, setStorePhotoTwo] = useState("");
    const [fileSize, setFileSize] = useState(1);
   
    
    const details = props.route.params?.items
    const key = props.route.params?.key
    let [data, setData] = useState({})
    let [dataOne, setDataOne] = useState({})

    const { pendingStatus, pending } = useSelector((state) => state.store);

    const goBack = () => props.navigation.goBack();

    useFocusEffect(
        useCallback(() => {
            if(details?.id){
                dispatch(getPendingUserStore(details?.id))
            }
            dispatch(getState())
            dispatch(cleanup())

            return () => {
                dispatch(cleanup());
                dispatch(clean());
            }
        }, [])
    );

    const registerState = {
        phone: details?.phone ? details.phone : "",
        firstname: details?.name ? details?.name?.substr(0, details.name.indexOf(' ')) : "",
        surname: details?.name ? details?.name.substr(details?.name.indexOf(' ') + 1) : "",
        email: details?.email ? details?.email : "",
    };

    const registerState2 = {
        store_name: pending.stores && pending?.stores[0]?.name ? pending?.stores[0]?.name : "",
        address: pending.stores && pending?.stores[0]?.address ? pending?.stores[0]?.address : "",
        state_id: pending.stores && pending?.stores[0]?.state_id ? pending?.stores[0]?.state_id : "",
        lga_id: pending.stores && pending?.stores[0]?.lga_id ? pending?.stores[0]?.lga_id : "",

    };

    const registerState3 = {
        images: pending.stores && pending?.stores[0]?.store_images ? pending?.stores[0]?.store_images: [],
        images2: pending.stores && pending?.stores[0]?.license_images ? pending?.stores[0]?.license_images: [],
    };


    const redirectToStepTwo = (val, type, payment) => {
        const {firstname, surname, phone, email} = val
        const newData = {name: `${firstname} ${surname}`, phone, user_type: type, id: details?.id, key, email, credit_option: payment }
        setDataOne(newData);
        setActiveId(2)

    };

    const redirectToStepThree = (val) => {
       let newData = Object.assign(dataOne, val);
       setData(newData);
        setActiveId(3)
    }

    const redirectToStepOne = () => {
        setActiveId(1)
    };

    const redirectToStepTwoAgain = () => {
        setActiveId(2)
        setStorePhotoOne("");
        setStorePhotoTwo("")
    };

    const submit = (val) => {
        let newData = Object.assign(data, val)
        setData(newData)
        props.navigation.navigate("RegConfirm", {data})
    };

    const licenseImg = (id, props) => {

        ImagePicker.openPicker({
            multiple: true,
            includeBase64: false,
            mediaType: 'photo'
        }).then(images => {
          
            if (id === 1) {
               
                setStorePhotoOne("License Image Received")
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
                props.setFieldValue('images', img)
            } else {

                setStorePhotoTwo("Image Received" ) 

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
                props.setFieldValue('images2', img)
            }
        }).catch(err => {
            console.log(err)
        })

    }


    return (
        <View style={styles.view}>
            <Header title="Customer Registration" onPress={goBack} />

            <View style={styles.mainBody}>
                <View style={styles.subHeader}>
                    {
                        activeId === 1 ?
                        <View style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} >
                        <View style={{ flexDirection: 'row', zIndex: 90, justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', zIndex: 90, marginRight:25, marginTop: 2 }}>STEP 1</Text>
                            {activeId != 1 ?
                                <View style={{ zIndex: 20, }}>
                                    <Image source={require("@Assets/image/CheckCircle.png")} style={{ width: 20, height: 20, marginRight: 12, marginTop: 2 }} />

                                </View>
                                : null}
                        </View>
                        
                    </View>
                    :
                    <View style={[styles.activeSubHeader, styles.miniSubHeader]} >
                    <View style={{ flexDirection: 'row', zIndex: 90, justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', zIndex: 90, marginRight:5, marginTop: 2 }}>STEP 1</Text>
                       
                            <View style={{ zIndex: 20, }}>
                                <Image source={require("@Assets/image/CheckCircle.png")} style={{ width: 20, height: 20, marginRight: 12, marginTop: 2 }} />

                            </View>
                           
                    </View>
                   

                </View>
                    }
                    <View style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} >
                  {
                      activeId === 2 ?
                      <Text style={{ color: '#fff', zIndex: 90, marginRight:25, marginTop: 2 }}>STEP 2</Text>
                      :
                      <Text style={[activeId === 3 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>STEP 2</Text>
                  }
                        <View style={[activeId === 3 ? styles.innerCover2a : styles.innerCover2, styles.miniSubHeader]}>

                        </View>
                        <View style={styles.innerCover2}>

                           
                            {activeId === 3 ?
                                <View style={{ zIndex: 20, flexDirection: 'row', marginLeft: 30, position: 'absolute', marginTop: 10 }}>
                                    <Text style={{ color: '#fff', zIndex: 20, marginTop: 2 }}>STEP 2</Text>
                                    <Image source={require("@Assets/image/CheckCircle.png")} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 2 }} />

                                </View>
                                : null
                                }
                        </View>


                    </View>
                    <View style={[activeId === 3 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} >
                        <Text style={[activeId === 3 ? styles.activeSubHeaderTextCorrect : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>STEP 3</Text>
                        

                    </View>
                </View>


            </View>
            {activeId === 1 ? <Step1 details={registerState} active={props.route.params?.items ? false : true} submit={redirectToStepTwo} user_details={props.route.params?.items ? details : undefined}  keys={key}/> : activeId === 2 ?
                <Step2 user_details={props.route.params?.items ? props.route.params?.items : undefined} details={registerState2} submit={redirectToStepThree} redirect={redirectToStepOne} /> :
                <Step3 details={registerState3} storePhotoOne={storePhotoOne} storePhotoTwo={storePhotoTwo} licenseImg={licenseImg} submit={submit} redirect={redirectToStepTwoAgain}  />}




        </View>
    )
};

export default Registration;