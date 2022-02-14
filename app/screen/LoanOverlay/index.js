import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback, Dimensions, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import globalStyle from "@Helper/globalStyles";
import { listWishlistProducts, listPopularProducts } from "@Request/products";
import URL from "@Helper/constant";
import commafy from "@Helper/commafy";
import { addToCart } from "@Request/cart";
import Dropdown from './Dropdown';
import { Btn, TrackBtn, FormikValidator, InputField } from "@Component/index";
import { loanSchema } from "@Helper/schema";
import BottomSheet from "react-native-gesture-bottom-sheet";


const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(0);
    const [showMsg, setShowMsg] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const { errors, update } = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart);
    const bottomSheet = useRef();
    const bottomSheetWithDraw = useRef();

    const [selected, setSelected] = useState({});
    const addItemsToCart = (items, type) => {

        dispatch(addToCart())

    };
    const dismissKeyboard = () => Keyboard.dismiss();

    const loanState = {
        amount: "",
        password: ""
    };
    const data = [
        { label: 'Wema Bank', value: 'Wema Bank', storeAddress: '0123456080', value: '0123456080' },
        { label: 'First Bank', value: 'First Bank', storeAddress: '0123456080', value: '0123456080'  },
        { label: 'GtBank Plc', value: 'GtBank Plc', storeAddress: '0123456080', value: '0123456080'  },
        { label: 'Union Bank', value: 'Union Bank', storeAddress: '0123456080', value: '0123456080' },
        { label: 'Access Bank', value: 'Access Bank', storeAddress: '0123456080', value: '0123456080'  },
    ];


    const LoanApp = () => (
        <BottomSheet hasDraggableIcon ref={props.bottomSheetL} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.40} radius={50} styles={styles.addStoreBottomSheet}>

            <ScrollView style={styles.modalView}>
                <View style={styles.modalView}>
                    <View style={styles.modalPadding}>
                        <TouchableOpacity onPress={props.bottomSheetClose} style={styles.backCover}>
                            <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Withdraw Funds</Text>
                    </View>

                    <View style={styles.topPrompt}>
                        <View style={styles.topPromptTextCover}>
                            <Text style={styles.topPromptText}>
                                Withdraw funds from your wallet straight to your Bank Account.
                            </Text>
                            <Text style={styles.bottomPromptText}>YOUR WALLET BALANCE:</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={dismissKeyboard}>
                        <FormikValidator
                            initialValues={loanState}
                            validationSchema={loanSchema}
                            onSubmit={(values) => {
                                submit(values)
                            }}>

                            {props => (
                                <View style={styles.cover}>

                                    <View style={[styles.inputHolder, props.touched.amount && props.errors.amount ? styles.inputErrHolder : null]}>
                                        <View style={styles.labelView}>
                                            <Text style={styles.label}>ENTER AMOUNT</Text>
                                        </View>

                                        <InputField
                                            value={props.values.amount}
                                            onBlur={props.handleBlur('amount')}
                                            placeholder="₦ 35,000.00"
                                            placeholderTextColor="#000000"
                                            keyboardType="number-pad"
                                            onChangeText={(val) => {
                                                props.setFieldValue('amount', val)
                                                props.setFieldTouched('amount', true, false);
                                                setErrMsg("")
                                            }}
                                            style={styles.label2}
                                        />
                                        
                                    </View>
                                    {props.touched.amount && props.errors.amount ? (
                                        <View style={styles.errView}>
                                            <Text style={styles.errText}>{props.errors.amount}</Text>
                                        </View>) : null}

                                    <View style={[styles.inputHolderSelect, props.touched.amount && props.errors.amount ? styles.inputErrHolder : null]}>
                                        <View style={styles.labelView}>
                                            <Text style={styles.label}>SELECT ACCOUNT</Text>
                                        </View>
                                        <Dropdown label="" storeAddress="Select Account to Withdraw to" data={data} onSelect={setSelected} />
                                    </View>
                                    {props.touched.amount && props.errors.amount ? (
                                        <View style={styles.errView}>
                                            <Text style={styles.errText}>{props.errors.amount}</Text>
                                        </View>) : null}
                                </View>
                            )}


                        </FormikValidator>
                    </TouchableWithoutFeedback>





                   

                    <View style={[styles.addBtnCover, styles.orderBtn]}>
                        <TrackBtn title="Next" style={styles.addressBtn2} onPress={props.bottomSheetW}  />
                    </View>
                </View>
            </ ScrollView >
        </BottomSheet>
    );

    return (
        <View>
            {LoanApp()}
        </View>
    )
};

export default Overlay;