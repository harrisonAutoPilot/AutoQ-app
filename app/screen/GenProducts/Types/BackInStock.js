import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../style';
import {getBackInStock} from "@Request/BackInStock"
import { cleanupBackInStockStatus } from "@Store/backInStock";
import ProductPlaceholderCard from "../ProductPlaceholderCard";
// import EmptyView from "../listEmpty";
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
       
        props.openSheet();

        props.data(item);
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
                        <Icon name="plus" color="#3858CF" size={16} style={styles.icon}/>
                        <Text style={styles.priceText2}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>

    )


    return (
        <>
        {/* {errMsg ? <Toast config={toastConfig} /> : null } */}

       {(bisStatus === "pending" || bisStatus === "idle") ?

            <ProductPlaceholderCard />
            :

            <FlatList
                numColumns={2}
                data={backInStocksItems}
                showsHorizontalScrollIndicator={false}
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

