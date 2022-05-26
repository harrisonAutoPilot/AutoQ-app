import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, FlatList, RefreshControl, TouchableOpacity, SafeAreaView, StatusBar, Animated, Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import { InputField } from "@Component/index";
import { browseCategories } from "@Request/Category";
import { searchProducts } from "@Request/Product";
import styles from "./style";
import ListItems from "@Screen/Product/ListView";
import BottomSheet from "@Screen/Overlay";
import ProductPlaceholderCard from "@Screen/Product/ProductPlaceholderCard";
import Loader from "@Screen/Loader";

const Search = (props) => {
    const dispatch = useDispatch();
    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = 130
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [active, setActive] = useState("");
    const [searchArray, setSearchArray] = useState([]);
    const [searchCategoryArray, setSearchCategoryArray] = useState([]);
    const [result, setResult] = useState({});
    const bottomSheet = useRef();
    const [visible, setVisible] = useState(false);
    const [request, setRequest] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [searching, setSearching] = useState(false);

    const { categories } = useSelector((state) => state.category);
    const { status, errors, searchedProducts } = useSelector((state) => state.product);
    const redirectToRequest = () => props.navigation.navigate("ProductRequest");

    useEffect(() => {
        dispatch(browseCategories());
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        if (search.length) {
            searchItem();
            setRequest(true)
        } else if (!search.length) {
            setSearchArray([]);
            setRequest(false)
        }
        if (searchCategory.length) {
            searchCategoryItem();
            setRequest(true)
        } else if (!searchCategory.length) {
            setSearching(false)
            setSearchCategoryArray([]);
            setRequest(false)
        }
    }, [search.length, searchCategory]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    // Show the Products in the Categories
    const showMapCategory = (category) => {
        dispatch(searchProducts(category));
        setActive(category)
    }
    const closeSheet = () => {
        setVisible(false)
        bottomSheet.current.close();
        setRequest(true)
    }


    const searchItem = () => {
        let searched = searchedProducts.filter(val => {
            if (val.name.toLowerCase().includes(search.toLowerCase())) {
                return val
            }
            return null
        });

        setSearchArray(searched)
    };

    const searchCategoryItem = () => {
        dispatch(searchProducts(searchCategory.toLowerCase()))
        setSearching(true)
        // setSearchCategoryArray(searchedProducts)
    };

    const redirectToFilter = () => props.navigation.navigate("Filter", { display_name: props.route.params?.display_name });

    useEffect(() => {
        if (searchProducts.length) {
            setSearchCategoryArray(searchedProducts);
            setSearching(false)
        }

    }, [searchedProducts])

    // Add Items to Wishlist
    const itemsAddedToWishlist = async (id) => {
        const productId = { product_id: id }
        await dispatch(addToWishlistProducts(productId));
    };

    // Filter Products and show them in the Modal
    const filterProduct = (id) => {
        let resultArray = searchedProducts.filter(item => item.id === id)[0];
        return setResult(resultArray)
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(searchProducts(category));
        wait(3000).then(() => setRefreshing(false));
    }, []);

    const ListView = ({ item }) => {

        return <View style={[styles.listContainer, active === item.name ? styles.activeColor : null]}>
            <TouchableOpacity onPress={() => {showMapCategory(item.name); setSearch("")}}>
                <Text style={[styles.inputTitle, styles.color2]}>{item?.display_name?.trim()}</Text>
            </TouchableOpacity>
        </View>
    };

    const ListItem = ({ item, index }) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] });

        return <ListItems
            item={item}
            onPress={() => itemsAddedToWishlist(item.id)}
            getItem={() => getItem(item.id)}
            scale={scale}
        />
    };

    const ListView2 = ({ item, index }) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] });

        return <ListItems
            item={item}
            onPress={() => itemsAddedToWishlist(item.id)}
            getItem={() => getItem(item.id)}

            scale={scale}
        />
    };

    // Get the ID of the product to filter and show the Modal
    const getItem = (id) => {
        filterProduct(id);
        setVisible(true);
        setRequest(false)
        bottomSheet.current?.present()
    };


    const cancelSearch = () => props.navigation.goBack();

    return (
        <View style={styles.body}>
            <StatusBar barStyle="light-content" backgroundColor='#00319D' hidden={false} />
            <View style={styles.mainBody}>
                <SafeAreaView>
                    <View style={styles.column}>
                        <View style={styles.inputHolder}>
                            <Icon name="search" style={styles.searchIcon} size={20} color="#616161" />

                            {active === "" ?
                                <View style={styles.inputText} >
                                    <InputField
                                        style={styles.inputF}
                                        placeholder="I am looking for..."
                                        placeholderTextColor="#9E9E9E"
                                        onChangeText={(text) => setSearchCategory(text)}
                                        value={searchCategory}
                                    />
                                    <TouchableOpacity style={styles.clearTextView} onPress={() => setSearchCategory("")}>
                                        <Text style={styles.clearText}>X</Text>
                                    </TouchableOpacity>
                                </View> : <View style={styles.inputText}>
                                    <InputField
                                        style={styles.inputF}
                                        placeholder="I am looking for..."
                                        placeholderTextColor="#9E9E9E"
                                        // style={styles.inputTitle}
                                        onChangeText={(text) => setSearch(text)}
                                        value={search}
                                    />
                                    <TouchableOpacity style={styles.clearTextView} onPress={() => setSearch("")}>
                                        <Text style={styles.clearText}>X</Text>
                                    </TouchableOpacity>
                                </View>}
                        </View>
                        <TouchableOpacity onPress={cancelSearch}>
                            <Text style={[styles.inputTitle, { color: "#fff" }]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>

            <View style={styles.categoryColumn}>
                <TouchableOpacity style={[!active ? styles.activeColor : null, styles.innerContainer]} onPress={() => setActive("")}>
                    <Text style={[styles.inputTitle, styles.color1]}>All Categories</Text>
                </TouchableOpacity>
            
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<View />}
                    renderItem={ListView}
                />
                
            </View>
             <View style={styles.filterCover}>
             <View style={styles.header}>
                    <View style={styles.miniHeaderView}>
                        <Icon name="grid" size={14} color="#616161" />
                        <View style={styles.margin}>
                            <Text style={[styles.inputTitle, styles.color]} numberOfLines={1}>All {props.route.params?.display_name}</Text>
                        </View>
                    </View>
                    {searchedProducts.length ?
                        <TouchableOpacity style={[styles.miniHeaderView2, styles.filterView]} onPress={redirectToFilter}>
                            <Icon name="chevron-down" size={14} color="#212121" />
                            <View style={styles.margin}>
                                <Text style={styles.filterText}>Filter</Text>
                            </View>
                        </TouchableOpacity> : null}
                </View>
            </View>
            {active === ""
                ?
                searching ?

                <ProductPlaceholderCard />:
                
                <FlatList
                    data={searchCategoryArray}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<View />}
                    renderItem={ListView2}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                />
                : null}

            {(status === "pending" || status === "idle") && active !== "" ?
                <ProductPlaceholderCard />
                :

                <Animated.FlatList
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                    showsVerticalScrollIndicator={false}
                    data={active ? !searchArray.length ? searchedProducts : searchArray : []}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<View />}
                    renderItem={ListItem}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                    }
                />
            }

            <BottomSheet
                bottomSheet={bottomSheet}
                onPress={closeSheet}
                result={result}
                isVisible={visible}
            />


            {
                request ?
                    <TouchableOpacity onPress={redirectToRequest} style={isKeyboardVisible ? styles.requestCover2 : styles.requestCover}>
                        <View >
                            <Text style={styles.requestText}>Click to request for products if you can't find it</Text>
                        </View>
                    </TouchableOpacity>
                    : null
            }

             
        </View>
    )
};

export default Search;