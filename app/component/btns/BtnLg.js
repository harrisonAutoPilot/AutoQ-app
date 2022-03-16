import React from "react";
import { Text, TouchableOpacity, Image} from "react-native";
import styles from "./style";

const BtnLg = (props) => {
    return (
        <TouchableOpacity style={props.style === undefined ? styles.btnLg : props.style} onPress={props.onPress}>
            <Text style={props.styles === undefined ? styles.btnText : props.styles}>{props.title}</Text>
            <Image source={require("@Assets/image/whiteAngle.png")} style={props.stylea} />
        </TouchableOpacity>
    )
};

export default BtnLg