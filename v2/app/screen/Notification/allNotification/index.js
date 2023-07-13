import React, { useRef,useEffect } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import styles from './style';
import EmptyNotification from "../emptyNotification"
import NotificationPlaceholderLoader from "../NotificationPlaceholderLoader"
import DetailBottomSheet from '../detailBottomSheet';
import { getNotification } from "@Request2/Notification";

const AllNotification = ({props}) => {
  const dispatch = useDispatch();
 const {notification, status} = useSelector(state => state.notification);
  
  const bottomSheetRef = useRef()
  const details = item => {
   props.navigation.navigate('NotificationDetails', {item});
    // bottomSheetRef.current?.present()

  };

  const closeBottomSheet = () =>{
    bottomSheetRef.current?.close()
  }

  useEffect(() => {
    dispatch(getNotification());
}, []);

  console.log("the noteeee", notification)

  const ListView = props => {

    const item = props.item;

    return (
      <View>
        {item.title === 'Announcement' ? (
          <TouchableOpacity onPress={() => details(item)}>
            <View style={styles.cardCover}>
              <View style={styles.leftCover}>
                <Image
                  source={require('@Assets2/image/campaign.png')}
                  style={styles.iconImg2}
                />
              </View>
              <View style={styles.rightCover}>
                <View>
                  <Text style={styles.typeText}>Announcement</Text>
                  <Text style={styles.subText}>Subhead</Text>
                </View>

                <Text style={styles.dateText}>{moment(item?.updated_at).fromNow()}</Text>
              </View>
            </View>
          </TouchableOpacity>
          
        ) : item.title === 'News' ? (
          <TouchableOpacity onPress={() => details(item)}>
            <View style={styles.cardCover}>
              <View style={styles.leftCover}>
                <Image
                  source={require('@Assets2/image/receipt_long.png')}
                  style={styles.iconImg}
                />
              </View>
              <View style={styles.rightCover}>
                <View>
                  <Text style={styles.typeText}>News</Text>
                  <Text style={styles.dateText}>Subhead</Text>
                </View>

                <Text style={styles.dateText}>{moment(item?.updated_at).fromNow()}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => details(item)}>
            <View style={styles.cardCover}>
              <View style={styles.leftCover}>
                <Image
                  source={require('@Assets2/image/package.png')}
                  style={styles.iconImg}
                />
              </View>
              <View style={styles.rightCover}>
                <View>
                  <Text style={styles.typeText}>{item.title}</Text>
                  <Text style={styles.dateText}>Subhead</Text>
                </View>

                <Text style={styles.dateText}>{moment(item?.updated_at).fromNow()}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.miniListContainer}>

      { status === "pending" || status === "idle" ?

      <NotificationPlaceholderLoader />

      :

      <FlatList
        showsVerticalScrollIndicator={false}
        vertical
        scrollEnabled={true}
        data={notification.notifications}
        keyExtractor={item => item.id}
        renderItem={ListView}
        ListEmptyComponent={EmptyNotification}
      />

      }

  
     <DetailBottomSheet 
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={() => closeBottomSheet()}
        redirect={() => props.navigation.navigate("TeamSuccess")} 
      />
  
    </View>
  );
};

export default AllNotification;
