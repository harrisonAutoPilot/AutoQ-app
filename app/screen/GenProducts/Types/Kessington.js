import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl, } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from '../style';
import { getKessington } from '@Request/Kessington';
import { cleanupKessingtonStatus } from "@Store/Kessington";
import ProductPlaceholderCard from "../ProductPlaceholderCard";
import Icon from 'react-native-vector-icons/Feather';
import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
} from '@Component/index';


export default Kessington = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);


    const { kessingtonStatus, kessingtons, kessingtonItems } = useSelector(
        state => state.kessington,
    );



    useEffect(() => {

        if (kessingtonStatus !== "success" && kessingtonStatus !== "pending") {

            dispatch(getKessington());

        }

    }, []);



    const wait = (timeout) => {

        return new Promise(resolve => setTimeout(resolve, timeout));

    };


    const refreshNewKProducts = useCallback(() => {

        setRefreshing(true);

        dispatch(getKessington());

        wait(3000).then(() => setRefreshing(false));

    }, []);


    const getItem = (item) => {

        props.openSheet();

        props.data(item);
    }



    const ListItem = ({ item }) => (


        <View style={styles.productCard}>

            <TouchableOpacity style={styles.listContainer} onPress={() => getItem(item)}>
                <View style={styles.listContainerImageView}>
                    <Image source={{ uri: `${URL}${item?.product?.product_images[0]?.url}` }} style={styles.image} resizeMode="contain" />
                </View>

                <View style={styles.listTitleView} >
                    <View style={styles.listTitleView2}>
                        <View style={styles.listTitleView22}>
                            <Text style={styles.listTitle}>{item?.name}</Text>
                        </View>
                        {props.creditType ?
                            <View style={styles.crossCover}>
                                <Image source={require("@Assets/image/cross2.png")} style={styles.smCrossImg} />
                                <Text style={styles.listPercent}>{props?.creditType}</Text>
                            </View> : null
                        }
                    </View>

                    <View style={styles.priceOverview}>

                        <View style={styles.priceView}>
                            <Text style={styles.priceText}>&#8358;{commafy(item?.price_per_pack)}/<Text style={styles.priceRoll}>Pack</Text></Text>
                        </View>

                        <TouchableOpacity style={styles.priceView2} onPress={props.getItem}>
                            <Icon name="plus" color="#3858CF" size={16} style={styles.icon} />
                            <Text style={styles.priceText2}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )




    return (
        (kessingtonStatus === "pending" || kessingtonStatus === "idle") ?

            <ProductPlaceholderCard />
            :

            <FlatList
                data={kessingtonItems}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={ListItem}
                ListEmptyComponent={<EmptyCategory />}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={refreshNewKProducts} />
                }
            />
    )
};
