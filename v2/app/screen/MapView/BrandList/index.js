import React, { useState,useRef, useEffect, useCallback } from "react";
import { SafeAreaView, TouchableOpacity,TextInput, View,Text,Image, FlatList } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { OnboardinBtn } from "@Component2";
import MIcon from "react-native-vector-icons/MaterialIcons";
import Zcon from 'react-native-vector-icons/Feather';
import {data} from "./data"

import styles from "./style";

const BrandBottomSheet = (props) => {
  const [activeId, setActiveId] = useState("")
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState([])

  const selectItem = (item) => {
    setSelected(item.id)
    props.sort(item)
    setActiveId(item?.id)
  }

 

 const setRest = () =>{
  props?.reset()
  }


  useEffect(()=> {
    setResult(data)
    },[])

useEffect(() => {

    if (search?.length) {

      filterResult();

    }
  }, [search?.length]);


  useEffect(() => {

    if (search == "") {
      setResult(data)
    }

  }, [search]);

  const filterResult = () => {

    let searched = data?.filter(val => {

      if (val?.title !== null && val?.title?.toLowerCase().includes(search?.toLowerCase())) {

        return val
      }
    });

    return setResult(searched)

  };


  const ListView = ({ item, index }) => {
    return (
        <View>
          {/* { activeId === item.id ?
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
          } */}

      {/* <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
          <Image style={styles.imageStyle} source={item.img}  />
          <Text style={styles.listText}>{item.title}</Text>
       
        </TouchableOpacity>    */}
         <TouchableOpacity
                style={[styles.renderItemContainer,
                selected == item.id && styles.activeRenderItemContainer]}
                onPress={() => selectItem(item) }>

                <Image style={styles.imageStyle} source={item.img}  />
                <Text style={styles.listText}>{item.title}</Text>
                <View>
                   
                </View>
            </TouchableOpacity>
        </View>  
    )
  };

          
  


  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheet} height={500} radius={20} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >
     
      <View style={styles.bgTitleCover}>
      
    </View>
    
   <View style={styles.cardContainer}>
   <View style={styles.inputCover}>
        <Zcon name="search" size={14} style={styles.searchIcon} color="#767680" />
        <TextInput
            style={styles.inputStyle}
            value={search}
            placeholder='Search'
            placeholderTextColor={"#5A5D72"}
            onChangeText={(text) => setSearch(text)}
        />
     </View>
    <FlatList
        columnWrapperStyle= {{flexWrap: "wrap", justifyContent:'space-around', alignSelf:'center'}}
        showsVerticalScrollIndicator={false}
        numColumns = {2}
        vertical
        data={result}
        renderItem={ListView}
        keyExtractor={item => item.id}
      />
   </View>
   
 

     </BottomSheet>
    </SafeAreaView>
  );
};



export default BrandBottomSheet;