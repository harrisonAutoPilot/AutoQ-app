import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import { useFocusEffect } from '@react-navigation/native';
import { searchProducts } from "@Request/Product";

import { InputField, Header, EmptyPlaceHolder } from "@Component";
import { browseCategories } from "@Request/Category";
import styles from "./style";
import globalStyle from "@Helper/GlobalStyles";

const Catalogue = (props) => {
    const dispatch = useDispatch();
    const [searchCategory, setSearchCategory] = useState("");
    const [searchCategoryArray, setSearchCategoryArray] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [err, setErr] = useState("");
    const flatListRef = useRef()

    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })

    const { status, errors, categories } = useSelector((state) => state.category);
    const { searchedProducts } = useSelector((state) => state.product);

    console.log(searchedProducts, "hooooo")
    const openDrawer = () => props.navigation.openDrawer();

    useFocusEffect(
        useCallback(() => {
            dispatch(browseCategories())
        }, [])
    );

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
    const goToCat = () => props.navigation.navigate("Home");

    const ListView = ({ item }) => (
        <TouchableOpacity style={[styles.listContainer, styles.elevation]} onPress={() => getAllProducts(item.name, item.display_name)}>
            <View style={styles.listContainerImageView}>
                <Image source={{ uri: `${URL}${item.image_url}` }} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextView} >
                <View style={styles.listContainerInnerTextView}>
                    <Text style={[styles.title]}>{item.display_name}</Text>
                </View>
                <View >
                    <Icon name="chevron-right" size={18} color="#757575" />
                </View>

            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.main}>
            <Header title="Product" style={styles.btnText} onPress={goToCat} drawer={openDrawer}>

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
                    // ListEmptyComponent={CategoryCardPlaceholder}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 10 }} />}
                    numColumns={2}
                    columnWrapperStyle={styles.column}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />

                    }
                />
            </View>
        </View>
    )
};

export default Catalogue;