import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import globalStyle from "@Helper/GlobalStyles";
import styles from "./style";
import { placeOrder, verifyOrder, getOrder } from "@Request/CustomerOrder";
import { AuthBtn as Btn, COHeader as Header, SuccessMsgViewTwo } from "@Component";
import { cleanup } from "@Store/CustomerOrder";
import Loader from "@Screen/Loader";
import commafy from "@Helper/Commafy";
import BottomSheet from "./ConfirmOrder";

const ConfirmCheckOut = (props) => {
    const dispatch = useDispatch();

    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const { selected, active, amount, wallet, id } = props.route.params;
    const bottomSheet = useRef();

    const backToCart = () => props.navigation.navigate("CheckOut");

    const { update, errors, orderDetail } = useSelector((state) => state.order);

    useEffect(() => {
        return () => dispatch(cleanup())
    }, []);

    useEffect(() => {
        if (update === "failed" && props.navigation.isFocused()) {
            waitTime("", errors?.msg)
        } else if (update === "success" && props.navigation.isFocused()) {
            waitTime("Order Placed Successfully")
        }
    }, [errors]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((suc, err) => {
        wait(1000).then(() => { 
            if(suc){
                setSuccessMsg(suc)
                console.log(orderDetail)
                // dispatch(getOrder)
            }else{

                setLoader(false);
                setErr(err)
            }
            // const details = { orderGroup_id: id};
            // dispatch(verifyOrder(details));
            // bottomSheet.current.show();
            
        });
    }, []);

    const sendToken = useCallback((suc, err) => {
        wait(1000).then(() => {
            setLoader(false);
            if(suc){
                setSuccessMsg(suc)
            bottomSheet.current.show();
            }else{
                setErr(err)
            }
            // const details = { orderGroup_id: id};
            // dispatch(verifyOrder(details));
            // bottomSheet.current.show();
            
        });
    }, []);

    const submit = () => {
        const details = { store_id: selected.id, payment_method_id: active };
        setLoader(true)
        dispatch(placeOrder(details));
    };

    const openSheet = () => {
        const details = { orderGroup_id: id};
        dispatch(verifyOrder(details));
        bottomSheet.current.show();
    };


    return (
        <View >
            <Header title="Check Out"
                onPress={backToCart}
                styleView={styles.body}
                styles={styles.headerText}
            />

            <View style={styles.mainBody}>

                {err ? <View style={[globalStyle.errMainView, { marginBottom: 10,  }]}>
                    <Text style={globalStyle.failedResponseText}>{err}</Text>
                </View>
                    : null}
                      {successMsg ?<SuccessMsgViewTwo  title={successMsg}/> : null}
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
                        <Text style={styles.titleText}>PAYMENT</Text>
                        <TouchableOpacity onPress={backToCart}>
                            <View>
                                <Text style={styles.changeText}>Change</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.selectContainer}>

                        <View>
                            <Text style={styles.storeNameText}>{wallet.length ? "Wallet" : "Delivery"}</Text>
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
                                <Text style={styles.subText}>Free</Text>
                            </View>

                            <View style={styles.subtotalCoverDot}>
                                <Text style={styles.subTextDark}>Total</Text>
                                <Text style={styles.subTextDark}>₦{commafy(amount)}</Text>
                            </View>

                            <View style={[styles.addBtnCover]}>
                                <Btn title="Confirm Check Out" style={styles.addressBtn2} onPress={submit} />
                            </View>


                        </View>

                    </View>

                </ScrollView>
            </View>
            <Loader isVisible={loader} />
            <BottomSheet
                bottomSheet={bottomSheet}
                submit = {submit}
            />
        </View>
    )
};

export default ConfirmCheckOut;