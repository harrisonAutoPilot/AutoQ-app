import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar,  SafeAreaView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";

import styles from "./style";
import { pack, price, category,type } from "./data";
import { AuthBtn as Btn} from "@Component";

const Filter = (props) => {

    const [priceView, setPriceView] = useState(false);
    const [packView, setPackView] = useState(false);
    const [categoryView, setCategoryView] = useState(false);
    const [priceId, setPriceId] = useState("");
    const [typeId, setTypeId] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [packId, setPackId] = useState("");
    const [option, setOption] = useState("");
    const [active, setActive] = useState("5");
    const [categoryId, setCategoryId] = useState("");
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    const { searchedProducts } = useSelector((state) => state.product);

    const setItem = (id, value, filter) => {
        if (value === "price") {
            setPriceId(id);
        }else if (value === "pack") {
            setPackId(id);
        }else if (value === "category") {
            setCategoryId(id);
        }else if (value === "type") {
            setTypeId(id);
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setIsScrollEnabled(true);
        }, 3000);
    }, []);

    const selectUserType = id => {
        setActive(id);
        setTypeId(id)
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.optionView, item.id === active ? styles.optionViewBetween1 : styles.optionViewBetween2]} onPress={() => { selectUserType(item.id); setOption(item.id); setErrMsg("") }}>
            <View style={active === item.id ? styles.optionIconView : styles.optionIconView2} >
                {active === item.id ?
                    <View style={styles.activeCover}>
                        <View style={styles.iconCircle} >
                            <FIcon name="lens" size={12} color="#3858CF" style={styles.icon} />
                        </View>
                        <View style={styles.optionTextCover}>
                            <Text style={styles.optionText}>{item.type}</Text>
                           
                        </View>

                    </View>
                    :
                    <View style={styles.activeCover}>
                        <View style={styles.iconCircle2} />
                        <View style={styles.optionTextCover}>
                            <Text style={styles.optionText2}>{item.type}</Text>
                        </View>
                    </View>
                }
            </View>

        </TouchableOpacity>

    );





    const ListView = ({ item }) => (
        <TouchableOpacity style={[styles.listView, item.id === priceId || item.id === typeId || item.id === packId || item.id === categoryId ? styles.activeView : null]} onPress={() => { setItem(item.id, item.value, item.filter); }} >
            {item.id === priceId || item.id === typeId || item.id === packId || item.id === categoryId ?
                <View style={styles.iconView}>
                    <Icon name="check" size={18} color="#00319D" />
                </View> : null}
            <Text style={[styles.resetText, styles.color2, item.id === priceId || item.id === typeId || item.id === packId || item.id === categoryId ? styles.activeText : null]}>{item.type}</Text>
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
        // if (!active) return setErrMsg("Please select a pricing option")
       let filteredData = filterByPrice(priceId);
    //    let filteredData3 = filterByType(typeId);
       let filteredData2 = filterByPack(packId, filteredData);
        let filteredData3 = filterByType(typeId, filteredData2);
        props.navigation.navigate("Product", {item: filteredData2, display_name: props.route.params?.display_name})
         console.log(filteredData3);
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


    const filterByType = (id, filterValue) => {
        let filtered;
        let  searchedType = [...type];
        switch (id) {
            case "5":
                filtered = searchedType
                break;
            case "6":
                filtered = searchedType.filter(item => item.type === "Hospital 1")
                break;
            case "7":
                filtered = searchedType.filter(item => item.type === "Hospital 2")
                break;
            case "18":
                filtered = searchedType.filter(item => item.type === "Hospital 3")
                break;
            default:
                filtered = searchedType

        }
        return filtered

    }


    const resetData = () => {
        setPriceId("");
        setTypeId("");
        setPackId("");
        setCategoryId("");
        props.navigation.navigate("Product", {display_name: props.route.params?.display_name})
    };

    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#00319D' hidden={false} />
            <View style={styles.body}>
                <View style={styles.header}>
                    <SafeAreaView>
                        <Text style={styles.headerTitle2}>Filter By</Text>
                    </SafeAreaView>
                </View>
                <View style={styles.priceMainView}>
                    <View style={styles.pricesView}>
                        <Text style={styles.headerTitle}>Categories</Text>
                        <TouchableOpacity onPress={() => setCategoryView(!categoryView)}>
                            <Icon name="chevron-down" size={18} color="#9E9E9E" />
                        </TouchableOpacity>
                    </View>
                    {categoryView ?
                        <FlatList
                            showsVerticalScrollIndicator={true}
                            data={category}
                            keyExtractor={item => item.id}
                            renderItem={ListView}
                            scrollEnabled={isScrollEnabled}
                            columnWrapperStyle={styles.column}
                            numColumns={2}
                        />
                        : null}
                </View>


                <View style={styles.priceMainView1}>
                {errMsg ? <View style={styles.errMainView}>
                <Text style={styles.failedResponseText}>{errMsg}</Text>
            </View>
                : null}
                    <View style={styles.pricesView1}>
                        <Text style={styles.headerTitle}>Pricing</Text>
                    </View>
                    <FlatList
                        data={type}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        scrollEnabled={isScrollEnabled}
                    />

            </View>


                <View style={styles.priceMainView}>
                    <View style={styles.pricesView}>
                        <Text style={styles.headerTitle}>Sorted By</Text>
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