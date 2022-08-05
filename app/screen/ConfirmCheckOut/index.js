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

const ConfirmCheckOut = (props) => {
    const dispatch = useDispatch();

    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const { selected, active, amount, wallet, delivery_date, delivery_type, delivery_price, category, deliveryTypeName } = props.route.params;
    const bottomSheet = useRef();

    const backToCart = () => props.navigation.navigate("CheckOut");
    const closeBottomSheet = () => {
        dispatch(cleanup());
        // dispatch(getCustomerPendingOrders());
        props.navigation.navigate("PendingOrder");
    }
    const { update, errors, orderDetail, verify, verificationStatus } = useSelector((state) => state.order);

    useEffect(() => {
        return () => dispatch(cleanup())
    }, []);


    useEffect(() => {
        if (orderDetail.order_group_id) {
            const details = { orderGroup_id: orderDetail.order_group_id };
            dispatch(verifyOrder(details));
            bottomSheet.current.show();
        }
    }, [orderDetail.order_group_id])

    useEffect(() => {
        if (update === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (update === "success" && props.navigation.isFocused()) {
            waitTime("Order Placed Successfully", "")
        }

        if (verify === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (verify === "success" && props.navigation.isFocused()) {
            dispatch(cleanup())
            dispatch(delivery())
            props.navigation.navigate("CheckoutSuccess", { amount, delivery_price })
        }

        if (verificationStatus === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (verificationStatus === "success" && props.navigation.isFocused()) {
            waitSuccessTime()
        }

    }, [errors]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((suc, err) => {
        wait(1000).then(() => {
            if (err) {
                setLoader(false);
                setErr(err)
            }
        });

        wait(5000).then(() => {
            setErr("")
            dispatch(cleanErr())
        });
    }, []);

    const waitSuccessTime = useCallback(() => {
        wait(1000).then(() => {
            setLoader(false);
            setSuccessMsg("Verification code sent")
        });

        wait(1000).then(() => {
            setSuccessMsg("")
            dispatch(cleanVerify());

        });
    }, []);


    const submit = () => {
        const details = { store_id: selected.id, payment_method_id: active, delivery_date, delivery_type };
        setLoader(true)
        dispatch(placeOrder(details));
    };

    const verifyToken = (a, b, c, d) => {
        const code = { code: parseInt(`${a}${b}${c}${d}`) }
        setLoader(true)
        dispatch(verifyCode(code));
    };

    const resendToken = () => {
        const details = { orderGroup_id: orderDetail.order_group_id };
        setLoader(true)
        dispatch(verifyOrder(details));
    };


    return (
        <View >
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
            <View style={styles.bottomCover} >

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

                    <View style={styles.title2Cover}>
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

                    <View style={styles.title2Cover}>
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
                        <View style={styles.title2Cover}>
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
                         <DashedLine style={styles.dashStyle} dashLength={3} dashThickness={1} dashGap={2}  dashColor='#BDBDBD' />
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
            </View>

            <BottomSheet
                bottomSheet={bottomSheet}
                submit={verifyToken}
                err={err}
                success={successMsg}
                resendToken={resendToken}
                close={closeBottomSheet}
                phone={selected?.user?.phone}
            />

            <Loader isVisible={loader} />
        </View>
    )
};

export default ConfirmCheckOut;