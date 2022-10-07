import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList,  } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style";
import {data} from "./data"
import { COHeader as Header, EmptyDeal } from "@Component";
// import { getAllDeals } from "@Request/deals";
import DealPlaceholder from "./DealPlaceholder"
import { Placeholder } from "rn-placeholder";

const Deals = (props) => {

    const dispatch = useDispatch();
    // const { deals } = useSelector((state) => state.deal);
    const goBack = () => props.navigation.navigate("Home");

    // useEffect(() => {
    //     dispatch(getAllDeals());
    // }, []);


   
   

   

   

    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;

        return (
        <View style={styles.listItem}>
                    <View style={styles.imgCard}>
                            <Image source={require("@Assets/image/dealRed.png")} style={styles.dealTagImg} />
                    </View>
                    <View style={styles.textCover}>
                        <Text style={styles.redText}>Buy 8 and get 2 free</Text>
                        <Text style={styles.bgText}>May & Baker Loxagyl 400 Tabs</Text>
                    </View>

                    <TouchableOpacity style={styles.btnStyle}>
                        <Text style={styles.btnText}>See Deal</Text>
                    </TouchableOpacity>
                </View>
    );
        }


    return (
        <View style={styles.container}>
            <Header title="Deals" onPress={goBack} styleView={styles.body} styles={styles.headerText} statusBar="#00319D"/>

            <View style={styles.mainBody}>
                <FlatList
                    data={data}
                    renderItem={ListView}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    scrollEnabled={true}
                    ListEmptyComponent={EmptyDeal}
                />

            </View>

        </View>
    )
};

export default Deals;