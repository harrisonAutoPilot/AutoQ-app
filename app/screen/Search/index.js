import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, FlatList, RefreshControl, TouchableOpacity, SafeAreaView, StatusBar, Animated, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { InputField } from "@Component/index";
import { browseCategories } from "@Request/Category";
import { searchProducts, searchProductsByItems } from "@Request/Product";
import styles from "./style";
import ListItems from "@Screen/BrowseProducts/ListView";
import ModalView from "@Screen/CartOverlay";
import { listCart } from "@Request/cart";


const Search = (props) => {
    const dispatch = useDispatch();
    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = 120
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [active, setActive] = useState("");
    const [searchArray, setSearchArray] = useState([]);
    const [searchCategoryArray, setSearchCategoryArray] = useState([]);
    const [result, setResult] = useState({});
    const [showModal, setShowModal] = useState(false);
    const bottomSheet = useRef();
    const [cartItem, setCartItem] = useState("");
    const [cartNewAmount, setCartNewAmount] = useState(1);
    const [cartItemId, setCartItemId] = useState("");

    const { categories } = useSelector((state) => state.category);
    const { status, errors, searchedProducts, update, type_head } = useSelector((state) => state.product);
    const closeCart = () => setShowModal(!showModal);
    const { items } = useSelector((state) => state.cart)
    console.log(searchedProducts)

    useEffect(() => {
        dispatch(browseCategories())
        // dispatch(listCart())
    }, []);

    useEffect(() => {
        if (search.length) {
            searchItem();
        } else if (!search.length) {
            setSearchArray([]);
        }
        if (searchCategory.length) {
            searchCategoryItem();
        } else if (!searchCategory.length) {
            setSearchCategoryArray([]);
        }
    }, [search.length, searchCategory]);

    const checkCart = (id) => {
        const cartItems = items.carts.filter((item) => {
            if (item.product_id === id) {
                setCartItem(item.product_id)
                setCartNewAmount(item.quantity)
                setCartItemId(item.id)
            }
        })
        return cartItems
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    // Show the Products in the Categories
    const showMapCategory = (category) => {
        dispatch(searchProducts(category));
        setActive(category)
    }
    const closeSheet = () => {
        bottomSheet.current.close();
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
        setSearchCategoryArray(searchedProducts)
    };

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
            <View style={[styles.listContainerTextView]}>
                <TouchableOpacity onPress={() => showMapCategory(item.name)}>
                    <Text style={[styles.inputTitle, styles.color2]}>{item.display_name}</Text>
                </TouchableOpacity>
            </View>
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
        bottomSheet.current.show();
        checkCart(id)
    };

    const cancelSearch = () => props.navigation.navigate("Home");

    return (
        <View style={styles.body}>
            <StatusBar barStyle="light-content" backgroundColor='#3858CF' hidden={false} />

            <LinearGradient
                colors={['#3858CF', '#7485FF']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={props.mainBody}
            >
                <SafeAreaView>
                    <View style={styles.column}>
                        <View style={styles.inputHolder}>
                            <Icon name="search" style={styles.searchIcon} size={20} color="#a1a1a1" />
                          
                            {active === "" ?
                                <View style={styles.inputText} >
                                    <InputField
                                        style={styles.inputF}
                                        placeholder="I am looking for..."
                                        placeholderTextColor="#9E9E9E"
                                        onChangeText={(text) => setSearchCategory(text)}
                                        value={searchCategory}
                                    />
                                      <TouchableOpacity style={styles.clearTextView} onPress={() =>  setSearchCategory("")}>
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
                                   <TouchableOpacity style={styles.clearTextView} onPress={() =>  setSearch("")}>
                                        <Text style={styles.clearText}>X</Text>
                                    </TouchableOpacity>
                                </View>}
                        </View>
                        <TouchableOpacity onPress={cancelSearch}>
                            <Text style={[styles.inputTitle, { color: "#fff" }]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <View style={styles.categoryColumn}>
                <TouchableOpacity style={[!active ? styles.activeColor : null, styles.innerContainer]} onPress={() => setActive("")}>
                    <Text style={[styles.inputTitle, styles.color1]}>All Categories</Text>
                </TouchableOpacity>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={<View />}
                        renderItem={ListView}
                    />
                </View>
            </View>
            {active === "" ?
                <FlatList
                    data={searchCategoryArray}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={ListEmptyComponent}
                    renderItem={ListView2}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    // numColumns={2}
                    // columnWrapperStyle={styles.column}
                />
                : null}


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

            <ModalView
                bottomSheet={bottomSheet}
                onPress={closeSheet}
                onSwipeComplete1={closeCart}
                result={result}
                wishlist={() => itemsAddedToWishlist(result.id)}
                cartNewAmount = {cartNewAmount}
                cartItem = {cartItem}
                cartItemId = {cartItemId}
            />
        </View>
    )
};

export default Search;