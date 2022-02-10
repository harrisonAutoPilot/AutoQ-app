import React from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./style";
import commafy from "@Helper/commafy";
import URL from "@Helper/constant";

const List = (props) => {
    const item = props.item.product ? props.item.product : props.item;

    return (
        <Animated.View style={[styles.listContainer, { transform: [{ scale: props.scale }] }]}>

            <TouchableOpacity style={styles.listContainerImageView} onPress={props.getItem}>
                <Image source={{ uri: `${URL}${item?.product_images[0]?.url}` }} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listTitleView} onPress={props.getItem}>
                <View>
                    <Text style={styles.listTitle}>{item.name}</Text>
                    <View style={styles.priceView}>
                        <Text style={styles.priceText}>&#8358;{commafy(item.price_per_pack)}/<Text style={styles.priceRoll}>{item.pack_style}</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>

            {item.is_saved_item && item.id !== props.likedId ?
                <TouchableOpacity style={styles.iconView} onPress={props.onRemove}>
                    <FIcon name="cards-heart" color="#7CCF24" size={16} />
                </TouchableOpacity>
                :
                props.liked === 1 && item.id === props.likedId ?

                    <TouchableOpacity style={styles.iconView} onPress={props.onRemove}>
                        <FIcon name="cards-heart" color="#7CCF24" size={16} />
                    </TouchableOpacity>
                    :
                    props.liked === 3 && item.id === props.likedId ?

                        <TouchableOpacity style={styles.iconView} onPress={props.onPress}>
                            <Icon name="heart" size={18} color="#BDBDBD" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.iconView} onPress={props.onPress}>
                            <Icon name="heart" size={18} color="#BDBDBD" />
                        </TouchableOpacity>
            }





        </Animated.View>
    )
};

export default List;