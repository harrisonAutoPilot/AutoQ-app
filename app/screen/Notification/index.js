import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";
import { EmptyPlaceHolder, COHeader as Header } from "@Component";
import List from "./ListView";
import { getNotification } from "@Request/Notification";
import NotificationPlaceholder from "./NotificationPlaceholder";

const Notification = (props) => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getNotification());
    }, []);

    const { notification, error, status } = useSelector((state) => state.notification);

    const goBack = () => props.navigation.navigate("Home");

    const ListView = ({ item, index }) => {
     

        return <List
            item={item}
            getItem={() => getItem(item.id)}
            navigation={(item) => props.navigation.navigate("NotificationDetail", { item })}
        />
    };

    return (
        <View style={styles.view}>
            <Header title="Notification" onPress={goBack} styleView={styles.body} />
            <View style={styles.mainBody}>
                <View style={styles.subHeading}>
                    <View>
                        <Text style={styles.subHeadingTitle}>This Week</Text>
                    </View>
                    {/* <View style={styles.subHeading}>
                        <TouchableOpacity style={[styles.miniHeaderView, styles.filterView]}>
                            <Icon name="chevron-down" size={14} color="#212121" />
                            <View style={styles.margin}>
                                <Text style={styles.text}>Sort</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.miniHeaderView, styles.filterView]}>
                            <Text style={styles.text}>Clear All</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
                {status === "pending" || status === "idle" ?
                    <NotificationPlaceholder /> :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={notification.notifications}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={EmptyPlaceHolder}
                        renderItem={ListView}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        columnWrapperStyle={styles.column}
                    />}

            </View>

        </View>
    )
};

export default Notification;