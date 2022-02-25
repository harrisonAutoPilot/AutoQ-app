import React, { useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./style";
import { COHeader as Header } from "@Component";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import { trackOrder } from "@Request/CustomerOrder";
import { cleanup } from "@Store/CustomerOrder";

const TrackOrder = (props) => {
   const dispatch = useDispatch();

   const { trackOrderStatus, trackOrderList } = useSelector((state) => state.order);

   useEffect(() => {
      dispatch(trackOrder({ id: props.route.params.id }));

      return () => dispatch(cleanup())
   }, [])

   const goBack = () => props.navigation.goBack();

   const ListView = ({ item }) => (
      <View style={styles.cardMidCover}>
         <View style={styles.cardUpTop}>
            <View style={styles.checkCover}>
               <View style={styles.checkImgCover}>
                  <Image source={require("@Assets/image/check.png")} style={styles.checkImg} />
               </View>
               <View>
                  <Text style={styles.checkTextOne}>{item.detail}</Text>
                  <Text style={styles.checkTextTwo}>{item.created_at.substring(0, 10).split('-').reverse().join('-')}</Text>
               </View>
            </View>

         </View>
         <View style={styles.checkLineCover}>
            <Image source={require("@Assets/image/line.png")} style={styles.lineImg} />
            <Image source={require("@Assets/image/dotted.png")} style={styles.dottedImg} />
         </View>
      </View>
   )

   return (
      <View style={styles.main}>
         <Header title="Track Order" onPress={goBack}  styleView={styles.body}/>

         <View style={styles.bottomCover} >
            <View style={[styles.midCard, styles.elevation]}>

               <FlatList
                  data={[]}
                  renderItem={trackOrderList.tracks}
                  keyExtractor={item => item.id}
               />
               {trackOrderList.status ?
                  <View style={styles.lastCover}>
                     <View style={styles.tickCover}>
                        <Icon name="check" size={14} color="#212121"/>
                     </View>
                     <Text style={styles.tickText}>{trackOrderList.status}.</Text>

                  </View> : null}

            </View>
         </View>

      </View>
   )
};

export default TrackOrder;