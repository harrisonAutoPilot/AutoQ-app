import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';



const MiddleComponent = (props) => {


  return (
    <View style={styles.middleContainer}>
             <Image 
              source={require("@Assets2/image/multipleImg.png")}
              style={styles.peopleImg}
              />
            <View style={styles.titleCover}>
              <Text style={styles.titleText}>{props.status}</Text>
            </View>

          
          </View>
    
  
  );
};

export default MiddleComponent;
