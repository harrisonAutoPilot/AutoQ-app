import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import BottomSheet from 'react-native-gesture-bottom-sheet';

const CameraOption = props => {
  return (
    <BottomSheet
      hasDraggableIcon
      ref={props.bottomSheet}
      sheetBackgroundColor={'#ffffff'}
      height={Dimensions.get('window').height / 5.3}
      radius={20}
      styles={styles.addStoreBottomSheet}>
      <View style={styles.body}>
        <TouchableOpacity style={styles.mainView} onPress={props.upload}>
          <Image
            source={require('@Assets2/image/photoV2.png')}
            style={styles.smImg}
          />
          <Text style={styles.modaltitle}>Upload Photo</Text>
        </TouchableOpacity>
        <View style={styles.middleLine} />
        <TouchableOpacity style={styles.mainView} onPress={props.camera}>
          <Image
            source={require('@Assets2/image/galaryV2.png')}
            style={styles.smImg}
          />
          <Text style={styles.modaltitle}>Take a picture</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default CameraOption;
