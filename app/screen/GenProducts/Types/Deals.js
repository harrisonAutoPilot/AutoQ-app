import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl,Animated, ActivityIndicator} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from '../style';
import {getDeals} from '@Request/Deal';
import ProductPlaceholderCard from "../ProductPlaceholderCard";
import { cleanupDealStatus } from "@Store/Deal";
import Icon from 'react-native-vector-icons/Feather';
import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
  } from '@Component/index';


const Deals = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);

    const [dealsFirstLoad, setDealsFirstLoad] = useState(false);


    const getItem = (item) => {
       
        props.openSheet();

        props.data(item);
    }

    


    useEffect(() => {

        if(status !== "success"){

            dispatch(getDeals({id: 1}));

        }
        
      
    }, []);

    const {status, errors, deals, dealsItems} = useSelector(state => state.deal);


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

        
        <TouchableOpacity style={styles.listContainer} onPress={() => getItem(item)}>
            <View style={styles.listContainerImageView}>
              <Image source={{ uri: `${URL}${item?.product?.product_images[0]?.url}` }} style={styles.image} resizeMode="contain" /> 
            </View>

            <View style={styles.listTitleView} >
                <View style={styles.listTitleView2}>
                    <View style={styles.listTitleView22}>
                        <Text style={styles.listTitle}>{item?.product.name}</Text>
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
                        <Text style={styles.priceText}>&#8358;{commafy(item?.product?.price_per_pack)}/<Text style={styles.priceRoll}>Pack</Text></Text>
                     </View>
                    
                    <View style={styles.priceView2} >
                        <Icon name="plus" color="#3858CF" size={16} style={styles.icon}/>
                        <Text style={styles.priceText2}>Add to Cart</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
    


    return (
        (status === "pending" || status === "idle") && !dealsFirstLoad ?

        <ProductPlaceholderCard />
        :
        <>
        { dealsItems.length > 0 ? 
        <FlatList
            data={dealsItems}
            keyExtractor={item => item.id}
            renderItem={ListItem}
            // ListEmptyComponent={EmptyCategory}
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
        :
        <EmptyCategory />
        }
        </>
    
    )
};

export default Deals;