import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, ScrollView, FlatList, } from "react-native";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import { AuthBtn, COHeader as Header } from "@Component/index";
import { reOrder } from "@Request/CustomerOrder";
import { cleanup } from "@Store/CustomerOrder";
import Loader from "@Screen/Loader";

const CustomerOrderDetails = (props) => {

   const dispatch = useDispatch();
   const [err, setErr] = useState("");
   const [loader, setLoader] = useState(false);
   let no = 0;
   const orders = props.route.params.item;
   const { errors, update } = useSelector((state) => state.order);
   console.log(orders)

   const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
   };

   const waitTime = useCallback((msg) => {
      wait(1000).then(() => {
         setLoader(false);
         setErr(msg)
         Toast.show({
            type: 'error',
            visibilityTime: 5000,
            autoHide: true,
            position: 'top',
            topOffset: 0
         })
      });
      wait(4000).then(() => {
         dispatch(cleanup());
      })
   }, []);

   const toastConfig = {
      error: () => (
         <View style={[{ marginHorizontal: 20 }, globalStyles.errMainView2, globalStyles.marginTop]}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
         </View>
      ),
   };

   useEffect(() => {
      if (update === "failed" && props.navigation.isFocused()) {
         waitTime(errors?.msg);
      } else if (update === "success" && props.navigation.isFocused()) {
         props.navigation.navigate("Cart")
      } else {
         setErr("")
      }
   }, [update]);


   const goBack = () => props.navigation.goBack();
   const trackOrder = () => props.navigation.navigate("TrackOrder", { id: props.route.params.item.id });

   const reOrders = () => {
      const details = { order_group_id: orders.id };
      setLoader(true)
      dispatch(reOrder(details));
   };

   const ListView = ({ item }) => (
      <View style={styles.cardMidCover}>
         <View style={styles.cardUpTop}>
            <View style={styles.snCover2}>

               <Text style={styles.snTextOne}>{no += 1}.</Text>
               <View style={styles.productNameCover}>
                  <Text style={styles.upTextOne} numberOfLines={1}>{item.product?.name}</Text>
               </View>
            </View>
            <Text style={[styles.snTextTwo, styles.snTextTwoAlign]}>₦ {commafy(item?.total_amount)}</Text>
         </View>
         <View style={styles.snDown}>
            <Text style={styles.snDownText}>QTY/<Text style={styles.capitalize}>{item.product?.pack_style}</Text> : {item.product?.total_quantity_sold}</Text>
         </View>
      </View>
   )

   return (
      <View style={styles.main}>
         <Header styleView={styles.body} title="Order Details" onPress={goBack} />
         <ScrollView containerStyle={styles.bottomCover} showsVerticalScrollIndicator={false} horizontal={false}>
            <ScrollView horizontal={true}>
               <View style={styles.mainContainer}>

                  <View style={[styles.smCard, styles.elevation]}>
                     <View style={styles.cardUpTop}>
                        <View>
                           <Text style={styles.upTextTwo}>Order Date</Text>
                           <Text style={styles.downTextTwo}>{new Date(orders.created_at).toDateString().substr(new Date(orders.created_at).toDateString().indexOf(' ') + 1)}</Text>
                        </View>
                        <View>
                           <Text style={styles.upTextTwo}>Order No:</Text>
                           <Text style={styles.downTextTwo}>{orders.ref_no}</Text>
                        </View>

                        {item?.status_text?.toLowerCase() === "cancelled" ?

                           <View style={styles.StatusCoverC}>
                              <Text style={styles.statusTextC}>{item.status_text}</Text>
                           </View>
                           :
                           orders?.status_text?.toLowerCase() === "being processed" ?

                              <View style={styles.StatusCoverB}>
                                 <Text style={styles.statusText2}>{orders.status_text}</Text>
                              </View> :
                              <View style={styles.StatusCover}>
                                 <Text style={styles.statusText}>{orders.status_text}</Text>
                              </View>
                        }
                     </View>
                  </View>

                  {err ? <Toast config={toastConfig} /> : null}

                  <View style={[styles.midCard, styles.elevation]}>
                     <FlatList
                        data={orders?.orders}
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
                           <Text style={styles.addTextOne}>{orders?.store?.name}</Text>
                        </View>
                        <View style={styles.cardMidDown}>
                           <Text style={styles.addTextTwo}>{orders?.store?.address}</Text>
                        </View>
                     </View>

                     <View style={styles.addBtnCover}>
                        <AuthBtn title="Track Order" style={styles.addressBtn} onPress={trackOrder} styles={styles.btnText} />
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
                           <Text style={styles.upTextOne}>{orders?.payment_method?.display_name}</Text>
                        </View>
                     </View>

                  </View>

                  <View style={[styles.midCard2, styles.elevation]}>
                     <View style={styles.cardUpTop}>
                        <Text style={[styles.upTextThree, styles.weight]}>SubTotal</Text>
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders.total_amount ? commafy(orders.total_amount) : 0}</Text>
                     </View>
                     <View style={styles.cardUpTop}>
                        <Text style={[styles.upTextThree, styles.weight]}>Delivery Fee</Text>
                        <Text style={[styles.upTextThree, styles.weight]}>Free</Text>
                     </View>
                     <View style={styles.cardUpTop}>
                        <Text style={[styles.upTextThree, styles.weight]}>Total</Text>
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders.total_amount ? commafy(orders.total_amount) : 0}</Text>
                     </View>
                  </View>

                  {orders?.orders.length ?
                     <View style={[styles.orderBtn]}>
                        <View style={[styles.addBtnCover]}>
                           <AuthBtn title="Re-Order" style={styles.addressBtn2} onPress={reOrders} styles={styles.btnText2} />
                        </View>
                     </View>
                     : null}

               </View>
            </ScrollView>
         </ScrollView>
         <Loader isVisible={loader} />
      </View>
   )
};

export default CustomerOrderDetails;