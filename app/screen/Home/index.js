import React, {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getAgent } from "@Request/Agent";
import { listCart } from "@Request/Cart";
import styles from './style';
import { Header } from "@Component";


const Home = (props) => {
    const dispatch = useDispatch();
    const date = new Date();

    const { user } = useSelector((state) => state.auth);
    const [dayTime, setDayTime] = useState(null);
    const [dayTimeImage, setDayTimeImage] = useState(null);

    const openDrawer = () => props.navigation.openDrawer();
    const { agent} = useSelector((state) => state.agent);
    const { items } = useSelector((state) => state.cart);

    const redirectToDeals = () => props.navigation.navigate("Deals");
    const redirectToCustomerOrder = () => props.navigation.navigate("CustomerOrder");
    const openNotification = () => props.navigation.navigate("Notification");
    const openCart = () => props.navigation.navigate("Cart");

    useEffect(() => {
        if( (date.getHours() > 0 || date.getHours() == 0) && date.getHours() < 12){
            setDayTime("Good Morning");
            setDayTimeImage(require("@Assets/image/sun.png"));
        }else if((date.getHours() > 12 || date.getHours() == 12) && date.getHours() < 18){
            setDayTime("Good Afternoon");
            setDayTimeImage(require("@Assets/image/sun.png"));
        }else{
            setDayTime("Good Evening");
            setDayTimeImage(require("@Assets/image/night.png"));
        }

        dispatch(getAgent());
        dispatch(listCart());
    }, [])

    return (
        <View style={styles.miniMainBody}>
            <View style={styles.topCover}>
                <Header  drawer={openDrawer} notify={openNotification} cart={openCart} cartLength={items?.carts?.length}/>
                <View style={styles.agentFaceCover}>
                    <Image style={styles.agentImg} source={require("@Assets/image/agentFace.png")} />
                </View>
                <View style={styles.welcomeCover}>
                    <Image style={styles.sunImg} source={dayTimeImage} />
                    <Text style={styles.welcomeText}>{dayTime} {user.name?.split(" ")[0]}</Text>
                </View>
            </View>
            <View style={styles.bottomCover}>
                <View style={styles.sectorCover}>
                    <Text style={styles.titleCover}>Agent Dashboard</Text>
                </View>
                <View style={styles.cardCover}>
                    <View style={styles.cardOne}>
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/ArrowsClockwise.png")} />
                            <Text style={styles.cardBgText}>{agent.users_count}</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>New &#38; Pending Registration</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.cardTwo} onPress={redirectToCustomerOrder}>
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/download.png")} />
                            <Text style={styles.cardBgText}>{agent.orders_count}</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>All {"\n"}Orders</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardThree} onPress={redirectToDeals}>
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/tag.png")} />
                            <Text style={styles.cardBgText}>{agent.special_deals_count}</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>Special {"\n"}Deals</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.cardFour}>
                        <View style={styles.cardTopInner}>
                            <Image style={styles.sunImg} source={require("@Assets/image/UsersThree.png")} />
                            <Text style={styles.cardBgText}>{agent.inactive_users_count}</Text>
                        </View>
                        <View style={styles.cardDownInner}>
                            <Text style={styles.cardSmText}>Inactive Customers</Text>
                        </View>

                    </View>

                </View>

            </View>
        </View>
    )
};

export default Home;