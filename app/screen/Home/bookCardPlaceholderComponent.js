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

const BookCardPlaceholderComponent = () => (

  <View style={styles.bookcardFlex}>

    <View style={styles.productCard2}>

      <View style={styles.iconView} >
        <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
      </View>


      <View>
        <View style={styles.imgView}>
          <PlaceholderMedia
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              marginTop: -20,
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={100} />
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={100} />
        </View>

      </View>
    </View>
    
    <View style={styles.productCard2}>

      <View style={styles.iconView} >
        <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
      </View>


      <View>
        <View style={styles.imgView}>
          <PlaceholderMedia
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              marginTop: -20,
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={100} />
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={100} />
        </View>

      </View>
    </View>

  </View>

);

export default BookCardPlaceholderComponent;