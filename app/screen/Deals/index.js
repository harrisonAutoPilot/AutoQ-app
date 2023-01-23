import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";


import styles from "./style";
import { COHeader as Header, EmptyDeal,SuccessMsgViewTwo } from "@Component";
import { getDeals } from "@Request/Deal";
import { listCart } from "@Request/Cart";
import { cleanupDealStatus } from "@Store/Deal";
import Toast from 'react-native-toast-message';
import DealPlaceholder from "./DealPlaceholder"
import ModalView from "./BottomSheet";

const Deals = (props) => {


    const bottomSheet = useRef();


    const dispatch = useDispatch();
   

    const [result, setResult] = useState({});

    const [visible, setVisible] = useState(false);

    const [successMsg, setSuccessMsg] = useState("");

    const [allDeals, setAllDeals] = useState([])

    const [refreshing, setRefreshing] = useState(false);

    const [dealsLoaded, setDealsLoaded] = useState(false);

    const flatListRef = useRef()

    

    const { deals, status, addDealStatus,dealsItems, addDeal, } = useSelector((state) => state.deal);
   

    const goBack = () => props.navigation.navigate("Home");


    const closeSheet = () => {
        bottomSheet.current.close();
        setVisible(false)

    };


    useEffect(() => {

        if (dealsItems.length == 0) {
            dispatch(getDeals(1));
        }
       
      },[]);

    const loadMore = () => {
        setDealsLoaded(true)
        console.log("load more called");
        dispatch(getDeals(deals?.current_page + 1));
    }

    const filterProduct = (id) => {
        let resultArray = dealsItems.filter(item => item.id === id)[0];

        console.log("the filter", resultArray)
        bottomSheet.current?.present();
        setVisible(true)
        return setResult(resultArray)
    };



    const refreshDeal = useCallback(() => {
        setRefreshing(true);
        dispatch(getDeals({id:1}));
        wait(3000).then(() => setRefreshing(false));
    }, []);


    useEffect(() => {
        if (addDealStatus === "success") {  
            refreshView(addDeal.message);
        }

    }, [addDealStatus]);



    const toastConfig = {
        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} styles={styles.toastStyle} />
        )
    };


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };




    const refreshView = useCallback((suc) => {
        setSuccessMsg(suc);

        wait(200).then(() => {

        if (suc) {
 
            dispatch(getDeals())
            dispatch(listCart(1))
            
            Toast.show({
                type: 'tomatoToast',
                visibilityTime: 5000,
                autoHide: true,
                position: 'top',
                topOffset: 0
            });
        }
    })

        wait(4000).then(() => {
        dispatch(cleanupDealStatus())
        setSuccessMsg("")
        
    })

    }, []);


    const Footer = () => (
        <View>
            {
            status === "pending" || status === "idle" ?
            <View style={styles.activityInd}>
                <ActivityIndicator color="green" size="large" />
            </View>
            :
            null}
        </View>
    )


    const ListView = ({item}) =>  (
        <View style={styles.listItem}>
                    <View style={styles.imgCard}>
                    <Image
                        source={{ uri: `${URL}${item?.product?.product_images[0]?.url}` }}
                        style={styles.dealImg}
                    />
                    <Image source={require("@Assets/image/dealRed.png")} style={styles.dealTagImg} />
                          
                    </View>
                    <View style={styles.textCover}>
                        <Text style={styles.redText} numberOfLines={2}>{item.description}</Text>
                        <Text style={styles.bgText}>{item.product?.name}</Text>
                    </View>

                    <TouchableOpacity style={styles.btnStyle} onPress={() => filterProduct(item.id)}>
                        <Text style={styles.btnText}>See Deal</Text>
                    </TouchableOpacity>
                </View>
    );
    


    return (
        <View style={styles.container}>
            <Header title="Deals" onPress={goBack} styleView={styles.body} styles={styles.headerText} statusBar="#00319D"/>

           <View style={styles.toastCover}>
           {successMsg ?
                <View style={globalStyles.errInCoverNew}>
                    <Toast config={toastConfig} />
                </View> : null}

           </View>
            <View style={styles.mainBody}>

          
            {(status === "pending" || status === "idle") && !dealsLoaded ? 

                <DealPlaceholder /> :
 
                <FlatList
                    data={dealsItems}
                    renderItem={ListView}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                    refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={refreshDeal} />
                    }
                    ref={flatListRef}
                    ListEmptyComponent={EmptyDeal}
                    getItemLayout={(data, index) => (
                        { length: 100, offset: 100 * index, index }
                    )}
                    initialNumToRender={5}
                    onEndReachedThreshold={0.5}
                     
                    onEndReached={() => {
                        if (deals?.current_page < deals?.last_page) {
                           loadMore()
                           console.log("the page length",dealsItems.length )
                        }
                    }}
                 ListFooterComponent={Footer}  
                />
               
             }

            </View>

            
            {dealsItems.length > 0 ?

                <ModalView
                    bottomSheet={bottomSheet}
                    onPress={closeSheet}
                    result={result}
                    isVisible={visible}
                /> :
                null
                }

        </View>
    )
};

export default Deals;