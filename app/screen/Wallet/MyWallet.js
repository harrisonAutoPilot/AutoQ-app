import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import { WalletCard } from "@Component";
import WithDraw from "@Screen/WithdrawOverlay";
import Modal from "./SortBy";
import styles from "./style";
// import TransactionCardPlaceholder from "./TransactionPlaceholder"
import commafy from "@Helper/Commafy";

const MyWallet = (props) => {
    const flatListRef = React.useRef()
    const [showModal, setShowModal] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [result, setResult] = useState([]);
    const bottomSheetFund = React.useRef();
    const bottomSheetL = useRef();
    const bottomSheetS = useRef();
    const bottomSheetW = useRef();


    const { wallet } = useSelector((state) => state.wallet);
    const swipeCart = () => setShowModal(false);
    const toTop = () => {
        // use current
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const closeSheet = () => {
        bottomSheetL.current.close();
    }
    const openSheet = () => {
        bottomSheetW.current.show();
    }
    const closeSheetWithDraw = () => {
        bottomSheetW.current.close();
    }

    const openSheetWithDraw = () => {
        bottomSheetW.current.show();

    }

    const closeSheetSort = () => {
        bottomSheetS.current.close();
        setSheetOpen(false)
    }
    const openSheetSort = () => {
        setSheetOpen(true)
        bottomSheetS.current.show();
    }

    useEffect(() => {
        swipeCart();

    }, []);

    const sortOrder = (id) => {
        // closeSheetSort()
        let ordered = [...wallet.user.transactions]

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

    const ListView = ({ item }) => (
        <TouchableOpacity style={styles.smCardCover} onPress={() => props.detail(item)}>
            <View style={styles.leftCover}>
                {item.type === "purchase" ?
                    <View style={styles.iconCoverDebit}>
                        <Icon name="corner-up-left" size={14} color="#D32F2F" />
                    </View>
                    :
                    <View style={styles.iconCoverCredit}>
                        <Icon name="corner-up-right" size={14} color="#7CCF24" />
                    </View>}

                <View>
                    <Text style={styles.fundTitle}>Wallet {item.type === "purchase" ? "Debit" : "Credit"}</Text>
                    <Text style={styles.fundDate}>{item.created_at.substring(0, 10).split('-').reverse().join('-')}</Text>
                </View>
            </View>
            <View style={styles.leftCover}>
                <Text style={styles.fundAmount}> {item.type === "purchase" ? <Text style={{ color: "#D32F2F" }}>-</Text> : <Text style={{ color: "#469D00" }}>+</Text>} ₦{commafy(item.amount)}</Text>
            </View>

        </TouchableOpacity>
    )

    return (
        <View style={styles.inputMainHolder}>
            <WalletCard
                mainBody={styles.mainBody}
                walletAmount={`${wallet.balance ? commafy(wallet.balance) : 0}`}
                unpainLoan="0.00"
                fundWallet={openSheet}
            />


            <View style={styles.downCover}>
                <View style={styles.sortContainer}>
                    <Text style={styles.sortText}>Transaction History</Text>
                    {wallet?.user?.transactions.length ?
                        <TouchableOpacity style={styles.sortCover} onPress={openSheetSort}>
                            <View style={styles.sortCon} >
                                <Image source={require("@Assets/image/exchange.png")} style={styles.refreshImg} />
                                <Text style={styles.sortText2}>Sort</Text>
                            </View>
                        </TouchableOpacity>
                        : null}

                </View>

                <View style={{flex:1}}>

                    <FlatList data={!result.length ? wallet?.user?.transactions : result}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={ListView}
                        // ListEmptyComponent={TransactionCardPlaceholder}
                        ref={flatListRef}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                    />

                </View>

            </View>

            <WithDraw
                bottomSheetW={bottomSheetW}
                bottomSheetWClose={closeSheetWithDraw}

            />

            <Modal
                bottomSheetS={bottomSheetS}
                closeSort={closeSheetSort}
                sort={sortOrder}
                sheet={sheetOpen}

            />

        </View>
    )
};

export default MyWallet;