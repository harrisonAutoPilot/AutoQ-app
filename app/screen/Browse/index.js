import React, { useEffect, useState, useCallback,useRef } from "react";
import { View, Text, FlatList, Image, RefreshControl, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import { useFocusEffect } from '@react-navigation/native';

import globalStyle from "@Helper/globalStyles";
import styles from "./style";
import { browseCategories } from "@Request/category";
import Header from "@Component/Header";
import AddListEmptyComponentMd from "@Screen/Home/addListEmptyMd";
import CategoryCardPlaceholder from "./categoryCardPlaceholder";
import URL from "@Helper/constant";

const Browse = (props) => {
    const dispatch = useDispatch();
    const [err, setErr] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const openDrawer = () => props.navigation.openDrawer();
    const bottomSheet = useRef();
    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 })

    const openNotification = () => props.navigation.navigate("Notification");
    const { status, errors, categories } = useSelector((state) => state.category);

    useFocusEffect(
        useCallback(() => {
            dispatch(browseCategories())
    
         }, [])
       );

    useEffect(() => {
        if (status === "failed" && props.navigation.isFocused()) {
            setErr(errors?.msg)
        }
    }, [errors]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const refreshView = useCallback(() => {
        setErr("")
        setRefreshing(true);
        dispatch(browseCategories())
        wait(3000).then(() => setRefreshing(false));
    }, []);
    const closeSheet = () => {
        bottomSheet.current.close();
    }
    const openSheet = () => {
        bottomSheet.current.show();
    }
    const getAllProducts = (category, display_name) => props.navigation.navigate("BrowseProduct", { category, display_name })

    const ListView = ({ item }) => (
        <TouchableOpacity style={[styles.listContainer, styles.elevation]} onPress={() => getAllProducts(item.name, item.display_name)}>
                <View style={styles.listContainerImageView}>
                    <Image source={{ uri: `${URL}${item.image_url}` }} style={styles.image} resizeMode="cover" />
                </View>
                <View style={styles.listContainerTextView} >
                    <View>
                        <Text style={[globalStyle.title, styles.title]}>{item.display_name}</Text>
                    </View>
                    <View >
                        <Icon name="chevron-right" size={18} color="#757575" />
                    </View>

                </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* <Header title="Browse Categories" drawer={openDrawer} favourite={openFavourite} notify={openNotification} /> */}
            <Header title="Browse Categories" drawer={openDrawer} favourite={openFavourite}  />
            <View style={styles.mainBody}>
                <Text style={globalStyle.title}>ALL CATEGORIES</Text>

                {err ? <View style={globalStyle.errMainView}>
                    <Text style={globalStyle.failedResponseText}>{err}</Text>
                </View> : null}

                <FlatList
                    data={categories}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={CategoryCardPlaceholder}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
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

export default Browse;