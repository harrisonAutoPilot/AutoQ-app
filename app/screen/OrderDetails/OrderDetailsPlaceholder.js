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
import { TrackBtn } from "@Component/index";

const OrderDetailsPlaceholder = () => (

    <View style={styles.main}>
   
  
          <View style={styles.mainContainer}>

          <View style={[styles.midCard, styles.elevation]}>
                <View style={styles.cardUpCover}>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                   </View>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                   </View>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
                   </View>
                </View>
             </View>

           

             <View style={[styles.midCard, styles.elevation]}>
               
             <View style={styles.cardUpCover}>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                   </View>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                   </View>
                   
                </View>

             </View>


             <View style={[styles.midCard, styles.elevation]}>
                <View style={styles.cardUpTop2}>
                   <View style={styles.snCover}>
                     <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={10} />
                     <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   </View>

                </View>
                <View style={styles.cardAddressCover}>
                   <View style={styles.cardMidTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
                   </View>
                   <View style={styles.cardMidDown}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
                   </View>
                </View>

             
             </View>

             <View style={[styles.midCard, styles.elevation]}>
                <View style={styles.cardUpTop}>
                   <View style={styles.snCover}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   </View>

                </View>
                <View style={styles.cardAddressCover}>
                   <View style={styles.cardMidTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={40} />
                   </View>
                </View>

             </View>

             <View style={[styles.midCard, styles.elevation]}>
                <View style={styles.cardUpCover}>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                   </View>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={15} />
                   </View>
                   <View style={styles.cardUpTop}>
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={20} />
                   <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
                   </View>
                </View>
             </View>

  
                <View style={[styles.orderBtn]}>
                   <View style={[styles.addBtnCover]}>
                      <TrackBtn title="Order item again" style={styles.addressBtn2} />
                   </View>
                </View>
              

          </View>
    
 
  </View>



);

export default OrderDetailsPlaceholder;

