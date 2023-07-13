import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { TransactionHeader} from "@Component2";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';
import style from './style';


const TransactionDetails = (props, navigation) => {
  const details = props.route.params.item;
const [id, setId] = useState(null);

const [activeId, setActiveId] = useState("Wema bank");

const returnBack = () => {
  props.navigation.goBack()
}





const showActive = (id) => {

  setActiveId(id);

};

console.log("the items", details)


  return (
    <View style={styles.container}>
        <TransactionHeader title="Transaction Details"  onPress={returnBack} />
      <View style={styles.cover}>
        <View style={styles.midCard}>
              <Image
                source={require('@Assets2/image/creditIcon.png')}
                style={styles.creditImg}
          />
          <View style={styles.cardTop}>
            <Text style={styles.price}>₦20,000</Text>
            <Text style={styles.type}>CREDIT</Text>
          </View>
          <View style={styles.cardTopMid}>
            <Text style={styles.transCaption}>Transaction ID</Text>
            <Text style={styles.transId}>2841782754</Text>
          </View>
          <View style={styles.cardMid}>
            <Text style={styles.transCaption}>Date of Transaction</Text>
            <Text style={styles.transId}>11/10/2022 09:12</Text>
          </View>
          <View style={styles.cardTopMid}>
            <Text style={styles.transCaption}>Description</Text>
            <Text style={styles.transId}>Wallet Credited with ₦20,000</Text>
          </View>
        </View>

        <View style={styles.footer}>
        <Image
          source={require('@Assets2/image/sms_failed.png')}
          style={styles.smsImg}
          />
          <View style={style.midContent}>
            <Text style={styles.reportTop}>Report Transaction</Text>
            <Text style={styles.reportDown}>Report an issue with this payment</Text>
          </View>
          <Image
          source={require('@Assets2/image/chevron_right.png')}
          style={styles.rightImg}
          />
          
        </View>
     </View>
    </View>
  );
};

export default TransactionDetails;
