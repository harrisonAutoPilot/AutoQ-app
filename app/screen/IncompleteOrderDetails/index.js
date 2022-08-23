import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, ScrollView, FlatList, } from "react-native";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import { AuthBtn, COHeader as Header } from "@Component/index";
import { cleanup, cleanfailedOrder, cleanVerify } from "@Store/CustomerOrder";
import Loader from "@Screen/Loader";
import BottomSheet from "@Screen/ConfirmCheckOut/ConfirmOrder";
import { getCustomerPendingOrders, verifyOrder, verifyCode } from "@Request/CustomerOrder";

const InCompleteOrderDetails = (props) => {

   const dispatch = useDispatch();
   const [err, setErr] = useState("");
   const [loader, setLoader] = useState(false);
   const [successMsg, setSuccessMsg] = useState("");

   const bottomSheet = useRef();
   const orders = props.route.params.item;

   const { errors, verify, verificationStatus } = useSelector((state) => state.order);

   const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
  };

   const verifyToken = (a, b, c, d) => {
      const code = { code: parseInt(`${a}${b}${c}${d}`) }
      setLoader(true);
      dispatch(verifyCode(code));
   };

   const resendToken = () => {
      const details = { orderGroup_id: orders.id };
      setLoader(true);
      dispatch(verifyOrder(details));
   };

   const closeBottomSheet = () => {
      dispatch(cleanVerify());
      bottomSheet.current.close();
   }

   const toastConfig = {
      error: () => (
         <View style={[{ marginHorizontal: 20 }, globalStyles.errMainView2, globalStyles.marginTop]}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
         </View>
      ),
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
         dispatch(cleanfailedOrder());
      })
   }, []);

   useEffect(() => {

      if (verify === "failed" && props.navigation.isFocused()) {
         waitTime("", errors?.msg)
      } else if (verify === "success") {
         setLoader(false);
         bottomSheet.current.close();
         dispatch(cleanup());
         dispatch(getCustomerPendingOrders(1))
         props.navigation.navigate("CheckoutSuccess", { amount: orders.total_amount, delivery_price: orders?.delivery_type?.price  })
      }

      if (verificationStatus === "failed" && props.navigation.isFocused()) {
         waitTime("", errors?.msg)
      } else if (verificationStatus === "success" && props.navigation.isFocused()) {
         setSuccessMsg("Verification code sent");
         bottomSheet.current.show();
         setLoader(false)
      }

   }, [errors, verify, verificationStatus]);


   const goBack = () => props.navigation.goBack();


   const ListView = ({ item, index }) => (
      <View style={styles.cardMidCover}>
         <View style={styles.cardUpTop}>
            <View style={styles.snCover2}>

               <Text style={styles.snTextOne}>{index + 1}.</Text>
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
         <Header styleView={styles.body} title="Incomplete Order Details" onPress={goBack} />
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

                        {orders?.status_text?.toLowerCase() === "cancelled" ?

                           <View style={styles.StatusCoverC}>
                              <Text style={styles.statusTextC}>{orders.status_text}</Text>
                           </View>
                           :
                           orders?.status_text?.toLowerCase() === "being processed" || orders?.status_text?.toLowerCase() === "pending" ?

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
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders.total_amount ? commafy(orders.total_amount - orders?.delivery_type?.price) : 0}</Text>
                     </View>
                     <View style={styles.cardUpTop}>
                        <Text style={[styles.upTextThree, styles.weight]}>Delivery Fee</Text>
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders?.delivery_type?.price ? commafy(orders?.delivery_type?.price) : 0}</Text>
                     </View>
                     <View style={styles.cardUpTop}>
                        <Text style={[styles.upTextThree, styles.weight]}>Total</Text>
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders.total_amount ? commafy(orders.total_amount) : 0}</Text>
                     </View>
                  </View>

                  <View style={[styles.orderBtn]}>
                     <View style={[styles.addBtnCover]}>
                        <AuthBtn title="Re-Send Code" style={styles.addressBtn2} styles={styles.btnText2} onPress={resendToken} />
                     </View>
                  </View>

               </View>
            </ScrollView>
         </ScrollView>

         <Loader isVisible={loader} />

         <BottomSheet
            bottomSheet={bottomSheet}
            submit={verifyToken}
            err={err}
            success={successMsg}
            resendToken={() => resendToken(orders.id)}
            phone={orders?.user?.phone}
            close={closeBottomSheet}
         />
      </View>
   )
};

export default InCompleteOrderDetails;