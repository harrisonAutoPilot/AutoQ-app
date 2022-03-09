import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { updateUserDetails, getUser } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import data from './data'
// import { NavigationContainer } from "@react-navigation/native";


const Active = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(cleanup())
    }, []);

    const { user, errors, update } = useSelector((state) => state.auth);

    const custom_details = () => navigation.navigate("CustomerDetails");

    const redirectToSort = () => {

    };

    const ListView = ({ item }) => {
        return (
            <TouchableOpacity onPress={custom_details}>
                <View style={styles.cardCover}>
                    <View style={styles.cardTop}>
                        <View><Text style={styles.nameTextActive}>{item.name}</Text></View>
                        <View style={styles.actCover}><Text style={styles.actText}>Active</Text></View>
                    </View>
                    <View style={styles.cardMid}>
                        <View><Text style={styles.phoneText}>{item.phone}</Text></View>

                    </View>
                    <View style={styles.cardDown}>
                        <View style={styles.cardDownInner}><Text style={styles.phoneText}>{item.address}</Text></View>

                    </View>
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
                    data={data}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={ListEmptyComponent}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}
                />

            </View>

        </View>
    )
};

export default Active;