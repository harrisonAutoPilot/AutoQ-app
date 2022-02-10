import React from "react";
import { View, Text, Image} from "react-native";
import styles from "./style";
import NavHeader from "@Component/NavHeader";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TrackOrder = (props) => {

   const goBack = () => props.navigation.goBack();

   return (
      <View style={styles.main}>
         <NavHeader title="Track Order" onPress={goBack} />

         <View style={styles.bottomCover} >
            <View style={[styles.midCard, styles.elevation]}>

               <View style={styles.cardMidCover}>
                  <View style={styles.cardUpTop}>
                     <View style={styles.checkCover}>
                        <View style={styles.checkImgCover}>
                           <Image source={require("@Assets/image/check.png")} style={styles.checkImg} />
                        </View>
                        <View>
                           <Text style={styles.checkTextOne}>Order Confirmed</Text>
                           <Text style={styles.checkTextTwo}>04-02-2021</Text>
                        </View>
                     </View>

                  </View>
                  <View style={styles.checkLineCover}>
                     <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
                     <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
                  </View>
               </View>

               { /*THE TIMELINE FOR THE CONFIRMED STATUS ENDS HERE */}


               { /*THE TIMELINE FOR THE PROCESSED STATUS STARTS HERE */}

               <View style={styles.cardMidCover}>
                  <View style={styles.cardUpTop}>
                     <View style={styles.checkCover}>
                        <View style={styles.checkImgCover}>
                           <Image source={require("@Assets/image/check.png")} style={styles.checkImg} />
                        </View>
                        <View>
                           <Text style={styles.checkTextOne}>Order is been processed</Text>
                           <Text style={styles.checkTextTwo}>04-02-2021</Text>
                        </View>
                     </View>

                  </View>
                  <View style={styles.checkLineCover}>
                     <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
                     <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
                  </View>
               </View>


               <View style={styles.cardMidCover}>
                  <View style={styles.cardUpTop}>
                     <View style={styles.checkCover}>
                        <View style={styles.checkImgCover}>
                           <Image source={require("@Assets/image/check.png")} style={styles.checkImg} />
                        </View>
                        <View>
                           <Text style={styles.checkTextOne}>Item has been shipped for delivery</Text>
                           <Text style={styles.checkTextTwo}>04-02-2021</Text>
                        </View>
                     </View>

                  </View>
                  <View style={styles.checkLineCover}>
                     <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
                     <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
                  </View>
               </View>

               { /*THE TIMELINE FOR THE SHIPPED STATUS ENDS HERE */}

               { /*THE TIMELINE FOR THE ITEM DELIVERED STATUS STARTS HERE */}

               <View style={styles.cardMidCover}>
                  <View style={styles.cardUpTop}>
                     <View style={styles.checkCover}>
                        <View style={styles.checkImgCover}>
                           <Image source={require("@Assets/image/check.png")} style={styles.checkImg} />
                        </View>
                        <View>
                           <Text style={styles.checkTextOne}>Item delivered</Text>
                           <Text style={styles.checkTextTwo}>04-02-2021</Text>
                        </View>
                     </View>

                  </View>
                  <View style={styles.checkLineCover}>
                     <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
                     <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
                  </View>

               </View>

               <View style={styles.lastCover}>
                  <View style={styles.tickCover}>
                     <Image source={require("@Assets/image/tick.png")} style={styles.tickImg} />
                  </View>
                  <Text style={styles.tickText}>This order has been completed.</Text>

               </View>

            </View>
         </View>

      </View>
   )
};

export default TrackOrder;