import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";

const List = (props) => {
    const item = props.item;
    const redirectToNavigationDetail = props.navigation;

    const getRandomColor = (id) => {
        let ids = parseInt(id)
        let shade;
    
        if (ids % 2 === 0) {
            shade = `rgba(56, 88, 207, 0.06)`;
        } else {
            shade = `rgba(124, 207, 36, 0.06)`;
        }
        return shade
    }

    const getRandomTextColor = (id) => {
        let ids = parseInt(id)
        let shadeText;
    
        if (ids % 2 === 0) {
            shadeText = `#3858CF`;
        } else {
            shadeText = `#469D00`;
        }
        return shadeText
    }

    const getRandomBorderColor = (id) => {
        let ids = parseInt(id)
        let shadeBorder;
    
        if (ids % 2 === 0) {
            shadeBorder = `rgba(56, 88, 207, 0.08)`;
        } else {
            shadeBorder = `rgba(124, 207, 36, 0.08)`
        }
        return shadeBorder
    }

    const getRandomIconColor = (id) => {
        let ids = parseInt(id)
        let shadeBorder;
    
        if (ids % 2 === 0) {
            shadeBorder = `rgba(56, 88, 207, 0.16)`;
        } else {
            shadeBorder = `rgba(124, 207, 36, 0.16)`
        }
        return shadeBorder
    }


    return (
        <Animated.View style={[ { transform: [{ scale: props.scale }] }]}>
            <TouchableOpacity style={[styles.listContainer, {backgroundColor : getRandomColor(item.id), borderColor: getRandomBorderColor(item.id)}]} onPress={() => redirectToNavigationDetail(item)}>
            <View style={[styles.listIcon, {backgroundColor: getRandomIconColor(item.id)}]}>
                <Icon name="bell" color={getRandomTextColor(item.id)} size={20}/>
            </View>
            <View style={styles.listTextView}>
                <View style={styles.listTextInnerView}>
                    <View>
                        <Text style={[styles.listTitle, {color: getRandomTextColor(item.id), borderColor: getRandomBorderColor(item.id)}]}>{item.title}</Text>
                    </View>
                </View>
                <View style={styles.descView}>
                    <Text style={styles.desc} numberOfLines={1}>{item.description}</Text>
                </View>
            </View>
            <View style={styles.thrashIcon}>
            <Text style={[styles.desc]}>{item.created_at.substring(0, 10).split('-').reverse().join('/')}</Text>
            </View>
            </TouchableOpacity>
        </Animated.View>
    )
};

export default List;