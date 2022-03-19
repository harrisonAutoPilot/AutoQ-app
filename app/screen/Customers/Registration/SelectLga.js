import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';


const SelectLga = props => {
  const [state, setState] = useState('0');


  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={styles.containerStyle}
      inputSearchStyle={styles.placeholderStyle}
      placeholderStyle={styles.placeholderStyle}
      value={state}
      activeColor="rgba(56, 88, 207, 0.12)"
      search
      maxHeight={260}
      data={props.data?.length ? props.data: []}
      valueField="name"
      labelField="name"
      placeholder="Select LGA"
      searchPlaceholder="Search..."
      onChange={e => {
        setState(e.name);
        props.onSelect(e.id)
      }}
      dropdownPosition="top"
    />
  );
};

export default SelectLga;

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
  inputSearchStyle:{
backgroundColor:'#fff',
borderRadius:4,
  },
  selectedTextStyle: {
    color: '#1C1B1F',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.25,
    fontStyle:'normal',
    paddingLeft:10,
   
  },
});