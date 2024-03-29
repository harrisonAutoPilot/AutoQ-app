import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, ScrollView, FlatList, Platform, TouchableOpacity  } from "react-native";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import { AuthBtn, COHeader as Header, ConfirmDeleteBottomSheet , FileSizeBottomSheet} from "@Component/index";
import { cleanup, cleanfailedOrder, cleanVerify } from "@Store/CustomerOrder";
import Loader from "@Screen/Loader";
import BottomSheet from "@Screen/ConfirmCheckOut/ConfirmOrder";
import { getCustomerPendingOrders, verifyOrder, verifyCode, getIncompleteItems, verifyCodeIncomplete, deleteIncompleteOrder} from "@Request/CustomerOrder";
import { cleanup as delivery } from "@Store/DeliveryOptions";
import { listCart } from "@Request/Cart";
import { cleanList } from "@Store/Cart";
import ModalView from "./PromptBottomSheet";
import ListItemView from "./ListBottomSheet";





const InCompleteOrderDetails = (props) => {

   const dispatch = useDispatch();

   const [err, setErr] = useState("");

   const [loader, setLoader] = useState(false);

   const [showFileSize, setShowFileSize] = useState(false);

   const [trapError, setTrapError] = useState()

   const [successMsg, setSuccessMsg] = useState("");

   const [showResendCodeBtn, setShowResendCodeBtn] = useState(true);

   const [lastCode, setLastCode] = useState()

   const bottomSheetPrompt = useRef();

   const bottomSheet = useRef();

   const bottomSheetDelete = useRef();

   const bottomSheetList = useRef()


   const orders = props.route.params.item;


// console.log("the order", orders)

   const { errors, verify, deleteOrder, verificationStatus,errorIncomplete, errorsCheck,incompleteOrderCurrentPage, verifyIncom} = useSelector((state) => state.order);

   const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
  };

   const verifyToken = (a, b, c, d) => {
      const code = { code: parseInt(`${a}${b}${c}${d}`) }
      setShowResendCodeBtn(false)
      setLastCode(code)
      setLoader(true);
      dispatch(verifyCode(code));
     
   };

   const resendToken = () => {
      const details = { orderGroup_id: orders.id };
      Platform.OS === "android" ?
      setLoader(true):
      null
      setShowResendCodeBtn(false)
      dispatch(verifyOrder(details));
   };

   const closeBottomSheet = () => {
      clearInterval(waitTimeToResendVerification)
      dispatch(cleanVerify());
      bottomSheet.current.close();
   }

   const closeSheet = () =>{
      bottomSheetPrompt.current.close()
   }

   const closeSheetList = () =>{
      bottomSheetList.current.close()
   }

   const seeList = () => {
      bottomSheetPrompt?.current?.close()
      bottomSheetList?.current?.present()
   }

   const deleteThisOrder = () => {
        setShowFileSize(true)
   }

   const cancelDelete = () => {
      bottomSheetDelete?.current?.close() 
   }

   const proceedDelete = () => {
      setLoader(true)
      console.log("the ooooo",  orders.id)
      const id = orders.id;
      dispatch(deleteIncompleteOrder(id));
   }

   const proceedWithToken = () => {
      bottomSheet?.current?.close()
      bottomSheetPrompt?.current?.close()
      const code = lastCode;

      Platform.OS === "android" ?
      setLoader(true):
      null
      setShowResendCodeBtn(false)
      dispatch(verifyCodeIncomplete(lastCode));
     
   };
 
   const proceedWithTokenList = () => {
   bottomSheet?.current?.close()
    bottomSheetList?.current?.close()
    const code = lastCode;

    Platform.OS === "android" ?
    setLoader(true):
    null
    setShowResendCodeBtn(false)
    dispatch(verifyCodeIncomplete(lastCode));
   
 };

   const toastConfig = {
      error: () => (
         <View style={[{ marginHorizontal: 20 }, globalStyles.errMainView2, globalStyles.marginTop]}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
         </View>
      ),
   };

   const cleanVerifyCall = useCallback(() => {
      wait(3000).then(() => {
         setSuccessMsg("");
          dispatch(cleanVerify())
      });

  }, []);
  

   const waitTimeToResendVerification = useCallback(() => {
      wait(15000).then(() => {
          setShowResendCodeBtn(true);
      });

  }, []);

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
         setLoader(false)
         setTrapError(errorIncomplete?.msg || errors?.msg)
         waitTime("", errors?.msg)

       
         if (errors.status === 402){
            setLoader(false)
            bottomSheetPrompt?.current?.present()
            dispatch(getIncompleteItems(orders.id))
         }
         waitTimeToResendVerification()
      } else if (verify === "success") {

         setLoader(false);
         bottomSheet.current.close();
         dispatch(cleanup());
         dispatch(getCustomerPendingOrders(1))
         props.navigation.navigate("CheckoutSuccess", { amount: orders?.total_amount, delivery_price: orders?.delivery_type?.price  })
      }

      if (verificationStatus === "failed" && props.navigation.isFocused()) {
         console.log(errors?.msg, "verification msg failed")
         waitTime("", errors?.msg)

      } else if (verificationStatus === "success" && props.navigation.isFocused()) {
         console.log(verificationStatus, "verification msg passed")
         waitTimeToResendVerification()
         setSuccessMsg("Verification code sent");
         cleanVerifyCall()
         setLoader(false)
         bottomSheet.current.present();
         
      }

      if (verifyIncom === "failed" && props.navigation.isFocused()) {
         setLoader(false);
         waitTimeToResendVerification()
         waitTime("", errors?.msg)
     } else if (verifyIncom === "success" && props.navigation.isFocused()) {
         setLoader(false)
         dispatch(cleanup())
         dispatch(delivery())
         props.navigation.navigate("CheckoutSuccess", { amount: orders.total_amount, delivery_price: orders?.delivery_type?.price  })
     }

 if (deleteOrder === "failed" && props.navigation.isFocused()) {
      bottomSheetDelete?.current?.close() 
      setLoader(false);
      waitTime("", errors?.msg)
  } else if (deleteOrder === "success" && props.navigation.isFocused()) {
      setShowFileSize(false)
      setLoader(false)
      dispatch(cleanup())
      props.navigation.goBack()
  
      //props.navigation.navigate("CheckoutSuccess", { amount: orders.total_amount, delivery_price: orders?.delivery_type?.price  })
  }



   }, [errors, verify, verificationStatus, verifyIncom, deleteOrder]);


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
   );

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

                <View style={styles.errorCover}>
                {err ? <Toast config={toastConfig} /> : null}
                
                </View>

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
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders.total_amount ? commafy(orders.total_amount - orders?.delivery_type?.pivot?.delivery_price) : 0}</Text>
                     </View>
                     <View style={styles.cardUpTop}>
                        <Text style={[styles.upTextThree, styles.weight]}>Delivery Fee</Text>
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders?.delivery_type?.pivot?.delivery_price ? commafy(orders?.delivery_type?.pivot?.delivery_price) : 0}</Text>
                     </View>
                     <View style={styles.cardUpTop}>
                        <Text style={[styles.upTextThree, styles.weight]}>Total</Text>
                        <Text style={[styles.upTextThree, styles.weight]}>₦{orders?.total_amount ? commafy(orders?.total_amount) : 0}</Text>
                     </View>
                  </View>

                  <View style={[styles.orderBtn]}>
                     <View style={[styles.addBtnCover]}>
                        <AuthBtn title="Re-Send Code" style={styles.addressBtn2} styles={styles.btnText2} onPress={resendToken} />
                     </View>
                     <TouchableOpacity style={styles.deleteCover} onPress={deleteThisOrder}>
                        <Text style={styles.deleteText}>Delete this Order</Text>
                     </TouchableOpacity>
                  </View>

               </View>
            </ScrollView>
         </ScrollView>

         <Loader isVisible={loader} />

         <BottomSheet
            bottomSheet={bottomSheet}
            submit={verifyToken}
            err={errors.msg}
            success={successMsg}
            resendToken={() => resendToken(orders.id)}
            phone={orders?.user?.phone}
            close={closeBottomSheet}
            showResendPin={showResendCodeBtn}
         />

            <ModalView
               bottomSheetPrompt={bottomSheetPrompt}
               onPress={closeSheet}
               proceed ={proceedWithToken}
               viewList ={seeList}
               listCount = {trapError}
               // isVisible={visible}
                />

          

            <ListItemView
               bottomSheetList={bottomSheetList}
               onPressList={closeSheetList}
               proceed ={proceedWithTokenList}
               result={incompleteOrderCurrentPage}
            
                />

                {/* <ConfirmDeleteBottomSheet
                bottomSheetDelete ={bottomSheetDelete}
                proceed={proceedDelete}
                nope={cancelDelete}

                /> */}
                <FileSizeBottomSheet
                     visibleRetrieve={showFileSize}
                     returnBack={() => setShowFileSize(false)}
                     proceed={proceedDelete}
                     nope={() => setShowFileSize(false)}
                     title="Confirm Order Delete"
                     message="Are you sure you want to proceed with the delete ?"
                     />
              
       
      </View>
   )
};

export default InCompleteOrderDetails;