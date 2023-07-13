import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

export default TeamPlaceholderLoader = props => (
  <View style={styles.placeholderCover}>
    <View style={styles.card}>
      <View style={styles.imgCoverP} />
      <View style={styles.contentCover}>
        <View style={styles.smLine} />
        <View style={styles.mdLine} />
      </View>
      <View style={styles.arrowCover}>
        <Icon name="chevron-right" color="#767680" size={24} />
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.imgCoverP} />
      <View style={styles.contentCover}>
        <View style={styles.smLine} />
        <View style={styles.mdLine} />
      </View>
      <View style={styles.arrowCover}>
        <Icon name="chevron-right" color="#767680" size={24} />
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.imgCoverP} />
      <View style={styles.contentCover}>
        <View style={styles.smLine} />
        <View style={styles.mdLine} />
      </View>
      <View style={styles.arrowCover}>
        <Icon name="chevron-right" color="#767680" size={24} />
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.imgCoverP} />
      <View style={styles.contentCover}>
        <View style={styles.smLine} />
        <View style={styles.mdLine} />
      </View>
      <View style={styles.arrowCover}>
        <Icon name="chevron-right" color="#767680" size={24} />
      </View>
    </View>
    
  </View>
);
