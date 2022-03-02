import React from 'react'
import { View, Image } from "react-native"

export const SLIDER_WIDTH = 120
export const ITEM_WIDTH = 120
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