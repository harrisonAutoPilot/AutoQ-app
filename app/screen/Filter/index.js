import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from 'react-native-virtualized-view';
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { pack, price, category, type } from "./data";
import { AuthBtn as Btn } from "@Component";
import { searchProducts } from "@Request/Product";
import { cleanProducts } from "@Store/Product";

const Filter = (props) => {

    const dispatch = useDispatch();

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
    const [creditOption, setCreditOption] = useState();
    const [creditType, setCreditType] = useState("");
    const [packValue, setPackValue] = useState("");


    const { searchedProducts, status } = useSelector((state) => state.product);
    const { options } = useSelector((state) => state.paymentOptions);


    const setItem = (id, value, increase, packVal) => {
        if (value === "price") {
            setPriceId(id);
        } else if (value === "pack") {
            setPackId(id);
            setPackValue(packVal)
        } else if (value === "category") {
            setCategoryId(id);
        } else if (value === "type") {
            setTypeId(id);
        } else if (value === "credit") {
            setCreditOption(id)
            selectUserType(id);
            setCreditType(increase)
            dispatch(cleanProducts())
            dispatch(searchProducts({ search: props.route.params?.category, type: "hospital", id }));
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsScrollEnabled(true);
        }, 3000);
    }, []);

    const selectUserType = (id) => {
        setActive(id);
        setTypeId(id);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.optionView, item.id === active ? styles.optionViewBetween1 : styles.optionViewBetween2]} onPress={() => { setItem(item.id, "credit", item.price_increment); setOption(item.id); setErrMsg("") }}>
            <View style={active === item.id ? styles.optionIconView : styles.optionIconView2} >
                {active === item.id ?
                    <View style={styles.activeCover}>
                        <View style={styles.iconCircle} >
                            <FIcon name="lens" size={12} color="#3858CF" style={styles.icon} />
                        </View>
                        <View style={styles.optionTextCover}>
                            <Text style={styles.optionText}>Hospital {item.price_increment}%</Text>

                        </View>

                    </View>
                    :
                    <View style={styles.activeCover}>
                        <View style={styles.iconCircle2} />
                        <View style={styles.optionTextCover}>
                            <Text style={styles.optionText2}>Hospital {item.price_increment}%</Text>
                        </View>
                    </View>
                }
            </View>

        </TouchableOpacity>

    );


    const ListView = ({ item }) => (
        <TouchableOpacity style={[styles.listView, item.id === priceId || item.id === typeId || item.id === packId || item.id === categoryId ? styles.activeView : null]} onPress={() => { setItem(item.id, item.value, item.filter, item.type); }} >
            {item.id === priceId || item.id === typeId || item.id === packId || item.id === categoryId ?
                <View style={styles.iconView}>
                    <Icon name="check" size={18} color="#00319D" />
                </View> : null}
            <Text style={[styles.resetText, styles.color2, item.id === priceId || item.id === typeId || item.id === packId || item.id === categoryId ? styles.activeText : null]}>{item.type}</Text>
        </TouchableOpacity>
    );

    const filterByPrice = (id) => {
        let filtered;
        let searchedProduct = [...searchedProducts];


        switch (id) {
            case "1":
                filtered = searchedProduct
                break;
            case "2":
                filtered = searchedProduct.sort((a, b) => { 
                    return b.price_per_pack - a.price_per_pack 
                }
                )
                break;
            case "3":
                filtered = searchedProduct.sort((a, b) => {
                    return a.price_per_pack - b.price_per_pack
                })
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
        let filteredData2 = filterByPack(filteredData);
        props.navigation.navigate(props.route.params?.name ? props.route.params.name : "Product", { item: filteredData2, display_name: props.route.params?.display_name, category: props.route.params?.category, creditType })
    };

    const filterByPack = (filterValue) => {
        let filtered;

        if (packValue) {
            filtered = filterValue.filter(item => item.pack_style.toLowerCase() === packValue.toLowerCase())
        } else {
            filtered = filterValue
        }
        return filtered

    };

    const resetData = () => {
        setPriceId("");
        setTypeId("");
        setPackId("");
        setCategoryId("");
        props.navigation.navigate(props.route.params?.name ? props.route.params.name : "Product", { display_name: props.route.params?.display_name })
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
                <ScrollView>
                    <View style={{ flex: 1, paddingBottom: 100 }}>
                        {/* <View style={styles.priceMainView1}>
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
                                    listKey={(item, index) => `_key${index.toString()}`}
                                    keyExtractor={(item, index) => `_key${index.toString()}`}
                                    renderItem={ListView}
                                    scrollEnabled={isScrollEnabled}
                                    columnWrapperStyle={styles.column}
                                    numColumns={2}
                                />
                                : null}
                        </View> */}


                        <View style={styles.priceMainView1}>

                            <View style={styles.pricesView1}>
                                <Text style={styles.headerTitle}>Pricing</Text>
                            </View>
                            <FlatList
                                data={options}
                                listKey={(id, index) => `_key${index.toString()}`}
                                keyExtractor={(id, index) => `_key${index.toString()}`}
                                renderItem={renderItem}
                                scrollEnabled={isScrollEnabled}
                            />

                        </View>


                        <View style={styles.priceMainView1}>
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
                                    listKey={(item, index) => `_key${index.toString()}`}
                                    keyExtractor={(item, index) => `_key${index.toString()}`}
                                    renderItem={ListView}
                                    columnWrapperStyle={styles.column}
                                    numColumns={2}
                                />

                                : null}
                        </View>

                        <View style={styles.priceMainView1}>
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
                                    listKey={(item, index) => `_key${index.toString()}`}
                                    keyExtractor={(item, index) => `_key${index.toString()}`}
                                    renderItem={ListView}
                                    columnWrapperStyle={styles.column}
                                    numColumns={3}
                                />
                                : null}
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.btnCover}>
                    <View>
                        <Btn title="Reset" style={[styles.reset, styles.elevation]} styles={styles.resetText} onPress={resetData} />
                    </View>
                    {status === "success" &&

                        <View>
                            <Btn title="Done" style={[styles.done, styles.elevation]} styles={styles.resetText} onPress={filterData} />
                        </View>}
                </View>

            </View>

        </View>
    )
};
export default Filter;