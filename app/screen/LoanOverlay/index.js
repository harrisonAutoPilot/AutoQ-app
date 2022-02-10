import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Keyboard,TouchableWithoutFeedback, } from "react-native";
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
import { addToCart} from "@Request/cart";
import { Btn, FormikValidator, InputField } from "@Component/index";
import { loanSchema } from "@Helper/schema";


const Overlay = (props) => {
    const dispatch = useDispatch();
    const result = props.result;
    const [cartAmount, setCartAmount] = useState(0);
    const [showMsg, setShowMsg] = useState(false);
   const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const { errors, update } = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart);

 
    const addItemsToCart = (items, type) => {

        dispatch(addToCart())

    };
   const dismissKeyboard = () => Keyboard.dismiss();

   const loanState = {
        amount: "",
        password: ""
    };


    const LoanApp = () => (
        <Modal
            isVisible={props.isVisible}
            animationIn="slideInUp"
            animationInTiming={800}
            animationOut="slideOutDown"
            animationOutTiming={800}
            useNativeDriver={false}
            coverScreen={true}
            swipeDirection="down"
            onSwipeComplete={props.onSwipeComplete}
        >
            <View style={styles.modalView}>
                <View style={styles.modalPadding}>
                    <TouchableOpacity onPress={props.applyForLoan} style={styles.backCover}>
                        <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>LOAN APPLICATION</Text>
                </View>

                <View style={styles.topPrompt}>
                      <View style={styles.topPromptTextCover}>
                        <Text style={styles.topPromptText}>
                      Instantly apply for loan and pay later. Enter amount or use the slider to select amount.
                        </Text>
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
                                                    <Text style={styles.label}>LOAN AMOUNT</Text>
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
                                        
                                </View>
                               )}


                              </FormikValidator>
                     </TouchableWithoutFeedback>

                     <View style={styles.noticeCover}>
                     <View style={styles.leftNoticeCover}>
                        <Text style={styles.leftNoticeText}>Min. Amount: ₦10,000</Text>
                     </View>

                    <View style={styles.rightNoticeCover}>
                        <Text style={styles.rightNoticeText}>Max. Amount: ₦50,000</Text>
                     </View>

                     </View>
              

                   <View style={styles.downPrompt}>
                      <View style={styles.downInforCoverLoan}>
                         <Text style={styles.downInforTextLoan}>i</Text>
                      </View>
                      <View style={styles.topPromptTextCover}>
                        <Text style={styles.downPromptTextLoan}>
                      The amount you can apply for a Loan increases as you increase your order using Remedial Health.
                        </Text>
                    </View>
                </View>

                <View style={styles.downCover}>
                        <Text style={styles.downPromptText}>
                      ₦50 transaction fee to enable instant wallet updates.
                        </Text>
                    </View>
            </View>

        </Modal>
    );

    return (
        <View>
            {LoanApp()}
        </View>
    )
};

export default Overlay;