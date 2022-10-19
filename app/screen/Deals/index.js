import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
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

    const [refreshing, setRefreshing] = useState(false);


    const { deals, status, addDealStatus, addDeal } = useSelector((state) => state.deal);
   

    const goBack = () => props.navigation.navigate("Home");


    const closeSheet = () => {
        bottomSheet.current.close();
        setVisible(false)

    };



    const filterProduct = (id) => {
        let resultArray = deals.filter(item => item.id === id)[0];
        bottomSheet.current?.present();
        setVisible(true)
        return setResult(resultArray)
    };

    console.log("get deals", deals)

    const refreshDeal = useCallback(() => {
        setRefreshing(true);
        dispatch(getDeals());
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
           
            console.log("ko")
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

            {successMsg ?
                <View style={globalStyles.errInCoverNew}>
                    <Toast config={toastConfig} />
                </View> : null}

            <View style={styles.mainBody}>

            {status === "idle" || status === "pending" ?
                <DealPlaceholder /> :
                <FlatList
                    data={deals}
                    renderItem={ListView}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    scrollEnabled={true}
                    ListEmptyComponent={EmptyDeal}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={refreshDeal} />
                    }
                />}

            </View>
            
            {deals.length ?

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