import React, { useState, useRef } from 'react';
import { View, Text,Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './style'
import { completed } from '../../../util/completed'
import CompletedDetail from '../../../components/CompletedDetail';
import BriefSuccess from '../../../components/BriefSuccess';

const Completed= () => {
  const [showRetrieve, setShowRetrieve] = useState(false);
  const [showRetrieve1, setShowRetrieve1] = useState(false);
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(1);

  
  const showActive = (id) => setActiveId(id)

  const request = (item) => {
    setSearch(item);
   setShowRetrieve(true)
  
  }

  const closeBrief =() => {
    setShowRetrieve(false)
    setShowRetrieve1(true)
  }

  const ListView = ({ item }) => (

    <View style={styles.serviceList}>
    <View style={styles.miniCover}>
      <View style={styles.calendarCover}>
      <Image source={require("../../../assets/calendarB.png")} style={styles.calendarImg} />
      </View>
      <View style={styles.contentCover}>
        <Text style={styles.serviceText}>{item.request}</Text>
        <Text style={styles.serviceDText}>{item.title}. {item.name}</Text>
      </View>
      <View style={styles.priceCover}>
        <Text style={styles.serviceText}>Completed </Text>
      </View>
    </View>
      <TouchableOpacity style={styles.requestBtn} onPress={() => request(item)}>
        <Text style={styles.requestText}>Job Details</Text>
      </TouchableOpacity>
    </View>
  );

 
  return (
    <View style={styles.center}>
        <View style={styles.view}>
           
     

      <FlatList
        data={completed}
        renderItem={ListView}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={<View style={{ height: 50 }} />}
      // ListEmptyComponent={EmptyStore}
      />
</View>
       <CompletedDetail
        visibleRetrieve={showRetrieve}
        returnBack={() => setShowRetrieve(false)}
        title="Completed job details"
        message={search}
        submit={closeBrief}
      />
      <BriefSuccess
      visibleRetrieve1={showRetrieve1}
      returnBack1={() => setShowRetrieve1(false)}
      title="COMPLETED REQUEST"
      message="Thank you for your request. Its a pleasure serving you! "
      submit={() => setShowRetrieve1(false)}
      />       
    </View>
    
  ); 
};


export default Completed;