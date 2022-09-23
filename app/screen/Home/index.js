import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getAgent } from "@Request/Agent";
import styles from './style';
import { Header } from "@Component";
import { getCustomers } from "@Request/Customer";

const Home = (props) => {

    const dispatch = useDispatch();

    const date = new Date();

    const { user } = useSelector((state) => state.auth);

    const { customers } = useSelector((state) => state.customer);

    const { agent } = useSelector((state) => state.agent);

    const [dayTime, setDayTime] = useState(null);
    const [dayTimeImage, setDayTimeImage] = useState(null);

    const openDrawer = () => props.navigation.openDrawer();


    const redirectToDeals = () => props.navigation.navigate("Deals");
    const redirectToCustomerOrder = () => props.navigation.navigate("CustomerOrder");
    const openNotification = () => props.navigation.navigate("Notification");
    const openCart = () => props.navigation.navigate("Cart");
    const redirectToInactiveCustomers = () => props.navigation.navigate("CustomersDashboard", { id: 1 });
    const redirectToPendingCustomers = () => props.navigation.navigate("CustomersDashboard");

    useEffect(() => {
        if ((date.getHours() > 0 || date.getHours() == 0) && date.getHours() < 12) {
            setDayTime("Good Morning");
            setDayTimeImage(require("@Assets/image/sun.png"));
        } else if ((date.getHours() > 12 || date.getHours() == 12) && date.getHours() < 18) {
            setDayTime("Good Afternoon");
            setDayTimeImage(require("@Assets/image/sun.png"));
        } else {
            setDayTime("Good Evening");
            setDayTimeImage(require("@Assets/image/night.png"));
        }

        dispatch(getAgent());
        dispatch(getCustomers());
    }, []);

    return (
        <View style={styles.miniMainBody}>
            <View style={styles.topCover}>

                <Header drawer={openDrawer} notify={openNotification} cart={openCart} />
                
                <View style={styles.agentFaceCover}>
                    <Image style={styles.agentImg} source={{ uri: `${URL}${user?.picture_url}` }} />
                </View>
                <View style={styles.welcomeCover}>
                    <Image style={styles.sunImg} source={dayTimeImage} />
                    <Text style={styles.welcomeText}>{dayTime} {user.name?.split(" ")[0]}</Text>
                </View>
            </View>

            <View style={styles.bottomCover}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.smCover}>
                        <View style={styles.sectorCover}>
                            <Text style={styles.titleCover}>Agent Dashboard</Text>
                        </View>
                        <View style={styles.cardCover} >
                            <TouchableOpacity style={styles.cardOne} onPress={redirectToPendingCustomers}>
                                <View style={styles.cardTopInner}>
                                    <Image style={styles.sunImg} source={require("@Assets/image/ArrowsClockwise.png")} />
                                    <Text style={styles.cardBgText}>{agent.users_count}</Text>
                                </View>
                                <View style={styles.cardDownInner}>
                                    <Text style={styles.cardSmText}>New &#38; Pending Registration</Text>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardTwo} onPress={redirectToCustomerOrder}>
                                <View style={styles.cardTopInner}>
                                    <Image style={styles.sunImg} source={require("@Assets/image/download.png")} />
                                    <Text style={styles.cardBgText}>{agent.orders_count}</Text>
                                </View>
                                <View style={styles.cardDownInner}>
                                    <Text style={styles.cardSmText}>All {"\n"}Orders</Text>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardThree} >
                                <Image style={styles.burnImg} source={require("@Assets/image/cardFrame.png")} />
                                <View style={styles.suninner}>
                                    <View style={styles.cardTopInner}>
                                        <Image style={styles.sunImg} source={require("@Assets/image/tag.png")} />
                                        <Text style={styles.cardBgText}>{agent.special_deals_count}</Text>
                                    </View>
                                    <View style={styles.cardDownInner}>
                                        <Text style={styles.cardSmText}>Special {"\n"}Deals</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardFour} onPress={redirectToInactiveCustomers}>
                                <View style={styles.cardTopInner}>
                                    <Image style={styles.sunImg} source={require("@Assets/image/UsersThree.png")} />
                                    <Text style={styles.cardBgText}>{customers?.inactive?.count}</Text>
                                </View>
                                <View style={styles.cardDownInner}>
                                    <Text style={styles.cardSmText}>Inactive {"\n"}Customers</Text>
                                </View>

                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
};

export default Home;