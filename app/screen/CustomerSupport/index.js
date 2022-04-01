import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from "react-native";


import styles from "./style";
import { COHeader as Header } from "@Component";


const CustomerSupport = (props) => {
    const goBack = () => props.navigation.navigate("Home",  { screen: 'HomeScreen' });

  const mobileCall = () => Linking.openURL(`tel:${'07081402414'}`);

  const whatsappMessage = () => {

    let URL = 'whatsapp://send?text=' + 'Hello My Remedial Agent' + '&phone=2347081402414';

    Linking.openURL(URL)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  };


const sendEmail = () => {
  Linking.openURL('mailto:info@remedialhealth.com')
}

    return (
        <View style={styles.view}>
            <Header title="Customer Support" onPress={goBack} styleView={styles.body} />
            <View style={styles.container}>

                <ScrollView
                    indicatorStyle="white"
                    contentContainerStyle={styles.scrollContentContainer}>
                    <View style={styles.bottomCover}>

                        <View style={styles.cardCover}>
                            <View style={styles.locCover}>
                                <View style={styles.locImgCover}>
                                    <Image source={require("@Assets/image/map-pin-fill.png")} style={styles.locImg} />
                                </View>
                                <Text style={styles.locTextTitle}>Location:</Text>
                            </View>
                            <View>
                                <Text style={styles.locText}>Lagos/Ikeja</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.cardCover} onPress={mobileCall}>
                            <View style={styles.locCover}>
                                <View style={styles.locImgCover}>
                                    <Image source={require("@Assets/image/agentPhone.png")} style={styles.locImg} />
                                </View>
                                <Text style={styles.locTextTitle}>Phone:</Text>
                            </View>
                            <View>
                                <Text style={styles.locText}>0708 140 2414</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardCover} onPress={whatsappMessage} >
                            <View style={styles.locCover}>
                                <View style={styles.locImgCover}>
                                    <Image source={require("@Assets/image/agentWhatsapp.png")} style={styles.locImg} />
                                </View>
                                <Text style={styles.locTextTitle}>Whatsapp:</Text>
                            </View>
                            <View>
                                <Text style={styles.locText}>0708 140 2414</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardCover} onPress={sendEmail}>
                            <View style={styles.locCover}>
                                <View style={styles.locImgCover}>
                                    <Image source={require("@Assets/image/agentEmail.png")} style={styles.locImg} />
                                </View>
                                <Text style={styles.locTextTitle}>Email:</Text>
                            </View>
                            <View>
                                <Text style={styles.locText}>info@remedialhealth.com</Text>
                            </View>
                        </TouchableOpacity>

                        
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default CustomerSupport;