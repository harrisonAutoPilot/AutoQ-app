import React from "react";
import { View, Text, Modal,Image, Linking} from "react-native";
import styles from "./style";

import { AuthBtn } from "@Component";


const SoftUpdate = () => {

  const redirectToPlaystore = () => {
    const URL = "https://play.google.com/store/apps/details?id=com.rhmagent";
    Linking.openURL(URL)
      .then(() => {
        console.log('Link Opened');
      })
      .catch(() => {
        Alert.alert('An error occurred');
      });
    }


  return (
    <Modal
      isVisible={true}
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      backdropColor="#000"
      backdropOpacity={0.8}
      coverScreen={true}
    >
      <View style={styles.main}>
        <View style={styles.innerCover}>

        <Image source={require("@Assets/image/rh_logo.png")} style={styles.wifiImg} />
          <View style={styles.textCover}>
            <Text style={styles.bigText}>A new version is available</Text>
           <View style={styles.smCover}>
           <Text style={styles.smText}>Performance and stability improvement</Text>
           </View>
          </View>

        </View>
       
        <AuthBtn title="UPDATE" style={styles.addressBtn2} styles={styles.btnText}  onPress={redirectToPlaystore}/>
        <Text style={styles.descText}>To use this app, download the latest version</Text>
        {/* <Text style={styles.descText}>Download size: 1.4MB</Text> */}

      </View>

     {/* <View style={styles.googleCover}>
     <Image source={require("@Assets/image/google.webp")} style={styles.googleImg} />
     </View> */}
    </Modal>
  )
};

export default SoftUpdate;