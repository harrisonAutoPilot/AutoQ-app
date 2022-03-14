import React from "react";
import { View, Text } from "react-native";

import styles from "./style";
import { COHeader as Header } from "@Component";
import commafy from "@Helper/Commafy";

const TransactionDetail = (props) => {
    const goBack = () => props.navigation.navigate("Wallet");
    const details = props.route.params;

    return (
        <View style={styles.view}>
            <Header title="Transaction Details"
                onPress={goBack}
                styleView={styles.body} />

            <View style={{marginTop: 5}}>
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
                        <Text style={styles.valueTextOdd2}>{details.description}</Text>
                        :
                        <Text style={styles.valueTextOdd}>{details.description}</Text>}
                </View>
            </View>
        </View>
    )
};

export default TransactionDetail;