import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const TrackBtn = (props) => {
    return (
        <TouchableOpacity style={props.style === undefined ? styles.trackBtn : props.style} onPress={props.onPress}>
            <Text style={props.styles === undefined ? styles.trackBtnText : props.styles}>{props.title}</Text>
        </TouchableOpacity>
    )
};

export default TrackBtn