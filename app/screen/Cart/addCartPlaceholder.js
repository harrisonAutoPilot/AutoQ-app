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

const AddCartPlaceholder = () => (

  <View>
    <View style={[styles.midCard, styles.elevation]}>
    <View style={styles.cover}>
        <View style={styles.imgCover}>
        <PlaceholderMedia
      style={{
        width: 80,
        height: 80,
        borderRadius: 10,
        marginLeft:25,
        
      }}
    />
        </View>
        <View style={styles.descCover}>
            <View>
            <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
            </View>

           
                    <View style={styles.priceCover} >
                       <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
                    </View> 

        </View>

        <View style={styles.rightCover}>
            <View style={styles.iconCover}>

                
                    <View>
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                    </View>
                     

                <View style={styles.thrash}>
                <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={10} />
                </View >
            </View>

            <View style={styles.increaseCartMainAmountView}>
                <View style={styles.cartAmountView}>
                    <View style={styles.increase}>
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1),marginBottom:10 }} width={5} />
                    </View>
                    <View style={styles.increaseText}>                    
                       <PlaceholderLine style={{ marginTop: responsiveHeight(1),marginBottom:10 }} width={5} />
                    </View>
                    <View style={styles.decrease} >
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1) , marginBottom:10}} width={5} />
                    </View>
                </View>

            </View>

        </View>

    </View>
</View>

<View style={[styles.midCard, styles.elevation]}>
    <View style={styles.cover}>
        <View style={styles.imgCover}>
        <PlaceholderMedia
      style={{
        width: 80,
        height: 80,
        borderRadius: 10,
        marginLeft:25,
        
      }}
    />
        </View>
        <View style={styles.descCover}>
            <View>
            <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
            </View>

           
                    <View style={styles.priceCover} >
                       <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
                    </View> 

        </View>

        <View style={styles.rightCover}>
            <View style={styles.iconCover}>

                
                    <View>
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                    </View>
                     

                <View style={styles.thrash}>
                <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={10} />
                </View >
            </View>

            <View style={styles.increaseCartMainAmountView}>
                <View style={styles.cartAmountView}>
                    <View style={styles.increase}>
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1),marginBottom:10 }} width={5} />
                    </View>
                    <View style={styles.increaseText}>                    
                       <PlaceholderLine style={{ marginTop: responsiveHeight(1),marginBottom:10 }} width={5} />
                    </View>
                    <View style={styles.decrease} >
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1) , marginBottom:10}} width={5} />
                    </View>
                </View>

            </View>

        </View>

    </View>
</View>
<View style={[styles.midCard, styles.elevation]}>
    <View style={styles.cover}>
        <View style={styles.imgCover}>
        <PlaceholderMedia
      style={{
        width: 80,
        height: 80,
        borderRadius: 10,
        marginLeft:25,
        
      }}
    />
        </View>
        <View style={styles.descCover}>
            <View>
            <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
            </View>

           
                    <View style={styles.priceCover} >
                       <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
                    </View> 

        </View>

        <View style={styles.rightCover}>
            <View style={styles.iconCover}>

                
                    <View>
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                    </View>
                     

                <View style={styles.thrash}>
                <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={10} />
                </View >
            </View>

            <View style={styles.increaseCartMainAmountView}>
                <View style={styles.cartAmountView}>
                    <View style={styles.increase}>
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1),marginBottom:10 }} width={5} />
                    </View>
                    <View style={styles.increaseText}>                    
                       <PlaceholderLine style={{ marginTop: responsiveHeight(1),marginBottom:10 }} width={5} />
                    </View>
                    <View style={styles.decrease} >
                    <PlaceholderLine style={{ marginTop: responsiveHeight(1) , marginBottom:10}} width={5} />
                    </View>
                </View>

            </View>

        </View>

    </View>
</View>
</View>

);

export default AddCartPlaceholder;

