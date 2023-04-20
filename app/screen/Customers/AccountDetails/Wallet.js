import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Image, TouchableOpacity,RefreshControl, FlatList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { getWalletTransaction, getWallet } from "@Request/Wallet";
import { cleanUpTransaction } from "@Store/Wallet";
import styles from "./walletStyle";
import Loader from "@Screen/Loader";
import TransactionCardPlaceholder from "./transactionPlaceholder";
import EmptyTransaction from "./emptyTransaction"
import commafy from "@Helper/Commafy"
import Modal from "./SortBy"


const Wallet = (props) => {
   
    const dispatch = useDispatch();
    const {status, walletTrans,walletItems, wallet } = useSelector((state) => state.wallet);
    const { details, name } = props;


    const [err, setErr] = useState("");

    const [refreshing, setRefreshing] = useState(false);

    const [loader, setLoader] = useState(false);

    const [trackLoaded, setTrackLoaded] = useState(false);

    const flatListRef = React.useRef()

    const bottomSheetS = useRef();

    const [showModal2, setShowModal2] = useState(false);

    const [result, setResult] = useState([]);

    const sortWallet = () =>{
        bottomSheetS.current.show()
    }
    
    const closeSheetSort = () => {
        bottomSheetS.current.close()
    }

    const detailsScreen = (item) => {
        props.navigation.navigate("TransactionDetail", {item, id:1})

    }


    useEffect(() => {
        dispatch(cleanUpTransaction())
        const id = details.id
        const no = 1
        
        const param = {id, no}
        
        dispatch(getWallet(id))
        
        dispatch(getWalletTransaction(param))  
     
    }, []);

    const toTop = () => {
        // use current
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }


    const sortOrder = (id) => {
        setShowModal2(false);
        closeSheetSort();
        let ordered = [...walletTrans?.data]

        if (id === 1) {
            let searched = ordered.sort((a, b) => { return a.amount - b.amount })
            toTop()
            return setResult(searched);
        } else if (id === 2) {
            let searched = ordered.sort((a, b) => {
                if (b.type.toLowerCase() < a.type.toLowerCase()) return -1;
            });
            toTop()
            return setResult(searched)
        } else if (id === 3) {
            let searched = ordered.sort((a, b) => {
                if (a.type.toLowerCase() < b.type.toLowerCase()) return -1;
            });
            toTop()
            return setResult(searched)
        } else if (id === 4) {
            let searched = ordered.sort((a, b) => { return new Date(a.created_at) - new Date(b.created_at) })
            toTop()
            return setResult(searched)
        }
    }

    const loadMore = () => {
        setTrackLoaded(true)
        const id = details.id
        const param = {id:id, no: walletTrans?.current_page + 1}

         dispatch(getWalletTransaction(param));
    
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        const id = details.id
        const param = {id:id, no: 1}
        dispatch(getWalletTransaction(param));

        wait(3000).then(() => setRefreshing(false));
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const Footer = () => (
        <View>
            {
               status === "pending" || status === "idle" ?
                    <View style={styles.activityInd}>
                        <ActivityIndicator color="green" size="large" />
                    </View>
                    :
                    null}
        </View>
    )


    const ListView = ({ item }) => (
        
        <TouchableOpacity onPress={() => detailsScreen(item)}>
            { item.type === "credit" ?
            <View style={styles.cardCover}>
                <View>
                <Image 
                source={require("@Assets/image/blueArrow.png")}
                style={styles.arrowImg}
                />
                </View>
                <View>
                    <Text style={styles.creditText}>Wallet Credit</Text>
                    <Text style={styles.dateText}>{item.created_at.substring(0, 10).split('-').reverse().join('-')}</Text>
                </View>
                <View>
                    <Text style={styles.priceText}><Text style={styles.blueSign}>+ </Text><Text style={styles.nairaText}>₦ </Text>{commafy(item.amount?.replace('-', '').toLowerCase())}</Text>
                </View>
            </View>
:
            <View style={styles.cardCover}>
                <View>
                <Image 
                source={require("@Assets/image/redArrow.png")}
                style={styles.arrowImg}
                />
                </View>
                <View>
                    <Text style={styles.creditText}>Wallet Debit</Text>
                    <Text style={styles.dateText}>{item.created_at.substring(0, 10).split('-').reverse().join('-')}</Text>
                </View>
                <View>
                    <Text style={styles.priceText}><Text style={styles.redSign}>- </Text><Text style={styles.nairaText}>₦</Text>{commafy(item.amount?.replace('-', '').toLowerCase())}</Text>
                </View>
            </View>
}
        </TouchableOpacity>

    )


 

    return (
        <View style={styles.main}>
        
       

    <View style={styles.bottomContainer}>
    <View style={styles.middleContainer}>
            <Text style={styles.historyText}>Transaction History</Text>
            {walletItems.length ?
        <TouchableOpacity style={styles.reverseContainer} onPress={sortWallet}>
        <Image 
            source={require("@Assets/image/icon.png")}
            style={styles.reverseImg}
            />
        <Text style={styles.sortText}>Sort</Text>
        </TouchableOpacity >
        :
        null
        }
        </View>

    {(status === "pending" || status === "idle") && !trackLoaded ?
        <TransactionCardPlaceholder /> :
          <FlatList
             data = {!result.length ? walletItems : result}
            renderItem={ListView}
            ListEmptyComponent={EmptyTransaction}
            showsVerticalScrollIndicator={false}
            ref={flatListRef}
            keyExtractor={item => item.id}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
              }
              initialNumToRender={3}
              getItemLayout={(data, index) => (
                  { length: 100, offset: 100 * index, index }
              )}
                onEndReached={() => {
                    if (walletTrans?.current_page < walletTrans?.last_page) {
                        loadMore()
                    }
                }}
                ListFooterComponent={Footer}
          />
    }
    </View>
       
       
          {err ? <Toast config={toastConfig} /> : null}
   
            <Loader isVisible={loader} />
            <Modal
                bottomSheetS={bottomSheetS}
                closeSort={closeSheetSort}
                onSwipeComplete={() => setShowModal2(false)}
                close={() => setShowModal2(!showModal2)}
                onSwipeComplete1={() => setShowModal2(false)}
                sort={sortOrder}
            />
        </View>
    )
};

export default Wallet;