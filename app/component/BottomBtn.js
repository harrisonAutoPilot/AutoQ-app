import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const BottomBtn = (props) => {
    return (
        <TouchableOpacity style={props.style === undefined ? styles.bottomBtn : props.style} onPress={props.onPress}>
            <Text style={props.styles === undefined ? styles.bottomBtnText : props.styles}>{props.title}</Text>
        </TouchableOpacity>
    )
};

export default BottomBtn