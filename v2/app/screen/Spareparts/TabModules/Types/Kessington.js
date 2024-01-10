import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl, } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from '../style';
import { getKessington } from '@Request/Kessington';
import { cleanupKessingtonStatus } from "@Store/Kessington";
import CatelogueCardPlaceholder from "../../CatelogueCardPlaceholder"
import Icon from 'react-native-vector-icons/Feather';
import SudoPlaceholderCard from "./SudoPlaceholder"
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

        props.openSheet(item);

    }



    const ListItem = ({ item }) => (
    <View>

    <TouchableOpacity  onPress={() => getItem(item)}>
        <View style={styles.productCardNew}>
           
            <View style={styles.productImgViewNew}>
                <Image
                    source={{ uri: `${item?.product_images[0]?.url}` }} 
                    style={styles.squareImg} />
            </View>
           <View style={styles.contentCover}>
               <View>
                    <Text style={styles.productTitle} numberOfLines={2}>{item?.name}</Text>
              </View>
            
                <View style={styles.priceViewDeal}>
                    <Text style={styles.priceTitle}>&#8358;{commafy(item?.price_per_pack)}/<Text style={{ textTransform: 'capitalize' }}>Pack</Text></Text>
                </View>
            
           </View>
        </View>
    </TouchableOpacity>
    </View>

    )




    return (
        (kessingtonStatus === "pending" || kessingtonStatus === "idle") ?

            <SudoPlaceholderCard />
            :

            <FlatList
                showsVerticalScrollIndicator={false}
                vertical
                data={kessingtonItems}
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
