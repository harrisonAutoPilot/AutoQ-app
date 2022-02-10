import React from "react";
import { View, Text, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { Btn } from "@Component/index";
import styles from "./style";

const AccountActivation = (props) => {
    
    const redirectToHome = () => props.navigation.navigate("VIP");

    return (
        <View style={styles.mainBody}>
            <StatusBar barStyle="light-content" backgroundColor='#3858CF' hidden={false} />
                <View style={styles.headerView}>
                    <Text style={styles.headerTitle}>Success!!!</Text>
                </View>
                <View style={styles.headerSubTitleView}>
                    <Text style={styles.headerSubTitle}>Your account has been created successfully.</Text>
                </View>

                <View style={styles.outerCircleMainView}>
                    <View style={styles.outerCircleView}>

                        <View style={styles.innerCircleMainView}>
                            <View style={styles.iconView}>
                                <Icon name="check" size={50} color="#7CCF24"/>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Btn title="Go to my Account" style={styles.submit} styles={styles.btnText} onPress={redirectToHome}/>
                </View>
        </View>
    )
};

export default AccountActivation;