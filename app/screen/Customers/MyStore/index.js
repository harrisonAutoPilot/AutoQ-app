import React, { useCallback, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Platform,} from "react-native";

import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import EmptyStore from "@Component/Empty/emptyStore"
import { COHeader as Header } from "@Component";
import DashedLine from 'react-native-dashed-line';
import styles from './style';
import { getUserStore} from "@Request/Store";
// import { cleanup } from "@Store/Stores";
import StorePlaceholder from "./StorePlaceholder";


const MyStore = (props) => {
    const dispatch = useDispatch();
    const { status, usersStore } = useSelector((state) => state.store);

    useEffect(() => {
        dispatch(getUserStore(props.route.params?.id))
        // return () => dispatch(cleanup());
    }, [])

    const goBack = () => props.navigation.goBack();
    const addStore = () => props.navigation.navigate("AddStore", { id: props.route.params?.id });

    const details = (item) => {
        props.navigation.navigate("StoreDetails", {item, id:props.route.params?.id})
    };

  
    const getRandomColor = (id) => {
        let ids = parseInt(id)
        let shade;

        if (ids % 2 === 0) {
            shade = require("@Assets/image/storeN.png");
        } else {
            shade = require("@Assets/image/storeG.png");
        }
        return shade
    }


    const RenderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => details(item)} style={styles.card}>
                <View style={styles.cardImgCover}>
                    <Image source={getRandomColor(item.id)} style={styles.storeImg} />
                </View>
                <View style={styles.cardDesCover}>
                    <Text style={styles.storeName}>{item.name}</Text>
                    <Text style={styles.storeAddress} numberOfLines={1}>{item.address}</Text>
                </View>
                <View>
                    <View style={styles.cardArrowCover}>
                        <Text style={styles.storeView}>view</Text>
                        <Image source={require("@Assets/image/greater.png")} style={styles.greaterImg} />
                    </View>

                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.main}>
            <Header title="Stores" onPress={goBack} styleView={styles.body} />

            <View style={styles.addContainer}>
              
                { Platform.OS === "android" ?
                <TouchableOpacity style={styles.storeBtn} onPress={addStore}>
                    <View style={styles.addTextCover}>
                        <Text style={styles.addStoreTextPlus}>+</Text>
                        <Text style={styles.addStoreText}>Add new store</Text>
                    </View>
                </TouchableOpacity>

                :
                <TouchableOpacity style={styles.storeBtn1} onPress={addStore}>
                        <DashedLine style={styles.dashStyleUp} dashLength={3} dashThickness={1} dashGap={2} dashColor='#469D00' />
                        <DashedLine style={styles.dashStyleL} axis='vertical' dashLength={3} dashThickness={1} dashGap={2} dashColor='#469D00' />
                       <View style={styles.addTextCover}>
                           <Text style={styles.addStoreTextPlus}>+</Text>
                           <Text style={styles.addStoreText}>Add new store</Text>
                       </View>
                       <DashedLine style={styles.dashStyleR} axis='vertical' dashLength={3} dashThickness={1} dashGap={2} dashColor='#469D00' />
                       <DashedLine style={styles.dashStyleDw} dashLength={3} dashThickness={1} dashGap={2} dashColor='#469D00' />
                   </TouchableOpacity>
                 
                   }

            </View>
            {status === "pending"  || status === "idle" ? <StorePlaceholder />
                :
                <FlatList
                    data={usersStore}
                    renderItem={RenderItem}
                    ListEmptyComponent={EmptyStore}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    showsVerticalScrollIndicator={false}

                />
            }
        </View >
    )
};

export default MyStore;