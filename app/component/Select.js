import React from "react";
import {TextInput,Text, View} from "react-native";



const Select = (props) => {
    return (
    <View>
      <View>
      <Text>
         {props.storeName}
      </Text>
      <Text>
         {props.storeAddress}
      </Text>
      </View>
     
    </View>
  )
}

export default Select