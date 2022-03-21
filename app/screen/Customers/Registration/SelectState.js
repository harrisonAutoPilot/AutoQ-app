import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { useSelector } from "react-redux";

const SelectState = ({onSelect, props}) => {
  const [state, setState] = useState(0);

  const { states } = useSelector((state) => state.state);

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={styles.containerStyle}
      placeholderStyle={styles.placeholderStyle}
      value={state}
      search
      maxHeight={260}
      data={states}
      valueField="name"
      labelField="name"
      placeholder="Select State"
      searchPlaceholder="Search..."
      onChange={e => {
        props.setFieldValue('state_id', e.id)
        props.setFieldTouched('state_id', true, false);
        setState(e.name);
        onSelect(e)

      }}
      dropdownPosition="top"
      inputSearchStyle={styles.placeholderStyle}
      activeColor="green"
    />
  );
};

export default SelectState;

const styles = StyleSheet.create({
  dropdown: {
   margin:-7,
  
  },

  placeholderStyle: {
    color: '#212121',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.25,
    fontStyle:'normal',
    paddingLeft:10,
    
  },
  selectedTextStyle: {
    color: '#212121',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.25,
    fontStyle:'normal',
    paddingLeft:10,
   

  },
});