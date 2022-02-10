import React from 'react';
import { View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import styles from './style';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CategoryCardPlaceholder = () => (

  <View style={styles.bookcardFlex}>
    <View style={[styles.listContainer, styles.elevation]} >
      <View style={styles.listContainerImageView}>
        <PlaceholderMedia
          style={{
            width: 90,
            height: 90,
            borderRadius: 100,
            marginTop: 4,
            marginBottom: 2,
          }}
        />
      </View>
      <View style={styles.listContainerTextView} >
        <View>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1.5), }} width={100} />
        </View>
        <View >

        </View>

      </View>
    </View>

    <View style={[styles.listContainer, styles.elevation]} >
      <View style={styles.listContainerImageView}>
        <PlaceholderMedia
          style={{
            width: 90,
            height: 90,
            borderRadius: 100,
            marginTop: 4,
            marginBottom: 2,
          }}
        />
      </View>
      <View style={styles.listContainerTextView} >
        <View>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1.5), }} width={100} />
        </View>
        <View >

        </View>

      </View>
    </View>
  </View>
);

export default CategoryCardPlaceholder;