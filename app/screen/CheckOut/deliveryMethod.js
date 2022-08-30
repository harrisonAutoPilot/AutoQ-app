import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";

import RegularOptions from './RegularOptions';
import styles from "./style";

const DeliverMethod = props => {
  
  const [isFocus, setIsFocus] = useState(false);
  const [method, setMethod] = useState('0');
  const [closeDrop, setCloseDrop] = useState(true);
  const [showMethodOption, setShowMethodOption] = useState(false);
  const [deliveryDays, setDeliveryDays] = useState([]);
  const [showMethod, setShowMethod] = useState(false);
  const [label, setLabel] = useState("");
  const [date, setDate] = useState("");

  const { options } = useSelector((state) => state.deliveryOptions);

  useEffect(() => {
    if (showMethod) {
      setShowMethodOption(true);
      setCloseDrop(true);
      setShowMethod(false)
    };
  }, [showMethod]);


  const Render = (item) => {

    return (
      <View style={styles.customItem} >
        <Text style={styles.placeholderStyle}>{item.name}</Text>
        {item.days && item.days.length ?
            <Text style={styles.changeText}>Pick Date</Text>
          : null}
      </View>
    )
  }

  const calculateDelivery = (percent) => {
    return (percent / 100) * props.fees
  }


  const IconCheck = () => {
    return (
      <View>
        {method ?
          <View>
            <Text style={styles.smDisplay}>Delivery Date: {date} </Text>
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
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={e => {
          setMethod(e.id);
          if (e.days && e.days.length) {
            setShowMethod(true)
            props.status(true)
            setLabel(e.id)
          } else {
            props.status(false)
            setLabel("")
            setDate("")
          }
          setIsFocus(false);
          setDeliveryDays(e.days)
          props.onSelect(e.id)
          props.name(e.name)
          props.err("")
          props?.onSelectDate("")
          props.price(e.flat_fee_exists ? parseInt(e.price) : calculateDelivery(e.percentage))
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
          setDate(option)
        }}
        closeOption={() => setShowMethodOption(false)}
        data={deliveryDays}
      />
    </View>
  );
};

export default DeliverMethod;

