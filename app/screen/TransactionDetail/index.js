import React from "react";
import { View, Text } from "react-native";

import styles from "./style";
import { COHeader as Header } from "@Component";

const TransactionDetail = (props) => {
    const goBack = () => props.navigation.goBack();
    const details = props.route.params.item;
    
    const id = props.route.params.id;

    console.log("the trans type", id)
    

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
                    {id === 1 ?
                        <>
                    {details.type === "purchase" || details.type === "repay" ?
                   
                        <Text style={styles.valueTextOdd2}>₦{commafy(details.amount)}</Text>
                        :
                        <Text style={styles.valueTextOdd}>₦{commafy(details.amount)}</Text>
                   
                    
                        }
                        </>
                        :
                        <>
                    {details.type === "purchase" || details.type === "repay" ?
                   
                        <Text style={styles.valueTextOdd}>₦{commafy(details.amount)}</Text>
                        :
                        <Text style={styles.valueTextOdd2}>₦{commafy(details.amount)}</Text>
                   
                    
                        }
                        </>
                    }
                </View>
                <View style={styles.cardCover}>
                    <Text style={styles.titleText}>Transaction Type: </Text>
                        {id === 1 ?
                        <>
                        {details.type === "purchase" || details.type === "repay" ?
                        <Text style={styles.valueTextOdd2}> Wallet Debit</Text>
                        :
                        <Text style={styles.valueTextOdd}>Wallet Credit</Text>}
                        </>
                        :
                        <>
                        {details.type === "purchase" || details.type === "repay" ?
                        <Text style={styles.valueTextOdd}>Loan Debit</Text>
                        :
                        <Text style={styles.valueTextOdd2}>Loan Credit</Text>}
                        </>
                        }

                    
                </View>

                <View style={styles.oddCover}>
                
                    <Text style={styles.titleText}>Description: </Text>
                    {id === 1 ?
                    <>
                    {details.type === "purchase" || details.type === "repay" ?
                        <Text style={styles.valueTextOdd2}>{details.description}</Text>
                        :
                        <Text style={styles.valueTextOdd}>{details.description}</Text>
                    }
                    </>
                    :
                    <>
                    {details.type === "purchase" || details.type === "repay" ?
                        <Text style={styles.valueTextOdd}>{details.description}</Text>
                        :
                        <Text style={styles.valueTextOdd2}>{details.description}</Text>
                    }
                    </>

                }

                </View>
            </View>
        </View>
    )
};

export default TransactionDetail;