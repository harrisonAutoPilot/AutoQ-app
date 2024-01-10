import React, { useState, useCallback, useEffect, } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Toast from 'react-native-toast-message';

import { TransactionHeader,OnboardinBtn } from "@Component2";
import styles from './style';
import { updatePendingCustomers, registerCustomer } from "@Request/Customer";
import { cleanup } from "@Store/Customer";
import Loader from "@Screen/Loader";
import ViewDocument from "@Screen/ViewDocument"

const RegConfirm = (props) => {


    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [showDocument, setShowDocument] = useState(false);
    const [storeImg, setStoreIMg] = useState("");
    const details = props.route.params.data;

    // const { previewLicence} = props
    const goBack = () => props.navigation.goBack();
    const storeSuccess = () => props.navigation.navigate("CustomerSuccess", { details });
    const { errors, update } = useSelector((state) => state.customer);

    const viewDoc = (img) => {
        setShowDocument(true);
        setStoreIMg(img)
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    let name = details?.name
    let first_name = name.split(" ")[0]
    let last_name = name.split(" ")[1]
    
    const previewLicence = (images) =>{
        props.navigation.navigate("LicencePreview",{images})
    }

    const previewStores = (images2) => {
        props.navigation.navigate("StorePreview",{images2})
    }

    const refreshView = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            if (sucmsg) {

                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            } else {
                setErrMsg(errmsg);
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        });

        wait(5000).then(() => { dispatch(cleanup()); })
    }, []);

    useEffect(() => {
        if (update === "success" && props.navigation.isFocused()) {
            setLoader(false);
            storeSuccess();
        } else if (update === "failed" && props.navigation.isFocused()) {
            setLoader(false);
            refreshView(errors?.msg, "");
            console.log("the error log", errors?.msg);
        }
        else {
            setErrMsg("");
           
        }
    }, [update]);

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, { marginHorizontal: 20 }]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

    };


    const submit = () => {
        setLoader(true);
        dispatch(registerCustomer(details))
    
    }


    const Card = ({caption, title}) => (
        <View style={styles.card}>
            <View style={styles.listCover}>
                <View>
                    <Text style={styles.itemTitle}>{caption}</Text>
                </View>
                <View>
                    {
                        title == "Select Payment" ?
                        <Text style={styles.itemName}>- -</Text>
                        :
                        <Text style={styles.itemName}>{title}</Text>
                    }
                </View>
            </View>
        </View>
        )


        const ImageCard = ({ caption, title, onPress, img}) => (
            <View style={styles.card}>
            <View style={styles.listCover}>
                <View>
                    <Text style={styles.itemTitle}>{caption}</Text>
                </View>
                <View>
                    {
                        img == '' ?
                        <Text style={styles.itemName}>No Image Selected</Text>
                        :
                        <TouchableOpacity onPress={onPress}>
                            <Text style={styles.itemNameLink}>{title}</Text>
                        </TouchableOpacity>
                       
                    }
                </View>
            </View>
        </View>
        );
        

    return (
        <View style={styles.view}>
             <TransactionHeader title="Confirm Registration" onPress={goBack} />
           
         <View style={styles.errorCover}>
         {errMsg ? <Toast config={toastConfig} /> : null}
         </View>
            <ScrollView>
                <View style={styles.modalView}>

                  <Card
                    caption="Type of store"
                    title={details.user_type}
                   
                    />
                     <Card
                        caption="Last Name"
                        title={last_name}
                    
                      />
                        <Card
                        caption="First Name"
                        title={first_name}
                    
                         />
                        <Card
                        caption="Phone"
                        title={details.phone}
                         />
                         <Card
                        caption="Store Name"
                        title={details.store_name}
                    
                         />
                        <Card
                            caption="Address"
                            title={details.store_address}
                         />
                         <Card
                            caption="Payment Method"
                            title={details.credit_option}
                         />

                        <ImageCard
                            img={details.images}
                            caption="Pharmacy License"
                            title="VIEW"
                            onPress={() =>previewLicence(details.images)}
                         />
                         <ImageCard
                            img={details.images2}
                            caption="Store Images"
                            title="VIEW"
                            onPress={() => previewStores(details.images2)}
                         />

                   
                </View>

                
                
            </ScrollView>
            <View style={styles.btnCover}>
            <OnboardinBtn
                title="Confirm & Submit"
                backgroundColor="#3353CB"
                color="#fff"
                onPress={submit}
            />
                </View>
            <Loader isVisible={loader} />
        </View>
    )
};

export default RegConfirm;