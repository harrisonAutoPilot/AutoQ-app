import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import FIcon from "react-native-vector-icons/FontAwesome5";
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import EmptyStore from "@Component/Empty/emptyStore"
import { COHeader as Header } from "@Component";
import { SuccessMsgViewTwo } from "@Component/index";
import BottomSheet from "react-native-gesture-bottom-sheet";
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
import { NavHeader as HeaderWhite } from "@Component";
import { getUserStore, deleteStore } from "@Request/Store";
import { cleanup } from "@Store/Stores";
import StorePlaceholder from "./StorePlaceholder";
import Loader from "@Screen/Loader";

const MyStore = (props) => {
    const bottomSheetDetails = useRef();

    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState();
    const [loader, setLoader] = useState(false);

    const { status, errors, usersStore, deletes } = useSelector((state) => state.store);


    useFocusEffect(
        useCallback(() => {
            dispatch(getUserStore(props.route.params?.id))
            return () => dispatch(cleanup());
        }, [])
    );

    useEffect(() => {
        if (deletes === "success") {
            refreshView("", "Update Successful");
        } else if (deletes === "failed") {
            refreshView(errors?.msg, "")
        }
        else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [deletes]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
           
            if (sucmsg) {
                setSuccessMsg(sucmsg);
                bottomSheetDetails.current.close();
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 50000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 120
                })
                dispatch(getUserStore());
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

    const goBack = () => props.navigation.goBack();

    const addStore = () => props.navigation.navigate("AddStore", {id: props.route.params?.id});

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
        setLoader(true)
    };

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
            <Header title="Stores" onPress={goBack} styleView={styles.body} />
            <View style={styles.addContainer}>

                <TouchableOpacity style={styles.storeBtn} onPress={addStore}>
                    <View style={styles.addTextCover}>
                        <Text style={styles.addStoreTextPlus}>+</Text>
                        <Text style={styles.addStoreText}>Add new store</Text>
                    </View>
                </TouchableOpacity>

            </View>
            {status === "pending" ? <StorePlaceholder />
                :
                <FlatList
                    data={usersStore}
                    renderItem={RenderItem}
                    ListEmptyComponent={EmptyStore}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    showsVerticalScrollIndicator={false}

                />
            }

            <BottomSheet hasDraggableIcon ref={bottomSheetDetails} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.3} radius={50} styles={styles.addStoreBottomSheet}>
                <View style={styles.store}>
                    <HeaderWhite title="Store Details" onPress={closeSheetDetails} />

                    {errMsg ? <Toast config={toastConfig} /> : null}
                    {successMsg ? <Toast config={toastConfig} /> : null}

                    <ScrollView contentContainerStyle={{ marginTop: 10 }}>
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

            <Loader isVisible={loader} />

        </View >
    )
};

export default MyStore;