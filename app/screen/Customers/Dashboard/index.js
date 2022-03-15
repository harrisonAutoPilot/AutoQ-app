import React, { useState, useCallback, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { InputField, Header } from "@Component";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";
import InActive from "./Inactive";
import Pending from "./Pending";
import Active from "./Active";
import { getCustomers } from "@Request/Customer";

const CustomersDashboard = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getCustomers());

        if (props.route.params?.id === 1) {
            setActiveId(3)
        }
    }, []);

    const dismissKeyboard = () => Keyboard.dismiss();
    const openDrawer = () => props.navigation.openDrawer();
    const reg = (items) => props.navigation.navigate("CustomerRegistration", {items});

    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 })
    const openNotification = () => props.navigation.navigate("Notification");
    const openCart = () => props.navigation.navigate("Cart");
    const custom_details = (details) => props.navigation.navigate("CustomerDetails", {details});

    const showActive = (id) => setActiveId(id)

    return (
        <View style={styles.view}>
            <Header drawer={openDrawer} title="Customers" favourite={openFavourite} notify={openNotification} cart={openCart} />
            <View style={{ backgroundColor: '#00319D' }}>
                <TouchableWithoutFeedback style={styles.touchstyle} onPress={dismissKeyboard}>
                    <View style={styles.blueColor}>
                        <View style={[styles.searchSection]}>
                            <Image source={require("@Assets/image/search.png")} style={styles.searchImg} />
                            <InputField
                                style={styles.inputField}
                                value={search}
                                placeholder="Search by customer's name"
                                placeholderTextColor="#fff"
                                onChangeText={(text) => setSearch(text)}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </View>

            <View style={styles.mainBody}>
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>PENDING </Text>
                        <View>
                            <Text>10</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>ACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 3 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(3)}>
                        <Text style={[activeId === 3 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>INACTIVE</Text>
                    </TouchableOpacity>
                </View>


            </View>
            {activeId === 1 ? <Pending details={reg} /> : activeId === 2 ? <Active details={custom_details} /> : <InActive details={custom_details} />}

            <TouchableOpacity style={styles.chat} onPress={() => reg}>
                <Image source={require("@Assets/image/pencil.png")} style={styles.penImg} />
            </TouchableOpacity>

        </View>
    )
};

export default CustomersDashboard;