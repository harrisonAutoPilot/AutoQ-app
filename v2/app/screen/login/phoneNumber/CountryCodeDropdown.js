import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import style from "../style";



export default CountryCodeDropDown = ({ dropDown, touched, errors,
    setFieldTouched, width, placeholder, name, labelType, title, add, values }) => {


    const hasError = errors[name] && touched[name];


    const setFormikInputs = () => {

        dropDown();

        setFieldTouched(name, true, false);

    };


    return (

        <View style={[style.dropDownContainer,

        {
            width, borderColor: touched[name] ? "#3353CB" : '#5A5D72',
            borderWidth: touched[name] ? 2 : 1.2
        }, hasError && style.inputErrHolder]}>

            <View style={[labelType === "team" ? style.dropDownLabelViewTeam : style.dropDownLabelView]}>
                <Text style={[style.dropDownLabelText, { color: touched[name] ? "#3353CB" : '#5A5D72' }, hasError && style.inputErrText]}>{title}</Text>
            </View>

            <TouchableOpacity style={[labelType === "team" ? style.dropDownTextInputTeam : style.dropDownTextInput]} onPress={setFormikInputs}>

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#757575"
                    style={style.dropDownTextInputTitle}
                    value={!values[name] ? values[name] : add ? `${add}${values[name]}` : values[name]}
                    editable={false}

                />

                <Icon name="chevron-down" size={18} color="#5A5D72" />

            </TouchableOpacity>

        </View>

    )

}