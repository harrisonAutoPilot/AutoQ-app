import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import globalStyles from "@Helper/globalStyles";

const SuccessMsg = (props) => {
    return (
        <View style={[globalStyles.phoneNoVerifySuccessView2]}>
            <View style={globalStyles.phoneNoVerifySuccessIconView}>
                <Icon name="check" color="rgba(67, 160, 71, 1)" size={14} />
            </View>
            <View style={globalStyles.phoneNoInnerView} />
            <Text style={globalStyles.successResponseText}>{props.title}</Text>
        </View>
    )
};

export default SuccessMsg