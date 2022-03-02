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

const PlaceholderComponent = () => (
<View style={styles.listCover}>
            <View style={styles.imgCover}>
            <PlaceholderMedia
                    style={{
                    width: 40,
                    height: 40,
                    borderRadius: 3,
                    
                    }}
                />
            </View>

            <View style={styles.detailCover}>
            <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
            </View>
            <View style={styles.quanCover}>
            <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={25} />
            </View>
</View>
  
);

export default PlaceholderComponent;

