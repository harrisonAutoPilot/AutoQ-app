import React from 'react';
import {View,Text, Image} from 'react-native';
import styles from './style';



const EmptyStore = () => {


  return (
    <View style={styles.emptyContainer}>
     <View>
     <Image 
          source={require("@Assets2/image/store.png")}
          style={styles.storeImg}
          />
         
     </View>
     <View style={styles.emptyTextCover}>
            <Text style={styles.emptyBgText}>No Stores</Text>
            <Text style={styles.emptySmText}>You have no item in your order yet</Text>
          </View>
    </View>
  
  );
};

export default EmptyStore;
