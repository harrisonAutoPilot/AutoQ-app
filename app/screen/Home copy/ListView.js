import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './style';
import URL from "@Helper/constant";
import commafy from "@Helper/commafy";


export default ListItem = (props) => {
    const item = props.item;

    return (

        <View style={styles.productCard}>
            {item.product && item.product.is_saved_item && props.like === 0 ?
                <TouchableOpacity style={styles.iconView} onPress={props.onRemove}>
                    <FIcon name="cards-heart" color="#7CCF24" size={16} />
                </TouchableOpacity>
                : item.is_saved_item ?
                    <View style={styles.iconView} >
                        <FIcon name="cards-heart" color="#7CCF24" size={16} />
                    </View>
                    :
                    item.product && item.product.is_saved_item && props.like === 1 ?
                        <TouchableOpacity style={styles.iconView} onPress={props.onRemove}>
                            <FIcon name="cards-heart" color="#7CCF24" size={16} />
                        </TouchableOpacity>
                        :
                        props.like === 1 && props.likedId === item.id ?
                            <View style={styles.iconView} >
                                <FIcon name="cards-heart" color="#7CCF24" size={16} />
                            </View>
                            :
                            <TouchableOpacity style={styles.iconView} onPress={props.onPress}>
                                <Icon name="heart" color="#7CCF24" size={16} />
                            </TouchableOpacity>

            }
            <TouchableOpacity onPress={props.getItem}>
                <View style={styles.imgView}>
                    <Image source={{ uri: `${URL}${!item.product ? item.product_images[0].url : item.product.product_images[0].url}` }} style={styles.img} />
                </View>
                <View >
                    <Text style={styles.productTitle} numberOfLines={2}>{!item.product ? item.name : item.product.name}</Text>
                </View>
                <View>
                    <View style={styles.priceView}>
                        <Text style={styles.priceTitle}>&#8358;{!item.product ? commafy(item.price_per_pack) : commafy(item.product.price_per_pack)}/<Text style={{ textTransform: 'capitalize' }}>{!item.product ? item.pack_style : item.product.pack_style}</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
};
