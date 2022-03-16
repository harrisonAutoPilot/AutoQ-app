import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const state_data = [
  {
    value: '1',
    lable: 'Alimosho',
   
  },
  {
    value: '2',
    lable: 'Ikeja',
    
  },
  {
    value: '3',
    lable: 'Lagos Island',
    
  },
  {
    value: '4',
    lable: 'Obalende',
    
  },
  
];

export interface Props {}

const SelectLga: React.FC<Props> = _props => {
  const [state, setState] = useState('0');

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={styles.containerStyle}
      inputSearchStyle={styles.inputSearchStyle}
      placeholderStyle={styles.placeholderStyle}
      value={state}
      activeColor="rgba(56, 88, 207, 0.12)"
      search
      maxHeight={260}
      data={state_data}
      valueField="value"
      labelField="lable"
      placeholder="Select LGA"
      searchPlaceholder="Search..."
      onChange={e => {
        setState(e.value);
      }}
    />
  );
};

export default SelectLga;

const styles = StyleSheet.create({
  dropdown: {
   margin:-7,

  },
  containerStyle:{
    backgroundColor:'#E9EBF9',
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