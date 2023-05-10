import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image, BackHandler, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import DashedLine from 'react-native-dashed-line';
import FIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome5";


import styles from "./style";
import { AuthBtn as Btn, COHeader as Header } from "@Component";
import { listPaymentMethod } from "@Request/PaymentMethod";
import Dropdown from './Dropdown';
import { getWallet } from "@Request/Wallet";
import PlaceholderComponent from "./placeholderComponent";
import { listCart } from "@Request/Cart";
import { getStore } from "@Request/Store";
import DeliverMethod from "./deliveryMethod";
import { cleanup as delivery } from "@Store/DeliveryOptions";

const CheckOut = (props) => {

    const dispatch = useDispatch();


    const [active, setActive] = useState();

    const [errMsg, setErrMsg] = useState("");

    const [err, setErr] = useState("");

    const [category, setCategory] = useState("");

    const [cartItem, setCartItem] = useState([]);

    const [deliveryType, setDeliveryType] = useState();

    const [deliveryDate, setDeliveryDate] = useState();

    const [deliveryPrice, setDeliveryPrice] = useState(0);

    const [deliveryTypeName, setDeliveryTypeName] = useState();

    const [deliveryTypeStatus, setDeliveryTypeStatus] = useState(false);

    const [selected, setSelected] = useState({});


    const { items,listItems } = useSelector((state) => state.cart);
    
    const { payment } = useSelector((state) => state.payment);

    const { wallet } = useSelector((state) => state.wallet);

    const { stores } = useSelector((state) => state.store);

    const { status, errors, options } = useSelector((state) => state.deliveryOptions);
    

    const Confirm = () => {
        if (active && selected.id && deliveryType) {
            if (active === 1 && wallet.balance < items.total_amount) return setErr("Insufficient Balance")
            if (active === 1 && wallet.balance < items.total_amount) return setErr("Insufficient Balance")
            if ((deliveryTypeStatus && !deliveryDate)) return  setErr("Delivery Date is Required")
            props.navigation.navigate("ConfirmCheckOut", {
                selected,
                active,
                wallet: wallet.balance,
                amount: items.total_amount,
                id: listItems.map((cart) => cart.id),
                delivery_type: deliveryType,
                delivery_date: deliveryDate,
                delivery_price: deliveryPrice,
                category,
                deliveryTypeName
            });
        } else if (!deliveryType || !active || !selected.id) {
            setErr("Delivery, Payment Method and Store Required")
        } 
    };

    useEffect(() => {
        dispatch(listPaymentMethod());
        // dispatch(listCart(1))
        dispatch(getWallet())
        dispatch(getStore())
        if (listItems.length) {
            setCartItem(items.carts?.data && items.carts?.data)
        }
        

       BackHandler.addEventListener(
            "hardwareBackPress",
            backToCart
          );
          return () => BackHandler.removeEventListener("hardwareBackPress", backToCart);
    }, []);

    const loadMore = () => {
        // dispatch(listCart(items.carts?.current_page + 1));
        
    }


    const backToCart = () => {
        dispatch(delivery())
        // dispatch(listCart(1))
        props.navigation.navigate("Cart");
    }

    const selectUserType = id => {
        setActive(id);
        setErr("")
    }

    const renderItem = ({ item }) => (
        <View style={[styles.optionView, item.id === "1" ? styles.optionViewBetween1 : styles.optionViewBetween2]}>

            <TouchableOpacity style={active === item.id ? styles.optionViewCover : styles.optionViewCover2} onPress={() => { selectUserType(item.id); setCategory(item.name); setErrMsg("") }}>
                <View >
                    {active === item.id ?
                        <View style={styles.iconCircle}>
                            <FIcon name="lens" size={12} color="rgba(70, 157, 0, 1)" style={styles.icon} />
                        </View>
                        :
                        <View style={styles.iconCircle2}>
                        </View>
                    }
                </View>
                <View style={styles.optionTextView } >
                    <Text style={styles.optionText}>{item.display_name}</Text>
                    <View style={styles.optionMiniTextView}>
                        <Text style={styles.itemDetails}>{item.id == "1" ? ` Balance: ₦${wallet.balance ? commafy(wallet.balance) : 0}`
                            : item.id == "2" ? "Pay on Delivery" : "Remedial Health Solutions Ltd"}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );

    const renderItem2 = ({ item }) => (
        <View style={styles.listCover}>
            <View style={styles.imgCover}>
                <Image source={{ uri: `${item.product?.product_images[0]?.url}` }} style={styles.drugImg} />
            </View>

            <View style={styles.detailCover}>
                <Text numberOfLines={1} style={styles.itemDetails}>{item.product?.name}</Text>
            </View>
            <View style={styles.quanCover}>
                <Text style={styles.itemDetails}>x{item.quantity}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.view}>
            <Header title="Check Out"
                onPress={backToCart}
                styleView={styles.body}
                styles={styles.headerText} />

            <View style={styles.mainBody}>
                {err ? <View style={[globalStyles.errMainView, { marginBottom: 10 }]}>

                    <Icon name="exclamation-circle" color="#fff" style={globalStyles.exclaImg} size={20} />
                    <Text style={globalStyles.failedResponseText}>{err}</Text>
                </View>
                    : null}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} horizontal={false} containerStyle={styles.scrollView}>
                <ScrollView horizontal={true}>
                    <View style={styles.mainContainer}>

                        <View style={styles.titleCover}>
                            <Text style={styles.titleText}>DELIVERY ADDRESS</Text>
                        </View>

                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>Select Store to deliver products</Text>
                            <View style={styles.dropCover}>
                                {stores.stores ?
                                    <Dropdown label="" 
                                    storeAddress="Select Store" 
                                    onSelect={setSelected} 
                                    delivery={setDeliveryType} 
                                    />
                                    :
                                    <Text style={styles.itemDetails} >Loading...</Text>}
                            </View>
                        </View>
                        <View style={styles.deliverMethodCover}>
                            <View style={styles.titleCover}>
                                <Text style={styles.titleText}>DELIVERY OPTION</Text>
                            </View>

                            {!options.length && status !== "success" ?
                                <Text style={[styles.titleText, { paddingLeft: 20 }]}>Loading</Text>
                                :
                                !options.length && status === "success" ?
                                    <Text style={[styles.titleText, { paddingLeft: 20 }]}>No Delivery Date available</Text>
                                    :
                                    <DeliverMethod
                                        id={selected.state_id}
                                        onSelect={setDeliveryType}
                                        onSelectDate={setDeliveryDate}
                                        err={setErr}
                                        price={setDeliveryPrice}
                                        date={deliveryDate} 
                                        name={setDeliveryTypeName}
                                        status={setDeliveryTypeStatus}
                                        fees={items.total_amount}
                                        />
                            }
                        </View>


                        <View style={styles.title2Cover}>
                            <Text style={styles.titleText}>PAYMENT</Text>
                        </View>

                        {errMsg ? <View style={styles.errMainView}>
                            <Text style={styles.failedResponseText}>{errMsg}</Text>
                        </View> :
                            null
                        }

                        <View style={styles.selectContainer}>
                            <View style={styles.selectInnerContainer}>
                                <Text style={styles.selectText}>Select Payment Method</Text>
                            </View>
                            <FlatList
                                data={payment}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                horizontal={false}
                            />
                        </View>

                        <View>
                            {/* <View style={styles.title2Cover}>
                                <Text style={styles.titleText}>ITEM DETAILS</Text>
                            </View> */}

                            {/* <View style={styles.selectContainer}>

                                <View style={styles.dropCover}>
                                    <FlatList
                                        data={cartItem}
                                        renderItem={renderItem2}
                                        keyExtractor={item => item.id}
                                        ListEmptyComponent={PlaceholderComponent}
                                        // horizontal={false}
                                        showsVerticalScrollIndicator={true}
                                        extraData={cartItem}
                                        initialNumToRender={10}
                                        onEndReachedThreshold={0.5}
                                        onEndReached={() => {
                                            if (items.carts?.current_page < items.carts?.last_page) {
                                                loadMore()
                                            }
                                        }}
                                    />
                                </View>

                            </View> */}
                            <View style={styles.bottomDownCover}>
                            <View style={styles.infoStyle}>
                            <Text style={styles.infoText}> Kindly Note that Orders with cash-and-carry products will be split into two invoices</Text>
                            </View>
                                <View style={styles.subtotalCover}>
                                    <Text style={styles.subText}>Subtotal</Text>
                                    <Text style={styles.subText}>₦{items.total_amount !== undefined ? commafy(items.total_amount) : 0}</Text>
                                </View>
                                
                                <View style={styles.totalCover}>
                                    <Text style={styles.totalText}>Delivery Fee</Text>
                                    <Text style={styles.totalText}>₦{deliveryPrice ? commafy(deliveryPrice): 0}</Text>
                                </View>
                            {
                                Platform.OS === "android" ?
                                <View style={styles.totalBorderCover}>
                                    <Text style={styles.totalBorderText}>Total</Text>
                                    <Text style={styles.totalBorderText}>₦{items.total_amount !== undefined ? commafy(items.total_amount + deliveryPrice) : 0}</Text>
                                </View>

                                :
                                <>
                                 <DashedLine style={styles.dashStyle} dashLength={3} dashThickness={1} dashGap={2}  dashColor='#BDBDBD' />
                                <View style={styles.totalBorderCover1}>
                              
                                    <Text style={styles.totalBorderText}>Total</Text>
                                    <Text style={styles.totalBorderText}>₦{items.total_amount !== undefined ? commafy(items.total_amount + deliveryPrice) : 0}</Text>
                                </View>
                            
                                </>
                            }
                                  

                                {status === "success" && items.carts && (
                                <View style={[styles.addBtnCover]}>
                                    <Btn title="Continue" style={styles.addressBtn2} onPress={Confirm} />
                                </View>
                                )}

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
};

export default CheckOut;