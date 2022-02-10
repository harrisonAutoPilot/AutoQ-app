import React from 'react';
import {View} from 'react-native';
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

const TransactionCardPlaceholder = () => (
  

    <View style={{flexDirection:'row'}} >
            <View style={styles.leftCover}>
                    
                       <PlaceholderMedia
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius:100, 
                        marginTop:4,
                        marginBottom:2,
                    }}
                  />    
               
            </View>
            <View style={styles.leftCover}>
            <PlaceholderLine style={{ marginTop: responsiveHeight(1.5),}} width={45} />
            <PlaceholderLine style={{ marginTop: responsiveHeight(1.5),}} width={45} />

            </View>
            
        </View>

);

export default TransactionCardPlaceholder;