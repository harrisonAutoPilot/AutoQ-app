import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../editBottomSheet/style';



const HeaderComponent = (props) => {

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={props.onPress}>
        <View style={styles.imgCover}>
          <Image 
            source={require("@Assets2/image/trailing-icon.png")}
            style={styles.crossImg}
            />
        </View>
        </TouchableOpacity>
        <View style={styles.contentCover}>
          <Text style={styles.botName}>{props.name}</Text>
        </View>
      </View>
     
     </View>
  
  );
};

export default HeaderComponent;
