import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback, Dimensions, ScrollView, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
import { addToCart } from "@Request/Cart";
import { AuthBtn as Btn, FormikValidator, InputField } from "@Component";
import BottomSheet from "react-native-gesture-bottom-sheet";

const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(0);
    const [showMsg, setShowMsg] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const { errors, update } = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart);
    const bottomSheet = useRef();
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");
    const [inputThree, setInputThree] = useState("");
    const [inputFour, setInputFour] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const inputOneRef = useRef(null);
    const inputTwoRef = useRef(null);
    const inputThreeRef = useRef(null);
    const inputFourRef = useRef(null);

    const [selected, setSelected] = useState({});
    const addItemsToCart = (items, type) => {

        dispatch(addToCart())

    };
    const dismissKeyboard = () => Keyboard.dismiss();

    const submit = () => {

        if (inputOne && inputTwo && inputThree && inputFour) {
            const values = { code: `${inputOne}${inputTwo}${inputThree}${inputFour}` }
            dispatch(verifyPin(values))
        }
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    // useEffect(() => {
    //     inputOneRef.current.focus()
    // }, []);


    const loanState = {
        amount: "",
        password: ""
    };
    const data = [
        { label: 'Wema Bank', value: 'Wema Bank', storeAddress: '0123456080', value: '0123456080' },
        { label: 'First Bank', value: 'First Bank', storeAddress: '0123456080', value: '0123456080' },
        { label: 'GtBank Plc', value: 'GtBank Plc', storeAddress: '0123456080', value: '0123456080' },
        { label: 'Union Bank', value: 'Union Bank', storeAddress: '0123456080', value: '0123456080' },
        { label: 'Access Bank', value: 'Access Bank', storeAddress: '0123456080', value: '0123456080' },
    ];


    const WithDraw = () => (
        <BottomSheet hasDraggableIcon ref={props.bottomSheetW} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.20} radius={50} styles={styles.addStoreBottomSheet}>

            <ScrollView style={styles.modalView}>
                <View style={styles.modalView}>
                    <View style={styles.modalPadding}>
                        <TouchableOpacity onPress={props.bottomSheetWClose} style={styles.backCover}>
                            <Image source={require("@Assets/image/leading-iconn.png")} style={globalStyle.backImg} />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Confirm Withdrawal</Text>
                    </View>

                    <View style={styles.topPrompt}>
                        <View style={styles.topPromptTextCover}>
                            <Text style={styles.topPromptText}>
                                For security, please enter your 4 Digit Pin to confirm this withdrawal.
                            </Text>

                        </View>
                    </View>
                    <View style={styles.labelCover}>
                        <Text style={styles.label3}> 4 DIGIT PIN</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.pinHolder}>

                            <View style={styles.pinView}>
                                <TextInput

                                    style={styles.inputF}
                                    ref={inputOneRef}

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

                                    ref={inputTwoRef}

                                    style={styles.inputF}
                                    ref={inputThreeRef}

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

                    </TouchableWithoutFeedback>

                </View>
            </ ScrollView >
            <View style={styles.btnCover}>
                <View style={[styles.addBtnCover, styles.orderBtn]}>
                    <Btn title="Confirm & Withdraw" style={styles.addressBtn2} onPress={submit} />
                </View>
            </View>
        </BottomSheet>
    );

    return (
        <View>
            {WithDraw()}
        </View>
    )
};

export default Overlay;