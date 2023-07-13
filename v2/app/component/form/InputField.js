import React from "react";
import { TextInput, Text, View } from "react-native";

import styles from "./style";


const InputField = (props) => {

    const { title, placeholder, touched, errors, name,
        handleBlur, setFieldValue, setFieldTouched, labelType, values, width, err } = props;

    const hasError = errors[name] && touched[name];



    return (
        <View style={{ width }}>

            <View style={[styles.inputHolder,
            {
                borderColor: touched[name] ? "#3353CB" : '#5A5D72',
                borderWidth: touched[name] ? 2 : 1.2
            },
            hasError && styles.inputErrHolder]}>

                <View style={labelType === "team" ? styles.labelViewTeam : styles.labelView}>
                    <Text style={[styles.label, { color: touched[name] ? "#3353CB" : '#5A5D72' }, hasError && styles.inputErrText]}>{title}</Text>
                </View>

                <TextInput
                    onChangeText={(val) => {
                        setFieldValue(name, val)
                        setFieldTouched(name, true, false);
                    }}
                    onBlur={() => handleBlur(name)}
                    keyboardType={props.keyboardType}
                    value={values[name]}
                    style={[props.styles, styles.labelTitle]}
                    placeholder={placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    editable={props?.editable}
                    multiline={props?.multiline}
                    secureTextEntry={props?.secureTextEntry}
                />

            </View>

            {hasError || err?.length && <View style={styles.inputErrView}>
                <Text style={styles.inputErrText}>{hasError ? errors[name] : err}</Text>
            </View>}
        </View>

    )
};

export default InputField;