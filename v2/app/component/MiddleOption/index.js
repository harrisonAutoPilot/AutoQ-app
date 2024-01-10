import React, {useState, useCallback} from 'react';
import {View, Text,Pressable, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fcon from 'react-native-vector-icons/Feather';
import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';

const MiddleOption = props => {
  const [showRetrieve, setShowRetrieve] = useState(false);


  const CardList = useCallback(({
    title,
    onPress,
  }) => (
    <TouchableOpacity onPress={onPress} >
    <View style={styles.cardCover}>
      <View style={styles.circleCover}>
        <Icon name="person-add-alt" size={18} color="#fff" />
      </View>
      <Text style={styles.cardText}>{title}</Text>
    </View>
    </TouchableOpacity>
  ), []);


  const CardListBottom = useCallback(({
    title,
    onPress,
  }) => (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.cardCoverSm}>
      <View style={styles.circleCoverSm}>
        <Zcon name="calendar-edit" size={18} color="rgba(51, 83, 203, 1)" />
      </View>
      <Text style={styles.cardTextSm}>{title}</Text>
    </View>
    </TouchableOpacity>
  ), []);



  return (
    <Modal
      isVisible={props.visibleMiddle}
      onBackdropPress={props.returnBack}
      onSwipeComplete={() => setShowRetrieve(false)}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      // backdropColor="rgba(194, 197, 221, 3)"
      backdropOpacity={0.7}
      coverScreen={true}>
      <Pressable
        style={styles.outsideModal}
        onPress={event => {
          if (event.target == event.currentTarget) {
            setShowRetrieve(false);
          }
        }}>
        <View style={styles.body5}>
           <CardList 
              title ="Register Customer"
              onPress={props.customerReg}
            />
          <CardListBottom 
              icon="calendar-edit"
              title ="Check In"
              onPress={props.activeCustomer}
            />    
        </View>
        <View style={styles.closeCover}>
          <TouchableOpacity onPress={props.returnBack}>
            <Fcon name="x" size={20} color="rgba(186, 26, 26, 1)" />
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default MiddleOption;
