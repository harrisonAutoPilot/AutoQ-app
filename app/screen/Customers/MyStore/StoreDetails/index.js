import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';

import { COHeader as Header } from "@Component";
import { SuccessMsgViewTwo } from "@Component/index";
import styles from './style';
import { useSelector, useDispatch } from "react-redux";
import { deleteStore } from "@Request/Store";
import { cleanup } from "@Store/Stores";
import ViewDocument from "@Screen/ViewDocument"
import Loader from "@Screen/Loader";

const StoreDetails = (props) => {

    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [showDocument, setShowDocument] = useState(false);
    const [storeImg, setStoreIMg] = useState("");


    const items = props.route.params?.item
    const { errors, deletes } = useSelector((state) => state.store);

    const deleteStoreDetails = (id) => {
        dispatch(deleteStore(id));
        setLoader(true)
    };

    const goBack = () => props.navigation.goBack();
    const viewDoc = (img) => {
        setShowDocument(true);
        setStoreIMg(img)
    }

    useEffect(() => {
        if (deletes === "success") {
            refreshView("", "Store Deleted Successfully")
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

            if (sucmsg) {
                setSuccessMsg(sucmsg);
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 50000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                });
                dispatch(cleanup());
                props.navigation.navigate("MyStore")
            } else {
                setLoader(false);
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
            <View style={[globalStyles.errMainView2, globalStyles.marginTop]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };


    const RenderItem = ({ item }) => (

        <TouchableOpacity onPress={() => viewDoc(item.path)} >
            <View style={styles.fileCover} key={item.id}>
                <Image source={{uri: item.path}} style={styles.certImg} />
            </View>
        </TouchableOpacity>

    );

    return (
        <View style={styles.main}>
            <Header title="Store Details" onPress={goBack} styleView={styles.body} />

            {errMsg ? <Toast config={toastConfig} /> : null}
            {successMsg ? <Toast config={toastConfig} /> : null}

            <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}>
                <View style={styles.detailCard}>
                    <View style={styles.detailCardView}>
                        <Text style={styles.storeTitle}>STORE DETAILS:</Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={styles.storeName}>{items?.name}</Text>
                            <Text style={styles.storeName}>{items.address}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.docCard}>

                    <View style={styles.docTop}>
                        <View>
                            <Text style={styles.docTitleText}>LICENCE IMAGE(S):</Text>
                        </View>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={items?.license_images}
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
                <View style={styles.docCard}>

                    <View style={styles.docTop}>
                        <View>
                            <Text style={styles.docTitleText}>STORE IMAGE(S):</Text>
                        </View>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={items?.store_images}
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        showsHorizontalScrollIndicator={false}

                    />

                </View>


            </ScrollView>


            <ViewDocument
                visibleDocument={showDocument}
                returnBack={() => setShowDocument(false)}
                img ={storeImg}
            />

            <Loader isVisible={loader} />
            <TouchableOpacity style={styles.deleteView} onPress={() => deleteStoreDetails(items.id)}>
                <View style={styles.deleteInnerView}>
                    <View style={styles.detailCardIconInnerView}>
                        <Icon name="trash-2" size={18} color="#D32F2F" />
                    </View>
                    <Text style={styles.detailEdit}>Remove this Store</Text>
                </View>

            </TouchableOpacity>
        </View>

    )
};

export default StoreDetails;