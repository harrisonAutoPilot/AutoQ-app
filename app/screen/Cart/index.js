import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, SafeAreaView,RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

import BottomPlaceholder from "./bottomPlaceholderLoader";
import CartPlaceholderComponent from "./CartPlaceholderComponent";
import styles from "./style";
import { listCart, deleteCart,deleteMultipleCart, deleteAllCart, updateCart } from "@Request/Cart";
import { AuthBtn as Btn, SuccessMsgViewTwo, COHeader as Header, AddCartListEmptyBig, Check } from "@Component";
import Loader from "@Screen/Loader";
import { cleanup, cleanList } from "@Store/Cart";
import { cleanup as clean } from "@Store/Product";
import ConfirmDelete from "./ConfirmDelete";
import ConfirmSelected from "./ConfirmSelectedDelete";


const Cart = (props) => {
    
    const dispatch = useDispatch();

    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [copyCartAmount, setCopyCartAmount] = useState({});
    const [copyCart, setCopyCart] = useState([]);
    const [selDel, setSelDel] = useState([])
    const [scrollText, setScrollText] = useState(true);
    const [itemDeleted] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showConfirmSelected, setShowConfirmSelected] = useState(false);

    const { items, removeCart,removeMultipleCart, removeAllCart, errors, 
        updateCartItems, loaded, listItems } = useSelector((state) => state.cart);


    const browse = () => props.navigation.navigate("Catalogue");

    const openCart = () => dispatch(listCart(1));

    const redirectToSearch = () => props.navigation.navigate("Search");

    useEffect(() => {
        if (listItems.length) {
            let quantity = listItems.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity,
                    cart_id: item.id,
                    total_amount: item.total_amount,
                    product: { ...item.product },
                }
            })

            setCopyCart(quantity);
        }else{
            setCopyCart([])
        }

    }, [listItems, copyCart])



    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };
    

    const loadMore = () => { 
        dispatch(listCart(items.carts?.current_page + 1, ));
    }

    const refreshView = useCallback((msg, suc) => {
        wait(500).then(() => {
            setErr(msg);
            setSuccessMsg(suc);
            if (suc) {
                setLoader(false)
                dispatch(cleanList())
                dispatch(listCart(1))
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
                dispatch(cleanList())
                dispatch(listCart(1))
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
        dispatch(listCart(1));
        const interval = setInterval(() => {
            setScrollText((scrollText) => !scrollText);
        }, 1000);
        return () => {
            clearInterval(interval);
            dispatch(cleanup());
            setCopyCart([]);
        }
    }, []);


    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, { marginBottom: 10}]}>
                <Text style={globalStyles.failedResponseText}>{err}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

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
            setSuccessMsg("");
            setErr("");
        }
    }, [removeCart]);

    useEffect(() => {
        if (updateCartItems === "failed") {
            refreshView2(errors?.msg, "")
        } else if (updateCartItems === "success") {
            refreshView2("", "Item added")
        } else {
            setSuccessMsg("");
            setErr("");
        }
    }, [updateCartItems]);

    const goBack = () => props.navigation.goBack();

    const increaseCart = ({id, quantity, product:{stock_count}}) => {
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

    const decreaseCart = ({id}) => {

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
        dispatch(deleteMultipleCart(itemId))
    }


    const handleCheck = (id) => {

        let helperArray = selDel;

        let itemIndex = helperArray.indexOf(id);
      
        if (helperArray.includes(id)) {
            helperArray.splice(itemIndex, 1)
        } else {
            helperArray.push(id)
        }

        setSelDel(helperArray)
    };

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

    const ListView = ({ item }) => (
        <View style={styles.midCard}>
         
         <Check
                onPress={() => handleCheck(item.id)}
                isChecked={selDel.includes(item.id)}
            />

            <View style={styles.cover}>
                <View style={styles.imgCover}>
                    <Image source={{ uri: `${URL}${item?.product?.product_images[0]?.url}` }} style={styles.drugImg} />
                </View>
                <View style={styles.descCover}>
                    <View style={styles.descTextView}>
                        <Text style={styles.descText} numberOfLines={2}>{item.product.name}</Text>
                    </View>
                    <View style={styles.increaseCartMainAmountView}>

                        <View style={styles.cartAmountView}>
                            <TouchableOpacity style={styles.increase} onPress={() => { decreaseCart(item); }}>
                                <Icon name="minus" color="#757575" />
                            </TouchableOpacity>
                            <View style={styles.increaseText}>
                                <Text style={styles.productTitle} >{item.quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.decrease} onPressOut={() => { increaseCart(item); }}>
                                <Icon name="plus" color="#757575" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View>

                    <View style={styles.priceCover}>
                        {item.total_amount.length > 5 ?
                            <Text style={styles.priceTextSm}>{item.total_amount !== "" ? commafy(item.total_amount) : 0}</Text>
                            :
                            <Text style={styles.priceText}>₦{item.total_amount !== "" ? commafy(item.total_amount) : 0}</Text>
                        }
                    </View>

                    <View style={styles.iconCover}>
                   
                  {!item?.product?.out_of_stock  ? 
                   <>
                  {
                  !item.product?.quantity_available < item.quantity ?
                    <TouchableOpacity style={styles.thrash} onPress={() => deleteFromCart(item.id)}>
                       
                      <Text style={styles.productTitle}>Remove </Text>
                   </TouchableOpacity >
                   :
                   <TouchableOpacity style={styles.thrashN} onPress={() => deleteFromCart(item.id)}>
                             <Icon name="trash-2" style={styles.trashIcon} color="#fff" />
                            <Text style={styles.productTitleN}>{item.product.quantity_available} Available</Text>
                   </TouchableOpacity >
                  }
                  </>
                   :
                        
                      <TouchableOpacity style={styles.thrashN} onPress={() => deleteFromCart(item.id)}>
                             <Icon name="trash-2" style={styles.trashIcon} color="#fff" />
                            <Text style={styles.productTitleN}>Out of Stock</Text>
                        </TouchableOpacity >
                     }
                        
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
                dim.height = 140
            }
        )
    )

    const rowRenderer = (type, data) => {
        return <ListView item={data} />;
    };

  
    useEffect(() => {
        setCopyCartAmount({})

        if (copyCart.length) {
            console.log(copyCart, "kop")
            setDataProvider(dataProvider.cloneWithRows(copyCart))
        }else if(!copyCart.length){
            setDataProvider(dataProvider.cloneWithRows([]))
        }

    }, [copyCart])

    return (

        <View style={styles.view}>
            <Header onPress={goBack} title="Cart" styleView={styles.body2} >
                <View style={styles.headerSubIconView}>
                    <TouchableOpacity onPress={redirectToSearch}>
                        <IonIcon name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerSubLastIconView} onPress={openCart}>
                        <IonIcon name="md-cart-outline" size={20} color="#fff" />

                       
                        {items.carts && items.carts.to > 0 ?
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{items.carts?.total}</Text>
                            </View>
                            : null}
                    </TouchableOpacity>
                </View>
            </Header>
            

            <View style={styles.bottomCover}>
            {items.carts && items.carts.to > 0 ?
                <View style={styles.deleteBarContainer}>
                    <Text style={styles.selText}>{selDel.length ?  selDel.length : null}</Text>


                    <View style={styles.deleteBtnContainer}>

                        {
                           selDel.length ?
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
                {itemDeleted
                    ?
                    <CartPlaceholderComponent />
                    :
                    dataProvider && dataProvider.getSize() > 0 ?

                        <RecyclerListView
                            style={{ width: "100%" }}
                            rowRenderer={rowRenderer}
                            dataProvider={dataProvider}
                            layoutProvider={layoutProvider}
                            extendedState={copyCartAmount}
                            onEndReachedThreshold={0.5}
                            onEndReached={() => {
                                if (items.carts?.current_page < items.carts?.last_page) {
                                    loadMore()
                                }
                            }}
                        />
                        :
                        <AddCartListEmptyBig browse={browse} />

                }
                <View style={styles.mainBody}>
                {err ? <Toast config={toastConfig} /> : null}
                {successMsg ? <Toast config={toastConfig} /> : null}
            </View>

                <SafeAreaView>
                    {items.total_amount && copyCart && copyCart.length ?
                        <View style={styles.bottomDownCover}>

                            <View style={styles.orderCover}>

                                <Text style={styles.orderText}>ORDER SUMMARY</Text>
                                {(items.carts.length > 3) ?
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

                            <View style={styles.addBtnCover}>
                                <Btn title="Proceed to Check out" style={styles.addressBtn2} onPress={redirectToCheckOut} />
                            </View>
                        </View> : <BottomPlaceholder />}
                </SafeAreaView>

            </View>
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