import React, { useState,useRef, useEffect, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View,Text, FlatList } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { OnboardinBtn } from "@Component2";
import MIcon from "react-native-vector-icons/MaterialIcons";
import {data} from "./data"

import styles from "./style";

const SortBottomSheet = (props) => {
  const [activeId, setActiveId] = useState("")

  // const selectItem = (item) => {
  //   props.sort(item?.id)
  //   setActiveId(item?.id)
  // }

 

 const setRest = () =>{
  props?.reset()
  }

  const ListView = ({ item, index }) => {
    return (
        <View>
          { activeId === item.id ?
          <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
            <View style={styles.cardCoverActive}>
                <Text style={styles.listText}>{item.title}</Text>
                <MIcon name="check" size={20} color="#3353CB" />
            </View>
          </TouchableOpacity>
          :
            <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
              <View style={styles.cardCover}>
                  <Text style={styles.listText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          }
        </View>
    )
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheet} height={370} radius={20} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >
     
   <View style={styles.bgTitleCover}>
    <Text style={styles.caption}>Sort By</Text>

    <TouchableOpacity onPress={setRest}>
      <Text style={styles.resetText}>Reset</Text>
    </TouchableOpacity>
    </View>
  
   <View style={styles.cardContainer}>
  
    <FlatList
        vertical
        data={data}
        renderItem={ListView}
        keyExtractor={item => item.id}
      />
   </View>
   
   <View style={styles.btnCover}>
   <OnboardinBtn
        title="Apply"
        backgroundColor="#3353CB"
        color="#fff"
        onPress={props.apply}
        disabled={activeId === ""}
        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
    />

   </View>

     </BottomSheet>
    </SafeAreaView>
  );
};



export default SortBottomSheet;