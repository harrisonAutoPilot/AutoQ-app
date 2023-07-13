import React from 'react';
import { View, Text, Linking, Image, TouchableOpacity, Alert, FlatList } from "react-native";
import { TransactionHeader } from "@Component2";


import styles from './style';
import { data } from "./data"


const ContactSupport = (props) => {


  const mobileCall = () => Linking.openURL(`tel:${'07081402414'}`);

  const whatsappMessage = () => {

    // Needs to be implemented
    let URL = 'whatsapp://send?text=' + 'Hello' + '&phone=2347081402414';

    Linking.openURL(URL)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  };


  const sendEmail = () => {

    Linking.openURL('mailto:info@remedialhealth.com');

  }


  const route = (item) => {

    if (item.route === "mobileCall") {

      mobileCall();

    } else if (item.route === "whatsappMessage") {

      whatsappMessage();

    } else {

      sendEmail();

    }
  }
  

  const ContactList = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => route(item)}>
        <View style={styles.card}>
          <View style={styles.leftCover}>
            <View style={styles.imgCover}>
              <Image
                source={item.img}
                style={styles.img}
              />
            </View>
            <View style={styles.contentCover}>
              <Text style={styles.bgText}>{item.title}</Text>
              <Text style={styles.smText}>{item.desc}</Text>
            </View>
          </View>
          <View style={styles.arrowCover}>
            <Image
              source={require("@Assets2/image/rightArrow.png")}
              style={styles.rightImg}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const returnBack = () => {

    props.navigation.goBack();

  };


  return (
    <View style={styles.container}>

      <TransactionHeader title="Contact Support" onPress={returnBack} />

      <FlatList
        showsVerticalScrollIndicator={false}
        vertical
        data={data}
        keyExtractor={item => item.id}
        renderItem={ContactList}
      />

    </View>
  );
};

export default ContactSupport;
