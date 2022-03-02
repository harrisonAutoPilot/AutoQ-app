import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import styles from "./style";
import { Header } from "@Component";
import MyWallet from "./MyWallet";
import { cleanup } from "@Store/Auth";
import { getWallet } from "@Request/Wallet";

const Wallet = (props) => {

    const dispatch = useDispatch();
    const openDrawer = () => props.navigation.openDrawer();

    const detail = (item) => props.navigation.navigate("TransactionDetail", item)
    const openNotification = () => props.navigation.navigate("Notification");
    const openCart = () => props.navigation.navigate("Cart");


    useEffect(() => {
        dispatch(getWallet())
        return () => dispatch(cleanup())
    }, []);

    return (
        <View style={styles.view}>
            <Header drawer={openDrawer} notify={openNotification} cart={openCart} />
            <View style={styles.mainBody}>
                <View style={styles.subHeader}>
                    <MyWallet detail={detail} />
                </View>

            </View>

        </View>
    )
};

export default Wallet;