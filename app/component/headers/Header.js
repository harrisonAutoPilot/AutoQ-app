import React from "react";
import { StatusBar, View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";


import styles from "./style";

const Header = (props) => {


    const { items, listItems } = useSelector((state) => state.cart);

    const { notificationCount } = useSelector((state) => state.notification);
    
  
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#00319D' hidden={false} />
            <View style={styles.mainBody}>
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={[ styles.headerIconView, props.bottom]}>
                            <TouchableOpacity style={styles.headerSubIconMenuView} onPress={props.drawer}>
                                <Icon name="menu" color="#fff" size={28} />
                            </TouchableOpacity>
                            {props.title ?
                                <View style={styles.browseView}>
                                    <Text style={[styles.headerTitle]}>{props.title}</Text>
                                </View> : null
                            }
                            <View style={styles.headerSubIconView}>
                                <TouchableOpacity onPress={props.notify}>
                                    <View>
                                        <FIcon name="bell" color="#fff" size={26} />
                                    </View>

                                   {notificationCount > 0 &&
                                    <View style={styles.badgeN}>
                                        <Text style={styles.badgeText}>{notificationCount}</Text>
                                    </View>
                                    }

                                </TouchableOpacity >
                                <TouchableOpacity onPress={props.cart}>
                                    <View style={styles.headerSubLastIconView}>
                                        <Icon name="md-cart-outline" color="#fff" size={26} />
                                    </View>
                                  
                                    {items.carts && items.carts.to > 0 ?
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>{items.carts?.total}</Text>
                                    </View>
                                    : null}
                                </TouchableOpacity >
                            </View>
                        </View>
                    </SafeAreaView>
                    {props.children}
                </View>
            </View>
        </View>
    )
};

export default Header;