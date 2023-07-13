import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default OrderPlaceholderLoader = props => (
  <View style={styles.placeholderCover}>
    <View style={styles.cardCover}>
      <View>
        <View style={styles.cardTopP}>
          <View style={styles.tnLine} />
          <View style={styles.smLine} />
        </View>
        <View style={styles.cardTop}>
          <View>
            <View style={styles.mdLine} />
            <View style={styles.statusLine} />
          </View>
        </View>
      </View>
    </View>

    <View style={styles.cardCover}>
      <View>
        <View style={styles.cardTopP}>
          <View style={styles.tnLine} />
          <View style={styles.smLine} />
        </View>
        <View style={styles.cardTop}>
          <View>
            <View style={styles.mdLine} />
            <View style={styles.statusLine} />
          </View>
        </View>
      </View>
    </View>

    <View style={styles.cardCover}>
      <View>
        <View style={styles.cardTopP}>
          <View style={styles.tnLine} />
          <View style={styles.smLine} />
        </View>
        <View style={styles.cardTop}>
          <View>
            <View style={styles.mdLine} />
            <View style={styles.statusLine} />
          </View>
        </View>
      </View>
    </View>

    <View style={styles.cardCover}>
      <View>
        <View style={styles.cardTopP}>
          <View style={styles.tnLine} />
          <View style={styles.smLine} />
        </View>
        <View style={styles.cardTop}>
          <View>
            <View style={styles.mdLine} />
            <View style={styles.statusLine} />
          </View>
        </View>
      </View>
    </View>
  </View>
);
