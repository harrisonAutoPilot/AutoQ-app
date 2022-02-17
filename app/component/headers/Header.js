import React from "react";
import { StatusBar, View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./style";

const Header = (props) => {
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#002C80' hidden={false} />
            <LinearGradient
                colors={['#00319D', '#00319D']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={props.mainBody}
            >
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={[styles.innerMainHeader, styles.headerIconView, props.bottom]}>
                            <TouchableOpacity style={styles.headerSubIconMenuView} onPress={props.drawer}>
                                <Icon name="menu" color="#fff" size={24} />
                            </TouchableOpacity>
                            {props.title ?
                                <View style={styles.browseView}>
                                    <Text style={[styles.modalminiTitle, { color: "#fff", textAlign: "center" }]}>{props.title}</Text>
                                </View> : null
                            }
                            <View style={styles.headerSubIconView}>
                                <TouchableOpacity onPress={props.favourite}>
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
            </LinearGradient>
        </View>
    )
};

export default Header;