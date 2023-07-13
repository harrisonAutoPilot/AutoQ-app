import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./style"

const OnboardinBtn = ({ title, onPress, backgroundColor, color, disabled, disabledBackgroundColor, borderColor, borderWidth }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.onBoardingBtnContainer, 
            { backgroundColor: disabled ? disabledBackgroundColor: backgroundColor,
                borderWidth: borderWidth ? 1 : 0, 
                borderColor: borderColor && borderColor
            }]}>
            <Text style={[styles.onBoardingTitle, {color}]}>{title}</Text>
        </TouchableOpacity>
    )
};

export default OnboardinBtn;

