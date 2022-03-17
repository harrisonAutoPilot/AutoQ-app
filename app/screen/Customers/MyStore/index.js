import React, { useState, useEffect, useRef, } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import {COHeader as Header} from "@Component";
import Modal from "react-native-modal";
import { SuccessMsgViewTwo } from "@Component/index";
import BottomSheet from "react-native-gesture-bottom-sheet";
import styles from './style';
import data from "./data";
import { useSelector, useDispatch } from "react-redux";
import globalStyle from "@Helper/GlobalStyles";
import { NavHeader as HeaderWhite } from "@Component";
// import AddStore from "./addStore"


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

    const closeSuccess = () => {
        bottomSheetStoreSuccess.current.close();
    };
    const storeSuccess = () => {
        bottomSheetStoreSuccess.current.show();
    };

    const goBack = () => props.navigation.navigate("Home");

    const addStore = () => props.navigation.navigate("AddStore");

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

    const getRandomColor = (id) => {
        let ids = parseInt(id)
        let shade;
    
        if (ids % 2 === 0) {
            shade = require("@Assets/image/storeN.png");
        } else {
            shade = require("@Assets/image/storeG.png");
        }
        return shade
    }


    const RenderItem = ({ item }) => {
        return (
                <TouchableOpacity onPress={() => showModalDetails(item.name, item.address, item.id)} style={styles.card}>
                        <View style={styles.cardImgCover}>
                            <Image source={getRandomColor(item.id)} style={styles.storeImg} />
                        </View>
                        <View style={styles.cardDesCover}>
                            <Text style={styles.storeName}>{item.name}</Text>
                            <Text style={styles.storeAddress} numberOfLines={1}>{item.address}</Text>
                        </View>
                        <View style={styles.cardArrowCover}>
                            <Text style={styles.storeView}>view</Text>
                            <Image source={require("@Assets/image/greater.png")} style={styles.greaterImg} />
                        </View>
                </TouchableOpacity>
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

                    <FlatList
                        data={data}
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        showsVerticalScrollIndicator={false}

                    />
                
                <BottomSheet hasDraggableIcon ref={bottomSheetDetails} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.3} radius={50} styles={styles.addStoreBottomSheet}>
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