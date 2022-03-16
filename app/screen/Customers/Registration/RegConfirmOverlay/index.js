import React, { useState, useCallback, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions, SafeAreaView, Keyboard, ScrollView, Image, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import { Btn, BtnLg, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import { profileSchema, registerSchema } from "@Helper/schema";

import FIcon from "react-native-vector-icons/FontAwesome5";
import BottomSheet from "react-native-gesture-bottom-sheet";
import data from './data'
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
// import StoreSuccess from "@Screen/StoreSuccessOverlay"
// 

const Overlay = (props) => {
    const [copiedText, setCopiedText] = useState('Copy Account No');
    const [successMsg, setSuccessMsg] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const bottomSheet = useRef();
    const bottomSheetStoreSuccess = useRef();
    const [errMsg, setErrMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();


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
    

    const storeSuccess = () => props.navigation.navigate("RegSuccess");


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
    const ListView = ({ item, index }) => {

        return (

            <View style={styles.card} key={item.id}>
                <View style={styles.listCover}>
                    <View>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>

                </View>
            </View>

        )
    };



    const RegConfirm = () => (
        <BottomSheet hasDraggableIcon ref={props.bottomSheetRegConfirm} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.05} radius={50} styles={styles.addStoreBottomSheet}>



            <View style={styles.modalPadding}>
                <TouchableOpacity onPress={props.closeSheet} style={styles.backCover}>
                    <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
                </TouchableOpacity >
                <Text style={styles.modalTitle}>Confirm Registration</Text>
            </View>
            <View style={styles.modalView}>




                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={ListEmptyComponent}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}

                />

            </View>

            <View style={styles.imgCardCover}>
                <View style={styles.smCardCover}>
                    <Text style={styles.imgName}>Pharm. License</Text>
                    <View style={styles.smCard}>
                        <Image source={require("@Assets/image/smImg.png")} style={styles.smImg} />
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.viewText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>




                <View style={styles.smCardCover}>
                    <Text style={styles.imgName}>Store Image 1</Text>
                    <View style={styles.smCard}>
                        <Image source={require("@Assets/image/smImg.png")} style={styles.smImg} />
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.viewText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.smCardCover}>
                    <Text style={styles.imgName}>Store Image 2</Text>
                    <View style={styles.smCard}>
                        <Image source={require("@Assets/image/smImg.png")} style={styles.smImg} />
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.viewText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.btnCover}>
                <BtnLg title="Confirm & Submit" onPress={storeSuccess} style={styles.submit} stylea={styles.angleImg} styles={styles.preText1} />
            </View>
{/* 
            <StoreSuccess
                bottomSheetStoreSuccess={bottomSheetStoreSuccess}
                bottomSheetCloseSuccess={closeSuccess}
            /> */}
        </BottomSheet >
    );

    return (
        <View>
            {RegConfirm()}
        </View>
    )
};

export default Overlay;