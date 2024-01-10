import React from "react";
import { Text, TouchableOpacity,Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import styles from "./style"

const PreviousBtn = ({ title, onPress, backgroundColor, color, disabled, disabledBackgroundColor }) => {
    
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.onProceedBtnContainer, { backgroundColor: disabled ? disabledBackgroundColor: backgroundColor }]}>
               <Icon name="chevron-left" color="#fff" size={20} style={{marginRight:5}} /> 
            <Text style={[styles.continueTitle, {color}]}>{title}</Text>
            
        </TouchableOpacity>
    )
};

export default PreviousBtn;

