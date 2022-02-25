import React from "react";
import { StatusBar, View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./style";

const Header = (props) => {
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#00319D' hidden={false} />
            <View style={styles.mainBody}>
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={[styles.innerMainHeader, styles.headerIconView, props.bottom]}>
                            <TouchableOpacity style={styles.headerSubIconMenuView} onPress={props.drawer}>
                                <Icon name="menu" color="#fff" size={24} />
                            </TouchableOpacity>
                            {props.title ?
                                <View style={styles.browseView}>
                                    <Text style={[styles.headerTitle]}>{props.title}</Text>
                                </View> : null
                            }
                            <View style={styles.headerSubIconView}>
                                <TouchableOpacity onPress={props.notify}>
                                    <View>
                                        <FIcon name="bell" color="#fff" size={20} />
                                    </View>
                                </TouchableOpacity >
                                <TouchableOpacity onPress={props.notify}>
                                    <View style={styles.headerSubLastIconView}>
                                        <Icon name="md-cart-outline" color="#fff" size={20} />
                                    </View>
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