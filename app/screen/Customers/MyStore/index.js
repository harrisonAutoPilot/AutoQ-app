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
import data from "./data";
import { useSelector, useDispatch } from "react-redux";
import globalStyle from "@Helper/GlobalStyles";
import { NavHeader as HeaderWhite } from "@Component";
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

  // Get Random dark blue and orange colors
const getRandomColor = (id) => {
    // let ids = parseInt(id)
    // let shade;
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
    return color;

    h = 240;
    s = Math.floor(Math.random() * 100);
    l = Math.floor(Math.random() * 80);
    return color = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

    // if (ids % 2 === 0) {
    //     shade = "rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
    // } else {
    //     shade = `rgb(255, ${(Math.floor(Math.random() * 150))}, 0)`;
    // }
    // return shade
}



    const dismissKeyboard = () => Keyboard.dismiss();

    const goBack = () => props.navigation.navigate("Home");

    const addStore = () => props.navigation.navigate("AddStore");

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
    

    const RenderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => showModalDetails(item.name, item.address, item.id)} >
                    <View style={styles.card}  key={item.id}>
                        <View style={styles.cardImgCover}>
                            <Image source={require("@Assets/image/storeN.png")} style={styles.storeImg} />
                        </View>
                        <View style={styles.cardDesCover}>
                            <Text style={styles.storeName}>{item.name}</Text>
                            <Text style={styles.storeAddress}>{item.address} </Text>
                        </View>
                        <View style={styles.cardArrowCover}>
                            <Text style={styles.storeView}>view</Text>
                            <Image source={require("@Assets/image/greater.png")} style={styles.greaterImg} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };

    return (
        <View style={styles.main}>
             <Header title="Stores" onPress={goBack} styleView={styles.body}/>
            <View style={styles.addContainer}>

                <TouchableOpacity style={styles.storeBtn} onPress={addStore}>
                    <View style={styles.addTextCover}>
                        <Text style={styles.addStoreTextPlus}>+</Text>
                        <Text style={styles.addStoreText}>Add new store</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.bottomCover}>

                    <FlatList
                        data={data}
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}

                    />
                </View>
                
                <BottomSheet hasDraggableIcon ref={bottomSheetDetails} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.7} radius={50} styles={styles.addStoreBottomSheet}>
                <View style={styles.store}>
                    <HeaderWhite title="Store Details" onPress={closeSheetDetails} />

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
          
        </View >
    )
};

export default MyStore;