import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';

import styles from "./style";
import NavHeader from "@Component/NavHeader";
import Profile from "./Profile";
import Pin from "./Pin"
import { cleanup } from "@Store/auth";

const AccountSettings = (props) => {

    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const goBack = () => props.navigation.navigate("Home");

    useFocusEffect(
        useCallback(() => {
            dispatch(cleanup())
    
           return () => dispatch(cleanup());
         }, [])
       );

    const showActive = (id) => setActiveId(id)

    return (
        <View style={styles.view}>
            <NavHeader title="Account Settings" onPress={goBack} styleView={styles.body} styles={styles.headerText} statusBar="#fff"/>
            <View style={styles.mainBody}>      
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>User Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>Change PIN</Text>
                    </TouchableOpacity>
                </View>
              
               
            </View>
            {activeId === 1 ? <Profile /> : <Pin/>}  
           
        </View>
    )
};

export default AccountSettings;