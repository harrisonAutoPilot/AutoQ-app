import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const PlaceholderCard = () => (

    <View  style={styles.cardCover}>
    <View style={styles.cardTop}>
        <View style={styles.itemNameP}>
            {/* <Text style={styles.nameTextActive}>{item?.name}</Text> */}
        </View>
        <View style={styles.actCoverP}>
            {/* <Text style={styles.actText}>Active</Text> */}
        </View>
    </View>
    <View style={styles.cardMid}>
        <View style={styles.itemPhoneP}>
            {/* <Text style={styles.phoneText}>+{item?.phone}zzz</Text> */}
        </View>

    </View>
    <View style={styles.cardDown}>
        <View style={styles.cardDownInnerP}>
            {/* <Text style={styles.phoneText}>{item?.address}</Text> */}
        </View>

    </View>
</View>

);

export default PlaceholderCard;