import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";

const List = (props) => {
    const item = props.item;
    const redirectToNavigationDetail = props.navigation

    return (
        <Animated.View style={[ { transform: [{ scale: props.scale }] }]}>
            <TouchableOpacity style={[styles.listContainer]} onPress={redirectToNavigationDetail}>
            <View style={styles.listIcon}>
                <Icon name="bell" color="#3288E6" size={16}/>
            </View>
            <View style={styles.listTextView}>
                <View style={styles.listTextInnerView}>
                    <View>
                        <Text style={styles.listTitle}>{item.title}</Text>
                    </View>
                    <View>
                        <Text style={[styles.desc, styles.color]}>8/11/21</Text>
                    </View>
                </View>
                <View style={styles.descView}>
                    <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.thrashIcon}>
                <Icon name="trash-2" color="#9E9E9E" size={16}/>
            </TouchableOpacity>
            </TouchableOpacity>
        </Animated.View>
    )
};

export default List;