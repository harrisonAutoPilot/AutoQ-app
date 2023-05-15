import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, FlatList, RefreshControl, TouchableOpacity, SafeAreaView, StatusBar,  Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import { InputField } from "@Component/index";
import { browseCategories } from "@Request/Category";
import { searchProducts } from "@Request/Product";
import Acon from 'react-native-vector-icons/AntDesign';
import styles from "./style";
import ListItems from "@Screen/Product/ListView";
import BottomSheet from "@Screen/Overlay";
import ProductPlaceholderCard from "@Screen/Product/ProductPlaceholderCard";
import Loader from "@Screen/Loader";
import { getPaymentOptions } from "@Request/paymentOptions";
import { cleanup, cleanProducts } from "@Store/Product";
import PriceBottomSheet from "@Screen/Catalogue/PriceBottomSheet";

const Search = (props) => {
    const dispatch = useDispatch();
 
    const [refreshing, setRefreshing] = useState(false);

    const bottomSheetPrice = useRef();

    const [search, setSearch] = useState("");

    const [searchCategory, setSearchCategory] = useState("");

    const [active, setActive] = useState("");

    const [searchArray, setSearchArray] = useState([]);

    const [priceCat, setPriceCat] = useState("CHEMIST")

    const [objectValues, setObjectValues] = useState(props?.route.params?.objectValues)

    const [searchCategoryArray, setSearchCategoryArray] = useState([]);

    const [result, setResult] = useState({});

    const [visible, setVisible] = useState(false);

    const [request, setRequest] = useState(false);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const [searching, setSearching] = useState(false);

    const [getCategory, setCategory]= useState("");

    const [categoryId, setCategoryId] = useState("")

    const [searchName, setSearchName] = useState("");

    const [creditParams, setCreditParams]= useState("");


    const bottomSheet = useRef();


    const { categories } = useSelector((state) => state.category);

    const { status, errors, searchedProducts, searchProductsData } = useSelector((state) => state.product);

    const redirectToRequest = () => props.navigation.navigate("ProductRequest");


    const sortPrice = (item) => {
        console.log("the item", item)
        setPriceCat(item)
        bottomSheetPrice.current.close()
      }
    
    const callPrice = () => {
        bottomSheetPrice?.current?.show();
    
      };

    useEffect(() => {
        dispatch(browseCategories());
        dispatch(getPaymentOptions());
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
            dispatch(cleanProducts());
        };
    }, []);

    useEffect(() => {
        if (search.length) {
            searchItem();
        } else if (!search.length) {
            setSearchArray([]);
            setRequest(false)
        }
        if (searchCategory.length && objectValues) {
            searchCategoryItem();
        } else if (!searchCategory.length) {
            setSearching(false)
            setSearchCategoryArray([]);
            setRequest(false)
        }
    }, [search.length, searchCategory, objectValues]);


    useEffect(() => {
  
        if (active === "") {
        cleanAllCategory()
        }else{
            searchCategoryItem();
        }
       

    }, [objectValues]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    // Show the Products in the Categories
    const showMapCategory = (category, id) => {
        dispatch(cleanProducts());
        dispatch(cleanup())
        setSearchArray([])
        setCategoryId(id)
        setCategory(category)
        setSearchName(category)
        dispatch(searchProducts({ search: category,category_id: id, no:1, type:objectValues?.option, idd:objectValues?.idd}));
        setActive(category);
        setCreditParams("")
      
        
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
        setRequest(true);
        setSearchArray(searched)
    };

    useEffect(() => {
        if (props.route.params?.item) {
            setSearchArray(props.route.params.item);
            setActive(props.route.params?.category)
            setCreditParams(props.route.params.creditType)
        }
    }, [props.route.params?.item]);




    const searchCategoryItem = () => {
        setRequest(true);
        setSearchName(searchCategory);
        dispatch(cleanProducts());
        dispatch(searchProducts({ search: searchCategory.toLowerCase(), category_id: categoryId, no: 1,type:objectValues?.option, idd:objectValues?.idd }))
        setSearching(true)
    
         setSearchCategoryArray(searchedProducts)
    };

    const redirectToFilter = () => {
        props.navigation.navigate("Filter", { name:"Search", category: active })};

        useEffect(() => {
            if (searchedProducts.length && searchCategory.length) {
                function getUniqueListBy(arr, key) {
                    return [...new Map(arr.map(item => [item[key], item])).values()]
                }
                const arr1 = getUniqueListBy(searchedProducts, 'id')
                setSearchCategoryArray(arr1);
                setSearching(false)
            }
            else {
                setSearchCategoryArray([]);
            }
    
            // console.log("this is to check the category", props?.route?.params?.item)
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
        dispatch(cleanProducts())
        dispatch(searchProducts({ search: searchName, category_id : categoryId, no:1,type:objectValues.option, idd:objectValues.idd }));
        wait(3000).then(() => setRefreshing(false));
    }, []);

    const ListView = ({ item }) => {

        return <View style={[styles.listContainer, active === item.name ? styles.activeColor : null]}>
            <TouchableOpacity onPress={() => { showMapCategory(item.name, item.id); setSearch("") }}>
                <Text style={[styles.inputTitle, styles.color2]}>{item?.display_name?.trim()}</Text>
            </TouchableOpacity>
        </View>
    };

    const ListItem = ({ item }) => {

        return <ListItems
            item={item}
            onPress={() => itemsAddedToWishlist(item.id)}
            getItem={() => getItem(item.id)}
            creditType={creditParams ? creditParams : ""}
        />
    };

    const ListView2 = ({ item, index }) => {

        return <ListItems
            item={item}
            onPress={() => itemsAddedToWishlist(item.id)}
            getItem={() => getItem(item.id)}
        />
    };

    // Get the ID of the product to filter and show the Modal
    const getItem = (id) => {
        filterProduct(id);
        setVisible(true);
        setRequest(false)
        bottomSheet.current?.present()
    };

    const loadMore = () => {
        dispatch(searchProducts({ search: searchName, no: searchProductsData?.current_page + 1, type:objectValues.option, idd:objectValues.idd  }));
    };

    const cleanAllCategory = () => {
        setActive("");
        setSearchCategory("");
        dispatch(cleanProducts());
        dispatch(cleanup)
    }

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
                <TouchableOpacity style={[!active ? styles.activeColor : null, styles.innerContainer]} onPress={cleanAllCategory}>
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
            <TouchableOpacity style={styles.cartCover} onPress={callPrice}>
                    <Acon name="tag" color="#fff" size={16} />
                    <Text style={styles.cartText}>{priceCat}</Text>
                    <Acon name="down" color="#fff" size={14} />
                </TouchableOpacity>
            <View style={styles.filterCover}>
                <View style={styles.header}>
                    <View style={styles.miniHeaderView}>
                        {/* <Icon name="grid" size={14} color="#616161" /> */}
                        <View style={styles.margin}>
                            <Text style={[styles.inputTitle, styles.color]} numberOfLines={1}></Text>
                        </View>
                    </View>
                    {active && searchedProducts.length  && !searchCategory.length && !search.length ?
                        <TouchableOpacity style={[styles.miniHeaderView2, styles.filterView]} onPress={redirectToFilter}>
                            <Icon name="chevron-down" size={14} color="#212121" />
                            <View style={styles.margin}>
                                <Text style={styles.filterText}>Filter3</Text>
                            </View>
                        </TouchableOpacity> : null}
                </View>
            </View>
            {active === ""
                ?
                searching ?

                    <ProductPlaceholderCard /> :

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

                <FlatList
                    // onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                    showsVerticalScrollIndicator={false}
                    data={active ? !searchArray.length ? searchedProducts : searchArray : []}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<View />}
                    renderItem={ListItem}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (searchProductsData?.current_page < searchProductsData?.last_page) {
                            loadMore()
                        }
                    }}
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

        <PriceBottomSheet
            bottomSheet={bottomSheetPrice} 
            props={props}
            objList = {(item) =>  setObjectValues(item)}
            sort={sortPrice}
            />

        </View>
    )
};

export default Search;