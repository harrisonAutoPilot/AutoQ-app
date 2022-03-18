import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers } from "@Request/Customer";
import EmptyCustomer from "@Component/Empty/emptyCustomer"

const InActive = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);

    const { status, errors, customers } = useSelector((state) => state.customer);

    const redirectToSort = () => {

    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }, []);


    const ListView = ({ item, index }) => {

        return (
            <TouchableOpacity style={styles.cardCover}  onPress={() => props.details(item)} key={item.id}>
                <View style={styles.cardTop}>
                    <View><Text style={styles.nameText}>{item.name}</Text></View>
                    <View style={styles.penCover}><Text style={styles.penText}>Pending</Text></View>
                </View>
                <View style={styles.cardMid}>
                    <View><Text style={styles.phoneText}>+{item.phone}</Text></View>

                </View>
                <View style={styles.cardDown}>
                    <View style={styles.cardDownInner}><Text style={styles.phoneText}>{item.address}</Text></View>

                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <View style={styles.exchangeCover}>
                <Text style={styles.allOrderText}>Most Recent</Text>
                <TouchableOpacity style={styles.exchangeClickk} onPress={redirectToSort}>
                    <Image source={require("@Assets/image/icon.png")} style={styles.exchangeImg} />
                    <Text style={styles.exchangeText}>Sort by</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomCover}>
                {status === "pending" ? <PlaceholderCard />
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={customers?.pending?.users}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={EmptyCustomer}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />

                    }

                />
}

            </View>

        </View>
    )
};

export default InActive;