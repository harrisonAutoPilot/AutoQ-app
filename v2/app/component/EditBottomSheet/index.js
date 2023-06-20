import React, { useState,useRef, useEffect, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View,Text, FlatList } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {data} from "./data"

import styles from "./style";

const EditBottomSheet = (props) => {
  const bottomSheet = useRef();
  const [activeId, setActiveId] = useState("")

  const selectItem = (item) => {
   if (item.route === "pin"){
    props.pin()
   }else if (item.route === "edit"){
    props.edit()
   }else {
    props.delete()
   }
  }


  const ListView = ({ item, index }) => {
    return (
        <View>
          { activeId === item.id ?
          <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
            <View style={styles.cardCoverActive}>
                <Text style={styles.listText}>{item.title}</Text>
                <MIcon name={item.icon} size={20} color={item.color} />
            </View>
          </TouchableOpacity>
          :
            <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
              <View style={styles.cardCover}>
                  <View style={styles.iconCover}>
                  <MIcon name={item.icon} size={20} color={item.color} />
                  </View>
                  <Text style={styles.listText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          }
        </View>
    )
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheet} height={240} radius={20} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >  
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



export default EditBottomSheet;