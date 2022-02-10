import React, { useState } from "react";
import { View, Text, Linking, Image, TouchableOpacity, Alert, FlatList } from "react-native";
import styles from "./style";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';
import { TrackBtn, BottomBtn } from "@Component/index";
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavHeader from "@Component/NavHeader";



const NotificationDetail = (props) => {

  const [errMsg, setErrMsg] = useState("");
  
  const { status, errors } = useSelector((state) => state.auth);

const goBack = () => props.navigation.navigate("Notification");


  return (
    <View style={styles.main}>
    <NavHeader title="Discount Monday !!!" onPress={goBack} styleView={styles.body} styles={styles.headerText} statusBar="#fff" />
        <View style={styles.botCover}>
          <Image source={require("@Assets/image/Frame26.png")} style={styles.lolaImg} />
          <Text style={styles.botText}>Lola from Remedial</Text>
       </View>

       <View style={styles.userCover}>
          <Text style={styles.nameText}>Hi User</Text>
       </View>

     <View style={styles.descCover}>
             <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae. Aliquet sagittis id consectetur purus.
             Semper risus in hendrerit gravida rutrum. Pellentesque dignissim enim sit amet venenatis urna cursus. Dignissim sodales ut eu sem integer vitae justo eget. Eget nulla facilisi etiam dignissim.

</Text>
             
         </View>
    
   </View>
  )
};

export default NotificationDetail;