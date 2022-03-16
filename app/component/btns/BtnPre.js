import React from "react";
import { Text, TouchableOpacity, Image} from "react-native";
import styles from "./style";

const BtnPre = (props) => {
    return (
        <TouchableOpacity style={props.style === undefined ? styles.btnLg : props.style} onPress={props.onPress}>
            <Image source={require("@Assets/image/leftAngle.png")} style={props.stylea} />
        <Text style={props.styles === undefined ? styles.btnText : props.styles}>{props.title}</Text>
            
        </TouchableOpacity>
    )
};

export default BtnPre