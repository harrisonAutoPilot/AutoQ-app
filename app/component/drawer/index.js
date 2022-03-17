import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';

import links from "./data";
import styles from "./style";
import { logout } from "@Store/Auth";
import globalStyles from "@Helper/GlobalStyles";
import { getCustomers } from "@Request/Customer";

const Drawer = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getCustomers());

    }, []);

    const logUserOut = () => {
        props.navigation.closeDrawer();
        dispatch(logout());

    }
    const pendingOrders = () => props.navigation.navigate("PendingOrder");

    const { customers } = useSelector((state) => state.customer);

    const redirectToScreen = (route) => {

        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: route }]
            })
        );
        props.navigation.closeDrawer();
        // props.navigation.navigate(route);

    };

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
                    <FIcon name={item.icon} size={17} color="#00319D" />
                </View>
                <Text style={styles.routeText}>{item.name}</Text>
                <View style={styles.firstInnerHeader}>
                    <Text style={styles.firstInnerTitle}>{customers?.pending?.count}</Text>
                </View>
            </View>
            <View>
                <Icon name="chevron-right" size={18} color="#9E9E9E" />
            </View>
        </TouchableOpacity>

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
                            <Image style={styles.agentImg} source={require("@Assets/image/agentFace.png")} />
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
                        <TouchableOpacity style={styles.agentView} onPress={() => props.navigation.navigate("CustomerOrder")} >
                            <View style={styles.agentInnerView}>
                                <Text style={styles.headerTitle}>Product</Text>
                            </View>

                            <View style={styles.routeInnerView}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                        <FIcon name="download-box" size={17} color="#00319D" />
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
                                        <Icon name="refresh-cw" size={17} color="#00319D" />
                                    </View>
                                    <Text style={styles.routeText}>Pending Orders</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </View>
                        </TouchableOpacity>


                        <View style={styles.agentView}>
                            <View style={styles.agentInnerView}>
                                <Text style={styles.headerTitle}>Help</Text>
                            </View>
                            <View style={styles.routeInnerView}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                        <FIcon name="comment-multiple-outline" size={17} color="#00319D" />
                                    </View>
                                    <Text style={styles.routeText}>Customer Support</Text>
                                </View>
                                <View>
                                    <Icon name="chevron-right" size={18} color="#9E9E9E" />
                                </View>
                            </View>

                            <TouchableOpacity style={styles.routeInnerView} onPress={redirectToFAQ}>

                                <View style={styles.routeTextView}>
                                    <View style={styles.routeTextIconView}>
                                        <Image source={require("@Assets/image/Question.png")} style={globalStyles.quesImg} />
                                    </View>
                                    <Text style={styles.routeText}>Frequently Asked Questions</Text>
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
                                        <Icon name="file-text" size={17} color="#00319D" />
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