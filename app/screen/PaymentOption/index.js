import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList,TouchableOpacity,BackHandler, Pressable} from "react-native";
import FIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from "react-redux";

import { getPaymentOptions } from "@Request/paymentOptions";
import Modal from "react-native-modal";

import data2 from "./data2";
import styles from "./style";


const PaymentOption = (props) => {
  const dispatch = useDispatch();


  const [showPaymentOption, setShowPaymentOption] = useState(false);
  const [option, setOption] = useState("");
  const [active, setActive] = useState("0");
  const [errMsg, setErrMsg] = useState("");
  const [visibleRetrieve, setVisibleRetrieve] = useState (true)
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);

  // const { errors, options } = useSelector((state) => state.paymentOptions);

  const closeOption =(props) =>{
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
     
  }

    
  const selectUserType = item => {
    setActive(item.id);
    setOption(item.name);
    console.log(active);

};

    useEffect(() => {
      dispatch(getPaymentOptions())
  }, []);

  const redirectToRegisterDetails = () => {
      if (!option) return setErrMsg("Please select a payment option")
      props.navigation.navigate("Register", { option });

  };

const closeModal = (item) => {
  props.returnBack (option);
  console.log(option);
}

function onConfirm ({item,props}) {
  let data = { name: "Harrison"};
  props.onConfirm(item, data);
}




  const renderItem = ({ item }) => (


    <View style={[styles.optionView, item.id === active ? styles.optionViewBetween1 : styles.optionViewBetween2]}>
        <View style={active === item.id ? styles.optionIconView : styles.optionIconView2}>
            <TouchableOpacity onPress={() => { selectUserType(item); setOption(item.name); setErrMsg("") }}>
                {active && active === item.id ?
                    <View style={styles.activeCover}>
                        <TouchableOpacity style={styles.iconCircle}>
                            <FIcon name="lens" size={12} color="#3858CF" style={styles.icon}/>

                        </TouchableOpacity>
                        <View style={styles.optionTextCover}>
                            <Text style={styles.optionText}>{item.name}</Text>
                            <Text style={styles.optionText}>{item.price_increment}% price increment</Text>
                        </View>

                    </View>
                    :
                    <View style={styles.activeCover}>
                        <View style={styles.iconCircle2}/>

                       
                        <View style={styles.optionTextCover}>
                            <Text style={styles.optionText2}>{item.name}</Text>
                            <Text style={styles.optionText2}>{item.price_increment}% price increment</Text>
                        </View>
                    </View>
                }
            </TouchableOpacity>
        </View>

    </View>


);





  return (
    <Modal
      isVisible={props.visibleRetrieve}
      onBackdropPress={closeModal}
      onSwipeComplete={() => setPaymentOption(false)}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      backdropColor="#3858CF"
      backdropOpacity={0.8}
      coverScreen={true}>
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowPaymentOption(false);
          }
        }} >
        <View style={styles.body5}>

          <View style={styles.imageHolder}>
           <View style={styles.smTitleCover}>
           <Text style={styles.smTitle}>Choose Payment Method</Text>
           </View>
                <View style={styles.colorInfo}>
                    <Icon name="info" size={22} color="#00319D" style={styles.iconInfo} />
                    <Text style={styles.colorInfoText}>
                    Exclusive for Hospitals Only. Make Orders and Select Preffered Payment Method.
                    </Text>
                </View>
                <View style={styles.mainContainer}>
                {errMsg ? <View style={styles.errMainView}>
                <Text style={styles.failedResponseText}>{errMsg}</Text>
                 </View>
                : null}

                <View style={styles.itemCover}>
                    
                            <FlatList
                                data={data2}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                scrollEnabled={isScrollEnabled}
                                // onChangeText={(item) => props.onInputChanged(item.name)}
                            />
                            
                     
                   </View> 
                   <View style={styles.controlCover}>
                        <TouchableOpacity style={styles.cancelBtn} onPress={props.closeOption}>
                          <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                          <Text style={styles.confirmText}>Confirm</Text>
                        </TouchableOpacity>
                      </View>  
                  </View>
                </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default PaymentOption