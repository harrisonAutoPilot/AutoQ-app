import React, { useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { InputField, Header } from "@Component";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";
import InActive from "./Inactive";
import Pending from "./Pending";
import Active from "./Active";

const CustomersDashboard = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const [search, setSearch] = useState("");

    const dismissKeyboard = () => Keyboard.dismiss();
    const openDrawer = () => props.navigation.openDrawer();
    const reg = () => props.navigation.navigate("Registration");

    const detail =(item) => props.navigation.navigate("TransactionDetail", item)
    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 })
    const openNotification = () => props.navigation.navigate("Notification");

    const showActive = (id) => setActiveId(id)

    return (
        <View style={styles.view}>
           <Header  drawer={openDrawer} title="Customers" favourite={openFavourite} notify={openNotification} />
           <View style={{backgroundColor:'#00319D'}}>
                <TouchableWithoutFeedback style={styles.touchstyle} onPress={dismissKeyboard}>
                    <View style={styles.blueColor}>
                        <View style={[styles.searchSection]}>
                        <Image source={require("@Assets/image/search.png")} style={styles.searchImg} />
                            <InputField
                                style={styles.inputField}
                                value={search}
                                placeholder="Search Store names, ID"
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
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>PENDING</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>ACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 3 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(3)}>
                        <Text style={[activeId === 3 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>INACTIVE</Text>
                    </TouchableOpacity>
                </View>
              
               
            </View>
            {activeId === 1 ? <Pending /> : activeId === 2  ? <Active/> : <InActive/>}  

            <TouchableOpacity style={styles.chat} onPress={reg}>
            <Image source={require("@Assets/image/pencil.png")} style={styles.penImg} />
                    </TouchableOpacity>
           
        </View>
    )
};

export default CustomersDashboard;