import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';



const CatalogHeaderComponent = (props) => {


  return (
    <View style={styles.topNav}>
    <View style={styles.leftNav}>

      <View style={styles.greetCover}>
       <View style={styles.smFlex}>
       

        <Text style={styles.nameText}>{props.title}</Text>
       </View>
      </View>
    </View>
    <View style={styles.rightNav}>
     
      {/* <TouchableOpacity onPress={props.onPressCart}>
        <Icon
          name="cart-outline"
          size={20}
          color={'rgba(28, 27, 31, 1)'}
        />
        <View style={styles.countCover}>
          <Text style={styles.countText}>{props.orderCount}</Text>
        </View>
        </TouchableOpacity> */}
         <TouchableOpacity onPress={props.onPress}>
        <Icon
          name="bell-outline"
          size={20}
          color={'rgba(28, 27, 31, 1)'}
        />
        <View style={styles.noteDot} />
      </TouchableOpacity>
    </View>
  </View>
  
  );
};

export default CatalogHeaderComponent;
