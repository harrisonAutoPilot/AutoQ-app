import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const state_data = [
  {
    value: '1',
    lable: 'Abia',
   
  },
  {
    value: '2',
    lable: 'Adamawa',
    
  },
  {
    value: '3',
    lable: 'Akwa-Ibom',
    
  },
  {
    value: '4',
    lable: 'Bauchi',
    
  },
  {
    value: '5',
    lable: 'Benue',
   
  },
  {
    value: '5',
    lable: 'Borno',
   
  },
];

export interface Props {}

const SelectState: React.FC<Props> = _props => {
  const [state, setState] = useState('0');

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={styles.containerStyle}
      placeholderStyle={styles.placeholderStyle}
      value={state}
      search
      maxHeight={260}
      data={state_data}
      valueField="value"
      labelField="lable"
      placeholder="Select State"
      searchPlaceholder="Search..."
      onChange={e => {
        setState(e.value);
      }}
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