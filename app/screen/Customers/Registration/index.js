import React, { useState, useCallback,} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

import { NavHeader as Header } from "@Component";
import styles from "./style";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { cleanup } from "@Store/Auth";
import Triangle from "@react-native-toolkit/triangle";
import { getState } from "@Request/State";

const Registration = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const [storePhotoOne, setStorePhotoOne] = useState("");
    const [storePhotoTwo, setStorePhotoTwo] = useState("");
    
    const details = props.route.params?.items
    const key = props.route.params?.key
    let [data, setData] = useState({})
    let [dataOne, setDataOne] = useState({})

    const goBack = () => props.navigation.goBack();

    useFocusEffect(
        useCallback(() => {
            dispatch(getState())
            dispatch(cleanup())

            return () => dispatch(cleanup());
        }, [])
    );

    const registerState = {
        phone: details?.phone ? details.phone : "",
        firstname: details?.name ? details?.name?.substr(0, details.name.indexOf(' ')) : "",
        surname: details?.name ? details?.name.substr(details?.name.indexOf(' ') + 1) : "",
    };

    const registerState2 = {
        store_name: details?.stores[0]?.name ? details?.stores[0]?.name : "",
        address: details?.stores[0]?.address ? details?.stores[0]?.address : "",
        state_id: details?.stores[0]?.state_id ? details?.stores[0]?.state_id : "",
        lga_id: details?.stores[0]?.lga_id ? details?.stores[0]?.lga_id : "",

    };

    const registerState3 = {
        images: details?.stores[0]?.store_images ? details?.stores[0]?.store_images: [],
        images2: details?.stores[0]?.license_images ? details?.stores[0]?.license_images: [],
    };


    const redirectToStepTwo = (val, type) => {
        const {firstname, surname, phone} = val
        
        const newData = {name: `${firstname} ${surname}`, phone, user_type: type, id: details?.id, key }
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
            includeBase64: true,
            mediaType: 'photo'
        }).then(images => {
            if (id === 1) {

                setStorePhotoOne("License Image Received")
                const img = images.map(img => {
                    return {path: `data:image/jpg;base64,${img.data}`}
                })
                props.setFieldValue('images', img)
            } else {
                setStorePhotoTwo("Image Received")
                const img = images.map(img => {
                    return {path: `data:image/jpg;base64,${img.data}`}
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
                    <View style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} >
                        <View style={{ flexDirection: 'row', zIndex: 90, justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', zIndex: 90, marginRight: 50, marginTop: 5 }}>STEP 1</Text>
                            {activeId != 1 ?
                                <View style={{ zIndex: 20, }}>
                                    <Image source={require("@Assets/image/CheckCircle.png")} style={{ width: 20, height: 20, marginLeft: -40, marginTop: 2 }} />

                                </View>
                                : null}
                        </View>
                        <View style={styles.innerCover2a}>
                            <View />
                            <Triangle
                                type="rightAngle"
                                base={75}
                                height={190}
                                mode={"bottom-right"}
                                color="white"
                            />
                        </View>

                    </View>
                    <View style={[activeId === 2 ? styles.activeSubHeader2 : styles.inActiveSubHeader, styles.miniSubHeader]} >
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>STEP 2</Text>
                        <View style={[activeId === 3 ? styles.innerCover2a : styles.innerCover2, styles.miniSubHeader]}>

                        </View>
                        <View style={styles.innerCover2}>

                            <Triangle
                                type="rightAngle"
                                base={20}
                                height={60}
                                mode={"top-left"}
                                color="white"
                            />

                            <Triangle
                                // style={styles.okk}
                                type="rightAngle"
                                base={50}
                                height={190}
                                mode={"bottom-right"}
                                color="white"
                            />
                            {activeId === 3 ?
                                <View style={{ zIndex: 20, flexDirection: 'row', marginLeft: 30, position: 'absolute', marginTop: 10 }}>
                                    <Text style={{ color: '#fff', zIndex: 20, marginTop: 5 }}>STEP 2</Text>
                                    <Image source={require("@Assets/image/CheckCircle.png")} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 3 }} />

                                </View>
                                : null}
                        </View>


                    </View>
                    <View style={[activeId === 3 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} >
                        <Text style={[activeId === 3 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>STEP 3</Text>
                        <View style={styles.innerCover}>

                            <Triangle
                                type="rightAngle"
                                base={20}
                                height={100}
                                mode={"top-left"}
                                color="white"
                            />
                            <View></View>

                        </View>

                    </View>
                </View>


            </View>
            {activeId === 1 ? <Step1 details={registerState} active={props.route.params?.items ? false : true} submit={redirectToStepTwo} user_details={props.route.params?.items ? props.route.params?.items : undefined} /> : activeId === 2 ?
                <Step2 user_details={props.route.params?.items ? props.route.params?.items : undefined} details={registerState2} submit={redirectToStepThree} redirect={redirectToStepOne} /> :
                <Step3 details={registerState3} storePhotoOne={storePhotoOne} storePhotoTwo={storePhotoTwo} licenseImg={licenseImg} submit={submit} redirect={redirectToStepTwoAgain}  />}
        </View>
    )
};

export default Registration;