import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import FIcon from "react-native-vector-icons/FontAwesome5";

import EmptyStore from "@Component/Empty/emptyStore"
import { COHeader as Header } from "@Component";
import { SuccessMsgViewTwo } from "@Component/index";
import BottomSheet from "react-native-gesture-bottom-sheet";
import styles from './style';
import { useSelector, useDispatch } from "react-redux";
import globalStyle from "@Helper/GlobalStyles";
import { NavHeader as HeaderWhite } from "@Component";
import { getUserStore, deleteStore } from "@Request/Store";
import { cleanup } from "@Store/Stores";
import StorePlaceholder from "./StorePlaceholder"
import ViewDocument from "@Screen/ViewDocument"
import data from "./data"

const StoreDetails = (props) => {
    const bottomSheetDetails = useRef();

    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState();
    const [loader, setLoader] = useState(false);
    const [outerLoader, setOuterLoader] = useState(false);
    const [showDocument, setShowDocument] = useState(false);

    const { status, errors, usersStore, update } = useSelector((state) => state.store);

    useEffect(() => {
        dispatch(getUserStore(props.route.params?.id))
    }, []);

    // useEffect(() => {
    //     if (update === "success") {
    //         refreshView("", "Update Successful");
    //     } else if (update === "failed") {
    //         refreshView(errors?.msg, "")
    //     }
    //     else {
    //         setSuccessMsg("");
    //         setErrMsg("");
    //     }
    // }, [update]);

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
                dispatch(getUserStore());
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
                <FIcon name="exclamation-circle" color="#fff" style={globalStyle.exclaImg} size={20} />
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    const goBack = () => props.navigation.navigate("Home");

    const addStore = () => props.navigation.navigate("AddStore", {id: props.route.params?.id});

    const closeSheetDetails = () => bottomSheetDetails.current.close();

    const showModalDetails = (item, name, address, id) => {
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

    const viewDoc = () => setShowDocument(true);

    const RenderItem = ({ item }) => {
        return (
            data.map((item) => (
    <TouchableOpacity onPress={viewDoc} >
            <View style={styles.fileCover} key ={item.id}>
            <Image source={require("@Assets/image/cert.png")} style={styles.certImg} />
            </View>
        </TouchableOpacity>
            ))
        )
    };

    return (
        <View style={styles.main}>
            <Header title="Store Details" onPress={goBack} styleView={styles.body} />
         
         
                   

                    {errMsg ? <Toast config={toastConfig} /> : null}
                    {successMsg ? <Toast config={toastConfig} /> : null}

                    <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom:50 }}>
                        <View style={styles.detailCard}>
                            <View style={styles.detailCardView}>
                                <Text style={styles.storeTitle}>NAME OF STORE:</Text>
                                <Text style={styles.storeName}>Sam's Store</Text>
                                <Text style={styles.storeName}>12 Eleruwa Street, Ikeja, Nigeria </Text>
                            </View>

                        </View>

                        <View style={styles.docCard}>
                          
                        <View style={styles.docTop}>
                            <View>
                               <Text style={styles.docTitleText}>LICENCE IMAGE(S):</Text>
                            </View>
                               <View style={styles.plusCover}>
                                <Image source={require("@Assets/image/PlusCircle.png")} style={styles.plusImg} />
                                <Text style={styles.addText}>ADD NEW</Text> 
                               </View>
                              </View>
                              <ScrollView horizontal={false}>
                              <View style={styles.docFileCover}>
                              
                              <RenderItem />
                              </View>
                              </ScrollView>
                 
                        </View>
                        <View style={styles.docCard}>
                          
                          <View style={styles.docTop}>
                              <View>
                                 <Text style={styles.docTitleText}>STORE IMAGE(S):</Text>
                              </View>
                                 <View style={styles.plusCover}>
                                  <Image source={require("@Assets/image/PlusCircle.png")} style={styles.plusImg} />
                                  <Text style={styles.addText}>ADD NEW</Text> 
                                 </View>
                                </View>
                              
                                <View style={styles.docFileCover}>
                                   
                               
                                <RenderItem />
                             
                                </View>
                               
                     
                          </View>
                       

                    </ScrollView>
                    <ViewDocument
                visibleDocument={showDocument}
                returnBack={() => setShowDocument(false)}
            />
                </View>
       
    )
};

export default StoreDetails;