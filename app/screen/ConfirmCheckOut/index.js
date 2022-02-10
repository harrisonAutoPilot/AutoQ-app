import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView,} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import globalStyle from "@Helper/globalStyles";
import styles from "./style";
import { placeOrder } from "@Request/order";
import { TrackBtn } from "@Component/index";
import NavHeader from "@Component/NavHeader";
import { cleanup } from "@Store/order";
import Loader from "@Screen/Loader";
import commafy from "@Helper/commafy";

const ConfirmCheckOut = (props) => {
    const dispatch = useDispatch();

    const [err, setErr] = useState("");
    const [loader, setLoader] = useState(false);
    const {selected, active, amount, wallet }= props.route.params;

    const backToCart = () => props.navigation.navigate("CheckOut");
   
    const {update, errors} = useSelector((state) => state.order);
 
    useEffect(() => {
      return () => dispatch(cleanup())
    }, []);

    useEffect(() => {
        if (update === "failed" && props.navigation.isFocused()) {
            setErr(errors?.msg)
            waitTime()
        }else if (update === "success" && props.navigation.isFocused()){
            waitTime()
            props.navigation.navigate("CartSuccess", amount)
        }
    }, [errors]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback(() => {
        wait(1000).then(() => {
            setLoader(false); });
    }, []);

    const submit = () => {
        const details = {store_id: selected.id, payment_method_id: active};
        setLoader(true)
        dispatch(placeOrder(details));
    }


    return (
        <View style={styles.view}>
             <NavHeader title="Confirm Check Out"
                onPress={backToCart}
                styleView={styles.body}
                styles={styles.headerText}
                statusBar="#fff" />
          
            <View style={styles.mainBody}>

                {err ? <View style={[globalStyle.errMainView, { marginBottom: 10, marginHorizontal: 20 }]}>
                    <Text style={globalStyle.failedResponseText}>{err}</Text>
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
                                <Text style={styles.storePhoneText}>{selected?.user?.phone}</Text>
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
                            <Text style={styles.storeNameText}>{wallet.length ? "Wallet": "Delivery"}</Text>
                            <Text style={styles.storeAddressText}>Balance: ₦{wallet.length ? commafy(wallet): 0}</Text>
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

                            <View style={[styles.addBtnCover, styles.orderBtn]}>
                                <TrackBtn title=" Complete Check Out" style={styles.addressBtn2} onPress={submit}/>
                            </View>


                        </View>

                    </View>

                </ScrollView>
            </View>
            <Loader isVisible={loader} />
        </View>
    )
};

export default ConfirmCheckOut;