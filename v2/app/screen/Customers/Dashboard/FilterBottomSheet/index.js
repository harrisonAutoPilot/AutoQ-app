import React, { useState,useRef, useEffect, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View,Text, FlatList } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { OnboardinBtn } from "@Component2";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {data} from "./data"

import styles from "./style";

const FilterBottomSheet = (props) => {
  const [activeId, setActiveId] = useState('A - Z')

  const selectItem = (item) => {
    props.sort(item.type)
    props.objList(item)
    setActiveId(item?.id)
   
  }
  const apply = () => {
    props.apply(activeId)

   
  }

 



  const ListView = ({ item, index }) => {
    return (
        <View>
          { activeId === item?.id ?
          <TouchableOpacity key={item.id} onPress={() => selectItem(item) }>
            <View style={styles.cardCoverActive}>
                <Text style={styles.listText}>{item?.type}</Text>
                <Icon name="radiobox-marked" size={20} color="rgba(51, 83, 203, 1)" />
            </View>
          </TouchableOpacity>
          :
            <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
              <View style={styles.cardCover}>
                  <Text style={styles.listText}>{item?.type}</Text>
                  <Icon name="radiobox-blank" size={20} color="rgba(118, 118, 128, 1)" />
              </View>
            </TouchableOpacity>
          }
        </View>
    )
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheet} height={320} radius={20} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >
     
   <View style={styles.bgTitleCover}>
    <Text style={styles.caption}>Sort by</Text>

<TouchableOpacity>
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
  <View style={styles.applyCover}>
  <OnboardinBtn
    title="APPLY"
    onPress={apply}
    backgroundColor="#3353CB"
    color="#fff"
    // disabled={disable(props)}
    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
/>
  </View>

     </BottomSheet>
    </SafeAreaView>
  );
};



export default FilterBottomSheet;