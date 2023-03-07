import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getWalletTransaction, getWallet, getLoan } from "@Request/Wallet";
import styles from "./transactionStyle";
import LinearGradient from 'react-native-linear-gradient';
import commafy from "@Helper/Commafy"
import Wallet from "./Wallet";
import Loan from "./Loan";

const Transaction = (props) => {
   
    const dispatch = useDispatch();

    const {wallet } = useSelector((state) => state.wallet);
    const { details} = props;

    const [activeId, setActiveId] = useState(1);

    const showActive = (id) => setActiveId(id);

 



    useEffect(() => {
        const id = details.id
        const no = 1
        const param = {id, no}
        dispatch(getWallet(id))
        dispatch(getLoan(id))
        
        dispatch(getWalletTransaction(param))  
     
    }, []);



    const myBalance = wallet.wallet_balance - (wallet.loan_balance)
    const sign = String(myBalance).charAt(0)
    const myBalance1 = String(myBalance).substring(1)



    const detailsScreen = (item) => {
        props.navigation.navigate("TransactionDetail", {item})

    }
  
    return (
        <View style={styles.main}>
            <LinearGradient
        colors={['#00319D','#FF5733']}
        start={{ x: 0, y: 1}}
        end={{ x: 1, y: 0}}
         style={styles.walletContainer}
            >
         <Image 
        source={require("@Assets/image/wavee.png")}
        style={styles.waveImg}
        />

         <View style={styles.innerCover}>
            {sign && sign === "-" ?
                         <>
             <Text style={styles.walletTitle}>The user owes an amount of</Text>
            <Text style={styles.amountText}>{myBalance ? `₦${commafy(parseInt(myBalance1))}.00` : "0.00"}</Text>
            </>
            :
            <>
            <Text style={styles.walletTitle}>The user has a Wallet Balance of</Text>
            <Text style={styles.amountText}>{myBalance ? `₦${commafy(parseInt(myBalance1))}.00` : "0.00"}</Text>
            </>
                }
   </View>
         </LinearGradient>
      
    


    <View style={styles.bottomContainer}>
           <View style={styles.mainBody}>
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>WALLET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>LOAN</Text>
                    </TouchableOpacity>
                  
                </View>

            </View>
          
           {activeId === 1 ? 
            
            <Wallet
            details={details} 
            detailsScreen={detailsScreen} 
            // cart={cart} 
            props={props}
            navigation={props.navigation}/> 

                :
            <Loan
            details={details} 
            detailsScreen={detailsScreen} 
            // cart={cart} 
            props={props}
            navigation={props.navigation}/>
        }
    


    </View>
       
     
        </View>
    )
};

export default Transaction;