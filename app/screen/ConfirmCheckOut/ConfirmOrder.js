import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
import { addToCart} from "@Request/Cart";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { SuccessMsgViewTwo } from "@Component";
import { cleanup } from "@Store/Cart";
import BottomSheet from "react-native-gesture-bottom-sheet";


const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(1);
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const { addCart, errors } = useSelector((state) => state.cart);

    useEffect(() => {
        if (addCart === "failed") {
            refreshView(errors?.msg, "")
            setSuccessMsg("");
            setCartAmount(1)
        } else if (addCart === "success") {
            setErr("");
            refreshView("", "Added to Cart");
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [addCart]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {
        wait(300).then(() => {
            setSuccessMsg(suc);
            setErr(msg);
            if (suc) {
                dispatch(listCart())
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: Platform.OS === "ios" ? 90 : 50
                })

            } else {
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        })

        wait(2000).then(() => { dispatch(cleanup()); })
    }, []);

    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, globalStyle.marginTop, { marginHorizontal: 20 }]}>
                <FIcon name="exclamation-circle" color="#fff" style={globalStyle.exclaImg} size={20} />
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };


    const addItemsToCart = () => {
        const cartDetails = { quantity: cartAmount, product_id: result.id }
            dispatch(addToCart(cartDetails));
    };


    const ModalView = () => (
        <View>
            <BottomSheet hasDraggableIcon ref={props.bottomSheet} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.20} radius={50} styles={styles.addStoreBottomSheet}>
                <View style={globalStyle.dragIcon}><FIcon name="minus" color="gray" size={35} /></View>

                <View style={globalStyle.errInCoverNew}>
                    {errMsg ? <Toast config={toastConfig} /> : null}
                    {successMsg ? <Toast config={toastConfig} /> : null}
                </View>
                <TouchableOpacity onPress={props.onPress} style={styles.modalPaddingLayout}>

                    <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
                </TouchableOpacity>


                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} keyboardShouldPersistTaps="always">
                    
                </ScrollView>
            </BottomSheet>
        </View>
    );

    return (
        <View>
            {ModalView()}
        </View>
    )
};

export default Overlay;