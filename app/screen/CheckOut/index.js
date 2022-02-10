import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import globalStyle from "@Helper/globalStyles";
import styles from "./style";
import AddListEmptyComponentB from "@Screen/Home/addListEmptyComponentB";
import { TrackBtn } from "@Component/index";
import FIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import NavHeader from "@Component/NavHeader";
import { listPaymentMethod } from "@Request/paymentMethod";
import URL from "@Helper/constant";
import Dropdown from './Dropdown';
import commafy from "@Helper/commafy";
import { getWallet } from "@Request/wallet";
import PlaceholderComponent from "./placeholderComponent";

const CheckOut = (props) => {
   
    const dispatch = useDispatch();
    const [active, setActive] = useState();
    const [errMsg, setErrMsg] = useState("");
    const [err, setErr] = useState("");
    const [category, setCategory] = useState("");

    const {items} = useSelector((state) => state.cart);
    const [selected, setSelected] = useState({});
    const { payment } = useSelector((state) => state.payment);
    const { wallet} = useSelector((state) => state.wallet);

    const Confirm = () => {
       if(active && selected.id){
        props.navigation.navigate("ConfirmCheckOut", {selected, active, wallet: wallet.balance, amount: items.total_amount});
       }else{
           setErr("Payment Method and Store are Required")
       }   
    };

    useEffect(() => {
        dispatch(listPaymentMethod());
        dispatch(getWallet())
    }, []);

    const backToCart = () => props.navigation.navigate("Cart");

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
                <View style={active === item.id ? styles.optionTextView : styles.optionTextView2} >
                    <Text style={styles.optionText}>{item.display_name}</Text>
                    <View style={styles.optionMiniTextView}>
                        <Text style={styles.itemDetails}>{item.id == "1" ? ` Balance: ₦${ wallet.balance ? commafy(wallet.balance): 0}` : "Pay on Delivery"}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );

    const renderItem2 = ({ item }) => (
        <View style={styles.listCover}>
            <View style={styles.imgCover}>
                <Image source={{ uri: `${URL}${item.product.product_images[0].url}` }} style={styles.drugImg} />
            </View>

            <View style={styles.detailCover}>
                <Text numberOfLines={1} style={styles.itemDetails}>{item.product.name}</Text>
            </View>
            <View style={styles.quanCover}>
                <Text style={styles.itemDetails}>x{item.quantity}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.view}>
            <NavHeader title="CheckOut"
                onPress={backToCart}
                styleView={styles.body}
                styles={styles.headerText}
                statusBar="#fff" />

            <View style={styles.mainBody}>
                {err ? <View style={[globalStyle.errMainView, { marginBottom: 10 }]}>
                
                    <Icon name="exclamation-circle" color="#fff" style={globalStyle.exclaImg} size={20}/>
                    <Text style={globalStyle.failedResponseText}>{err}</Text>
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
                                <Dropdown label="" storeAddress="Select Store" data={data} onSelect={setSelected} />
                            </View>
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
                            <View style={styles.title2Cover}>
                                <Text style={styles.titleText}>ITEM DETAILS</Text>
                            </View>

                            <View style={styles.selectContainer}>

                                <View style={styles.dropCover}>
                                    <FlatList
                                        data={items.carts}
                                        renderItem={renderItem2}
                                        keyExtractor={item => item.id}
                                        ListEmptyComponent={PlaceholderComponent}
                                        horizontal={false}
                                    />
                                </View>

                            </View>
                            <View style={styles.bottomDownCover}>

                                <View style={styles.subtotalCover}>
                                    <Text style={styles.subText}>Subtotal</Text>
                                    <Text style={styles.subText}>₦{ items.total_amount !== undefined ? commafy(items.total_amount): 0}</Text>
                                </View>
                                <View style={styles.totalCover}>
                                    <Text style={styles.totalText}>Delivery Fee</Text>
                                    <Text style={styles.totalText}>Free</Text>
                                </View>

                                <View style={styles.totalBorderCover}>
                                    <Text style={styles.totalBorderText}>Total</Text>
                                    <Text style={styles.totalBorderText}>₦{ items.total_amount !== undefined ? commafy(items.total_amount): 0}</Text>
                                </View>

                                <View style={[styles.addBtnCover, styles.orderBtn]}>
                                    <TrackBtn title="CheckOut" style={styles.addressBtn2} onPress={Confirm} />
                                </View>

                            </View>

                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
};

export default CheckOut;