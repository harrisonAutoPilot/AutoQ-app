import React from "react";
import {TextInput} from "react-native";

const InputField2 = props => {
    return (
    
            <TextInput 
            onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onBlur={props.onBlur}
            blurOnSubmit={false}
            style={props.style}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            editable={props.editable}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            onPressIn={props.onPressIn}
            autoFocus={props.autoFocus}
            maxLength={props.maxLength}
            testID={props.testID}
            />

    )
};

export default InputField2;

