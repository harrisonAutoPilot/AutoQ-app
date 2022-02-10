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
                colors={['#3858CF', '#cc6666']}
                style={styles.container}
                start={{ x: 0, y: 1}}
                end={{ x: 0.2, y: 1.9}}
                style={props.mainBody}
               >
            <Image source={require("@Assets/image/wave.png")} style={styles.waveImg} /> 
                <View style={styles.header}>
                  <View style={styles.cardInnerCover}>
                       <View>
                         <Text style={styles.walletTilte}>Wallet Balance</Text>
                         <Text style={styles.walletAmount}>₦{props.walletAmount}</Text>
                      </View>

                       <View>
                         <Text style={styles.walletTilte}>Unpaid Loan</Text>
                         <Text style={styles.walletAmount}>₦{props.unpainLoan}</Text>
                      </View>
                      <TouchableOpacity style={styles.midBtn} onPress={props.fundWallet}>
                       <Icon name="plus" size={16} color="#fff" />
                       <View>
                       <Text style={styles.plusTitle}>Fund Wallet</Text>
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