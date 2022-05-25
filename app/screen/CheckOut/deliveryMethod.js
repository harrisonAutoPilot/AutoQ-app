import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, Text} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";

import RegularOptions from './RegularOptions';
import styles from "./style";

  const DeliverMethod = props => {
    const [value, setValue] = useState(0);
    const [isFocus, setIsFocus] = useState(false);
    const [method, setMethod] = useState('0');
    const [closeDrop, setCloseDrop] = useState(true);
    const [methodName, setMethodName] = useState("");
    const [showMethodOption, setShowMethodOption] = useState(false);
    const [deliveryDays, setDeliveryDays] = useState([]);
    const [showMethod, setShowMethod] = useState(false);
    const [label, setLabel] = useState("");

    const { status, errors, options } = useSelector((state) => state.deliveryOptions);

    useEffect(() => {
      if (showMethod) {
        setShowMethodOption(true);
        setCloseDrop(true);
        console.log("hello FacelessMe", method);
        setShowMethod(false)
      };
    }, [showMethod]);
  
    const ChangeMethod = (days) => {
      setIsFocus(false);
      setCloseDrop(false);
      setShowMethodOption(true);
      setCloseDrop(false);
      setDeliveryDays(days)
  
    }

  const Render = (item) => {
    return (

      <View style={styles.customItem} >
        <Text style={styles.placeholderStyle}>{item.name} (₦{item?.price })</Text>
        {item.days && item.days.length ?
            <TouchableOpacity onPress={() => ChangeMethod(item.days)}>
              <Text style={styles.changeText}>Pick Date</Text>
            </TouchableOpacity>
           : null}
      </View>
    )
  }
  


const IconCheck= () => {
  return (
    <View>
    {method ?
          <View>
            <Text style={styles.smDisplay}>Delivery Date: {props.date} </Text>
          </View>
    :
    <AntDesign
    style={styles.iconNew}
    color={isFocus ? 'blue' : 'black'}
    name="bike-fast"
    size={20}
  />
  }
  </View>
  )
}

    return (
      <View>
    <Dropdown
        style={[styles.dropStyle, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={options}
        close={() => setCloseDrop(true)}
        maxHeight={110}
        labelField={label ? label : "name"}
        valueField="name"
        placeholder={'Delivery Option'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={e => {
          setMethod(e.id);
          if(e.days && e.days.length){
            setShowMethod(true)
            props.status(true)
            setLabel(e.id)
          }else{
            props.status(false)
            setLabel("")
          }
          setIsFocus(false);
          setDeliveryDays(e.days)
          props.onSelect(e.id)
          props.name(e.name)
          props.err("")
          props?.onSelectDate("")
          props.price(parseInt(e.price))
        }}
        renderItem={(item) => Render(item)}
        renderLeftIcon={() => IconCheck()}
        fontFamily={'Urbanist-Regular'}
      />

      <RegularOptions
        visibleRetrieve={showMethodOption}
        returnBack={(option) => {
          setShowMethodOption(false);
          props.onSelectDate(option)
          props.err("")
          setIsFocus(false);
        }}
        closeOption={() => setShowMethodOption(false)}
        data={deliveryDays}
      />
      </View>
    );
  };

  export default DeliverMethod;

