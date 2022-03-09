import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./styles";

const WalletCard = (props) => {
    return (
        <View>

            <LinearGradient
                colors={['#7CCF24', '#BEECE5']}
                style={styles.container}
                start={{ x:0.3, y:-1}}
                end={{ x: 0.3, y: 0.6}}
               >
            <Image source={require("@Assets/image/wave.png")} style={styles.waveImg} /> 
                <View style={styles.header}>
                  <View style={styles.cardInnerCover}>
                       <View style={styles.cardTop}>
                         <Text style={styles.walletTilte}>Wallet Balance</Text>
                         <Text style={styles.walletAmount}><Text style={styles.smNaira}>₦</Text>{props.walletAmount}</Text>
                      </View>

                       
                      {/* <TouchableOpacity style={styles.midBtn} onPress={props.fundWallet}>
                       
                       <View>
                       <Text style={styles.plusTitle}>Withdraw Funds</Text>
                       </View>

                      </TouchableOpacity> */}
                  </View> 
                    {props.children}
                </View>
            </LinearGradient>
        </View>
    )
};

export default WalletCard;