import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = 120
export const ITEM_WIDTH = 120
import URL from "@Helper/constant";

const CardItem = ({ item, index }) => {
  console
  return (
    <View style={styles.container} key={item.key}>
    <Image
      source={{ uri: `${URL}${item.url}` }}
      style={styles.image}
    />
   
  </View>
  )
}
const styles = StyleSheet.create({
  container: {

    // backgroundColor:'red',
    borderRadius: 8,
    alignItems:'center',
    height:120,
    justifyContent:'center',
    marginTop:1,
    paddingBottom: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    //   borderWidth:1,
    //   borderColor:'#f2f3f4',
    //   borderStyle:'solid',
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 1,
    
  },
  image: {
    width: 120,
    height: 150,
    // backgroundColor:'red',
    resizeMode:'contain'
  },
 
  
})

export default CardItem