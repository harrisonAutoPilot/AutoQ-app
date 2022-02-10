import React, { useState } from "react";
import { View, Text, Linking, Image, TouchableOpacity, Alert, FlatList } from "react-native";
import styles from "./style";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';


import NavHeader from "@Component/NavHeader";

const MyRemedialAgent = (props) => {

  const [errMsg, setErrMsg] = useState("");

  const { status, errors } = useSelector((state) => state.auth);

  const goBack = () => props.navigation.navigate("Home");

  const mobileCall = () => Linking.openURL(`tel:${'08120102020'}`);

  const whatsappMessage = () => {

    // Needs to be implemented
    let URL = 'whatsapp://send?text=' + 'Hello My Remedial Agent' + '&phone=2348072021831';

    Linking.openURL(URL)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  };


  // const ListView = ({ item }) => (

  //   <TouchableOpacity onPress={item.route}>
  //     <View style={[styles.midCard, styles.elevation]}>
  //       <View style={styles.cover}>
  //         <View style={styles.phoneCover}>
  //           <Image source={item.img} style={styles.phoneImg} />
  //           <Text style={styles.phoneTitle}>{item.title}</Text>
  //         </View>

  //         <View>
  //           <Text style={styles.phoneTextOne}>{item.phone}</Text>
  //         </View>

  //       </View>
  //     </View>
  //   </TouchableOpacity>

  // )


  const sendEmail = () => {
    Linking.openURL('mailto:johnkabiru@remedial.health')
  }


  return (
    <View style={styles.main}>
      <NavHeader title="My Remedial Agent" onPress={goBack} styleView={styles.body} styles={styles.headerText} statusBar="#fff" />
      <View style={styles.infoContainer}>
        <View style={styles.avatarCover}>
          <Image source={require("@Assets/image/sds.jpeg")} style={styles.agentImg} />
        </View>
        <View style={styles.nameCover}>
          <Text style={styles.agentNameText}> John Kabiru </Text>
        </View>

        <View style={styles.agentIdCover}>

          <Text style={styles.agentIdText}>RH/AG/002 - Registered Agent</Text>
        </View>

      </View>

      <View style={styles.bottomCover} >


        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          ListEmptyComponent={ListEmptyComponent}
          renderItem={ListView}
          columnWrapperStyle={styles.column}

        /> */}


        <TouchableOpacity onPress={mobileCall} >
          <View style={[styles.midCard, styles.elevation]}>
            <View style={styles.cover}>
              <View style={styles.phoneCover}>
               <Icon name="phone" color="#7485FF" size={35} style={styles.whatsappImg} />
                <Text style={styles.phoneTitle}>Phone:</Text>
              </View>

              <View>
                <Text style={styles.phoneTextOne}>08120102020</Text>
                <Text style={styles.italic}>Tap to call</Text>
              </View>

            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={whatsappMessage} >
          <View style={[styles.midCard, styles.elevation]}>
            <View style={styles.cover}>
              <View style={styles.phoneCover}>
              <FIcon name="whatsapp" color="#4CAF50" size={35} style={styles.whatsappImg} />
               {/* <Image source={require("@Assets/image/whatsapp.png")}  />*/}
                <Text style={styles.phoneTitle}>Whatsapp:</Text>

              </View>

              <View>
                <Text style={styles.phoneTextOne}>09010102020</Text>
                <Text style={styles.italic}>Tap to chat</Text>
              </View>

            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.midCard, styles.elevation]} onPress={sendEmail}>
          <View style={styles.cover}>
            <View style={styles.phoneCover}>
             <FIcon name="email-open-outline" color="#D32F2F" size={35} style={styles.whatsappImg} />
              <Text style={styles.phoneTitle}>Email:</Text>
            </View>
            <View style={styles.miniCover}>
              <Text style={styles.phoneTextOne}>johnkabiru@remedial.health</Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default MyRemedialAgent;