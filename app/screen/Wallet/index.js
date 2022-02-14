import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";

import styles from "./style";
import Header from "@Component/Header";
import MyWallet from "./MyWallet";
import Loan from "./Loan"
import { cleanup } from "@Store/auth";
import { getWallet } from "@Request/wallet";

const Wallet = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
  
    const openDrawer = () => props.navigation.openDrawer();

    const detail =(item) => props.navigation.navigate("TransactionDetail", item)
    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 })
    const openNotification = () => props.navigation.navigate("Notification");


    useEffect(() => {
        dispatch(getWallet())
        return () => dispatch(cleanup())
     }, []);

    const showActive = (id) => setActiveId(id)

    return (
        <View style={styles.view}>
       {/* <Header  drawer={openDrawer} favourite={openFavourite} notify={openNotification} /> */}
       <Header  drawer={openDrawer} favourite={openFavourite}  />
            <View style={styles.mainBody}>      
                <View style={styles.subHeader}>
                <MyWallet detail={detail} /> 
                </View>
              
            
               
            </View>
          
           
        </View>
    )
};

export default Wallet;