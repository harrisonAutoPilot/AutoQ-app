import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import { searchProducts } from "@Request/Product";
 import CatelogueCardPlaceholder from "./CatelogueCardPlaceholder";
import { InputField, Header } from "@Component";
import { browseCategories } from "@Request/Category";
import styles from "./style";
import globalStyle from "@Helper/GlobalStyles";
import {cleanup} from"@Store/Category"


const Catalogue = (props) => {
    const dispatch = useDispatch();
    const [searchCategory, setSearchCategory] = useState("");
    const [searchCategoryArray, setSearchCategoryArray] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [err, setErr] = useState("");
    const flatListRef = useRef()

    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })

    const { categories } = useSelector((state) => state.category);
    const { searchedProducts } = useSelector((state) => state.product);

    const openNotification = () => props.navigation.navigate("Notification");
    const openCart = () => props.navigation.navigate("Cart");
    const openDrawer = () => props.navigation.openDrawer();

    useEffect(()=> {
            dispatch(browseCategories())
    }, []);


    useEffect(() => {
        if (searchCategory.length) {
            searchCategoryItem();
        } else if (!searchCategory.length) {
            setSearchCategoryArray([]);
        }
    }, [searchCategory]);

    const searchCategoryItem = () => {
        dispatch(searchProducts(searchCategory.toLowerCase()))
        setSearchCategoryArray(searchedProducts)
        toTop()
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(browseCategories())
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const getAllProducts = (category, display_name) => {
        props.navigation.navigate("Product", { category, display_name })
    }

    const dismissKeyboard = () => Keyboard.dismiss();

    const ListView = ({ item }) => (
        <TouchableOpacity style={[styles.listContainer, styles.elevation]} onPress={() => getAllProducts(item.name,  !searchCategoryArray.length ? item.display_name : item.category?.display_name)}>
            <View style={styles.listContainerImageView}>
                <Image source={{ uri: `${URL}${item.image_url}` }} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextView} >
                <View style={styles.listContainerInnerTextView}>
                    <Text style={[styles.title]}>{!searchCategoryArray.length  ? item.display_name: item.category?.display_name}</Text>
                </View>
                <View >
                    <Icon name="chevron-right" size={18} color="#757575" />
                </View>

            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.main}>
            <Header title="Product" style={styles.btnText} notify={openNotification} cart={openCart} drawer={openDrawer}>

            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={styles.blueColor}>
                    <View style={[styles.searchSection]}>
                        <Icon name="search" color="rgba(255, 255, 255, 0.8)" size={24} style={styles.searchIcon} />
                        <InputField
                            style={styles.inputField}
                            value={searchCategory}
                            placeholder="Search product name"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onChangeText={(text) => setSearchCategory(text)}
                        />
                    </View>
                </View>

            </TouchableWithoutFeedback>
            </Header>

            <View style={styles.mainBody}>
                <Text style={globalStyle.title}>PRODUCT CATALOG</Text>

                {err ? <View style={globalStyle.errMainView}>
                    <Text style={globalStyle.failedResponseText}>{err}</Text>
                </View> : null}

                <FlatList
                    data={ searchCategoryArray.length ? searchCategoryArray : categories}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={CatelogueCardPlaceholder}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 10 }} />}
                    numColumns={2}
                    columnWrapperStyle={styles.column}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />

                    }
                    showsVerticalScrollIndicator={false}
                    getItemLayout={(data, index) => (
                        { length: 100, offset: 100 * index, index }
                    )}
                    ref={flatListRef}
                    extraData={categories}
                />
            </View>
        </View>
    )
};

export default Catalogue;