import React, { useState, useCallback, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, FlatList } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import data from './data'
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
// import AddStore from "./addStore"
// import StoreDetail from "@Screen/StoreDetailOverlay"


const Overlay = (props) => {
    const [copiedText, setCopiedText] = useState('Copy Account No');
    const [successMsg, setSuccessMsg] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const bottomSheet = useRef();
    const bottomSheetAddStore = useRef();
    const bottomSheetStore = useRef();
    const bottomSheetStoreDetail = useRef();

    const closeSheet2 = () => {
        bottomSheetAddStore.current.close();
    };

    const addStore = () => {
        bottomSheetAddStore.current.show();
    };
    const storeDetail = () => {
        bottomSheetStoreDetail.current.show();
    };

    const bottomSheetCloseDetail = () => {
        bottomSheetStoreDetail.current.close();
    };


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

    const RenderItem = ({ item, index }) => {
        return (
            <View>
                {data.map((item) => (
                    <TouchableOpacity onPress={storeDetail} >
                        <View style={styles.card} key={item.id}>
                            <View style={styles.cardImgCover}>
                                <Image source={require("@Assets/image/storeN.png")} style={globalStyle.backImg} />
                            </View>
                            <View style={styles.cardDesCover}>
                                <Text style={styles.storeName}>Pharma Store Ikeja</Text>
                                <Text style={styles.storeAddress}>{item.address}</Text>
                            </View>
                            <View style={styles.cardArrowCover}>
                                <Text style={styles.storeView}>view</Text>
                                <Image source={require("@Assets/image/greater.png")} style={styles.greaterImg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    };

    const StoreView = () => (
        <BottomSheet hasDraggableIcon ref={props.bottomSheetStore} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.18} radius={50} styles={styles.addStoreBottomSheet}>

            <View style={styles.modalView}>

                <View style={styles.modalPadding}>
                    <TouchableOpacity onPress={props.bottomSheetClose} style={styles.backCover}>
                        <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Stores</Text>
                </View>
                <TouchableOpacity onPress={addStore}>
                    <View style={styles.topPrompt}>
                        <Text style={styles.topPromptText1}>+</Text>
                        <Text style={styles.topPromptText2}>Add New Store</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView
                    indicatorStyle="white"
                    contentContainerStyle={[
                        styles.scrollContentContainer,
                        { paddingBottom: 10 },
                    ]}>
                    <View style={styles.bottomCover}>
                        <RenderItem />
                    </View>
                </ScrollView>

            </View>


            {/* <AddStore
                bottomSheetAddStore={bottomSheetAddStore}
                closeSheet2={closeSheet2}
            /> */}
           
           {/* <StoreDetail
                bottomSheetStoreDetail={bottomSheetStoreDetail}
                bottomSheetCloseDetail={bottomSheetCloseDetail}
            /> */}
        </BottomSheet >
    );

    return (
        <View>
            {StoreView()}
        </View>
    )
};

export default Overlay;