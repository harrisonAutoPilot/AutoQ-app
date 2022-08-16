import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";

import styles from "./style";
import Profile from "./Profile";
import Pin from "./Pin"

import { COHeader as Header} from "@Component";

const AccountSettings = (props) => {

    const [activeId, setActiveId] = useState(1);
    
    const goBack = () => props.navigation.goBack()

    const showActive = (id) => setActiveId(id)

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