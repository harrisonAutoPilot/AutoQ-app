import React, {useEffect} from 'react';
import {View, Text, Image,FlatList} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { CrossHeader} from "@Component2";
import { trackOrder } from "@Request2/CustomerOrder";
import { cleanTrack } from "@Store2/CustomerOrder";
import styles from './style';
import TrackPlaceholderLoader from './trackPlaceholderLoader'



const OrderStatus = (props) => {


const items = props.route.params.items;


const dispatch = useDispatch();


const { trackOrderStatus, trackOrderList } = useSelector((state) => state.order);


useEffect(() => {

  dispatch(trackOrder({ id: items }));

  return () => dispatch(cleanTrack())

}, [])


const returnBack = () => {

  props.navigation.goBack();

};



const StatusView = ({ item }) => {
  return (
      <View>
         <View style={styles.cardContainer}>
          { item.detail === "Order Pending" ?
        
          <Icon name='checkbox-marked-circle' size={16} color="#106D34" />
          : item.detail === "Order cancelled" ?
          <Icon name='close-circle' size={16} color="red" />
           : item.detail === "Items delivered" ?
           <>
            <View style={styles.dotCover}>
              <Image 
              source={require("@Assets2/image/trackLines.png")}
              style={styles.divideImg}
              />
            </View>
            <Image 
              source={require("@Assets2/image/successPack.png")}
              style={styles.pack}
              />
          
           </>
          :
          <>
              <View style={styles.dotCover}>
             <Image 
              source={require("@Assets2/image/trackLines.png")}
              style={styles.divideImg}
              />
              </View>
             <Icon name='radiobox-blank' size={16} color="#5A5D72" />
          </>
         
          }
        <View style={styles.cardDetails}>
          <Text style={styles.statusText}>{item.detail}</Text>
          <Text style={styles.statusDate}>{new Date(item?.updated_at).toDateString()}</Text>
        </View>
       </View>
      </View>
  )
};



  return (
    <View style={styles.container}>

        <CrossHeader title="Order Status"  onPress={returnBack} />

        <View style={styles.middleContainer}>

        { trackOrderStatus === "idle" || trackOrderStatus === "pending" ?

        <TrackPlaceholderLoader />

        :

        <FlatList
          vertical
          data={trackOrderList.tracks}
          renderItem={StatusView}
          keyExtractor={item => item.id}
        /> 
        
        }

      </View>

    </View>
  );
};

export default OrderStatus;
