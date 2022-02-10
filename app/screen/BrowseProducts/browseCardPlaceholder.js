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

const BrowseCardPlaceholder = () => (
  

<View style={styles.listContainer}>
            <View style={styles.listContainerImageView}>
            <PlaceholderMedia
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius:10,   
                    }}
                  />
            </View>
         
                <View style={styles.listTitleView} >
                
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1.5),marginRight:30}} width={100} />
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1.5),marginRight:30}} width={100} />
                </View>

        </View>


);

export default BrowseCardPlaceholder;