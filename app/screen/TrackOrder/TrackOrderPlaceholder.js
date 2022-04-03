import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';


const TrackOrderPlaceholderCard = () => (
<View style={styles.cardMidCover}>
         <View style={styles.cardUpTop}>
            <View style={styles.checkCover}>
               <View style={styles.checkImgCoverP}>
                  <View style={styles.checkImgP} />
               </View>
               <View>
                 <View style={styles.lines}></View>
                 
               </View>
            </View>

         </View>
         <View style={styles.checkLineCover}>
            <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
            <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
         </View>

         <View style={styles.cardUpTop}>
            <View style={styles.checkCover}>
               <View style={styles.checkImgCoverP}>
                  <View style={styles.checkImgP} />
               </View>
               <View>
                 <View style={styles.lines}></View>
                 
               </View>
            </View>

         </View>
         <View style={styles.checkLineCover}>
            <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
            <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
         </View>
         <View style={styles.cardUpTop}>
            <View style={styles.checkCover}>
               <View style={styles.checkImgCoverP}>
                  <View style={styles.checkImgP} />
               </View>
               <View>
                 <View style={styles.lines}></View>
                 
               </View>
            </View>

         </View>
         <View style={styles.checkLineCover}>
            <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
            <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
         </View>
         <View style={styles.cardUpTop}>
            <View style={styles.checkCover}>
               <View style={styles.checkImgCoverP}>
                  <View style={styles.checkImgP} />
               </View>
               <View>
                 <View style={styles.lines}></View>
                 
               </View>
            </View>

         </View>
      </View>


);

export default TrackOrderPlaceholderCard;