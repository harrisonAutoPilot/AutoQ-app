import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../style';
import {getBackInStock} from "@Request/BackInStock"
import { cleanupBackInStockStatus } from "@Store/backInStock";
import CatelogueCardPlaceholder from "../../CatelogueCardPlaceholder"
import SudoPlaceholderCard from "./SudoPlaceholder"

import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
  } from '@Component/index';



export default BackInStock = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);

    const [errMsg, setErr] = useState("");

    const {bisStatus, backInStocks,backInStocksItems} = useSelector((state) => state.backInStock);
    

    const getItem = (item) => {
       
        props.openSheet(item);
    }


    useEffect(() => {

        if (bisStatus !== "success" && bisStatus !== "pending") {

            dispatch(getBackInStock());

        }

    }, []);

    useEffect(() => {

        if(bisStatus === "failed"){

            setErr(errors?.msg);

        }


    },[bisStatus])


    const wait = (timeout) => {

        return new Promise(resolve => setTimeout(resolve, timeout));

    };


    const refreshBackInStock = useCallback(() => {

        setRefreshing(true);

        dispatch(getBackInStock());

        wait(3000).then(() => setRefreshing(false));

    }, []);


    const ListItem = ({ item }) => (

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
 

    )


    return (
        <>
        {/* {errMsg ? <Toast config={toastConfig} /> : null } */}

       {(bisStatus === "pending" || bisStatus === "idle") ?

            <SudoPlaceholderCard />
            :

            <FlatList
               
                data={backInStocksItems}
                columnWrapperStyle= {{flexWrap: "wrap", justifyContent:'space-between'}}
                showsVerticalScrollIndicator={false}
                numColumns = {2}
                vertical
                keyExtractor={item => item.id}
                renderItem={ListItem}
                ListEmptyComponent={<EmptyCategory/>}
                onEndReachedThreshold={0.5}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={refreshBackInStock} />
                }
            /> 
}
    
    </>
    )
};

