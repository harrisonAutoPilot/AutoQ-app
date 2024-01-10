import React, { useState, useRef } from 'react';
import { View, Text,Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './style'
import { pending } from '../../../util/pending'
import PendingDetail from '../../../components/PendingDetail';
import BriefSuccess from '../../../components/BriefSuccess';

const Pending = () => {
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
      <Image source={require("../../../assets/calendarZ.png")} style={styles.calendarImg} />
      </View>
      <View style={styles.contentCover}>
        <Text style={styles.serviceText}>{item.request}</Text>
        <Text style={styles.serviceDText}>{item.title}. {item.name}</Text>
      </View>
      <View style={styles.priceCover}>
        <Text style={styles.serviceText}>{item.duration}</Text>
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
        data={pending}
        renderItem={ListView}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={<View style={{ height: 50 }} />}
      // ListEmptyComponent={EmptyStore}
      />
</View>
       <PendingDetail
        visibleRetrieve={showRetrieve}
        returnBack={() => setShowRetrieve(false)}
        title="Pending job details"
        message={search}
        submit={closeBrief}
      />
      <BriefSuccess
      visibleRetrieve1={showRetrieve1}
      returnBack1={() => setShowRetrieve1(false)}
      title="PENDING REQUEST"
      message="Please be patient as you job request is yet to be completed "
      submit={() => setShowRetrieve1(false)}
      />       
    </View>
    
  ); 
};


export default Pending;