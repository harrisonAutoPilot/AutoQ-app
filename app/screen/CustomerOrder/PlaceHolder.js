import React from 'react';
import {
  PlaceholderLine,
} from 'rn-placeholder';
import { View } from 'react-native';
import styles from './style';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const MyOrderPlaceholder = () => (

  <View style={styles.productCard}>
    <View style={[styles.card, styles.elevation]}>
      <View style={styles.cardUpCover}>
        <View style={styles.cardUpTop}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
        </View>
        <View style={styles.cardUpDown}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
        </View>
      </View>
      <View style={styles.cardMidCover}>
        <View style={styles.cardMidTop}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
        </View>
        <View style={styles.cardMidDown}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
        </View>
      </View>

      <View style={styles.cardDownCover}>
        <View style={styles.StatusCover}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
        </View>


        <View style={styles.reorderCover}>

          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />

        </View>


      </View>

    </View>

    <View style={[styles.card, styles.elevation]}>
      <View style={styles.cardUpCover}>
        <View style={styles.cardUpTop}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
        </View>
        <View style={styles.cardUpDown}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
        </View>
      </View>
      <View style={styles.cardMidCover}>
        <View style={styles.cardMidTop}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
        </View>
        <View style={styles.cardMidDown}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
        </View>
      </View>

      <View style={styles.cardDownCover}>
        <View style={styles.StatusCover}>
          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
        </View>


        <View style={styles.reorderCover}>

          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />

        </View>


      </View>

    </View>

  </View>

);

// export default MyOrderPlaceholder;

