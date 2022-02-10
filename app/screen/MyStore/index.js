import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, FlatList, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import globalStyle from "@Helper/globalStyles";
import { addStoreSchema } from "@Helper/schema";
import FIcon from "react-native-vector-icons/FontAwesome5";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { BottomBtn, FormikValidator, InputField, StoreHeaderOne, StoreHeaderTwo, SuccessMsgViewTwo } from "@Component/index";
import { getStore, createStore, deleteStore } from "@Request/store";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { cleanup } from "@Store/stores";
import Loader from "@Screen/BottomSheetLoader";
import OuterLoader from "@Screen/Loader";

const getRandomColor = () => {
    let letters = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

const MyStore = (props) => {
    const bottomSheet = useRef();
    const bottomSheetDetails = useRef();

    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState([]);
    const [storePhotoOne, setStorePhotoOne] = useState("");
    const [storePhotoTwo, setStorePhotoTwo] = useState("");
    const [id, setId] = useState();
    const [loader, setLoader] = useState(false);
    const [outerLoader, setOuterLoader] = useState(false);

    const { status, errors, stores, update } = useSelector((state) => state.store);

    useEffect(() => {
        dispatch(getStore());
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            setOuterLoader(false);
            setErrMsg(errmsg);
            setSuccessMsg(sucmsg);
            if (sucmsg) {
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 50000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 120
                })
                dispatch(getStore());
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

        wait(3000).then(() => { dispatch(cleanup()); })
    }, []);

    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView2, globalStyle.marginTop]}>
            <FIcon name="exclamation-circle" color="#fff" style={globalStyle.exclaImg} size={20}/>
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    useEffect(() => {
        if (update === "success") {
            closeSheet();
            refreshView("", "Update Successful");
        } else if (update === "failed") {
            refreshView(errors?.msg, "")
        }
        else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);

    const addStoreState = {
        storename: "",
        storestreet: "",
    };

    const dismissKeyboard = () => Keyboard.dismiss();

    const goBack = () => props.navigation.navigate("Home");

    const closeSheet = () => {
        setImages("");
        setImages2("");
        setStorePhotoOne("");
        setStorePhotoTwo("");
        setErrMsg("");
        bottomSheet.current.close();
    }

    const closeSheetDetails = () => bottomSheetDetails.current.close();

    const showModalDetails = (name, address, id) => {
        setAddress(address);
        setName(name);
        setId(id)
        setSuccessMsg("");
        bottomSheetDetails.current.show();
    };

    const submit = async (values) => {
        if (!storePhotoTwo.length || !storePhotoOne.length) {
            setErrMsg("All Fields are required")
        } else {
            setLoader(true);
            const { storename, storestreet } = values;
            const newValues = { name: storename, address: storestreet, images2, images };
            await dispatch(createStore(newValues));
        }

    };

    const deleteStoreDetails = (id) => {
        dispatch(deleteStore(id));
        bottomSheetDetails.current.close();
        setOuterLoader(true)
    }

    const imageLibraryOne = (id) => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            title: "Select Photo",
            includeBase64: true
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                setErrMsg('ImagePicker Error: ', response.error)
            } else if (response.fileSize > 1000000) {
                setErrMsg("File size is too Large")
            } else {
                setErrMsg("");
                if (id === 1) {
                    setStorePhotoOne(response.assets[0].fileName);
                    setImages([`data:image/jpg;base64,${response.assets[0].base64}`])
                } else {
                    setStorePhotoTwo(response.assets[0].fileName);
                    setImages2([`data:image/jpg;base64,${response.assets[0].base64}`])
                }
            }
        });
    }
    const ListView = ({ item }) => (
        <View style={[styles.cardMidCover]}>
            <TouchableOpacity style={[styles.storeCard, { backgroundColor: getRandomColor() }]} onPress={() => showModalDetails(item.name, item.address, item.id)} >
                <View style={styles.innerCover}>
                    <Image source={require("@Assets/image/trailing-icon.png")} style={styles.storeImg} />
                    <View style={styles.addtitleCover}>
                        <Text style={styles.storeOwnerName}>{item.name}</Text>
                        <Text style={styles.storeOwnerAddress}>{item.address}</Text>
                    </View>
                </View>
                <View style={styles.viewCover} >
                    <Text style={styles.viewText}>VIEW</Text>
                    <Image source={require("@Assets/image/greater.png")} style={styles.angleImg} />
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.main}>
            <StoreHeaderOne title="My Stores" onPress={goBack} />
            <View style={styles.addContainer}>

                <TouchableOpacity style={styles.storeBtn} onPress={() => { bottomSheet.current.show(); setErrMsg("") }}>
                    <View style={styles.addTextCover}>
                        <Text style={styles.addStoreTextPlus}>+</Text>
                        <Text style={styles.addStoreText}>Add new store</Text>
                    </View>
                </TouchableOpacity>

            </View>

            {errMsg ? <Toast config={toastConfig} /> : null}
            {successMsg ? <Toast config={toastConfig} /> : null}

            <FlatList data={stores}
                renderItem={ListView}
                showsVerticalScrollIndicator={true}
                ListFooterComponent={<View style={{ height: 50 }} />} />

            <BottomSheet hasDraggableIcon ref={bottomSheet} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.62} radius={50} styles={styles.addStoreBottomSheet}>

                <View style={styles.header}>
                    <StoreHeaderTwo title="Add New Store" onPress={closeSheet} />
                </View>

                {errMsg ? <View style={[globalStyle.errMainView, styles.errMainView]}>
                    <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
                </View>
                    : null}

                {loader ?
                    <Loader />
                    :
                    <KeyboardAwareScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} >
                   
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>

                            <View>
                                <FormikValidator
                                    initialValues={addStoreState}
                                    validationSchema={addStoreSchema}
                                    onSubmit={(values) => {
                                        submit(values)
                                    }}
                                >
                                    {props => (
                                        <View>
                                            <View>
                                                <View style={[styles.inputHolder, props.touched.storename && props.errors.storename ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>Name of Store</Text>
                                                    </View>

                                                    <InputField
                                                        value={props.values.storename}
                                                        style={styles.label2}
                                                        onBlur={props.handleBlur('storename')}
                                                        placeholder="Health Mart"
                                                        placeholderTextColor="#757575"
                                                        keyboardType="default"
                                                        onChangeText={(val) => {
                                                            props.setFieldValue('storename', val)
                                                            props.setFieldTouched('storename', true, false);
                                                            setErrMsg("")
                                                        }}
                                                    />
                                                </View>
                                                {props.touched.storename && props.errors.storename ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.storename}</Text>
                                                    </View>) : null}
                                            </View>

                                            <View>
                                                <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.storestreet && props.errors.storestreet ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>Street Address</Text>
                                                    </View>

                                                    <InputField
                                                        value={props.values.storestreet}
                                                        style={styles.label2}
                                                        onBlur={props.handleBlur('storestreet')}
                                                        placeholder="No 25, Adeleke Street"
                                                        placeholderTextColor="#757575"
                                                        keyboardType="default"
                                                        onChangeText={(val) => {
                                                            props.setFieldValue('storestreet', val)
                                                            props.setFieldTouched('storestreet', true, false);
                                                            setErrMsg("")
                                                        }}
                                                    />
                                                </View>
                                                {props.touched.storestreet && props.errors.storestreet ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.storestreet}</Text>
                                                    </View>) : null}
                                            </View>
                                            <View>
                                                <View style={[styles.inputHolder, styles.registerInputPinHolder]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>License Photo</Text>
                                                    </View>
                                                    <View style={styles.pinInputView}>

                                                        <InputField
                                                            style={styles.label3}
                                                            value={storePhotoOne}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                        />

                                                        <TouchableOpacity style={styles.selectCover} onPress={() => imageLibraryOne(1)}>
                                                            <Text style={styles.showTextPin}>Select image</Text>
                                                        </TouchableOpacity>

                                                    </View>

                                                </View>
                                            </View>

                                            <View>
                                                <View style={[styles.inputHolder, styles.registerInputPinHolder]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>Store Photo</Text>
                                                    </View>
                                                    <View style={styles.pinInputView}>
                                                        <InputField
                                                            style={styles.label3}
                                                            value={storePhotoTwo}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"

                                                        />

                                                        <TouchableOpacity style={styles.selectCover} onPress={() => imageLibraryOne(2)}>
                                                            <Text style={styles.showTextPin}>Select image</Text>
                                                        </TouchableOpacity>

                                                    </View>

                                                </View>
                                            </View>

                                            <View style={styles.addBtnCover}>
                                                <BottomBtn title="Add New Store" onPress={props.handleSubmit} style={styles.submit} />
                                            </View>
                                        </View>
                                    )}

                                </FormikValidator>
                            </View>

                        </TouchableWithoutFeedback>
                  
                    </KeyboardAwareScrollView>
                }
            </BottomSheet>
            {/* </View> */}

            <BottomSheet hasDraggableIcon ref={bottomSheetDetails} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.7} radius={50} styles={styles.addStoreBottomSheet}>
                <View style={styles.store}>
                    <StoreHeaderTwo title="Store Details" onPress={closeSheetDetails} />

                    {errMsg ? <View style={[globalStyle.errMainView, styles.errMainView]}>
                        <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
                    </View>
                        : null}

                    <ScrollView >
                        <View style={styles.detailCard}>
                            <View style={styles.detailCardView}>
                                <Text style={styles.storeTitle}>NAME OF STORE:</Text>
                                <Text style={styles.storeName}>{name}</Text>
                            </View>

                        </View>

                        <View style={styles.detailCard}>
                            <View style={styles.detailCardView}>
                                <Text style={styles.storeTitle}>ADDRESS:</Text>
                                <Text style={styles.storeName}>{address}</Text>
                            </View>

                        </View>

                    </ScrollView>
                    <TouchableOpacity style={styles.deleteView} onPress={() => deleteStoreDetails(id)}>
                        <View style={styles.deleteInnerView}>
                            <View style={styles.detailCardIconInnerView}>
                                <Icon name="trash-2" size={18} color="#D32F2F" />
                            </View>
                            <Text style={styles.detailEdit}>Remove this Store</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </BottomSheet >

            <OuterLoader isVisible={outerLoader} />
        </View >
    )
};

export default MyStore;