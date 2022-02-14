import React from "react";
import {StatusBar, View, SafeAreaView, Text, Image, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";

const WalletCard = (props) => {
    return (
        <View>
             
            <LinearGradient
                colors={['#b4e87d', '#f3fbe9']}
                style={styles.container}
                start={{ x:0, y: 0}}
                end={{ x: 1, y: 2}}
                style={props.mainBody}
               >
            <Image source={require("@Assets/image/wave.png")} style={styles.waveImg} /> 
                <View style={styles.header}>
                  <View style={styles.cardInnerCover}>
                       <View style={styles.cardTop}>
                         <Text style={styles.walletTilte}>Wallet Balance</Text>
                         <Text style={styles.walletAmount}>₦{props.walletAmount}</Text>
                      </View>

                       
                      <TouchableOpacity style={styles.midBtn} onPress={props.fundWallet}>
                       
                       <View>
                       <Text style={styles.plusTitle}>Withdraw Funds</Text>
                       </View>

                      </TouchableOpacity>
                  </View> 
                    {props.children}
                </View>
            </LinearGradient>
        </View>
    )
};

export default WalletCard;