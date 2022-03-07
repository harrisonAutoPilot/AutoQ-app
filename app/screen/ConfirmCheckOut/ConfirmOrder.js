import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, Dimensions, TouchableWithoutFeedback, Keyboard, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
import { addToCart } from "@Request/Cart";
import FIcon from "react-native-vector-icons/FontAwesome5";
import { SuccessMsgViewTwo } from "@Component";
import { cleanup } from "@Store/Cart";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { AuthBtn as Btn } from "@Component";


const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(1);
    const [errMsg, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");
    const [inputThree, setInputThree] = useState("");
    const [inputFour, setInputFour] = useState("");
    const inputOneRef = useRef(null);
    const inputTwoRef = useRef(null);
    const inputThreeRef = useRef(null);
    const inputFourRef = useRef(null);

    const { addCart, errors } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);
   

    const dismissKeyboard = () => Keyboard.dismiss();

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
                <View style={styles.modalPadding}>
                    <TouchableOpacity onPress={props.bottomSheetWClose} style={styles.backCover}>
                        <Image source={require("@Assets/image/leading-iconn.png")} style={globalStyle.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Confirm Withdrawal</Text>
                </View>


                <ScrollView>
                    <View style={styles.modalView}>

                        <View style={styles.topPrompt}>
                            <View style={styles.topPromptTextCover}>
                                <Text style={styles.topPromptText}>
                                    Please enter the SMS confirmation code sent to the registered number <Text style={styles.phone}>+{user?.phone}</Text>.
                                    The code is valid for 15 minutes.
                                </Text>

                            </View>
                        </View>
                        <View style={styles.labelCover}>
                            <Text style={styles.label3}>SMS CODE</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>
                            <View>


                                <View style={styles.pinHolder}>

                                    <View style={styles.pinView}>
                                        <TextInput

                                            style={styles.inputF}
                                            ref={inputOneRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputOne) => {
                                                setInputOne(inputOne);
                                                setErrMsg("");
                                                if (inputOne !== "") {
                                                    inputTwoRef.current.focus()
                                                }
                                            }}
                                            value={inputOne}
                                            maxLength={1}
                                        />
                                    </View>
                                    <View style={styles.pinView}>
                                        <TextInput
                                            style={styles.inputF}
                                            ref={inputTwoRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputTwo) => {
                                                setInputTwo(inputTwo);
                                                setErrMsg("");
                                                if (inputTwo !== "") {
                                                    inputThreeRef.current.focus()
                                                }
                                            }}
                                            maxLength={1}
                                            value={inputTwo}
                                        />
                                    </View>
                                    <View style={styles.pinView}>
                                        <TextInput
                                            style={styles.inputF}
                                            ref={inputThreeRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputThree) => {
                                                setInputThree(inputThree);
                                                setErrMsg("");
                                                if (inputThree !== "") {
                                                    inputFourRef.current.focus()
                                                }
                                            }}
                                            maxLength={1}
                                            value={inputThree}

                                        />
                                    </View>
                                    <View style={styles.pinView}>
                                        <TextInput
                                            style={styles.inputF}
                                            ref={inputFourRef}
                                            placeholder="-"
                                            placeholderTextColor="#757575"
                                            keyboardType="number-pad"
                                            onChangeText={(inputFour) => {
                                                setInputFour(inputFour);
                                                setErrMsg("");
                                            }}
                                            maxLength={1}
                                            value={inputFour}
                                        />
                                    </View>
                                </View>

                                <View style={styles.labelCover2}>
                                    <Text style={styles.label4}>Yet to receive SMS code? <Text style={styles.label5}>Resend</Text></Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </ ScrollView >
                <View style={[styles.addBtnCover2]}>
                    <Btn title="Confirm Order" style={styles.addressBtn2} onPress={props.submit}/>
                </View>
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