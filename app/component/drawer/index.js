import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions, StackActions  } from '@react-navigation/native';

import links from "./data";
import prices from "./data2"
import styles from "./style";
import { logout } from "@Store/Auth";
import { getCustomers } from "@Request/Customer";

const Drawer = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [showPriceList, setShowPriceList] = useState(false);

    useEffect(() => {
        dispatch(getCustomers());
    }, []);

    const logUserOut = () => {
        props.navigation.closeDrawer();
        dispatch(logout());

    }
    const pendingOrders = () => props.navigation.navigate("PendingOrder");
    const productRequest = () => props.navigation.navigate("ProductRequest");

    const { customers } = useSelector((state) => state.customer);

    const redirectToScreen = (route) => {
        props.navigation.closeDrawer();
        if(route === "CustomersDashboard"){
            props.navigation.navigate(route, {id: "pending"})
        }else {
            props.navigation.navigate(route)
        }
     
        // props.navigation.dispatch(
        //     CommonActions.reset({
        //         index: 0,
        //         routes: [{ name: route }]
        //     })
        // );

    };

    const DropView = ()=>{
        setShowPriceList(true)
    }

    const redirectToTP = () => {
        const URL = "https://remedialhealth.com/terms-of-service";
        Linking.openURL(URL)
            .then(() => {
                console.log('Link Opened');
            })
            .catch(() => {
                Alert.alert('An error occurred');
            });
    }

    const redirectToFAQ = () => {
        const URL = "https://docs.google.com/document/d/1DsXEgk8hqFltod96--XhCD5oTs5Zl7DrZ4toJHKem9I/edit";
        Linking.openURL(URL)
            .then(() => {
                console.log('Link Opened');
            })
            .catch(() => {
                Alert.alert('An error occurred');
            });
    }


    const List = ({ item }) => (
        <TouchableOpacity onPress={() => redirectToScreen(item.route)} style={styles.routeInnerView}>
            <View style={styles.routeTextView}>
                <View style={styles.routeTextIconView}>
                <Image source={require("@Assets/image/folder-notch-open-fill.png")} style={globalStyles.quesImg} />
                </View>
                <Text style={styles.routeText}>{item.name}</Text>
                <View style={styles.firstInnerHeader}>
                    <Text style={styles.firstInnerTitle}>{customers?.pending?.count ? customers?.pending?.count : 0}</Text>
                </View>
            </View>
            <View>
                <Icon name="chevron-right" size={18} color="#9E9E9E" />
            </View>
        </TouchableOpacity>

    )

const PriceList = ({ item }) => (
    <View style={styles.dropInner}>
    <TouchableOpacity>
    <View style={styles.dropItem}>
          <Text style={styles.dropList}>{item.name}</Text>
      </View>
    </TouchableOpacity>
    </View>
)

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.header}>
                <SafeAreaView style={styles.headerInnerView}>
                    <LinearGradient
                        colors={['rgba(116, 133, 255, 1)', 'rgba(56, 88, 207, 1)']}
                        style={styles.linearView}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.agentImgView}>
                            <Image style={styles.agentImg} source={{uri: `${URL}${user?.picture_url}`}} />
                        </View>

                    </LinearGradient>

                    <View>
                        <View>
                            <Text style={styles.headerTitlee}>{user?.name}</Text>
                        </View>
                        <TouchableOpacity style={styles.headerTitleInnerView} onPress={() => props.navigation.navigate("Account")}>
                            <Text style={styles.headerTitleInnerTitle}>ACCOUNT SETTINGS</Text>
                            <View style={styles.chevronIcon}>
                                <Icon name="chevron-right" size={18} color="#3858CF" />
                            </View>

                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} containerStyle={styles.scrollView}>
                <ScrollView horizontal={true}>
                    <View style={styles.mainContainer}>
                        <View style={styles.agentInnerVieww}>
                            <Text style={styles.headerTitle}>Registration</Text>
                        </View>
                        <View style={styles.route}>
                            <FlatList data={links} renderItem={List} keyExtractor={item => item.id} horizontal={false} />
                        </View>

                        {/* <TouchableOpacity style={styles.agentView} onPress={myAgent}> */}
                        <TouchableOpacity style={styles.agentView} onPress={() => {props.navigation.navigate("CustomerOrder");}} >
                            <View style={styles.agentInnerView}>
                                <Text style={styles.headerTitle}>Orders</Text>
                            </View>

                            <View style={styles.routeInnerView}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                    <Image source={require("@Assets/image/archive-box-fill.png")} style={globalStyles.quesImg} />
                                    </View>
                                    <Text style={styles.routeText}>Customer Orders</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.agentVieww} onPress={pendingOrders}>
                            <View style={styles.routeInnerView}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                    <Image source={require("@Assets/image/arrows-counter-clockwise-fill.png")} style={globalStyles.quesImg} />
                                    </View>
                                    <Text style={styles.routeText}>Incomplete Orders</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.agentVieww} onPress={() => setShowPriceList(!showPriceList)}>
                            <View style={styles.routeInnerView}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                    <Image source={require("@Assets/image/DownloadSimplee.png")} style={globalStyles.quesImg} />
                                    </View>
                                    <Text style={styles.routeText}>Download Pricelist</Text>
                                </View>
                               {
                                   showPriceList ?
                                   <View>
                                   <Icon name="chevron-down" size={18} color="#9E9E9E" />
                               </View>
                               :
                               <View>
                               <Icon name="chevron-right" size={18} color="#9E9E9E" />
                           </View>
                               }
                            </View>  
                           
                        </TouchableOpacity>


                        {
                            showPriceList ?
                        <View style={styles.dropCover}>
                          <FlatList data={prices} renderItem={PriceList} keyExtractor={item => item.id} vertical={true} />
                        </View>
                        :
                        null
                        }


                        <View style={styles.agentView}>
                            <View style={styles.agentInnerView}>
                                <Text style={styles.headerTitle}>Help</Text>
                            </View>
                            <TouchableOpacity style={styles.routeInnerView} onPress={() => props.navigation.navigate("CustomerSupport")}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                    <Image source={require("@Assets/image/chats-fill.png")} style={globalStyles.quesImg} />
                                    </View>
                                    <Text style={styles.routeText}>Customer Support</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.routeInnerView} onPress={redirectToFAQ}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                        <Image source={require("@Assets/image/question-fill.png")} style={globalStyles.quesImg} />
                                    </View>
                                    <Text style={styles.routeText}>Frequently Asked Questions</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.routeInnerView} onPress={productRequest}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                    <FIcon name="comment-edit-outline" size={18} color="#00319D" />
                                    </View>
                                    <Text style={styles.routeText}>Product Request</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.agentView}>
                            <View style={styles.routeInnerView}>
                                <Text style={styles.headerTitle}>Legal</Text>
                            </View>
                            <TouchableOpacity style={styles.routeInnerView} onPress={redirectToTP}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                    <Image source={require("@Assets/image/file-text-fill.png")} style={globalStyles.quesImg} />
                                    </View>
                                    <Text style={styles.routeText}>Terms of Use &amp; Privacy Policy</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>

            <View style={styles.logout}>
                <TouchableOpacity style={styles.logoutInnerView} onPress={logUserOut}>
                    <Text style={styles.logoutText}>SIGN OUT</Text>
                    <View style={styles.logoutIcon}>
                        <Icon name="log-out" size={18} color="#D32F2F" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Drawer;