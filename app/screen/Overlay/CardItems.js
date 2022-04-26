import React from 'react'
import { View, Image } from "react-native"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = wp('100%')
export const ITEM_WIDTH = wp('100%')
import URL from "@Helper/Constant";
import styles from "./style";

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

export default CardItem