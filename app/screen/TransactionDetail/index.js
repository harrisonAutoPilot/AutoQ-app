import React from "react";
import { View, Text} from "react-native";

import styles from "./style";
import NavHeader from "@Component/NavHeader";
import commafy from "@Helper/commafy";

const TransactionDetail = (props) => {
    const goBack = () => props.navigation.navigate("Wallet");
    const details = props.route.params;

    return (
        <View style={styles.view}>
            <NavHeader title="Transaction Details"
                onPress={goBack} 
                styleView={styles.body} 
                styles={styles.headerText}
                statusBar="#fff" />
          
            <View>
        <View style={styles.cardCover}>
            <Text style={styles.titleText}>Date: </Text>
             <Text style={styles.valueText}>{new Date(details.created_at).toDateString()}</Text>
        </View>
          <View style={styles.oddCover}>
            <Text style={styles.titleText}>Amount: </Text>
            {details.type === "purchase" ? 
             <Text style={styles.valueTextOdd2}>₦{commafy(details.amount)}</Text>
             :
             <Text style={styles.valueTextOdd}>₦{commafy(details.amount)}</Text>}
        </View>
        <View style={styles.cardCover}>
            <Text style={styles.titleText}>Transaction Type: </Text>
           {details.type === "purchase" ? 
             <Text style={styles.valueTextOdd2}>Wallet Debit</Text>
             :
             <Text style={styles.valueTextOdd}>Wallet {details.type === "purchase" ? "Debit" : "Credit"}</Text>}
        </View>

          <View style={styles.oddCover}>
          <Text style={styles.titleText}>Description: </Text>
          {details.type === "purchase" ? 
             <Text style={styles.valueTextOdd2}>Wallet debited with ₦50,000 </Text>
             :
             <Text style={styles.valueTextOdd}>Wallet credited with ₦50,000 </Text>}
        </View>
            </View>
        </View>
    )
};

export default TransactionDetail;