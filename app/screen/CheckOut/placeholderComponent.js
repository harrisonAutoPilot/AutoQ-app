import React from 'react';
import { View } from 'react-native';
import styles from './style';


const PlaceholderComponent = () => (
  <View style={styles.listCover}>
  <View style={styles.imgCoverP}>
      <View style={styles.drugImg} />
  </View>

  <View style={styles.detailCoverP}>
      {/* <Text numberOfLines={1} style={styles.itemDetails}>{item.product.name}</Text> */}
  </View>
  <View style={styles.quanCoverP}>
      {/* <Text style={styles.itemDetails}>x{item.quantity}</Text> */}
  </View>
</View>
);

export default PlaceholderComponent;