import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";
import ListEmptyComponent from "@Screen/Home/listEmpty";
import List from "./ListView";
import NavHeader from "@Component/NavHeader";
import data from "./data";

const Notification = (props) => {
   
    const dispatch = useDispatch();
    const scrollY = useRef(new Animated.Value(0)).current;
    const [err, setErr] = useState("");
    const ITEM_SIZE = 120

    const goBack = () => props.navigation.navigate("Home");

    const ListView = ({ item, index }) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] });

        return <List
            item={item}
            getItem={() => getItem(item.id)}
            scale={scale}
            navigation={() => props.navigation.navigate("NotificationDetail")}
        />
    };

    return (
        <View style={styles.view}>
            <NavHeader title="Notifications" onPress={goBack} styleView={styles.body} styles={styles.headerText} statusBar="#fff"/>
            
            <View style={styles.mainBody}>
                <View style={styles.subHeading}>
                    <View>
                        <Text style={styles.subHeadingTitle}>This Week</Text>
                    </View>
                    <View style={styles.subHeading}>
                        <TouchableOpacity style={[styles.miniHeaderView, styles.filterView]}>
                            <Icon name="chevron-down" size={14} color="#212121" />
                            <View style={styles.margin}>
                                <Text style={styles.text}>Sort</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.miniHeaderView, styles.filterView]}>
                            <Text style={styles.text}>Clear All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Animated.FlatList
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}
                />

            </View>

        </View>
    )
};

export default Notification;