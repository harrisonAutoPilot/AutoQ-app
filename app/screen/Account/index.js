import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from "react-redux";

import styles from "./style";
import Profile from "./Profile";
import Pin from "./Pin";
import { cleanup } from "@Store/Auth";

import { COHeader as Header} from "@Component";

const AccountSettings = (props) => {

    const dispatch = useDispatch();

    const [activeId, setActiveId] = useState(1);
    
    const goBack = () => props.navigation.goBack()

    const showActive = (id) => setActiveId(id)
    
    useFocusEffect(
        useCallback(() => {
           return () => {
            dispatch(cleanup())
            setActiveId(1)
           }
         }, [])
       );
   

    return (
        <View style={styles.view}>
            <Header title="My Account" onPress={goBack} styleView={styles.body} />
            <View style={styles.mainBody}>      
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>AGENT PROFILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>PIN SETTINGS</Text>
                    </TouchableOpacity>
                </View>
                     
            </View>
            {activeId === 1 ? <Profile /> : <Pin/>}  
           
        </View>
    )
};

export default AccountSettings;