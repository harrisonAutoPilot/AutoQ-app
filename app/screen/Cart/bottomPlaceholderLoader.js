import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import { View } from 'react-native';
import styles from './style';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BottomPlaceholder = () => (

  <View style={styles.placeCover}>
        <View style={styles.placeholderTitle}>

        </View>
   <View style={styles.underCover}>
       <View style={styles.underLine}></View>
       <View style={styles.underLine}></View>
   </View>
   <View style={styles.underCover1}>
       <View style={styles.underLine}></View>
       <View style={styles.underLine}></View>
   </View>
   <View style={styles.btnLine}></View>
  </View>

);

export default BottomPlaceholder;

