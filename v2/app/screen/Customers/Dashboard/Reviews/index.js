import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './style'
import { review } from '../../../util/review'

const Reviews = () => {


  const ListView = ({ item }) => (
    <View style={styles.serviceList}>
    <View style={styles.miniCover}>
    <View style={styles.nameCover}>
        <Text style={styles.serviceDText1}>{item.name}</Text>
        <Text style={styles.serviceDText}>{item.date}</Text>

      </View>
      <View style={styles.reviewCover}>
        <Text style={styles.serviceText}>
         {item.review}
        </Text>
      </View>
    </View>
     
    </View>
  );


  return (
    <View style={styles.center}>

      <FlatList
        data={review}
        renderItem={ListView}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={<View style={{ height: 50 }} />}
      // ListEmptyComponent={EmptyStore}
      />
    </View>
  );
};


export default Reviews;