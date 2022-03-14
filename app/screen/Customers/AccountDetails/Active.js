import React, { useEffect, useState, useCallback } from "react";
import { View, Text,TouchableOpacity, FlatList, Keyboard, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import styles from "./style";
import globalStyles from "@Helper/GlobalStyles";
import {  SuccessMsgViewTwo } from "@Component";
import { updateUserDetails, getUser } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import Loader from "@Screen/Loader";
import data from './data'

const Active = () => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        dispatch(cleanup())
    }, []);

    const { user, errors, update } = useSelector((state) => state.auth);

    const profileState = {
        firstname: user?.name ? user.name.substr(0, user.name.indexOf(' ')) : '',
        surname: user?.name ? user.name.substr(user.name.indexOf(' ') + 1) : "",
    };
    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: user.id };
        setLoader(true)
        await dispatch(updateUserDetails(newValue))
    };

    const redirectToSort = () => {
      
    };
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            setErrMsg(errmsg);
            setSuccessMsg(sucmsg);
            if (sucmsg) {
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            } else {
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }

        });
        wait(4000).then(() => { dispatch(cleanup()) })
    }, []);

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    useEffect(() => {
        if (update === "failed") {
            setSuccessMsg("");
            waitTime(errors?.msg);
        } else if (update === "success") {
            dispatch(getUser());
            waitTime("", "User Updated");
        } else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);

    const ListView = ({ item}) => {

        return (
            <View style={styles.cardCoverOrder}>
                  <View style={styles.cardTop}>
                      <View>
                          <Text style={styles.nameTextActive}>{item.orderNo}</Text>
                          <Text style={styles.dateText}>{item.date}</Text>
                          </View>
                      <View style={styles.priceCover}><Text style={styles.priceText}>{item.price}</Text></View>
                  </View>
                  <View style={styles.cardMid}>
                      <View>
                          <Text style={styles.quantityText}>{item.quantity} Items</Text>
                          <Text style={styles.descText} numberOfLines={2}>{item.desc}</Text>
                     </View>
                      
                  </View>
                  <View style={styles.cardDown}>
                    <View style={styles.cardDownDelivered}><Text style={styles.delieveredText}>Delivered</Text></View>
                    <View style={styles.cardDownInner}>
                        <Text style={styles.reorderText}>RE-ORDER</Text>
                        <Image source={require("@Assets/image/refresh.png")} style={styles.refreshImg} />
                    </View>
                       
                   </View>
               </View>
        )
    };


    return (
        <View style={styles.container}>

           <View style={styles.bottomCoverOrder}>

           <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}


                   
                />         
               
           </View>

           <Loader isVisible={loader} />

       </View>
    )
};

export default Active;