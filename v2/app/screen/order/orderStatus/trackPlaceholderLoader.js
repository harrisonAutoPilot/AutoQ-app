import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default TrackPlaceholderLoader = props => (
<View>
<View style={styles.placeholderCover}>
    <View style={styles.imgLine} />

    <View style={styles.leftBase}>
      <View style={styles.mdLine} />
      <View style={styles.smLine} />
    </View>
  </View>

  <View style={styles.placeholderCover}>
    <View style={styles.imgLine} />

    <View style={styles.leftBase}>
      <View style={styles.mdLine} />
      <View style={styles.smLine} />
    </View>
  </View>

  <View style={styles.placeholderCover}>
    <View style={styles.imgLine} />

    <View style={styles.leftBase}>
      <View style={styles.mdLine} />
      <View style={styles.smLine} />
    </View>
  </View>

  <View style={styles.placeholderCover}>
    <View style={styles.imgLine} />

    <View style={styles.leftBase}>
      <View style={styles.mdLine} />
      <View style={styles.smLine} />
    </View>
  </View>

</View>
);
