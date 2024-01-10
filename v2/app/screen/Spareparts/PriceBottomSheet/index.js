import React, { useState,useRef, useEffect, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View,Text, FlatList } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
// import { OnboardinBtn } from "@Component2";
import MIcon from "react-native-vector-icons/MaterialIcons";
import {data} from "./data"

import styles from "./style";

const PriceBottomSheet = (props) => {
  const [activeId, setActiveId] = useState('CHEMIST')

  const selectItem = (item) => {
    props.sort(item.type)
    props.objList(item)
    setActiveId(item?.type)
   
  }

 



  const ListView = ({ item, index }) => {
    return (
        <View>
          { activeId === item?.type ?
          <TouchableOpacity key={item.id} onPress={() => selectItem(item) }>
            <View style={styles.cardCoverActive}>
                <Text style={styles.listText}>{item?.type}</Text>
                <MIcon name="check" size={20} color="#3353CB" />
            </View>
          </TouchableOpacity>
          :
            <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
              <View style={styles.cardCover}>
                  <Text style={styles.listText}>{item?.type}</Text>
              </View>
            </TouchableOpacity>
          }
        </View>
    )
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheet} height={350} radius={20} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >
     
   <View style={styles.bgTitleCover}>
    <Text style={styles.caption}>Sort By</Text>

    </View>
  
   <View style={styles.cardContainer}>
  
    <FlatList
        vertical
        data={data}
        renderItem={ListView}
        keyExtractor={item => item.id}
      />
   </View>
   

     </BottomSheet>
    </SafeAreaView>
  );
};



export default PriceBottomSheet;