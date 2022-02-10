import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Animated, FlatList} from "react-native";
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";
import List from "./ListView";
import NavHeader from "@Component/NavHeader";


const FAQ = (props) => {

    const data = [
        {
            id: "1",
            title: "What is Remedial?",
            desc: "We are offering 50% discount on all Antibiotic products. We are offering 50% discount on all Antibiotic products. We are offering 50% discount on all Antibiotic products"
        },
        {
            id: "2",
            title: "Why Remedial Health?",
            desc: "Fraudsters are getting smarter, you need to get better than them. Fraudsters are getting smarter, you need to get better than them"
        },
        {
            id: "3",
            title: "How can I order using Remedial Health?",
            desc: "We are offering 50% discount on all Antibiotic products"
        },
        {
            id: "4",
            title: "How can I get a loan from Remedial Health? ",
            desc: "We are offering 50% discount on all Antibiotic products"
        },
        {
            id: "5",
            title: "What is my wallet",
            desc: "We are offering 50% discount on all Antibiotic products"
        },
        {
            id: "6",
            title: "What can I do with my Wallet?",
            desc: "We are offering 50% discount on all Antibiotic products"
        }
    ]
    const dispatch = useDispatch();
    const scrollY = useRef(new Animated.Value(0)).current;
    const [err, setErr] = useState("");

    const goBack = () => props.navigation.navigate("Home");

    const ListView = ({ item, index }) => {

        return <List
            item={item}
            getItem={() => getItem(item.id)}
        />
    };

    return (
        <View style={styles.view}>
            <NavHeader title="FAQ" onPress={goBack} styleView={styles.body} styles={styles.headerText} statusBar="#fff"/>
            <View style={styles.mainBody}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}
                />               
                    <TouchableOpacity style={styles.chat}>
                        <Icon name="message-square" size={18} color="#fff"/>
                    </TouchableOpacity>

            </View>


        </View>
    )
};

export default FAQ;