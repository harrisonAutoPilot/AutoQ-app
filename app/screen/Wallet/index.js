import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";

import styles from "./style";
import Header from "@Component/Header";
import MyWallet from "./MyWallet";
import Loan from "./Loan"
// import { cleanup } from "@Store/auth";
// import { getWallet } from "@Request/Wallet";

const Wallet = (props) => {

    const dispatch = useDispatch();
  
    const openDrawer = () => props.navigation.openDrawer();

    const detail = (item) => props.navigation.navigate("TransactionDetail", item)
    const openNotification = () => props.navigation.navigate("Notification");


    // useEffect(() => {
    //     dispatch(getWallet())
    //     return () => dispatch(cleanup())
    //  }, []);

    return (
        <View style={styles.view}>
       {/* <Header  drawer={openDrawer} favourite={openFavourite} notify={openNotification} /> */}
       <Header  drawer={openDrawer}  />
            <View style={styles.mainBody}>      
                <View style={styles.subHeader}>
                <MyWallet detail={detail} /> 
                </View>     
               
            </View>
          
           
        </View>
    )
};

export default Wallet;