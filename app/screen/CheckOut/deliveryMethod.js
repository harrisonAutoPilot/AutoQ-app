import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, Text} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from "./style";
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import RegularOptions from './RegularOptions';
  const data = [
    // { label: 'Delivery Method', value: '0' },
    { label: 'Express(₦1000)', value: '1' },
    { label: 'Regular', value: '2' },
  
  ];

  const DeliverMethod = props => {
    const [value, setValue] = useState(0);
    const [isFocus, setIsFocus] = useState(false);
    const [method, setMethod] = useState('0');
    const [closeDrop, setCloseDrop] = useState(true);
    const [methodName, setMethodName] = useState("");
    const [showMethodOption, setShowMethodOption] = useState(false);

  

    useEffect(() => {
      if(method === "2") {
          setShowMethodOption(true);
          setCloseDrop(true)
          console.log("hello FacelessMe", method);  
      };
  }, [method]);

  const ChangeMethod =() =>{
   setIsFocus(false);
   setCloseDrop(false);
   setShowMethodOption(true);
   setCloseDrop(false);
  
  }
  
const Render = (item) => {
  return (
 
        <View style={styles.customItem}>
      <Text>{item.label}</Text>
      {
        item.value === "2" ?
        <TouchableOpacity onPress={ChangeMethod}>
        <Text style={styles.changeText}>Change</Text>
      </TouchableOpacity>
      :
      null
      }
  </View>

 
  )
}

const IconCheck= () => {
  return (
    <View>
    { method === '2' ?
  <View>
      <Text style={styles.smDisplay}>Delivery Date :{methodName} </Text>  
      
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
        {/* {renderLabel()} */}
        <Dropdown
          style={[styles.dropStyle, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          // search
          close ={() => setCloseDrop(true)}
          maxHeight={110}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Options' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={e => {
            setMethod(e.value);
            setIsFocus(false);
          }}
          renderItem ={(item) => Render(item)}
        
          renderLeftIcon={() => IconCheck()}
          
        />

      <RegularOptions
                visibleRetrieve={showMethodOption}
                returnBack={(option) => {
                    setShowMethodOption(false);
                    setMethodName(option) 
                }}
            closeOption={() => setShowMethodOption(false)}
        />
      </View>
    );
  };

  export default DeliverMethod;

