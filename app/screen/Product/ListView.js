import React from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./style";
import commafy from "@Helper/Commafy";
import URL from "@Helper/Constant";

const List = (props) => {
    const item = props.item.product ? props.item.product : props.item;
    console.log(item)

    return (
        <Animated.View style={ { transform: [{ scale: props.scale }] }}>
            <TouchableOpacity style={styles.listContainer} onPress={props.getItem}>
            <View style={styles.listContainerImageView}>
                <Image source={{ uri: `${URL}${item?.product_images[0]?.url}` }} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.listTitleView} >
                    <View style={styles.listTitleView2}>
                        <Text style={styles.listTitle}>{item.name}</Text>
                    </View>

                    <View style={styles.priceOverview}>
                        <View style={styles.priceView}>
                            <Text style={styles.priceText}>&#8358;{item.price_per_pack ? commafy(item.price_per_pack): 0}/<Text style={styles.priceRoll}>Pack</Text></Text>
                        </View>
                        {/* <TouchableOpacity style={styles.priceView2} onPress={props.getItem}>
                            <Icon name="plus" color="#3858CF" size={16} style={styles.icon}/>
                            <Text style={styles.priceText2}>Add to Cart</Text>
                        </TouchableOpacity> */}
                    </View>
            </View>
            </TouchableOpacity>

        </Animated.View>
    )
};

export default List;