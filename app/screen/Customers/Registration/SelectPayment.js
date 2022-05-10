import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
  {
    value: '1',
    lable: 'Weekly',
  },
  {
    value: '2',
    lable: 'Monthly',
  },
  {
    value: '3',
    lable: 'Every 2 Month',
  },
  
  
];

const SelectPayment = props => {
  const [state, setState] = useState('');
  const [payment, setPayment] = useState('1');

//   useEffect(() => {
//     if(props.data){
//     let id = props.data?.filter(id => id.id === props.props.values.lga_id);
//     setState(id[0]?.name)
//     }
// }, [props.props.values.lga_id?.length])


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
      maxHeight={180}
      data={local_data}
      valueField="value"
      labelField="lable"
      placeholder="Select Payment"
      searchPlaceholder="Search..."
      onChange={e => {
        setPayment(e.value);
      }}
      dropdownPosition="top"
    />
  );
};

export default SelectPayment;

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