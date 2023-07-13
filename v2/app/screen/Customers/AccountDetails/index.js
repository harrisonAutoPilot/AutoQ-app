import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";
import { TransactionHeader } from "@Component2";
import InActive from "./Inactive";
import CustomerInfo from "./Info";
import Orders from "./Orders";
import Transaction from "./Transaction";
import { getCustomerOrder } from "@Request/Customer";
import { cleanOrder } from "@Store/Customer";

const CustomerDetails = (props) => {


    const dispatch = useDispatch();


    const cart = () => props.navigation.navigate("Cart")

    const [activeId, setActiveId] = useState(1);


    const details = props.route?.params?.details;


    const name = props.route?.params?.name;

    console.log('the day', props?.name)

    const goBack = () => props.navigation.navigate("CustomersDashboard");

    const detailsScreen = (item) => props.navigation.navigate("OrderDetails", { item });

    const showActive = (id) => setActiveId(id)


    const viewStore = () => props.navigation.navigate("MyStore", {id:details.id});


    useEffect(() => {

        dispatch(getCustomerOrder({id: details.id, no: 1}))

        return () => {
            dispatch(cleanOrder())
        }

    }, []);

    

    return (
        <View style={styles.view}>
            <TransactionHeader title="Customer details" onPress={goBack} />
            <View style={styles.nameContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.circleContainer}>
                       <Text style={styles.shortText}>{details?.name.slice(0, 1)}</Text>
                    </View>
                    <View style={styles.detailContainer}>
                       {
                        details.name.length > 18 ?
                        <Text style={styles.customerNameText}>{details?.name.slice(0,18)}...</Text>
                        :
                        <Text style={styles.customerNameText}>{details?.name.slice(0,16)}</Text>
                       }

                    <View style={styles.statusContainer}>
                    <Text style={styles.statusNameText}>Inactive</Text>
                    </View>
                    </View>
                </View>
                {/* <View style={styles.rightContainer}>
                    <Icon name="square-edit-outline" color="rgba(118, 118, 128, 1)" size={16} />
                    <Text style={styles.editText}>Edit</Text>
                </View> */}
            </View>

            <View style={styles.mainBody}>
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>Customer Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>Order(s)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 3 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(3)}>
                        <Text style={[activeId === 3 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>Wallet</Text>
                    </TouchableOpacity>


                </View>

            </View>
            {activeId === 1 ? 
            
            <CustomerInfo 
            details={details}  
            store={viewStore} 
            name={name}/> : activeId === 2 ? 

            <Orders 
            details={details} 
            detailsScreen={detailsScreen} 
            cart={cart} />
                :
            <Transaction
            details={details} 
            detailsScreen={detailsScreen} 
            // cart={cart} 
            props={props}
            navigation={props.navigation}/>
        }

        </View>
    )
};

export default CustomerDetails;