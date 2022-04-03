import React from "react";
import { View, Text, Modal,Image } from "react-native";
import styles from "./style";

import {AuthBtn } from "@Component/index";

const Network = () => {

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

        <Image source={require("@Assets/image/WifiSlash.png")} style={styles.wifiImg} />
          <View style={styles.textCover}>
            <Text style={styles.bigText}>No Internet</Text>
            <Text style={styles.smText}>Pls check your network connection</Text>
          </View>

        </View>
        {/* <AuthBtn title="Try Again" style={styles.addressBtn2} /> */}

      </View>
    </Modal>
  )
};

export default Network;