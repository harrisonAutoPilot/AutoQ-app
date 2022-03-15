import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';

import styles from "./style";
import {COHeader as Header} from "@Component";
import InActive from "./Inactive";
import CustomerInfo from "./Info";
import Orders from "./Orders";

const CustomerDetails = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const details = props.route?.params?.details

    const goBack = () => props.navigation.navigate("CustomersDashboard");
    const detailsScreen = (item) => props.navigation.navigate("OrderDetails", { item });
    const showActive = (id) => setActiveId(id)

    return (
        <View style={styles.view}>
           <Header title="Account Details" onPress={goBack} styleView={styles.body}/>
         
            <View style={styles.mainBody}>      
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>CUSTOMER INFO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>ORDERS</Text>
                    </TouchableOpacity>
                   
                </View>
              
               
            </View>
            {activeId === 1 ? <CustomerInfo details={details} /> : <Orders details={details} detailsScreen={detailsScreen}/> }  

        </View>
    )
};

export default CustomerDetails;