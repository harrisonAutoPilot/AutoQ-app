import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image, } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Zcon from 'react-native-vector-icons/Ionicons';
import styles from "./style";
import { FormikValidator, InputField, SuccessMsgViewTwo, AuthBtn as Btn } from "@Component";
import { profileSchema } from "@Helper/Schema";
import { updateUserDetails, } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import Loader from "@Screen/Loader";
import { getCustomers } from "@Request/Customer";


const CustomerInfo = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);
    const scrollRef = useRef();
    const store = props.store

    const { errors, update } = useSelector((state) => state.auth);
    const { details, name } = props;

 

    useEffect(() => {
        dispatch(cleanup())
    }, []);

   
    const firstname = details?.name ? details?.name?.substr(0, details.name.indexOf(' ')) : "";
    const surname= details?.name ? details?.name.substr(details?.name.indexOf(' ') + 1) : "";
    const phone = details?.phone ? details?.phone : "";
    const email = details?.email ? details?.email : "";
    const location = details?.address ? details?.address : "";
    const store_type = details?.user_type ? details?.user_type : "";

        console.log("the location", details)




    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: details.id };
        setLoader(true)
        await dispatch(updateUserDetails(newValue))
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);

            if (sucmsg) {
                setSuccessMsg(sucmsg);
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

    const InfoList = ({ icon, title, desc }) => {
        return (
         
            <View style={styles.middle} >
              <View style={styles.card}>
                <View style={styles.right}>
                  <Icon name={icon} size={26} color="#767680" />
                </View>
               <View style={styles.left}>
               <View style={styles.leftInner}>
                  <Text style={styles.phoneText}>{title ? title : "Loading ..."}</Text>
               </View>
                <View style={styles.leftInner}>
                  <Text style={styles.descText}>{desc ? desc : "Loading ..."}</Text>
                </View>
               </View>
              </View>
             
            </View>
           
       
    
        )
      };
    


    useEffect(() => {
        if (update === "failed") {
            setSuccessMsg("");
            waitTime(errors?.msg);
        } else if (update === "success") {
            waitTime("", "User Updated");
            dispatch(getCustomers());

        } else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);

    return (
        <View style={styles.container}>
            {errMsg ? <Toast config={toastConfig} /> : null}
            {successMsg ? <Toast config={toastConfig} /> : null}

            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollRef}
                bounces={false}
            >

                <View style={styles.bottomCover}>
                    

                        <InfoList
                        title="First Name"
                        icon="account-outline"
                        desc={firstname}
                        />

                    <InfoList
                        title="Last Name"
                        icon="account-outline"
                        desc={surname}
                        />
                    <InfoList
                        title="Phone"
                        icon="phone-outline"
                        desc={phone}
                        />

                    <InfoList
                        title="Email"
                        icon="email-outline"
                        desc={email}
                        />
                    <InfoList
                        title="Address"
                        icon="map-marker-outline"
                        desc={location}
                        />
                    <InfoList
                        title="Store type"
                        icon="store-outline"
                        desc={store_type}
                        />

                    <TouchableOpacity style={styles.viewStoreTitleCover} onPress={store}>
                        <View style={styles.viewStoreTitleInner} >
                            <Text style={styles.viewStoreTitleText}>View Stores</Text>
                            <Zcon name="chevron-forward" color="rgba(51, 83, 203, 1)" size={20} />
                        </View>

                    </TouchableOpacity>
                 
                </View>

                <Loader isVisible={loader} />

            </ScrollView>
        </View>
    )
};

export default CustomerInfo;
