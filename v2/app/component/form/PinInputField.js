import React from "react";
import { TextInput, View } from "react-native";

import styles from "./style";


const PinInputField = (props) => {

    const { placeholder, touched, errors,
        handleBlur, setFieldValue, setFieldTouched, 
        values, width, refs, onChangeText, onKeyPress, length, style} = props;

    

    return (

        <View style={styles.inputFieldView}>

        {[...new Array(length)].map((item, index) => (<View key={index} style={{width}}> 
            <View 
            style={[styles.pinInputHolder, 
                { borderColor:  touched[`p${index}`] ? "#3353CB": '#5A5D72', 
            borderWidth: style ? 0 : touched[`p${index}`] ? 2:1.2
        }, 
        style && style,
            errors[`p${index}`] && touched[`p${index}`] && styles.inputErrHolder,
            
            ]}>

                <View>

                    <TextInput
                        onChangeText={(val) => {
                            onChangeText(val, index)
                            setFieldValue(`p${index}`, val)
                            setFieldTouched(`p${index}`, true, false);
                        }}
                        onBlur={() => handleBlur(`p${index}`)}
                        keyboardType={props.keyboardType}
                        value={values[`p${index}`]}
                        style={styles.pinPlaceHolder}
                        placeholder={placeholder}
                        placeholderTextColor={props.placeholderTextColor}
                        editable={props?.editable}
                        maxLength={1}
                        ref={refs}
                        onKeyPress={(e) => onKeyPress(e, index) }
                        key={index}
                        contextMenuHidden
                        selectTextOnFocus
                        secureTextEntry
                    />

                </View>
            </View>

        </View>))}
        </View>

    )
};

export default PinInputField;