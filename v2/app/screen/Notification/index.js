import React, { useState } from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

import { NotificationHeader } from '@Component2';
import styles from './style';
import AllNotification from './allNotification';
import ReadNotification from './readNotification'
import UnReadNotification from './unReadNotification'


const Notification = (props, navigation) => {

  const [activeId, setActiveId] = useState(1);


  const showActive = id => setActiveId(id);


  const returnBack = () => {

    props.navigation.goBack();
    
  };

  return (
    <View style={styles.container}>

      <NotificationHeader title="Notification" onPress={returnBack} />

      <View>
       
        <View style={styles.tabContainer}>

        <View style={styles.subHeader}>

        <TouchableOpacity style={[ activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader]}
            onPress={() => showActive(1)}>
            <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText ]}>
            ALL
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[ activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader]}
            onPress={() => showActive(2)}>
            <Text style={[ activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText ]}>
            UNREAD
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[ activeId === 3 ? styles.activeSubHeader : styles.inActiveSubHeader]}
            onPress={() => showActive(3)}>
            <Text style={[ activeId === 3 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText ]}>
            READ
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        
        <View>
          {activeId === 1 ? (
            <AllNotification props={props} navigation={navigation} />
          ) : activeId === 2 ? (
            <UnReadNotification props={props} navigation={navigation} />
          ):(
            <ReadNotification props={props} navigation={navigation} />
          )}
        </View>
      </View>
      
    </View>
  );
};

export default Notification;
