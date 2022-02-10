import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import FIcon from "react-native-vector-icons/MaterialIcons";

import styles from "./style";
import globalStyles from "@Helper/globalStyles";
import Data from "./data";
import { Btn } from "@Component/index";
import NavHeader from "@Component/NavHeader";
import style from "../Cart/style";

const PreRegister = (props) => {
    const [category, setCategory] = useState("");
    const [active, setActive] = useState("0");
    const [errMsg, setErrMsg] = useState("");

    const selectUserType = id => {
        setActive(id);
    };

    const redirectToRegisterDetails = () => {
        if (!category.length) {
            setErrMsg("Please select a category")
        } else {
            props.navigation.navigate("Register", { category });
        }
    };

    const login = () => props.navigation.navigate("Login");

    const redirectToPreviousScreen = () => props.navigation.goBack();

    const renderItem = ({ item }) => (
        <View style={[styles.optionView, item.id === "1" ? styles.optionViewBetween1 : styles.optionViewBetween2]}>
            <View style={active === item.id ? styles.optionIconView : styles.optionIconView2}>
                <TouchableOpacity onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                    {active === item.id ?
                        <TouchableOpacity style={styles.iconCircle} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                            <FIcon name="lens" size={12} color="#fff" style={styles.icon} />
                        </TouchableOpacity >
                        :
                        <TouchableOpacity style={styles.iconCircle2} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>

                        </TouchableOpacity>
                    }
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.optionTextView} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                <Text style={styles.optionText}>{item.title}</Text>
                <View style={styles.optionMiniTextView}>
                    <Text style={styles.onboardSubTitle1}>{item.desc}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.mainBody}>
            <NavHeader styleView={globalStyles.mainViewBackground2} mainView={globalStyles.mainView2} onPress={redirectToPreviousScreen} />

            <View style={styles.logoImgView}>
                <Image source={require("@Assets/image/rh_logo.png")} style={styles.logoImg} />
            </View>
            <View>
                <Text style={styles.onboardTitle}>Welcome onboard! Let's get to know you.</Text>

            </View>
            {errMsg ? <View style={styles.errMainView}>
                <Text style={styles.failedResponseText}>{errMsg}</Text>
            </View>
                : <View style={styles.onboardSubTitleView}>
                    <Text style={styles.onboardSubTitle}>Tell us who you are so we can help you find the right products</Text>
                </View>}
                

            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle2}>
                
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollStyle3}>
                    <View style={styles.mainContainer}>
                            <FlatList
                                data={Data}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />

                        <View style={styles.preBtnCover}>
                            <Btn title="Next" onPress={redirectToRegisterDetails} style={styles.btn}/>
                        </View>

                        <View style={styles.loginView}>
                            <Text style={styles.optionText}>Already have an account?</Text>
                            <TouchableOpacity onPress={login}>
                                <Text style={styles.loginText}> LOG IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>

        </View>
    )
};

export default PreRegister;