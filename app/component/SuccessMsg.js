import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./styles.js";
import globalStyles from "@Helper/globalStyles";

const SuccessMsg = (props) => {
    return (
        <View style={styles.successMsg}>
            {/* {props.image !== undefined ?
                <View>
                    <Image source={require(props?.image)} style={styles.successMsgImage} />
                </View> :
                <View style={globalStyles.phoneNoVerifySuccessIconView}>
                    <Icon name="check" color="rgba(67, 160, 71, 1)" size={14} />
                </View>
            } */}
            <View>
                <Text style={styles.successMsgTitle}>{props.title}</Text>
            </View>
        </View>
    )
};

export default SuccessMsg