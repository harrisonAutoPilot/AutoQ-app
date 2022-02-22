import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";

const getRandomColor = (id) => {
    let ids = parseInt(id)
    let shade;
    // let color = "#";
    // for (let i = 0; i < 3; i++)
    //   color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
    // return color;

    // h = 240;
    // s = Math.floor(Math.random() * 100);
    // l = Math.floor(Math.random() * 80);
    // return color = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

    if (ids % 2 === 0) {
        shade = "rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
    } else {
        shade = `rgb(255, ${(Math.floor(Math.random() * 150))}, 0)`;
    }
    return shade
}

const List = (props) => {
    const item = props.item;
    const redirectToNavigationDetail = props.navigation;

    return (
        <Animated.View style={[{ transform: [{ scale: props.scale }] }]}>
            <TouchableOpacity style={[styles.listContainer, { backgroundColor: getRandomColor(item.id) }]} onPress={redirectToNavigationDetail}>
                <View style={styles.listIcon}>
                    <Icon name="tag" color="#fff" size={21} />
                </View>
                <View style={styles.listTextView}>
                    <View style={styles.listTextInnerView}>
                        <View>
                            <Text style={styles.listTitle}>{item.title}</Text>
                        </View>

                    </View>
                    <View style={styles.descView}>
                        <Text style={styles.desc} numberOfLines={1}>{item.desc}</Text>
                    </View>
                </View>

                <View style={styles.thrashIcon}>
                    <Text style={[styles.desc, styles.color]}>3:00</Text>
                </View>

            </TouchableOpacity>
        </Animated.View>
    )
};

export default List;