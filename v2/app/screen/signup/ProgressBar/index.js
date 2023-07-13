import React, {useState} from 'react';

import {View} from 'react-native';

const ProgressBar = ({
  navigation,
  percentage,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);

  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            
            width: '100%',
            height: 5,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: "rgba(226, 225, 236, 1)",
            borderWidth: 0,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 10,
            height: 5,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor:"rgba(132, 217, 148, 1)",
            position: 'absolute',
            bottom:5
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: 5,
            bottom:1
          }}>
        
        </View>
      </View>
    </View>
  );
};
export default ProgressBar;