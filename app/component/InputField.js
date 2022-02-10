import React from "react";
import {TextInput} from "react-native";

const InputField = props => {
    return (
    
            <TextInput 
            onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onBlur={props.onBlur}
            style={props.style}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            editable={props.editable}
            />

    )
};

export default InputField;

