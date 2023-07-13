import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "./style"

const HomeDetailsBtn = ({ title, onPress, disabled, disabledBackgroundColor, backgroundColor, borderColor, borderWidth, color, iconName}) => {
    
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.homeDetailsBtnContainer,  
            { backgroundColor: disabled ? disabledBackgroundColor:  backgroundColor || "#3353CB",
            borderColor: borderColor && borderColor,
            borderWidth: borderWidth || 0
        }
            ]}>
              <Icon name={iconName ||"shopping-cart"} color={color || "#fff"} size={20} />
            <Text style={[styles.homeDetailsTitle, {color: color || "#fff"}]}>{title}</Text>
        </TouchableOpacity>
    )
};

export default HomeDetailsBtn;

