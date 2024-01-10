import 'react-native-gesture-handler';
import React, { useState,useEffect,useCallback, useMemo } from "react";
import { View, Text,TouchableOpacity,Keyboard,TextInput,FlatList,SafeAreaView,TouchableWithoutFeedback, ScrollView} from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetView, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import {useSelector, useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/MaterialIcons";
import MIcon from "react-native-vector-icons/AntDesign";
import Animated, {
    Easing, Extrapolate,
    interpolate,
    withSpring,
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import data from './data';


import styles from './style';


import BottomSheet from "react-native-gesture-bottom-sheet";


const AreaSheet = (props) => {
const dispatch = useDispatch();
const [search, setSearch] = useState("");
const [result, setResult] = useState([]);
const offset = useSharedValue(0);


const [selected, setSelected] = useState(null);

const [progress, setProgress] = useState(0);


const goBack = () => props.navigation.goBack();


const selectCategory = (id) => {

    setSelected(id);

    bounce()

};

const dismissKeyboard = () => Keyboard.dismiss();

const bounce = () => {

    offset.value = withSpring(0.1, {}, (finished) => {
        if (finished) {
            offset.value = withSpring(0)
        }

    });
}

useEffect(() => {

  if (search.length) {

    filterResult();

  }

}, [search.length]);


const filterResult = () => {

  let searched = data?.filter(val => {

    if (val?.title !== null && val?.title.toLowerCase().includes(search.toLowerCase())) {

      return val
    }
  });

  return setResult(searched)

};



const animatedStyles = useAnimatedStyle(() => {
    return {
        transform: [
            {
                translateY: withSpring(offset.value * 255),
            },
        ],
    };
});




const RenderItem = ({ item }) => {

  return (
      <View>
          
          <TouchableOpacity
              style={[styles.renderItemContainer,
              selected == item.id && styles.activeRenderItemContainer]}
              onPress={() => selectCategory(item.id)}>

              <View style={styles.categoryTitleView}>
                  <Text style={styles.categoryTitle}>{item.title}</Text>

                  {selected === item.id &&

                      <Text style={styles.categoryDesc}>{item.title} and its environs</Text>
                  }
              </View>

              <View>
                  {
                      selected !== item.id
                          ?
                          <Icon name="location-history" size={22} color="#000" />
                          :
                          <Icon name="location-history" size={22} color="#000" />
                  }

              </View>
          </TouchableOpacity>
      </View>

  )

}





    return (
  <SafeAreaView>
                 <BottomSheet hasDraggableIcon sheetBackgroundColor="#fff" ref={props.bottomSheetArea} height={500} >

                   <View style={styles.sheetContainer}>
                   <View style={styles.signupMiniTitleContainer}>
                      <Text style={styles.signupTitle}>My Cover Areas</Text>
                      <Text style={styles.signupDesc}>Please note that services outside my cover area will cost more than usual</Text>
                   </View>
                   <View style={styles.inputCover}>
                        <Icon name="search" size={14} style={styles.searchIcon} color="#767680" />
                        <TextInput
                          style={styles.inputStyle}
                          value={search}
                          placeholder='Search'
                          placeholderTextColor={"#5A5D72"}
                          onChangeText={(text) => setSearch(text)}
                        />
                      </View>
                      <TouchableWithoutFeedback onPress={dismissKeyboard}>
                   <View style={styles.listContainer}>

                 
                      <FlatList
                            data={!result.length || search == "" ? data : result }
                            renderItem={RenderItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                   
                    </View>
                    </TouchableWithoutFeedback>
                </View>

                </BottomSheet>
</SafeAreaView>
    
    
      
    )
};

export default AreaSheet;