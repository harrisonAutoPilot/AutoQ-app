import React, {useState, useRef} from 'react';
import {
  View,Text,TextInput,Keyboard,TextInputField 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 import styles from "./style";


const SearchInput = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);

    

    const goBack = () => props.navigation.navigate("Home");


    const dismissKeyboard = () => Keyboard.dismiss();
    const showPin = () => setPinVisibility(!pinVisibility)

  
    return (
        <View style={styles.container}>
           
      <TextInput style={styles.input} placeholder={props.placeholder} value={props.value} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText} />
     <View style={styles.lawCover}>
      <Icon name='search-outline' color="#000" size={24} style={styles.smLawImg} />
     {/* <Image source={require("../../assets/agreement.png")} style={styles.smLawImg} /> */}
     </View>
        </View>
    )
};

export default SearchInput;