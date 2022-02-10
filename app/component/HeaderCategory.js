import React from "react";
import { StatusBar, View, SafeAreaView, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "@Screen/AllCategory/style";

const Header = (props) => {
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#3858CF' hidden={false} />
            <LinearGradient
                colors={['#3858CF', '#7485FF']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={props.mainBody}
            >
                <View style={styles.header}>
                    <SafeAreaView style={[styles.headerIconView, props.bottom]}>
                        <View style={styles.headerSubIconMenuView}>
                            <Icon name="menu" color="#fff" size={24} />
                        </View>
                        {props.title ?
                            <View style={styles.browseView}>
                                <Text style={[styles.modalminiTitle, { color: "#fff", textAlign: "center" }]}>{props.title}</Text>
                            </View> : null
                        }
                        <View style={styles.headerSubIconView}>
                            <View>
                                <Icon name="heart" color="#fff" size={20} />
                            </View>
                            <View style={styles.headerSubLastIconView}>
                                <FIcon name="bell" color="#fff" size={20} />
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