import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Platform, } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Toast from 'react-native-toast-message';
import DashedLine from 'react-native-dashed-line';
import styles from "./style";
import { placeOrder, verifyOrder, verifyCode, getCustomerPendingOrders } from "@Request/CustomerOrder";
import { AuthBtn as Btn, COHeader as Header } from "@Component";
import { cleanup, cleanErr, cleanVerify } from "@Store/CustomerOrder";
import Loader from "@Screen/Loader";
import BottomSheet from "./ConfirmOrder";
import { cleanup as delivery } from "@Store/DeliveryOptions";
import { listCart } from "@Request/Cart";
import { cleanList } from "@Store/Cart";

const ConfirmCheckOut = (props) => {
    const dispatch = useDispatch();

    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [showResendCodeBtn, setShowResendCodeBtn] = useState(true);


    const { selected, active, amount, wallet, delivery_date, delivery_type, delivery_price, category, deliveryTypeName } = props.route.params;

    const bottomSheet = useRef();

    const { update, errors, orderDetail, verify, verificationStatus } = useSelector((state) => state.order);

    const backToCart = () => {
        props.navigation.navigate("CheckOut");
    }

    const closeBottomSheet = () => {
        bottomSheet.current.close();
        dispatch(getCustomerPendingOrders(1));
        dispatch(cleanList());
        dispatch(listCart(1));
        props.navigation.navigate("PendingOrder");
    }

    useEffect(() => {
        return () => {
            dispatch(cleanup())
            dispatch(cleanErr())
            dispatch(cleanVerify())
        }
    }, []);


    // useEffect(() => {
    //     if (orderDetail.order_group_id) {
    //         const details = { orderGroup_id: orderDetail.order_group_id };
    //         console.log(details, "kop")
    //         setLoader(false)
    //         dispatch(verifyOrder(details));
    //         Platform.OS === "android" ?
    //             bottomSheet.current.show()
    //             : null
    //     }
    // }, [orderDetail.order_group_id])


    const showVerifyModal = () => {
        setLoader(false)
        Platform.OS === "android" ?
            bottomSheet.current?.present()
            : null
    };


    useEffect(() => {
        if (update === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (update === "success" && props.navigation.isFocused()) {
            dispatch(cleanList())
            dispatch(listCart(1))
            showVerifyModal()
            waitTimeToResendVerification()
            Platform.OS === "ios" ? bottomSheet?.current?.show() : null
            waitSuccessTime()

        }

        if (verify === "failed" && props.navigation.isFocused()) {
            setLoader(false);
            waitTimeToResendVerification()
            waitTime("", errors?.msg)
        } else if (verify === "success" && props.navigation.isFocused()) {
            setLoader(false)
            dispatch(cleanup())
            dispatch(delivery())
            props.navigation.navigate("CheckoutSuccess", { amount: amount + delivery_price, delivery_price })
        }

        if (verificationStatus === "failed" && props.navigation.isFocused()) {
            setLoader(false);
            waitTime("", errors?.msg)
            waitTimeToResendVerification()
        } else if (verificationStatus === "success" && props.navigation.isFocused()) {
            waitTimeToResendVerification()
            Platform.OS === "ios" ? bottomSheet?.current?.show() : null
            waitSuccessTime()
        }

    }, [errors, verificationStatus, verify]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((suc, err) => {

        wait(300).then(() => {
            if (err) {
                setLoader(false);
                setErr(err)
            } else if (suc) {
                dispatch(cleanList())
                dispatch(listCart(1))
                showVerifyModal()
            }
        });

        wait(5000).then(() => {
            setErr("")
            dispatch(cleanErr())
        });
    }, []);

    const waitSuccessTime = useCallback(() => {
        setLoader(false);
        setSuccessMsg("Verification code sent")

        wait(2000).then(() => {
            setSuccessMsg("")
            dispatch(cleanVerify());

        });
    }, []);


    const submit = () => {
        const details = { store_id: selected.id, payment_method_id: active, delivery_date, delivery_type };
        setLoader(true);
        setShowResendCodeBtn(false)
        dispatch(placeOrder(details));
    };

    const waitTimeToResendVerification = useCallback(() => {
        wait(15000).then(() => {
            console.log("called me cont")
            setShowResendCodeBtn(true);
        });

    }, []);

    const verifyToken = (a, b, c, d) => {
        const code = { code: parseInt(`${a}${b}${c}${d}`) }
        setLoader(true)
        setShowResendCodeBtn(false)
        dispatch(verifyCode(code));
    };

    const resendToken = () => {
        const details = { orderGroup_id: orderDetail.order_group_id };
        setShowResendCodeBtn(false)
        dispatch(verifyOrder(details));
    };


    return (
        <View style={styles.confirmCheckout}>
            <Header title="Check Out"
                onPress={backToCart}
                styleView={styles.body}
                styles={styles.headerText}
            />

            <View style={styles.mainBody}>

                {err ? <View style={[globalStyles.errMainView]}>
                    <Text style={globalStyles.failedResponseText}>{err}</Text>
                </View>
                    : null}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>

                <View style={styles.titleCover}>
                    <Text style={styles.titleText}>DELIVERY ADDRESS</Text>
                    <TouchableOpacity onPress={backToCart}>
                        <View>
                            <Text style={styles.changeText}>Change</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.selectContainer}>

                    <View style={styles.dropCover}>
                        <View>
                            <Text style={styles.storeNameText}>{selected.name}</Text>
                            <Text style={styles.storeAddressText}>{selected.address}</Text>
                            <Text style={styles.storePhoneText}>+{selected?.user?.phone}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.titleCover}>
                    <Text style={styles.titleText}>DELIVERY DETAILS</Text>
                    <TouchableOpacity onPress={backToCart}>
                        <View>
                            <Text style={styles.changeText}>Change</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.selectContainer}>

                    <View style={styles.dropCover}>
                        <View>
                            <Text style={styles.storeNameText}>{deliveryTypeName}</Text>
                            <Text style={styles.storePhoneText}>{delivery_date}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.titleCover}>
                    <Text style={styles.titleText}>PAYMENT</Text>
                    <TouchableOpacity onPress={backToCart}>
                        <View>
                            <Text style={styles.changeText}>Change</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.selectContainer}>

                    <View>
                        <Text style={styles.storeNameText}>{category}</Text>
                        <Text style={styles.storeAddressText}>Balance: ₦{wallet.length ? commafy(wallet) : 0}</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.titleCover}>
                        <Text style={styles.titleText}>ORDER DETAILS</Text>

                    </View>
                    <View style={styles.bottomDownCover}>

                        <View style={styles.subtotalCover}>
                            <Text style={styles.subText}>Subtotal</Text>
                            <Text style={styles.subText}>₦{commafy(amount)}</Text>
                        </View>
                        <View style={styles.subtotalCover}>
                            <Text style={styles.subText}>Delivery</Text>
                            <Text style={styles.subText}>₦{delivery_price ? commafy(delivery_price) : 0}</Text>
                        </View>


                        {
                            Platform.OS === "android" ?
                                <View style={styles.subtotalCoverDot}>
                                    <Text style={styles.subTextDark}>Total</Text>
                                    <Text style={styles.subTextDark}>₦{commafy(amount + delivery_price)}</Text>
                                </View>
                                :
                                <>
                                    <DashedLine style={styles.dashStyle} dashLength={3} dashThickness={1} dashGap={2} dashColor='#BDBDBD' />
                                    <View style={styles.subtotalCoverDot1}>
                                        <Text style={styles.subTextDark}>Total</Text>
                                        <Text style={styles.subTextDark}>₦{commafy(amount + delivery_price)}</Text>
                                    </View>
                                </>

                        }
                        <View style={[styles.addBtnCover]}>
                            <Btn title="Confirm Check Out" style={styles.addressBtn2} onPress={submit} />
                        </View>



                    </View>

                </View>

            </ScrollView>

            <BottomSheet
                bottomSheet={bottomSheet}
                submit={verifyToken}
                err={err}
                success={successMsg}
                resendToken={resendToken}
                close={closeBottomSheet}
                phone={selected?.user?.phone}
                showResendPin={showResendCodeBtn}
            />

            <Loader isVisible={loader} />
        </View>
    )
};

export default ConfirmCheckOut;