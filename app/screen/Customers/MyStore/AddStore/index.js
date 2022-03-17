import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, FlatList, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {COHeader as Header} from "@Component";
import Modal from "react-native-modal";
import { AuthBtn as Btn, BtnPre, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import { profileSchema, registerSchema } from "@Helper/Schema";
import FIcon from "react-native-vector-icons/FontAwesome5";
import BottomSheet from "react-native-gesture-bottom-sheet";
import SelectState from "@Screen/Customers/Registration/SelectState"
import SelectLga from "@Screen/Customers/Registration/SelectLga"
import styles from './style';
import { useSelector, useDispatch } from "react-redux";
import globalStyle from "@Helper/GlobalStyles";
// import AddStore from "./addStore"


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

   
   
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const registerState = {
        phone: "",
        email: "",
        password: "",
        firstname: "",
        surname: "",
        store: "",
        c_password: ""
    };

    const closeSuccess = () => {
        bottomSheetStoreSuccess.current.close();
    };
    const storeSuccess = () => {
        bottomSheetStoreSuccess.current.show();
    };


 

 const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, globalStyle.marginTop, { marginHorizontal: 20 }]}>
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <View style={{ marginHorizontal: 20 }}>
                <SuccessMsgViewTwo title={successMsg} />
            </View>
        )
    };

  


    const dismissKeyboard = () => Keyboard.dismiss();

    const goBack = () => props.navigation.navigate("MyStore");

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
             <Header title="Add Store" onPress={goBack} styleView={styles.body}/>
           
            <ScrollView style={styles.modalView}>
               <View >
               <View style={styles.formCover}>
                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    {errMsg ? <View style={globalStyles.errMainView}>
                                        <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
                                    </View> : null}

                                    <FormikValidator
                                        initialValues={registerState}
                                        validationSchema={registerSchema}
                                        onSubmit={(values, actions) => {
                                            submit(values)
                                        }}
                                    >
                                        {props => (
                                            <View>
                                                <View>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Name of Store</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="Kingsley"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                    </View>
                                                    {props.touched.firstname && props.errors.firstname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View style={styles.inputCoverr}>
                                                    <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.surname && props.errors.surname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Street Address</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.surname}
                                                            onBlur={props.handleBlur('surname')}
                                                            placeholder="James"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('surname', val)
                                                                props.setFieldTouched('surname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                    </View>
                                                    {props.touched.surname && props.errors.surname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.surname}</Text>
                                                        </View>) : null}
                                                </View>
                                                <View style={styles.inputCoverr}>
                                                    <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>State</Text>
                                                        </View>

                                                        <SelectState />

                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View style={styles.inputCoverr}>
                                                    <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>LGA</Text>
                                                        </View>

                                                        <SelectLga />

                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View style={styles.inputCover2}>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>License(s)/Organization Certificate(s)</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                        <TouchableOpacity>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {props.touched.firstname && props.errors.firstname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                        </View>) : null}

                                                </View>
                                                <View style={styles.inputCover2}>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Store Photo</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                        <TouchableOpacity>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {props.touched.firstname && props.errors.firstname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                        </View>) : null}

                                                </View>
                                            </View>
                                        )}

                                    </FormikValidator>

            <View style={styles.btnCover}>
                    <Btn title="Add New Store" onPress={storeSuccess} style={styles.submit}  />
                </View>
                                </View>

                            </TouchableWithoutFeedback>


                           
                        </View>
               </View>
            
               </ScrollView>
                
           
          
        </View >
    )
};

export default MyStore;