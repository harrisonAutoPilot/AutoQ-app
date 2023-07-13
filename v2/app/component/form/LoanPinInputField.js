import React from "react";
import { TextInput, View } from "react-native";

import styles from "./style";


const LoanPinInputField = (props) => {

    const { placeholder, touched, errors, name,
        handleBlur, setFieldValue, setFieldTouched, values, width, inputRef, onChangeText} = props;

    const hasError = errors[name] && touched[name];

    

    return (

        <View style={{width}}> 
            <View style={[styles.inputHolderLoan, { borderColor:  touched[name] ? "#3353CB": '#e6e6e6', borderWidth: touched[name] ? 2:1.2}, hasError && styles.inputErrHolder,]}>

                <View>

                    <TextInput
                        onChangeText={(val) => {
                            onChangeText && onChangeText(val)
                            setFieldValue(name, val)
                            setFieldTouched(name, true, false);
                        }}
                        onBlur={() => handleBlur(name)}
                        keyboardType={props.keyboardType}
                        value={values[name]}
                        style={values[name] ? styles.pinPlaceHolderLoan : styles.placeholderStyle}
                        placeholderStyle={styles.placeholderStyle}
                        placeholder={placeholder}
                        placeholderTextColor={props.placeholderTextColor}
                        editable={props?.editable}
                        maxLength={1}
                        ref={inputRef}
                    />

                </View>
            </View>

        </View>

    )
};

export default LoanPinInputField;