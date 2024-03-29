import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView, } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from "react-redux";

import { COHeader as Header } from "@Component";
import { AuthBtn as Btn, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component";
import { addStoreSchema } from "@Helper/Schema";
import SelectState from "@Screen/Customers/Registration/SelectState"
import SelectLga from "@Screen/Customers/Registration/SelectLga"
import styles from './style';
import Loader from "@Screen/Loader";
import { getState } from "@Request/State";
import { createStore, getUserStore } from "@Request/Store";
import { cleanup, cleanupDelete } from "@Store/Stores";

const MyStore = (props) => {

    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState([]);
    const [loader, setLoader] = useState(false);
    const [state_id, setState_id] = useState({});
    const [storePhotoOne, setStorePhotoOne] = useState("");
    const [storePhotoTwo, setStorePhotoTwo] = useState("");

    const { errors, update } = useSelector((state) => state.store);

    useEffect(() => {
        dispatch(getState())
        return () => dispatch(cleanupDelete())
    }, [])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const addStoreState = {
        name: "",
        address: "",
        state_id: "",
        lga_id: "",
        images: [],
        images2: []
    };

    useEffect(() => {
        if (update === "success" && props.navigation.isFocused()) {
            refreshView("", "Store Created Successfully");
        } else if (update === "failed"  && props.navigation.isFocused()) {
            refreshView(errors?.msg, "")
        }
        else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, { marginHorizontal: 20}]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <View style={{ marginTop: 70 }}> 
                <SuccessMsgViewTwo title={successMsg} styles={{left: "-50%"}}/>
                </View>
        )
    };

    const refreshView = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            if (sucmsg) {
                setSuccessMsg(sucmsg);
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                });
                console.log(props.route.params?.id)
                dispatch(getUserStore(props.route.params?.id))
            } else {
                setErrMsg(errmsg);
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        });

        wait(5000).then(() => { dispatch(cleanupDelete()); })
    }, []);

    const refreshView2 = useCallback((errmsg) => {
        setErrMsg(errmsg);
        Toast.show({
            type: 'error',
            visibilityTime: 7000,
            autoHide: true,
            position: 'top',
            topOffset: 0
        })

    }, []);


    const dismissKeyboard = () => Keyboard.dismiss();
    const goBack = () => props.navigation.goBack();


    const submit = async (values) => {
            setLoader(true);
            const { name, address, state_id, lga_id } = values;
            const newValues = { name, address, images2, images, state_id, lga_id, user_id: props.route.params?.id };
            await dispatch(createStore(newValues));
    };

    const licenseImg = (id, props) => {

        ImagePicker.openPicker({
            multiple: true,
            includeBase64: true,
            mediaType: 'photo'
        }).then(images => {
            setErrMsg("");
            if (id === 1) {
              
                setStorePhotoOne("License Image Received");
                    const img = images.map(img => {
                        return {path: `data:image/jpg;base64,${img.data}`}
                    });
                   
                    props.setFieldValue('images', img);

                    setImages(img)
            } else {
                setStorePhotoTwo("Image Received")
                    const img = images.map(img => {
                        return {path: `data:image/jpg;base64,${img.data}`}
                    })
                    props.setFieldValue('images2', img)
                    setImages2(img)
            }
        }).catch(err => {
           console.log(err)
        })

    }

    return (
        <View style={styles.main}>
            <Header title="Add New Store" onPress={goBack} styleView={styles.body} />
           
            <ScrollView >
                <View style={styles.formCover}>
                    <TouchableWithoutFeedback onPress={dismissKeyboard}>
                        <View>

                            {errMsg ? <View style={{ marginBottom: 30 }}><Toast config={toastConfig} /></View> : null}
                            {successMsg ?
                              <View style={{ marginBottom: 30 }}> 
                            <Toast config={toastConfig} /> 
                            </View>: null}
                        
                          
                            <FormikValidator
                                initialValues={addStoreState}
                                validationSchema={addStoreSchema}
                                onSubmit={(values, actions) => {
                                    submit(values)
                                }}
                            >
                                {props => (
                                    <View>
                                        <View>
                                            <View style={[styles.registerInputHolder, props.touched.name && props.errors.name ? styles.inputErrHolder : null]}>
                                                <View style={styles.labelView}>
                                                    <Text style={styles.label}>Name of Store</Text>
                                                </View>

                                                <InputField
                                                    style={styles.innerLabel1}
                                                    value={props.values.name}
                                                    onBlur={props.handleBlur('name')}
                                                    placeholder="Benicu"
                                                    placeholderTextColor="#757575"
                                                    keyboardType="default"
                                                    onChangeText={(val) => {
                                                        props.setFieldValue('name', val)
                                                        props.setFieldTouched('name', true, false);
                                                        setErrMsg("")
                                                    }}
                                                />
                                            </View>
                                            {props.touched.name && props.errors.name ? (
                                                <View style={styles.errView}>
                                                    <Text style={styles.errText}>{props.errors.name}</Text>
                                                </View>) : null}
                                        </View>

                                        <View style={styles.inputCoverr}>
                                            <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.address && props.errors.address ? styles.inputErrHolder : null]}>
                                                <View style={styles.labelView}>
                                                    <Text style={styles.label}>Street Address</Text>
                                                </View>

                                                <InputField
                                                    style={styles.innerLabel}
                                                    value={props.values.address}
                                                    onBlur={props.handleBlur('address')}
                                                    placeholder="12 Ikeja"
                                                    placeholderTextColor="#757575"
                                                    keyboardType="default"
                                                    onChangeText={(val) => {
                                                        props.setFieldValue('address', val)
                                                        props.setFieldTouched('address', true, false);
                                                        setErrMsg("")
                                                    }}
                                                />
                                            </View>
                                            {props.touched.address && props.errors.address ? (
                                                <View style={styles.errView}>
                                                    <Text style={styles.errText}>{props.errors.address}</Text>
                                                </View>) : null}
                                        </View>
                                        <View>
                                            <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.state_id && props.errors.state_id ? styles.inputErrHolder : null]}>
                                                <View style={styles.labelView}>
                                                    <Text style={styles.label}>State</Text>
                                                </View>

                                                <SelectState onSelect={setState_id}  props={props}/>

                                            </View>
                                            {props.touched.state_id && props.errors.state_id ? (
                                                <View style={styles.errView}>
                                                    <Text style={styles.errText}>{props.errors.state_id}</Text>
                                                </View>) : null}

                                        </View>

                                        <View >
                                            <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.lga_id && props.errors.lga_id ? styles.inputErrHolder : null]}>
                                                <View style={styles.labelView}>
                                                    <Text style={styles.label}>LGA</Text>
                                                </View>

                                                <SelectLga data={state_id?.lgas} props={props} />

                                            </View>
                                            {props.touched.lga_id && props.errors.lga_id ? (
                                                <View style={styles.errView}>
                                                    <Text style={styles.errText}>{props.errors.lga_id}</Text>
                                                </View>) : null}

                                        </View>

                                        <View style={styles.inputCover2}>
                                            <View style={[styles.registerInputHolder, props.touched.images && props.errors.images ? styles.inputErrHolder : null]}>
                                                <View style={styles.labelView}>
                                                    <Text style={styles.label}>License(s)/Organization Certificate(s)</Text>
                                                </View>

                                                <InputField
                                                    style={styles.innerLabel1}
                                                    placeholder="img.jpg"
                                                    placeholderTextColor="#757575"
                                                    value={storePhotoOne}
                                                    onPressIn={() => {
                                                        licenseImg(1, props)
                                                        props.setFieldTouched('images', true, false);
                                                        setErrMsg("")
                                                    }}
                                        
                                                />
                                                <TouchableOpacity onPress={() => licenseImg(1, props)}>
                                                    <View style={styles.selectCover}>
                                                        <Text style={styles.selectText}>Select Image</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                            {props.touched.images && props.errors.images ? (
                                                <View style={styles.errView}>
                                                    <Text style={styles.errText}>{props.errors.images}</Text>
                                                </View>) : null}

                                        </View>
                                        <View style={styles.inputCover2}>
                                            <View style={[styles.registerInputHolder, props.touched.images2 && props.errors.images2  ? styles.inputErrHolder : null]}>
                                                <View style={styles.labelView}>
                                                    <Text style={styles.label}>Store Photo</Text>
                                                </View>

                                                <InputField
                                                    style={styles.innerLabel1}
                                                    value={storePhotoTwo}
                                                    placeholder="img.jpg"
                                                    placeholderTextColor="#757575"
                                                    onPressIn={() => {
                                                        licenseImg(2, props)
                                                        props.setFieldTouched('images2', true, false);
                                                        setErrMsg("")
                                                    }}
                                                />
                                                <TouchableOpacity onPress={() => licenseImg(2, props)}>
                                                    <View style={styles.selectCover}>
                                                        <Text style={styles.selectText}>Select Image</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            {props.touched.images2 && props.errors.images2 ? (
                                                <View style={styles.errView}>
                                                    <Text style={styles.errText}>{props.errors.images2}</Text>
                                                </View>) : null}

                                        </View>
                                        <View style={styles.btnCover}>
                                            <Btn title="Add New Store" onPress={props.handleSubmit} style={styles.submit} />
                                        </View>
                                    </View>

                                )}

                            </FormikValidator>
                        </View>

                    </TouchableWithoutFeedback>

                </View>

            </ScrollView>
            <Loader isVisible={loader} />

        </View >
    )
};

export default MyStore;