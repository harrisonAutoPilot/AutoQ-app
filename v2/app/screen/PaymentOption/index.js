import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Pressable } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
// import FIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from "react-redux";
import PlaceholderLoader from "./PlaceholderLoader";

import { getPaymentOptions } from "@Request/paymentOptions";
import Modal from "react-native-modal";
import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";


const PaymentOption = (props) => {
  const dispatch = useDispatch();

  const [showPaymentOption, setShowPaymentOption] = useState(false);
  const [option, setOption] = useState("");
  const [active, setActive] = useState("0");
  const [errMsg, setErrMsg] = useState("");
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);

  const { errors, options } = useSelector((state) => state.paymentOptions);

  const selectUserType = item => {
    setActive(item.id);
    setOption(item.name);
    props.returnBack(item.name);

  };


  const offset = useSharedValue(0);

  const [selected, setSelected] = useState(null);

  const animatedStyles = useAnimatedStyle(() => {
    return {
        transform: [
            {
                translateY: withSpring(offset.value * 255),
            },
        ],
    };
});

  useEffect(() => {
    dispatch(getPaymentOptions())
  }, []);

  useEffect(() => {
    if (props.id) {
      setActive(props.id.id);
      setOption(props.id.name)
      props.returnBack(props.id.name);
    }
  }, [props.id]);


  // const closeModal = () => {
  //   props.returnBack(option);
  // };

  const renderItem = ({ item }) => (


    // <TouchableOpacity onPress={() => { selectUserType(item); setErrMsg("") }} style={[styles.optionView, item.id === active ? styles.optionViewBetween1 : styles.optionViewBetween2]}>
    //   <View style={active === item.id ? styles.optionIconView : styles.optionIconView2}>
    //     {active && active === item.id ?
    //       <View style={styles.activeCover}>
    //         <View style={styles.iconCircle}>
    //           <FIcon name="lens" size={12} color="#3858CF" style={styles.icon} />

    //         </View>
    //         <View style={styles.optionTextCover}>
    //           <Text style={styles.optionText}>{item.name}</Text>
    //           <Text style={styles.optionText}>{item.price_increment}% price increment</Text>
    //         </View>

    //       </View>
    //       :
    //       <View style={styles.activeCover}>
    //         <View style={styles.iconCircle2} />
    //         <View style={styles.optionTextCover}>
    //           <Text style={styles.optionText2}>{item.name}</Text>
    //           <Text style={styles.optionText2}>{item.price_increment}% price increment</Text>
    //         </View>
    //       </View>
    //     }
    //   </View>

    // </TouchableOpacity>




    
    <Animated.View style={item.id == active && animatedStyles}>

    <TouchableOpacity
          style={[styles.renderItemContainer,
          item.id === active && styles.activeRenderItemContainer]}
          onPress={() => selectUserType(item)}>

        <View style={styles.categoryTitleView}>
            <Text style={styles.categoryTitle}>{item.name}</Text>
           { active && active === item.id &&
                <Text style={styles.categoryDesc}>{item.price_increment}% price increment</Text>
            }
         </View>

        <View >
            {
                active !== item.id
                    ?
                    <Icon name="radio-button-off" size={22} color="#C2C5DD" />
                    :
                    <Icon name="radio-button-on" size={22} color="#3353CB" />
            }

        </View>
    </TouchableOpacity>
</Animated.View>
  );


  return (
  <ScrollView horizontal>
      
              <View style={styles.itemCover}>

                {active ?
                  <FlatList
                    data={options}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={isScrollEnabled}
                  />
                  :
                  <PlaceholderLoader />
                }

        </View>
     </ScrollView> 
  )
};

export default PaymentOption