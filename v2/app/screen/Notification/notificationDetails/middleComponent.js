import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';



const MiddleComponent = (props) => {


  return (
    <View style={styles.middleContainer}>
            <View>
              <Text style={styles.titleText}>{props.status}</Text>
            </View>

            <View style={styles.imageCover}>
              { props.status === "Announcement" ?
            <Image 
              source={require("@Assets2/image/speaker.png")}
              style={styles.speakerImg}
              />
              :  props.status === "Order Confirmed" ?
              <Image 
              source={require("@Assets2/image/Frame1.png")}
              style={styles.speakerImg}
              />
              :
              <Image 
              source={require("@Assets2/image/newss.png")}
              style={styles.speakerImg}
              />
  }
            </View>
          </View>
    
  
  );
};

export default MiddleComponent;
