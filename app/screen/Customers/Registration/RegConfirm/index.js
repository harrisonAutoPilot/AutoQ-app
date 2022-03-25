import React, { useState, useCallback, useEffect, } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Toast from 'react-native-toast-message';

import { BtnLg } from "@Component/index";
import { NavHeader as Header } from "@Component";
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
import { updatePendingCustomers, registerCustomer } from "@Request/Customer";
import { cleanup } from "@Store/Customer";
import Loader from "@Screen/Loader";
import ViewDocument from "@Screen/ViewDocument"

const RegConfirm = (props) => {

    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [showDocument, setShowDocument] = useState(false);
    const [storeImg, setStoreIMg] = useState("");
    const details = props.route.params.data;

    const goBack = () => props.navigation.goBack();
    const storeSuccess = () => props.navigation.navigate("RegSuccess");
    const { errors, update } = useSelector((state) => state.customer);

    const viewDoc = (img) => {
        setShowDocument(true);
        setStoreIMg(img)
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            if (sucmsg) {

                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
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

        wait(5000).then(() => { dispatch(cleanup()); })
    }, []);

    useEffect(() => {
        if (update === "success" && props.navigation.isFocused()) {
           storeSuccess();
        } else if (update === "failed" && props.navigation.isFocused()) {
            refreshView(errors?.msg, "")
        }
        else {
            setErrMsg("");
        }
    }, [update]);

    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, { marginHorizontal: 20 }]}>
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

    };

    const submit = () => {
        setLoader(true);
        if (details.key === 1) {
            dispatch(updatePendingCustomers(details))
        }
        else {
            dispatch(registerCustomer(details))
        }
    }

    const RenderItem = ({ item }) => (
        <TouchableOpacity style={styles.smCardCover} onPress={() => viewDoc(item.path)}>

            <View style={styles.smCard}>
                <Image source={{ uri: item.path }} style={styles.smImg} />
            </View>
            <TouchableOpacity>
                <View>
                    <Text style={styles.viewText}>View</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    const RenderItem2 = ({ item }) => (
        <TouchableOpacity style={styles.smCardCover} onPress={() => viewDoc(item.path)}>

            <View style={styles.smCard}>
                <Image source={{ uri: item.path }} style={styles.smImg} />
            </View>
            <TouchableOpacity>
                <View>
                    <Text style={styles.viewText}>View</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    );


    return (
        <View style={styles.view}>
            <Header title="Confirm Registration" onPress={goBack} styleView={styles.body} styles={styles.headerText} />
            {errMsg ? <Toast config={toastConfig} /> : null}
            <ScrollView>
                <View style={styles.modalView}>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Full Name</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.name}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Store Name:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.store_name}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Phone:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>+{details.phone}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Store Address:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.address}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>User Type:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.user_type}</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.imgCardCover}>

                    <View style={styles.licenseView}>
                        <Text style={styles.imgName}>License Image</Text>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={details?.images}
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        showsHorizontalScrollIndicator={false}

                    />


                    <View style={styles.licenseView2}>
                        <Text style={styles.imgName}>Store Image</Text>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={details?.images2}
                        renderItem={RenderItem2}
                        keyExtractor={item => item.id}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        showsHorizontalScrollIndicator={false}

                    />

                </View>
                <View style={styles.btnCover}>
                    <BtnLg title="Confirm & Submit" onPress={submit} style={styles.submit} stylea={styles.angleImg} styles={styles.preText1} />
                </View>
            </ScrollView>
            <ViewDocument
                visibleDocument={showDocument}
                returnBack={() => setShowDocument(false)}
                img={storeImg}
            />

            <Loader isVisible={loader} />
        </View>
    )
};

export default RegConfirm;