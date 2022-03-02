import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar,  SafeAreaView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from "react-redux";

import styles from "./style";
import { pack, price } from "./data";
import { AuthBtn as Btn} from "@Component";

const Filter = (props) => {

    const [priceView, setPriceView] = useState(false);
    const [packView, setPackView] = useState(false);
    const [priceId, setPriceId] = useState("");
    const [typeId, setTypeId] = useState("");
    const [packId, setPackId] = useState("");

    const { searchedProducts } = useSelector((state) => state.product);

    const setItem = (id, value, filter) => {
        if (value === "price") {
            setPriceId(id);
        } else if (value === "pack") {
            setPackId(id);
        }
    }

    const ListView = ({ item }) => (
        <TouchableOpacity style={[styles.listView, item.id === priceId || item.id === typeId || item.id === packId ? styles.activeView : null]} onPress={() => { setItem(item.id, item.value, item?.filter); }} >
            {item.id === priceId || item.id === typeId || item.id === packId ?
                <View style={styles.iconView}>
                    <Icon name="check" size={18} color="#3858CF" />
                </View> : null}
            <Text style={[styles.resetText, styles.color2, item.id === priceId || item.id === typeId || item.id === packId ? styles.activeText : null]}>{item.type}</Text>
        </TouchableOpacity>
    );

    const filterByPrice = (id) => {
        let filtered;
        let  searchedProduct = [...searchedProducts];
        
        switch (id) {
            case "1":
                filtered = searchedProduct
                break;
            case "2":
                filtered = searchedProduct.sort((a, b) => { return b.price_per_pack - a.price_per_pack })
                break;
            case "3":
                filtered = searchedProduct.sort((a, b) => { return a.price_per_pack - b.price_per_pack })
                break;
            case "4":
                filtered = searchedProduct.sort((a, b) => { return new Date(b.created_at) - new Date(a.created_at) })
                break;
            default:
                filtered = searchedProduct

        }
        return filtered;

    }

    const filterData = () => {
      
       let filteredData = filterByPrice(priceId);
        let filteredData2 = filterByPack(packId, filteredData);
        props.navigation.navigate("Product", {item: filteredData2, display_name: props.route.params?.display_name})
    };

    const filterByPack = (id, filterValue) => {
        let filtered;
        switch (id) {
            case "8":
                filtered = filterValue
                break;
            case "9":
                filtered = filterValue.filter(item => item.pack_style.toLowerCase() === "roll")
                break;
            case "10":
                filtered = filterValue.filter(item => item.pack_style.toLowerCase() === "box")
                break;
            default:
                filtered = filterValue

        }
        return filtered

    }

    const resetData = () => {
        setPriceId("");
        setTypeId("");
        setPackId("");
        props.navigation.navigate("Product", {display_name: props.route.params?.display_name})
    };

    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#3858CF' hidden={false} />
            <View style={styles.body}>
                <View style={styles.header}>
                    <SafeAreaView>
                        <Text style={styles.headerTitle2}>Filter By</Text>
                    </SafeAreaView>
                </View>

                <View style={styles.priceMainView}>
                    <View style={styles.pricesView}>
                        <Text style={styles.headerTitle}>Prices</Text>
                        <TouchableOpacity onPress={() => setPriceView(!priceView)}>
                            <Icon name="chevron-down" size={18} color="#9E9E9E" />
                        </TouchableOpacity>
                    </View>
                    {priceView ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={price}
                            keyExtractor={item => item.id}
                            renderItem={ListView}
                            columnWrapperStyle={styles.column}
                            numColumns={2}
                        />
                        : null}
                </View>

                <View style={styles.priceMainView}>
                    <View style={styles.pricesView}>
                        <Text style={styles.headerTitle}>Pack Style</Text>
                        <TouchableOpacity onPress={() => setPackView(!packView)}>
                            <Icon name="chevron-down" size={18} color="#9E9E9E" />
                        </TouchableOpacity>
                    </View>
                    {packView ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={pack}
                            keyExtractor={item => item.id}
                            renderItem={ListView}
                            columnWrapperStyle={styles.column}
                            numColumns={3}
                        />
                        : null}
                </View>

                <View style={styles.btnCover}>
                    <View>
                        <Btn title="Reset" style={[styles.reset, styles.elevation]} styles={styles.resetText} onPress={resetData} />
                    </View>
                    <View>
                        <Btn title="Done" style={[styles.done, styles.elevation]} styles={styles.resetText} onPress={filterData} />
                    </View>
                </View>
            </View>



        </View>
    )
};
export default Filter;