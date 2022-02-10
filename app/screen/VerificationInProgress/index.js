import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from "react-redux";
import styles from "./style";

import { Btn } from "@Component/index";
import { logout } from "@Store/auth";

const VIP = () => {
    const dispatch = useDispatch();
    const logUserOut = () => dispatch(logout());
    
    return (
        <View style={styles.mainBody}>
            <View style={styles.modalView}>
                <View style={styles.modalInnerView}>

                    <View style={styles.iconView}>
                        <Icon name="loader" size={35} color="#00319D" />
                    </View>
                    <View>
                        <View style={styles.modalHeaderView}>
                            <Text style={styles.modalHeader}>Your Account is under verification</Text>
                        </View>
                        <View>
                            <Text style={styles.modalText}>
                                A Remedial Health <Text style={styles.innerTexts}>Agent</Text> will be <Text style={styles.innerTexts}>in touch</Text> with you in the next <Text style={styles.innerTexts}>24-hours</Text>.</Text>
                        </View>
                    </View>
                </View>

            </View>

            <View>
                <Btn title="Log Out" style={styles.btn} styles={[styles.modalText, styles.btnText]} onPress={logUserOut}/>
            </View>
        </View>
    )
};

export default VIP;