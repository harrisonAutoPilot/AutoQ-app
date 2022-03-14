import React, {useEffect, useState} from "react";
import { StatusBar, View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { listCart } from "@Request/Cart";

const Header = (props) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(listCart());
    }, []);

    
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#00319D' hidden={false} />
            <View style={styles.mainBody}>
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={[ styles.headerIconView, props.bottom]}>
                            <TouchableOpacity style={styles.headerSubIconMenuView} onPress={props.drawer}>
                                <Icon name="menu" color="#fff" size={24} />
                            </TouchableOpacity>
                            {props.title ?
                                <View style={styles.browseView}>
                                    <Text style={[styles.headerTitle]}>{props.title}</Text>
                                </View> : null
                            }
                            <View style={styles.headerSubIconView}>
                                <TouchableOpacity onPress={props.notify}>
                                    <View>
                                        <FIcon name="bell" color="#fff" size={24} />
                                    </View>
                                    {props.notLength ?
                                    <View style={styles.badgeN}>
                                        <Text style={styles.badgeText}>{props.notLength}</Text>
                                    </View>
                                    : null}
                                </TouchableOpacity >
                                <TouchableOpacity onPress={props.cart}>
                                    <View style={styles.headerSubLastIconView}>
                                        <Icon name="md-cart-outline" color="#fff" size={24} />
                                    </View>
                                    {items?.carts?.length ?
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>{items?.carts?.length}</Text>
                                    </View>
                                    : null}
                                </TouchableOpacity >
                            </View>
                        </View>
                    </SafeAreaView>
                    {props.children}
                </View>
            </View>
        </View>
    )
};

export default Header;