import React, { useState, useCallback, useEffect, } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";

import { BtnLg, SuccessMsgViewTwo } from "@Component/index";
import { NavHeader as Header } from "@Component";
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";


const RegConfirm = (props) => {

    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const goBack = () => props.navigation.goBack();
    const storeSuccess = () => props.navigation.navigate("RegSuccess");

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
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


    return (
        <View style={styles.view}>
            <Header title="Confirm Registration" onPress={goBack} styleView={styles.body} styles={styles.headerText}  />
            <ScrollView>
                <View style={styles.modalView}>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>name</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>name</Text>
                            </View>

                        </View>
                    </View>
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
            </ScrollView>
            <View style={styles.btnCover}>
                <BtnLg title="Confirm & Submit" onPress={storeSuccess} style={styles.submit} stylea={styles.angleImg} styles={styles.preText1} />
            </View>

        </View>
    )
};

export default RegConfirm;