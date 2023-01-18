import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, ActivityIndicator, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import globalStyle from "@Helper/GlobalStyles";
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import BottomPlaceholder from "./bottomPlaceholderLoader";
import CartPlaceholderComponent from "./CartPlaceholderComponent";
import styles from "./style";
import { listCart, deleteCart, deleteMultipleCart, deleteAllCart, updateCart,searchCartList } from "@Request/Cart";
import { AuthBtn as Btn, SuccessMsgViewTwo, COHeader as Header,InputField, AddCartListEmptyBig, Check } from "@Component";
import Loader from "@Screen/Loader";
import { cleanup, cleanList,cleanSearchCart} from "@Store/Cart";
import ConfirmDelete from "./ConfirmDelete";
import ConfirmSelected from "./ConfirmSelectedDelete";


const Cart = (props) => {

    const dispatch = useDispatch();

    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [copyCartAmount, setCopyCartAmount] = useState({});
    const [copyCart, setCopyCart] = useState([]);
    const [copySearchData, setCopySearchData] = useState([]);
    const [selDel, setSelDel] = useState([])
    const [scrollText, setScrollText] = useState(true);
    const [itemDeleted] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showConfirmSelected, setShowConfirmSelected] = useState(false);
    const [trackRecyclerList, setTrackRecyclerList] = useState(false);
    const [showSearch, setShowSearch ] = useState(false)
    const [searchCart, setSearchCart] = useState ("")
    const [searchArray, setSearchArray] = useState([]);
    const [ slength , setSlength] = useState(false)
    const [searchCartCalled, setSearchCartCalled] = useState(false)

    const { items, removeCart, removeMultipleCart,searchStatus, removeAllCart, errors,
        updateCartItems, loaded, listItems, searchCartsData, searchedCarts } = useSelector((state) => state.cart);


    const browse = () => props.navigation.navigate("Catalogue");

    const openCart = () => dispatch(listCart(1));

     //const redirectToSearch = () => props.navigation.navigate("Search");
     const redirectToSearch =()=>{
        setShowSearch(true)
    }



    const returnHeader = () => {
        setSearchCart("")
        setSelDel([])
        setShowSearch(false)
    }


    useEffect(() => {
        if (listItems.length) {
            if(listItems.length !== copyCart.length){
                setTrackRecyclerList(false)
            }
            
            let quantity = listItems.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity,
                    cart_id: item.id,
                    total_amount: item.total_amount,
                    product: { ...item.product },
                    deal_id: item.deal_id,
                    deal: {...item.deal}
                }
            }).sort((a, b) => {
                if( a?.product?.name < b?.product?.name){
                    return -1
                }
            })

            setCopyCart(quantity);
        } else {
            setCopyCart([])
        }

    }, [listItems, copyCart.length])

// this is for the searched item quqntity change and sort
useEffect(() => {
    if (searchedCarts.length) {
        if(searchedCarts.length !== copySearchData.length){
            setTrackRecyclerList(false)
        }
        
        let quantity = searchedCarts.map((item) => {
            return {
                id: item.id,
                quantity: item.quantity,
                cart_id: item.id,
                total_amount: item.total_amount,
                product: { ...item.product },
                deal_id: item.deal_id,
                deal: {...item.deal}
            }
        }).sort((a, b) => {
            if( a?.product?.name < b?.product?.name){
                return -1
            }
        })

        setCopySearchData(quantity);
    } else {
        setCopySearchData([])
    }

}, [searchedCarts, copySearchData.length])



    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    // const searchItem = () => {
    //     let searched = copyCart.filter(val => {
    //         if (val.product.name.toLowerCase().includes(searchCart.toLowerCase())) {
    //             return val
    //         }
    //         return null
    //     });
    //     setSearchArray(searched)
    //     dispatch(searchCartList())
    // };


   

    useEffect(() => {
        if (searchCart.length) {
            dispatch(searchCartList({search:searchCart.toLowerCase(), no: 1}))
            //searchItem();
            setSlength(true)
        } else if (!searchCart.length) {
            setSearchArray([]);   
            setSlength(false)
        }
       
    }, [searchCart.length]);

    useEffect(() => {
        if (searchCart.length) {

            dispatch(cleanSearchCart());

            dispatch(searchCartList({ name: searchCart, id: 1 }))

        }

    }, [searchCart]);


    const loadMore = () => {
        dispatch(listCart(items.carts?.current_page + 1));
    }

console.log("the cart page", items.carts?.current_page);
console.log("the dataaa", items.carts);


    const loadMore2 = () => {
        dispatch(searchCartList({search: searchCart.toLowerCase(), no:searchCartsData.current_page + 1}));
    }

    const refreshView = useCallback((msg, suc) => {
        wait(500).then(() => {
            setErr(msg);
            setSuccessMsg(suc);
            if (suc) {
                setLoader(false)
                dispatch(cleanList())
                dispatch(listCart(1))
                setTrackRecyclerList(false)
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
            // dispatch(clean())
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
            // dispatch(clean())
        })
    }, []);

    useEffect(() => {
        dispatch(listCart(1));
        setTrackRecyclerList(false)
        return () => {
            dispatch(cleanup());
            setCopyCart([]);
        }
    }, []);


    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, { marginBottom: 10 }]}>
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
            dispatch(listCart(1));
            setTrackRecyclerList(false)
             setSearchCart("")
             setShowSearch(false)
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


    const increaseCart = ({ id, quantity, product: { stock_count } }) => {

        if (quantity < stock_count) {

            let filteredCart;

            if (searchedCarts.length) {

                filteredCart = copySearchData.filter(quantity => {

                    if (quantity.id === id) {
                        quantity.quantity = quantity.quantity + 1
                        quantity.total_amount = parseInt(quantity.product.price_per_pack) * parseInt(quantity.quantity)
                        return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id }

                    }
                })


            } else {

                filteredCart = copyCart.filter(quantity => {

                    if (quantity.id === id) {
                        quantity.quantity = quantity.quantity + 1
                        quantity.total_amount = parseInt(quantity.product.price_per_pack) * parseInt(quantity.quantity)
                        return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id }

                    }
                })

            }

            setCopyCartAmount(filteredCart[0])
            let copiedcopyCartAmount = filteredCart

            var res = copyCart.map(obj => copiedcopyCartAmount.find(quantity => quantity.cart_id === obj.id) || obj);
            setCopyCart(res)
            setTrackRecyclerList(false)
            return res

        }
    };

    const decreaseCart = ({ id }) => {

        let filteredCart;

        if (searchedCarts.length) {

            filteredCart = copySearchData.filter(quantity => {
                if (quantity.id === id && quantity.quantity > 1) {
                    quantity.quantity = quantity.quantity - 1
                    quantity.total_amount = parseInt(quantity.product.price_per_pack * quantity.quantity)
                    return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id, }

                }
            })

        } else {

            filteredCart = copyCart.filter(quantity => {
                if (quantity.id === id && quantity.quantity > 1) {
                    quantity.quantity = quantity.quantity - 1
                    quantity.total_amount = parseInt(quantity.product.price_per_pack * quantity.quantity)
                    return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id, }

                }
            })

        }

        setCopyCartAmount(filteredCart[0])

        let copiedcopyCartAmount = filteredCart;

        var res = copyCart.map(obj => copiedcopyCartAmount.find(quantity => quantity.cart_id === obj.id) || obj);
        
        setCopyCart(res);

        setTrackRecyclerList(false);
        
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
        setTrackRecyclerList(false)
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
            dispatch(listCart(1));
            setTrackRecyclerList(false)
             setSearchCart("")
             setShowSearch(false)
            setSelDel([])
            refreshView("", "Cart items removed")

        } else {
            setErr("");
        }
    }, [removeMultipleCart]);

    const CartItem= ({ item }) => (
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
                        {item.product.out_of_stock ?
                            <View style={styles.thrashN} >
                                <Text style={styles.outofstockText}>Out of Stock</Text>
                            </View> :
                            item.product?.stock_count >= item.quantity ?

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
                                :
                                <View style={styles.thrashN} >
                                    <Text style={styles.outofstockText}>Amount Unavailable</Text>
                                </View>
                        }
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

                        <TouchableOpacity style={styles.thrash} onPress={() => deleteFromCart(item.id)}>
                            <Text style={styles.productTitle}>Remove </Text>
                        </TouchableOpacity >


                    </View>

                </View>

            </View>
        </View>

    )


    const DealItem = ({ item }) => (
        <View style={styles.midCard}>

         <View style={styles.checkContainer}>
          <Check
            onPress={() => handleCheck(item.id)}
            isChecked={selDel.includes(item.id)}
            />
         </View>

            <View style={styles.cover}>
                <View style={styles.imgCover}>
                    <Image source={{ uri: `${URL}${item?.product?.product_images[0]?.url}` }} style={styles.drugImg} />
                </View>
                <View style={styles.descCover}>
                    <View style={styles.descTextView}>
                        <Text style={styles.descText} numberOfLines={2}>{item.product.name}</Text>
                    </View>
                    <View style={styles.increaseCartMainAmountView}>
                    <View style={styles.qtnCover}>
                    <Text style={styles.dealQtyB}>QTY: {item.quantity} </Text>
                   
                    {item.deal?.get !== null &&
                   <Text style={styles.dealQty}>+ ({item.deal.get})</Text>
                    }
                   
                </View>
                    </View>

                </View>

                <View>

                    <View style={styles.priceCover}>
                    <Text style={styles.priceText}>₦{item?.total_amount !== "" && item?.total_amount !== null ? commafy(item.total_amount) : 0}  </Text>
                       <Text style={[styles.priceTextGray, {textDecorationLine: 'line-through'}]}>{item.deal?.get === null && `₦${commafy(item.product?.price_per_pack * item?.quantity)}`}</Text>
                  
                    </View>

                    <View style={styles.iconCoverD}>
                            <Image source={require("@Assets/image/dealG.png")} style={styles.dealImg} />
                    </View>


                </View>

            </View>
        </View>

    )



    const ListView = ({ item }) =>{

        return (
        <>
            {item?.deal_id === null ?

                <CartItem item={item} />
                :

                <DealItem item={item} />
            }
        </>
    )
        }


      

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

        if (!trackRecyclerList) {
            if (copyCart.length > 0 || selDel.length) {
                console.log("tracklist", "count")
               
                 setDataProvider(dataProvider.cloneWithRows(copyCart));
                setTrackRecyclerList(true)
            }
            else if (!copyCart.length && loaded === "success") {
                console.log("tracklist", "count2")
                setDataProvider(dataProvider.cloneWithRows([]))
            }
        }
        

    }, [copyCart, trackRecyclerList])

    const Footer = () => (
        <View>
            {
                loaded === "pending" || loaded === "idle" ?
                    <View style={styles.activityInd}>
                        <ActivityIndicator color="green" size="large" />
                    </View>
                    :
                    null}
        </View>
    )

    return (

        <View style={styles.view}>
            {
                showSearch ?

             <View style={styles.searchBarCover}>
                <TouchableOpacity onPress={returnHeader}>
					<Image source={require("@Assets/image/leading-icon.png")} style={styles.backImg} />
				</TouchableOpacity>
             <View>
             <InputField
                style={styles.inputSearch}
                placeholder="Search Cart Items"
                placeholderTextColor="#9E9E9E"
                onChangeText={(text) => setSearchCart(text)}
                value={searchCart}
            />
             </View>
            </View>    
            : 
            <Header onPress={goBack} title="Cart" styleView={styles.body2} >
                <View style={styles.headerSubIconView}>
                    <TouchableOpacity onPress={redirectToSearch}>
                        <IonIcon name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerSubLastIconView} onPress={openCart}>
                        <IonIcon name="md-cart-outline" size={20} color="#fff" />


                        {items.carts?.data?.length ?
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{items.carts?.total}</Text>
                            </View>
                            : null}
                    </TouchableOpacity>
                </View>
            </Header>
            }
           

            <View style={styles.bottomCover}>
                {items.carts?.data?.length ?
                    <View style={styles.deleteBarContainer}>
                        <Text style={styles.selText}>{selDel.length ? selDel.length : null}</Text>


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

                {
                    !slength ?
                    <>
                    {itemDeleted && loaded === "idle"
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
                            renderFooter={Footer}
                        />
                        :
                        <AddCartListEmptyBig browse={browse} />

                }
                </>
                 : (searchStatus === "idle" || searchStatus === "pending") && !searchCartCalled  ?

                 <CartPlaceholderComponent /> :
                 <View >
                <FlatList
                    data={copySearchData}
                    keyExtractor={item => item.id}
                    renderItem={ListView}
                    ListEmptyComponent={<View />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(searchCartsData.current_page < searchCartsData.last_page){
                            loadMore2()
                        }
                        }}
                        ListFooterComponent={searchStatus === "pending" && searchCartCalled ? <ActivityIndicator />: <View /> }
                    />
                    </View>
                    }
                    

        
                <View style={styles.mainBody}>
                    {err ? <Toast config={toastConfig} /> : null}
                    {successMsg ? <Toast config={toastConfig} /> : null}
                </View>

             

            </View>
           
           
                    {items.total_amount && copyCart && copyCart.length ?
                        <View style={styles.bottomDownCover}>

                            <View style={styles.orderCover}>

                                <Text style={styles.orderText}>ORDER SUMMARY</Text>
                                {(items.carts.data.length > 3) ?
                                    <View style={[styles.scrollTextCover, { display: 'flex' }
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
                                <Text style={styles.subText}>₦{items.total_amount !== "" ? commafy(items.total_amount) : null}</Text>
                            </View>
                            <View style={styles.totalCover}>
                                <Text style={styles.totalText2}>Total</Text>

                                <Text style={styles.totalText2}>₦{items.total_amount !== "" ? commafy(items.total_amount) : null}</Text>

                            </View>

                            <View style={styles.addBtnCover}>
                                <Btn title="Proceed to Check out" style={styles.addressBtn2} onPress={redirectToCheckOut} />
                            </View>
                        </View> : null}

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