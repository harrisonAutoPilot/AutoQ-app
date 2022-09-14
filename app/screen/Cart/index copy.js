import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, CheckBox, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

import AddCartPlaceholder from './addCartPlaceholder';
import styles from "./style";
import { listCart, deleteCart, deleteAllCart, deleteMultipleCart, updateCart } from "@Request/cart";
import { addToWishlistProducts, removeFromWishlistProducts } from "@Request/products";
import AddCardListEmptyBig from "@Screen/Home/addCartListEmptyBig";
import BottomPlaceholder from "./bottomPlaceholderLoader";
import { TrackBtn, Header, Check } from "@Component";
import Loader from "@Screen/Loader";
import { cleanup } from "@Store/cart";
import { cleanup as clean } from "@Store/product";
import { cleanup as cleanOrder } from "@Store/order";
import { set } from "immer/dist/internal";
import ConfirmDelete from "./ConfirmDelete";
import ConfirmSelected from "./ConfirmSelectedDelete";


const Cart = (props) => {
    const dispatch = useDispatch();
    const [err, setErr] = useState("");
    const [loader, setLoader] = useState(false);
    const [selDel, setSelDel] = useState([])
    const [check, setCheck] = useState([])
    const [copyCartAmount, setCopyCartAmount] = useState({});
    const [copyCart, setCopyCart] = useState([]);
    const [product, setProduct] = useState([]);
    const [itemDeleted] = useState(false);
    const [itemSelected, setItemSelected] = useState(false);
    const [scrollText, setScrollText] = useState(true);
    const [allSelected, setAllSelected] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false);
    const [selCount, setSelCount] = useState()
    const [showConfirmSelected, setShowConfirmSelected] = useState(false);
    const { items, removeCart, removeAllCart, removeMultipleCart, errors, updateCartItems, loaded } = useSelector((state) => state.cart);
    const { wishlistStatus } = useSelector((state) => state.product);


    const browse = () => props.navigation.navigate("Browse");

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, { marginBottom: 10 }]}>
                <Text style={globalStyles.failedResponseText}>{err}</Text>
            </View>
        ),
    };

    useFocusEffect(
        useCallback(() => {
            dispatch(cleanOrder())
        }, [])
    );



    useEffect(() => {
        if (items.carts && items.carts.data?.length > 0) {
            let quantity = items.carts.data.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity,
                    cart_id: item.id,
                    total_amount: item.total_amount,
                    product: { ...item.product },
                }

            })

            setCopyCart(quantity);

        }
        // else {
        //         setCopyCart(items.carts)
        //     }


    }, [items.carts?.data])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {
        wait(500).then(() => {
            setErr(msg);
            if (suc) {
                setLoader(false)
                dispatch(listCart())
            } else {
                setLoader(false)
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 150
                })
            }
        })
        wait(2000).then(() => {
            dispatch(cleanup());
            dispatch(clean())
        })
    }, []);

    const refreshView2 = useCallback((msg, suc) => {
        wait(500).then(() => {
            setErr(msg);
            if (suc) {
                setLoader(false)
                props.navigation.navigate("CheckOut");
            } else {
                setLoader(false)
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        })
        wait(2000).then(() => {
            dispatch(cleanup());
            dispatch(clean())
        })
    }, []);

    useEffect(() => {
        // dispatch(listCart());
        // Change the state every second or the time given by User.
        const interval = setInterval(() => {
            setScrollText((scrollText) => !scrollText);
        }, 1000);

        return () => {
            dispatch(cleanup());
            setCopyCart([])
            clearInterval(interval);
        }
    }, []);


    const redirectToCheckOut = () => {
        setLoader(true)
        dispatch(updateCart(copyCart))
    }

    useEffect(() => {
        if (removeCart === "failed") {
            refreshView(errors?.msg, "")
        } else if (removeCart === "success") {
            refreshView("", "Item removed")
        } else {
            setErr("");
        }
    }, [removeCart]);


    useEffect(() => {
        if (removeAllCart === "failed") {
            refreshView(errors?.msg, "")
        } else if (removeAllCart === "success") {
            setCopyCart([])
            setSelDel([])
            refreshView("", "Cart items removed")

        } else {
            setErr("");
        }
    }, [removeAllCart]);


    useEffect(() => {
        if (removeMultipleCart === "failed") {
            refreshView(errors?.msg, "")
        } else if (removeMultipleCart === "success") {
            setSelDel([])
            refreshView("", "Cart items removed")

        } else {
            setErr("");
        }
    }, [removeMultipleCart]);

    useEffect(() => {
        if (updateCartItems === "failed" && props.navigation.isFocused()) {
            refreshView2(errors?.msg, "")
        } else if (updateCartItems === "success" && props.navigation.isFocused()) {
            refreshView2("", "Item added")
        } else {
            setErr("");
        }
    }, [updateCartItems]);




    useEffect(() => {
        if (wishlistStatus === "success") {
            refreshView("", "Added to Saved Items");
        } else if (wishlistStatus === "failed") {
            refreshView(errors?.msg, "")
        } else {
            setErr("");
        }
    }, [wishlistStatus]);

    const loadMore = () => {
        dispatch(listCart({no: items.carts?.current_page + 1}));
    }

 
    const openDrawer = () => props.navigation.openDrawer();
    const openFavourite = () => props.navigation.navigate("SavedItem", { id: 1 })
    const openNotification = () => props.navigation.navigate("Notification");

    const increaseCart = ({ id, quantity, product: { stock_count } }) => {
        if (quantity < stock_count) {
            let filteredCart = copyCart.filter(quantity => {

                if (quantity.id === id) {
                    quantity.quantity = quantity.quantity + 1
                    quantity.total_amount = parseInt(quantity.product.price_per_pack) * parseInt(quantity.quantity)
                    return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id }

                }
            })

            setCopyCartAmount(filteredCart[0])
            let copiedcopyCartAmount = filteredCart

            var res = copyCart.map(obj => copiedcopyCartAmount.find(quantity => quantity.cart_id === obj.id) || obj);
            setCopyCart(res)
            return res
        }
    };

    const decreaseCart = ({ id, quantity, product: { stock_count } }) => {
        // if (quantity < stock_count || quantity === stock_count) {
        let filteredCart = copyCart.filter(quantity => {
            if (quantity.id === id && quantity.quantity > 1) {
                quantity.quantity = quantity.quantity - 1
                quantity.total_amount = parseInt(quantity.product.price_per_pack * quantity.quantity)
                return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id, }

            }
        })

        setCopyCartAmount(filteredCart[0])

        let copiedcopyCartAmount = filteredCart
        var res = copyCart.map(obj => copiedcopyCartAmount.find(quantity => quantity.cart_id === obj.id) || obj);
        setCopyCart(res)
        return res
        // }
    };

    const calculateFinalAmount = () => {
        return commafy(copyCart.map(item => item.total_amount).reduce((prev, curr) => prev + curr, 0))
    }

    const deleteFromCart = (id) => {
        let deletedItem = copyCart.filter((item => item.id !== id))
        setCopyCart(deletedItem)
        dispatch(deleteCart(id))
    };

    const deleteAll = () => {
        setShowConfirm(false)
        dispatch(deleteAllCart())


    }
    const deleteSelected = () => {
        setShowConfirmSelected(false)
        let itemId = { items: selDel }
        console.log("obimzzz", itemId);
        dispatch(deleteMultipleCart(itemId))
    }


    const handleCheck = (id) => {
        if (selDel === []) {
            setItemSelected(false)
        }
        let helperArray = selDel;
        let itemIndex = helperArray.indexOf(id);
        if (helperArray.includes(id)) {
            helperArray.splice(itemIndex, 1)
            console.log("uuu", helperArray.includes(id));
            setItemSelected(helperArray.includes(id))
        } else {
            helperArray.push(id)
            selDel.includes(id)
          
           

            // setItemSelected(helperArray.includes(id))
        }
        setSelDel(helperArray)
        setSelCount(Object.keys(selDel).length)
        console.log("checking", helperArray);
        console.log("try", selDel.includes(id));

    }


   


    const itemsAddedToWishlist = async (id) => {
        const productId = { product_id: id }
        await dispatch(addToWishlistProducts(productId));
    };

    const itemsRemovedFromWishlist = async (id) => {
        await dispatch(removeFromWishlistProducts(id));
    };

    const ListView = ({ item }) => (

        <View style={[styles.midCard, styles.elevation]} label={item?.id}>


            <Check
                key={item.id}
                onPress={() => handleCheck(item.id)}
                id={() => handleCheck(item.id)}
                isChecked={selDel.includes(item.id)}
            />

            <View style={styles.cover}>

                <View style={styles.imgCover}>
                    <Image source={{ uri: item.product?.product_images ? `${URL}${item.product?.product_images[0]?.url}` : null }} style={styles.drugImg} />
                </View>
                <View style={styles.descCover}>
                    <View>
                        <Text style={styles.descText} numberOfLines={2}>{item.product?.name}</Text>
                    </View>

                    <View style={styles.priceCover}>
                        <Text style={styles.priceText}>₦{item?.total_amount !== "" && item?.total_amount !== null ? commafy(item.total_amount) : 0}</Text>
                    </View>

                </View>

                <View style={styles.rightCover}>
                    <View style={styles.iconCover}>

                        {!item.product.is_saved_item ?
                            <TouchableOpacity onPress={() => itemsAddedToWishlist(item.product.id)}>
                                <Icon name="heart" size={18} color="#BDBDBD" />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => itemsRemovedFromWishlist(item.product.id)}>
                                <FIcon name="cards-heart" size={18} color="#7CCF24" />
                            </TouchableOpacity>}

                        <TouchableOpacity style={styles.thrash} onPress={() => deleteFromCart(item.id)}>
                            <Icon name="trash-2" size={18} color="#D32F2F" />
                        </TouchableOpacity >
                    </View>


                    <View style={styles.increaseCartMainAmountView} >
                        <View style={styles.cartAmountView}>
                            <TouchableOpacity style={styles.increase} onPress={() => { decreaseCart(item); }}>
                                <Icon name="minus" color="#757575" />
                            </TouchableOpacity>
                            <View style={styles.increaseText}>
                                <Text style={styles.productTitle}>{item.quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.decrease} onPressOut={() => { increaseCart(item); }}>
                                <Icon name="plus" color="#757575" />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

            </View>
        </View>

    )

    let { width } = Dimensions.get('window');

    const [dataProvider, setDataProvider] = useState(
        new DataProvider((r1, r2) => {
            return r1 !== r2;
        }))

    const [layoutProvider] = useState(
        new LayoutProvider(
            (index) => 0,
            (type, dim) => {
                dim.width = width
                dim.height = 100
            }
        )
    )


    // console.log("zzzzz",items?.carts?.current_page );

    const rowRenderer = (type, data) => {
        return <ListView item={data} />;
    };


    useEffect(() => {
        setCopyCartAmount({})
        if (items.carts) {
            setDataProvider(dataProvider.cloneWithRows(copyCart))
        }

    }, [copyCart])


    return (
        <View style={styles.view}>
            <View style={styles.body}>
                <Header drawer={openDrawer} title="My Cart" favourite={openFavourite} notify={openNotification} />
            </View>
            {items.carts?.data?.length > 0 ?
                <View style={styles.deleteBarContainer}>
                    <Text style={styles.selText}>{selCount}</Text>


                    <View style={styles.deleteBtnContainer}>

                        {
                            selCount > 0 ?
                                <TouchableOpacity onPress={() => setShowConfirmSelected(true)}>
                                    <View style={styles.delBtn}>
                                        <Text style={styles.delText}>Delete selected</Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                null
                        }
                        <TouchableOpacity onPress={() => setShowConfirm(true)}>
                            <View style={styles.delBtn}>

                                <Text style={styles.delText}>Delete all</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                null
            }
            <View style={styles.mainBody}>
                {err ? <Toast config={toastConfig} /> : null}
            </View>

            <View style={styles.bottomCover}>

                {loaded !== "success" && itemDeleted
                    ?
                    <AddCartPlaceholder /> :
                    dataProvider && dataProvider.getSize() > 0 ?

                        <RecyclerListView
                            style={{ width: "100%" }}
                            rowRenderer={rowRenderer}
                            dataProvider={dataProvider}
                            layoutProvider={layoutProvider}
                            extendedState={copyCartAmount}
                            onEndReachedThreshold={0.5}
                            onEndReached={() => {
                                if (items.carts?.current_page < items.carts?.total) {
                                    loadMore()
                                }
                            }}
                        />
                        :
                        <AddCardListEmptyBig browse={browse} />
                }


            </View>
            {items.total_amount && loaded === "success" && copyCart && copyCart.length ?

                <View style={styles.bottomDownCover}>

                    <View style={styles.orderCover}>

                        <Text style={styles.orderText}>Order Summary</Text>
                        {(items.carts.data.length > 3) ?
                            <View style={[styles.scrollTextCover, { display: scrollText ? 'none' : 'flex' }
                            ]} >
                                <Text
                                    style={styles.textStyle}>
                                    Scroll down to view more Items
                                </Text>
                            </View>
                            : null}

                    </View>
                    <View style={styles.subtotalCover}>
                        <Text style={styles.subText}>Subtotal</Text>
                        <Text style={styles.subText}>₦{items.total_amount !== "" ? calculateFinalAmount() : null}</Text>
                    </View>
                    <View style={styles.totalCover}>
                        <Text style={styles.totalText2}>Total</Text>

                        <Text style={styles.totalText2}>₦{items.total_amount !== "" ? calculateFinalAmount() : null}</Text>

                    </View>

                    <View style={[styles.addBtnCover, styles.orderBtn]}>
                        <TrackBtn title="Check Out" style={styles.addressBtn2} onPress={redirectToCheckOut} />
                    </View>

                </View>
                :
                loaded !== "success" ?
                    <BottomPlaceholder /> : null}
            <Loader isVisible={loader} />

            <ConfirmDelete
                visibleRetrieve={showConfirm}
                returnBack={() => setShowConfirm(false)}
                Confirm={() => deleteAll()}
            />

            <ConfirmSelected
                visibleRetrieve1={showConfirmSelected}
                returnBack1={() => setShowConfirmSelected(false)}
                confirmSelected={() => deleteSelected()}
            />

        </View>
    )
};

export default Cart;