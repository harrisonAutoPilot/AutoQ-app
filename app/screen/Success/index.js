import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, ScrollView, FlatList } from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";

import { TrackBtn, BottomBtn } from "@Component/index";
import NavHeader from "@Component/NavHeader";
import commafy from "@Helper/commafy";

const OrderDetails = (props) => {

   const dispatch = useDispatch();
   const [errMsg, setErrMsg] = useState("");
   let no = 0;
   const item = props.route.params.item;
   const order = props.route.params.ref

   const { status, errors } = useSelector((state) => state.auth);

   const goBack = () => props.navigation.navigate("MyOrder");

   const trackOrder = () => props.navigation.navigate("TrackOrder");

   const ListView = ({ item }) => (
      <View style={styles.cardMidCover}>
         <View style={styles.cardUpTop}>
            <View style={styles.snCover2}>
               <Text style={styles.snTextOne}>{no += 1} .</Text>
               <Text style={styles.upTextOne} numberOfLines={1}>{item.product.name}</Text>
            </View>
            <Text style={[styles.snTextTwo, styles.snTextTwoAlign]}>₦ {commafy(item.total_amount)}</Text>
         </View>
         <View style={styles.snDown}>
            <Text style={styles.snDownText}> QTY/<Text style={styles.capitalize}>{item.product.pack_style}</Text> : {item.product.total_quantity_sold}</Text>
         </View>
      </View>
   )

   return (
      <View style={styles.main}>
         <NavHeader style={styles.header} title="Order Details" onPress={goBack} />
         <ScrollView containerStyle={styles.bottomCover} showsVerticalScrollIndicator={false} horizontal={false}>
            <ScrollView horizontal={true}>
               <View style={styles.mainContainer}>

                  <View style={[styles.smCard, styles.elevation]}>
                     <View style={styles.cardUpCover}>
                        <View style={styles.cardUpTop}>
                           <View>
                              <Text style={styles.upTextTwo}>Order Date</Text>
                              <Text style={styles.downTextTwo}>March 22, 2022</Text>
                           </View>
                           <View>
                              <Text style={styles.upTextTwo}>Order No:</Text>
                              <Text style={styles.downTextTwo}>{order}</Text>
                           </View>
                           <View style={styles.StatusCover}>
                              <Text style={styles.statusText}>delivered</Text>
                           </View>
                        </View>
                     </View>
                  </View>

                  <View style={[styles.midCard, styles.elevation]}>
                     <FlatList
                        data={item}
                        renderItem={ListView}
                        keyExtractor={item => item.id}
                     />
                  </View>


                  <View style={[styles.midCard, styles.elevation]}>
                     <View style={styles.cardUpTop2}>
                        <View style={styles.snCover}>
                           <Image source={require("@Assets/image/loc.png")} style={styles.locImg} />
                           <Text style={styles.upTextTwo}>Delivery Address</Text>
                        </View>

                     </View>
                     <View style={styles.cardAddressCover}>
                        <View style={styles.cardMidTop}>
                           <Text style={styles.addTextOne}>Sam's Store</Text>
                        </View>
                        <View style={styles.cardMidDown}>
                           <Text style={styles.addTextTwo}>Sam’s Store 12 Eleruwa Street, Ikeja, Nigeria</Text>
                        </View>
                     </View>

                     <View style={styles.addBtnCover}>
                        <TrackBtn title="Track Package" style={styles.addressBtn} onPress={trackOrder} />
                     </View>

                  </View>

                  <View style={[styles.midCard, styles.elevation]}>
                     <View style={styles.cardUpTop}>
                        <View style={styles.snCover}>
                           <Image source={require("@Assets/image/card.png")} style={styles.cardImg} />
                           <Text style={styles.upTextTwo}>Payment Method</Text>
                        </View>

                     </View>
                     <View style={styles.cardAddressCover}>
                        <View style={styles.cardMidTop}>
                           <Text style={styles.upTextOne}>Remedial Wallet</Text>
                        </View>
                     </View>

                  </View>

                  <View style={[styles.midCard, styles.elevation]}>
                     <View style={styles.cardUpCover}>
                        <View style={styles.cardUpTop}>
                           <Text style={[styles.upTextOne, styles.weight]}>SubTotal</Text>
                           <Text style={[styles.upTextOne, styles.weight]}>₦ 89,000</Text>
                        </View>
                        <View style={styles.cardUpTop}>
                           <Text style={[styles.upTextOne, styles.weight]}>Delivery Fee</Text>
                           <Text style={[styles.upTextOne, styles.weight]}>Free</Text>
                        </View>
                        <View style={styles.cardUpTop}>
                           <Text style={[styles.upTextOne, styles.weight]}>Total</Text>
                           <Text style={[styles.upTextOne, styles.weight]}>₦ 89,000</Text>
                        </View>
                     </View>
                  </View>

                  <View style={[styles.orderBtn]}>
                     <View style={[styles.addBtnCover]}>
                        <TrackBtn title="Order item again" style={styles.addressBtn2} onPress={trackOrder} />
                     </View>

                  </View>

               </View>
            </ScrollView>
         </ScrollView>
      </View>
   )
};

export default OrderDetails;