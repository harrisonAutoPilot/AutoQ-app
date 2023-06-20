import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';


const SuccessMsgBottom = (props) => {
    return (
        <View style={[styles.successBottomStyle, props.styles]}>
            <View style={styles.phoneNoVerifySuccessIconView}>
                <Icon name="check" color="rgba(67, 160, 71, 1)" size={14} />
            </View>
            <View style={styles.phoneNoInnerView} />
            <View style={[styles.phoneNoVerifyInnerSuccessView2]}>
            <Text style={styles.successResponseText}>{props.title}</Text>
            </View>
        </View>
    )
};

export default SuccessMsgBottom