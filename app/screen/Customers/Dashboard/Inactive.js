import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers} from "@Request/Customer";

const InActive = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        // dispatch(cleanup())
    }, []);

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


    const ListView = ({ item }) => {

        return (
            <TouchableOpacity style={styles.cardCover}  onPress={() => props.details(item)}>
                <View style={styles.cardTop}>
                    <View><Text style={styles.nameTextInAc}>{item.name}</Text></View>
                    <View style={styles.inactCover}><Text style={styles.inactText}>Inactive</Text></View>
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
                <Text style={styles.allOrderText}> Most Recent</Text>
                <TouchableOpacity style={styles.exchangeClickk} onPress={redirectToSort}>
                    <Image source={require("@Assets/image/icon.png")} style={styles.exchangeImg} />
                    <Text style={styles.exchangeText}>Sort by</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomCover}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={customers?.inactive?.users}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={PlaceholderCard}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                    }
                />

            </View>
        </View>
    )
};

export default InActive;