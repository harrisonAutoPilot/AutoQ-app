import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, RefreshControl, FlatList, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

import { searchProducts } from "@Request/Product";
import CatelogueCardPlaceholder from "./CatelogueCardPlaceholder";
import { InputField, Header } from "@Component";
import { browseCategories } from "@Request/Category";
import styles from "./style";
import { cleanup } from "@Store/Category";

const ViewTypes = {
    HALF_LEFT: 1,
    HALF_RIGHT: 2
}

const Catalogue = (props) => {
    const dispatch = useDispatch();
    const [searchCategory, setSearchCategory] = useState("");
    const [searchCategoryArray, setSearchCategoryArray] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [err, setErr] = useState("");
    const flatListRef = useRef();

    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })

    const { categories } = useSelector((state) => state.category);
    const { searchedProducts } = useSelector((state) => state.product);

    const openNotification = () => props.navigation.navigate("Notification");
    const openCart = () => props.navigation.navigate("Cart");
    const openDrawer = () => props.navigation.openDrawer();
    const redirectToSearch = () => props.navigation.navigate("Search");

    useEffect(() => {
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

    let { width } = Dimensions.get('window');

    const [dataProvider, setDataProvider] = useState(
        new DataProvider((r1, r2) => {
            return r1 !== r2;
        }))

    const [layoutProvider] = useState(
        new LayoutProvider(
            (index) => {
                if (index % 2 === 0) {
                    return ViewTypes.HALF_RIGHT
                } else {
                    return ViewTypes.HALF_LEFT
                }
            },
            (type, dim) => {

                switch (type) {
                    case ViewTypes.HALF_LEFT:
                        dim.width = width / 2  - 30
                        dim.height = 190
                        break;

                    case ViewTypes.HALF_RIGHT:
                        dim.width = width / 2 -5
                        dim.height = 190
                        break;
                    default:
                        dim.width = 0
                        dim.height = 0
                }

            }
        )
    )

    const rowRenderer = (type, data) => {
        return <ListView item={data} />;
    };

    useEffect(() => {
        if (searchCategoryArray.length) {
            setDataProvider((prevState) => prevState.cloneWithRows(searchCategory))
        } else if (categories.length) {
            setDataProvider((prevState) => prevState.cloneWithRows(categories))
        }
    }, [categories, searchCategoryArray])

    const ListView = ({ item }) => (
        <TouchableOpacity style={[styles.listContainer, styles.elevation]} onPress={() => getAllProducts(item.name, !searchCategoryArray.length ? item.display_name : item.category?.display_name)}>
            <View style={styles.listContainerImageView}>
                <Image source={{ uri: `${URL}${item.image_url}` }} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextView} >
                <View style={styles.listContainerInnerTextView}>
                    <Text style={[styles.title]}>{!searchCategoryArray.length ? item.display_name : item.category?.display_name}</Text>
                </View>
                <View >
                    <Icon name="chevron-right" size={18} color="#757575" />
                </View>

            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.main}>
            <Header title="Catalog" style={styles.btnText} notify={openNotification} cart={openCart} drawer={openDrawer}>

                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <TouchableOpacity style={styles.blueColor} onPress={redirectToSearch}>
                        <View style={[styles.searchSection]}>
                            <Icon name="search" color="rgba(255, 255, 255, 0.8)" size={24} style={styles.searchIcon} />
                            <InputField
                                style={styles.inputField}
                                value={searchCategory}
                                placeholder="Search product by name"
                                placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                onChangeText={(text) => setSearchCategory(text)}
                                editable={false}
                            />
                        </View>
                    </TouchableOpacity>

                </TouchableWithoutFeedback>
            </Header>

            <View style={styles.mainBody}>
                <Text style={globalStyles.title}>PRODUCT CATALOG</Text>

                {err ? <View style={globalStyles.errMainView}>
                    <Text style={globalStyles.failedResponseText}>{err}</Text>
                </View> : null}

                {/* <FlatList
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
                        { length: 170, offset: 170 * index, index }
                    )}
                    ref={flatListRef}
                    extraData={categories}
                /> */}

                {dataProvider && dataProvider.getSize() > 0 ?

                    <RecyclerListView
                        style={{ width: "100%" }}
                        rowRenderer={rowRenderer}
                        dataProvider={dataProvider}
                        layoutProvider={layoutProvider}
                    />
                    :
                    <CatelogueCardPlaceholder />}
            </View>
        </View>
    )
};

export default Catalogue;