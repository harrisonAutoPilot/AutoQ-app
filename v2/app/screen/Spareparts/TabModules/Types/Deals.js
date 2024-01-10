import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl,Animated, ActivityIndicator} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Acon from 'react-native-vector-icons/AntDesign';
import styles from '../style';
import {getDeals} from '@Request/Deal';
import CatelogueCardPlaceholder from "../../CatelogueCardPlaceholder"
import { cleanupDealStatus } from "@Store/Deal";
import Icon from 'react-native-vector-icons/Feather';
import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
  } from '@Component/index';
  import SudoPlaceholderCard from "./SudoPlaceholder"


const Deals = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);

    const [dealsFirstLoad, setDealsFirstLoad] = useState(false);


    const getItem = (item) => {
       
        props.dealInfo(item);
       

        props.data(item);
    }

    
    // const navigateToDeals = (items) => props.navigation.navigate("Deals", { products: items })

    useEffect(() => {

        if(status !== "success"){

            dispatch(getDeals({id: 1}));

        }
        
      
    }, []);

    const {status, errors, deals,checkRefresh, dealsItems} = useSelector(state => state.deal);


    const loadMoreDeals = () => {

        setDealsFirstLoad(true);

        dispatch(getDeals({id:deals?.current_page + 1}));

    };


    const wait = (timeout) => {

        return new Promise(resolve => setTimeout(resolve, timeout));

    };


    const refreshDeals = useCallback(() => {

        setRefreshing(true);

        dispatch(cleanupDealStatus());
      

        dispatch(getDeals({id: 1}));
       

        wait(3000).then(() => setRefreshing(false));
        
    }, []);


    const ListItem = ({ item }) =>  (
    <View>

    <TouchableOpacity  onPress={() => getItem(item)}>
        <View style={styles.productCardNew}>
            <Image
                source= {require('@Assets2/image/filter-chip.png')}
                style={styles.dealImg} />
            <View style={styles.productImgViewNew}>
                <Image
                    source={{ uri: item?.product?.product_images[0]?.url }}
                    style={styles.productImg} />
            </View>
           <View style={styles.contentCover}>
               <View>
                    <Text style={styles.productTitle} numberOfLines={2}>{item.product.name}</Text>
              </View>
            
                <View style={styles.priceViewDeal}>
                    <Text style={styles.priceTitle}>&#8358;{commafy(item?.product?.price_per_pack)}/<Text style={{ textTransform: 'capitalize' }}>Pack</Text></Text>
                </View>
            
           </View>
        </View>
    </TouchableOpacity>
    </View>

    );
    


    return (
        (status === "pending" || status === "idle") && !dealsFirstLoad ?

        <SudoPlaceholderCard />
        :
        <>
     
         <FlatList
            vertical
            data={dealsItems}
            keyExtractor={item => item.id}
            renderItem={ListItem}
            ListEmptyComponent={EmptyCategory}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (deals?.current_page < deals?.last_page) {
                    loadMoreDeals()
                }
            }}
         
            refreshControl={
                <RefreshControl 
                refreshing={refreshing} 
                onRefresh={refreshDeals} />
            }
         ListFooterComponent={ status === "pending" && <ActivityIndicator />} 
        />
       
        
    
        </>
    
    )
};

export default Deals;