import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const WalletPlaceholderCard = () => (

    <View>
    <View style={styles.smCardCoverP}>
    <View style={styles.leftCover}>
       
            <View style={styles.iconCoverDebitP}>
                {/* <Icon name="corner-up-left" size={14} color="#D32F2F" /> */}
            </View>
          

        <View style={styles.side}>
            {/* <Text style={styles.fundTitle}>Wallet {item.type === "purchase" ? "Debit" : "Credit"}</Text>
            <Text style={styles.fundDate}>{item.created_at.substring(0, 10).split('-').reverse().join('-')}</Text> */}
        </View>
    </View>
    <View style={styles.leftCoverP}>
        {/* <Text style={styles.fundAmount}> {item.type === "purchase" ? <Text style={{ color: "#D32F2F" }}>-</Text> : <Text style={{ color: "#469D00" }}>+</Text>} ₦{commafy(item.amount)}</Text> */}
    </View>
    </View>
</View>

);

export default WalletPlaceholderCard;