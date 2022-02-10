import React from "react";
import {StatusBar, View, SafeAreaView, Text, Image, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";

const LoanCard = (props) => {
    return (
        <View>
             
            <LinearGradient
                colors={['#2a79f5', '#0f2547']}
                style={styles.container}
                start={{ x: 0, y: 0.4}}
                end={{ x: 1, y: 0}}
                style={props.mainBody}
               >
            <Image source={require("@Assets/image/wave.png")} style={styles.waveImg} /> 
                <View style={styles.header}>
                  <View style={styles.cardInnerCover}>
                       <View>
                         <Text style={styles.walletTilte}>Loan Balance</Text>
                         <Text style={styles.walletAmount}>₦{props.loanAmount}</Text>
                      </View>

                       <View>
                         <Text style={styles.walletTilte}>Unpaid Loan</Text>
                         <Text style={styles.walletAmount}>₦{props.unpaidLoan}</Text>
                      </View>
                      <TouchableOpacity style={styles.midBtnLoan} onPress={props.applyForLoan}>
                      
                       <View>
                       <Text style={styles.plusTitleLoan}>Apply for a Loan</Text>
                       </View>

                      </TouchableOpacity>
                  </View> 
                    {props.children}
                </View>
            </LinearGradient>
        </View>
    )
};

export default LoanCard;