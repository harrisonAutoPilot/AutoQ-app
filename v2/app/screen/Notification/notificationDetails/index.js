import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import HeaderComponent from "./headerComponent"
import { getReadNotification, getNotification } from "@Request2/Notification";
import MiddleComponent from "./middleComponent"
import styles from './style';


const NotificationDetails = (props) => {
  const dispatch = useDispatch();
  const item = props.route.params.item

  const { user } = useSelector((state) => state.auth);

  const { readStatus } = useSelector((state) => state.notification);

  const returnBack = () =>  props.navigation.goBack()


  useEffect(() => {
    dispatch(getReadNotification(item.id))

  }, []);


  useEffect(() => {
    if(readStatus === "success"){
      dispatch(getNotification())
    }

  }, [readStatus]);





  return (
    <View>
        <LinearGradient
        colors={['#ffffff','#e6e8ff']}
        start={{ x: 0, y: 0}}
        end={{ x: 0, y: 1}}
         style={styles.mainContainer}
            >
     
          <HeaderComponent onPress={returnBack} />

          <MiddleComponent status={item.title} />
         
    
          <View style={styles.contentContainer}>
            <View style={styles.contentHeader}>
              <Text style={styles.contentHeaderText}>Hi{user?.name},</Text>
            </View>
            <View style={styles.contentBodyCover}>
            <Text style={styles.contentBodyText}>
             {item.description}
            </Text>

<Text style={styles.contentBodyTextFooter}>The Remedial Family.</Text>
            </View>

          </View>





      </LinearGradient>
    </View>
  );
};

export default NotificationDetails;
