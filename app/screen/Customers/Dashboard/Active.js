import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers} from "@Request/Customer";
import EmptyCustomer from "@Component/Empty/emptyCustomer"
import Modal from "./sortBy";

const Active = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [result, setResult] = useState([]);
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()

    const { status, errors, customers } = useSelector((state) => state.customer);

    useEffect(()=> {
        setResult(props.result)
    },[props.result.length])

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const closeSheetSort = () => {
        bottomSheetS.current.close();
        setSheetOpen(false)
    }

    const sortOrder = (id) => {
        
        let customer = [...customers?.active?.users];

        if (id === 1) {
            let searched = customer.sort((a, b) => { return  a.name.localeCompare(b.name) })
            toTop()
            return setResult(searched);
        } else if (id === 2) {
            let searched = customer.sort((a, b) => { return new Date(b.created_at) - new Date(a.created_at) });
            toTop()
            return setResult(searched)
        } else if (id === 3) {
            let searched = customer.sort((a, b) => {
                if (a.stores[0].address.toLowerCase() < b.stores[0].address.toLowerCase()) return -1;
            });
            toTop()
            return setResult(searched)
        } else if (id === 4) {
            let searched = customer.sort((a, b) => { return new Date(a.created_at) - new Date(b.created_at) })
            toTop()
            return setResult(searched)
        }
    }

    const openSheetSort = () => {
        setSheetOpen(true)
        bottomSheetS.current.show();
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const ListView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.details(item, "Active")} style={styles.cardCover}>
                    <View style={styles.cardTop}>
                        <View><Text style={styles.nameTextActive}>{item?.name}</Text></View>
                        <View style={styles.actCover}><Text style={styles.actText}>Active</Text></View>
                    </View>
                    <View style={styles.cardMid}>
                        <Text style={styles.phoneText}>+{item?.phone}</Text>
                    </View>
                    <View style={styles.cardDown}>
                        <View style={styles.cardDownInner}><Text style={styles.phoneText} numberOfLines={2}>{item?.stores[0].address}</Text></View>

                    </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <View style={styles.exchangeCover}>
                <Text style={styles.allOrderText}> Most Recent</Text>
                { customers?.active?.users ?
                <TouchableOpacity style={styles.exchangeClickk}  onPress={openSheetSort}>
                    <Image source={require("@Assets/image/icon.png")} style={styles.exchangeImg} />
                    <Text style={styles.exchangeText}>Sort by</Text>
                </TouchableOpacity>
                : null}
            </View>
            <View style={styles.bottomCover}>

            {status === "pending" ? <PlaceholderCard />
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={!result.length ? customers?.active?.users : result }
                    keyExtractor={item => item.id}
                    ListEmptyComponent={EmptyCustomer}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}
                    ref={flatListRef}
                    refreshControl= {
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                    }
                />
}

            </View>


            <Modal
                bottomSheetS={bottomSheetS}
                closeSort={closeSheetSort}
                sort={sortOrder}
                sheet={sheetOpen}

            />

        </View>
    )
};

export default Active;