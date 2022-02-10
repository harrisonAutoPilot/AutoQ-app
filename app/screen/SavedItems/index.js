import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import globalStyle from "@Helper/globalStyles";
import styles from "./style";
import { searchProducts, addToWishlistProducts, removeFromWishlistProducts, listWishlistProducts } from "@Request/products";
import AddListEmptyComponentMd from "@Screen/Home/addListEmptyMd";
import ModalView from "@Screen/CartOverlay";
import List from "@Screen/BrowseProducts/ListView";
import NavHeader from "@Component/NavHeader";
import { SuccessMsgViewTwo } from "@Component/index";
import { cleanup } from "@Store/product";

const SavedItem = (props) => {
    const dispatch = useDispatch();
    const scrollY = useRef(new Animated.Value(0)).current;
    const [showModal, setShowModal] = useState(false);
    const [err, setErr] = useState("");
    const [result, setResult] = useState({});
    const [showMsg, setShowMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [remove, setRemove]  = useState(false);
    const bottomSheet = useRef();
    const [copiedWishList, setCopiedWishList] = useState([]);
    const ITEM_SIZE = 120

    const { status, errors, update, wishList, popularProducts, wishlistStatus } = useSelector((state) => state.product);

    const closeCart = () => setShowModal(!showModal);

    useEffect(() => {
        setCopiedWishList([...wishList])
        }, [wishList]);

    useEffect(() => {
        if (status === "failed" && props.navigation.isFocused()) {
            setErr(errors?.msg)
        }
    }, [errors]);

    useEffect(() => {
        if (update === "success" && props.navigation.isFocused()) {
            setSuccessMsg("Added");
            setErr("");
            dispatch(searchProducts(props.route.params?.category));
            setShowMsg(true);
        } else if (update === "failed" && props.navigation.isFocused()) {
            setSuccessMsg("");
            setErr(errors?.msg);
            setShowMsg(true);
        }
    }, [update]);

    const closeSheet = () => {
        bottomSheet.current.close();
    }
    const openSheet = () => {
        bottomSheet.current.show();
    }


    useEffect(() => {
        if (wishlistStatus === "success" && props.navigation.isFocused()) {
            setErr("");
            if(remove) return refreshView2("", "Removed from Saved Items");
            refreshView2("", "Added to Saved Items");  
        } else if (wishlistStatus === "failed" && props.navigation.isFocused()) {
            setSuccessMsg("");
            setShowMsg(true);
            refreshView2(errors?.msg, "")
        } else {
            setErr("");
            setSuccessMsg("");
        }
    }, [wishlistStatus])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView2 = useCallback((msg, suc) => {
        wait(1000).then(() => {
            if(msg){
                setErr(msg);
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 200
                })
                
            }else{
                setSuccessMsg(suc);
                dispatch(listWishlistProducts());
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        })

        wait(4000).then(() => { dispatch(cleanup()); })
    }, []);

    const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView4]}>
                <Text style={globalStyle.failedResponseText}>{err}</Text>
            </View>
        ),

        tomatoToast: () => (
                <SuccessMsgViewTwo title={successMsg} />
        )
    };

    const itemsAddedToWishlist = async (id) => {
        const productId = { product_id: id }
        await dispatch(addToWishlistProducts(productId));
    };

    const itemsRemovedFromWishlist = async (id, item) => {
        setRemove(true);
        let items = copiedWishList.filter(item => item.id !== id);
        setCopiedWishList(items)
        await dispatch(removeFromWishlistProducts(id));
    };

    const goBack = () => props.navigation.navigate("Home");

    // Get the ID of the product to filter and show the Modal
    const getItem = (id) => {
        filterProduct(id);
        bottomSheet.current.show();
        // setShowModal(true);
        setShowMsg(true);

    };

    const filterProduct = (id) => {
        let resultArray;
        if (props.route.params.id === 1) {
            resultArray = wishList.filter(item => item.id === id)[0];
            return setResult(resultArray.product)
        } else {
            resultArray = popularProducts.filter(item => item.id === id)[0];
            return setResult(resultArray)
        }
    };

    const ListView = ({ item, index }) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] });

        return <List
            item={item}
            getItem={() => getItem(item.id)}
            scale={scale}
            onPress={() => itemsAddedToWishlist(item.id)}
            onRemove={() => itemsRemovedFromWishlist(item.id, item)}
        />
    };

    return (
        <View style={styles.view}>
            <NavHeader title={props.route.params.id === 1 ? "My Saved Items" : "Popular Items"}
                onPress={goBack}
                styleView={styles.body}
                styles={styles.headerText}
                statusBar="#fff" />
            <View style={styles.mainBody}>

            {err ? <Toast config={toastConfig} /> : null}
            {/* {successMsg ? <Toast config={toastConfig} /> : null} */}

            </View>
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                showsVerticalScrollIndicator={false}
                data={props.route.params.id === 1 ? copiedWishList : popularProducts}
                keyExtractor={item => item.id}
                ListEmptyComponent={AddListEmptyComponentMd}
                renderItem={ListView}
                ListFooterComponent={<View style={{ height: 50 }} />}
                columnWrapperStyle={styles.column}
            />

            <ModalView
                 bottomSheet={bottomSheet}
                 onPress={closeSheet}
                result={result}
            />

            <ModalView
                 bottomSheet={bottomSheet}
                 onPress={closeSheet}
                result={result}
            />
        </View>
    )
};

export default SavedItem;