import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CatelogueCardPlaceholder = () => (
<View style={styles.placeholderCover}>
<View style={[styles.listContainerP, styles.elevation]} >
  <View style={styles.listContainerImageViewP}>
      <View style={styles.imageP} resizeMode="cover" />
  </View>
  <View style={styles.listContainerTextViewP} >
      <View style={styles.listContainerInnerTextViewP}>
          {/* <Text style={[styles.title]}></Text> */}
      </View>
      <View >
          {/* <Icon name="chevron-right" size={18} color="#757575" /> */}
      </View>

  </View>
</View>

<View style={[styles.listContainerP, styles.elevation]} >
  <View style={styles.listContainerImageViewP}>
      <View style={styles.imageP} resizeMode="cover" />
  </View>
  <View style={styles.listContainerTextViewP} >
      <View style={styles.listContainerInnerTextViewP}>
          {/* <Text style={[styles.title]}></Text> */}
      </View>
      <View >
          {/* <Icon name="chevron-right" size={18} color="#757575" /> */}
      </View>

  </View>
</View>

</View>
 

);

export default CatelogueCardPlaceholder;