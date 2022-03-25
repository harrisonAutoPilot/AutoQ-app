import React, { useState, useCallback, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { InputField, Header } from "@Component";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';

import styles from "./style";
import InActive from "./Inactive";
import Pending from "./Pending";
import Active from "./Active";
import { getCustomers } from "@Request/Customer";
import { cleanup } from "@Store/Customer";

const CustomersDashboard = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    useFocusEffect(
        useCallback(() => {
            dispatch(getCustomers());
            return () => dispatch(cleanup())
        }, [])

    );

    useEffect(() => {
        if (search.length) {
            searchCustomers();
        } else if (!search.length) {
            setResult([])
        }
    }, [search.length]);



    useEffect(() => {
        if (props.route.params?.id === 1) {
            setActiveId(3)
        }
    }, [props.route.params])

    const dismissKeyboard = () => Keyboard.dismiss();
    const openDrawer = () => props.navigation.openDrawer();
    const reg = () => props.navigation.navigate("CustomerRegistration", {key: 2});
    const reg_details = (items) => props.navigation.navigate("CustomerRegistration", { items, key: 1 });

    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 })
    const openNotification = () => props.navigation.navigate("Notification");
    const openCart = () => props.navigation.navigate("Cart");
    const custom_details = (details, name) => props.navigation.navigate("CustomerDetails", { details, name });
    const { customers } = useSelector((state) => state.customer);
    const showActive = (id) => setActiveId(id);

    const searchCustomers = () => {
        let searched = [];
        let searchUsers = search;

        if (!searched.length) {

            searched = customers.pending.users.filter(val => {
                if (val.name.toLowerCase().includes(searchUsers.toLowerCase())) {
                    setActiveId(1)
                    return val
                }
                return null

            });

            if (!searched.length) {
                searched = customers.active.users.filter(val => {
                    if (val.name.toLowerCase().includes(searchUsers.toLowerCase())) {
                        setActiveId(2)
                        return val
                    }
                    return null

                });

                if (!searched.length) {
                    searched = customers.inactive.users.filter(val => {
                        if (val.name.toLowerCase().includes(searchUsers.toLowerCase())) {
                            console.log("hop")
                            setActiveId(3)
                            return val
                        }
                        return null

                    });
                }
            }


            return setResult(searched);
        }
    }

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
                    <TouchableOpacity style={[styles.firstHeader, activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => { showActive(1); setSearch("") }}>
                        <View>
                            <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>PENDING </Text>
                        </View>
                        <View style={styles.firstInnerHeader}>
                            <Text style={styles.firstInnerTitle}>{customers?.pending?.count}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => { showActive(2); setSearch("") }}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>ACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 3 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => { showActive(3); setSearch("") }}>
                        <Text style={[activeId === 3 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>INACTIVE</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {activeId === 1 ? <Pending details={reg_details}  result={result}/> : activeId === 2 ? <Active details={custom_details} result={result}/> : <InActive details={custom_details} result={result}/>}

            <TouchableOpacity style={styles.chat} onPress={reg}>
                <Image source={require("@Assets/image/pencil.png")} style={styles.penImg} />
            </TouchableOpacity>

        </View>
    )
};

export default CustomersDashboard;