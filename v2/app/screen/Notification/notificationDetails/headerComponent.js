import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';



const HeaderComponent = (props) => {


  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.imgCover}>
          <Image 
            source={require("@Assets2/image/Memoji.png")}
            style={styles.botImg}
            />
        </View>
        <View style={styles.contentCover}>
          <Text style={styles.botName}>Loni from Remedial</Text>
          <Text style={styles.statusText}>Available</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.closeCover} onPress={props.onPress}>
        <Icon name='x' color="#767680" size={22} />
      </TouchableOpacity>
     </View>
    
  
  );
};

export default HeaderComponent;
