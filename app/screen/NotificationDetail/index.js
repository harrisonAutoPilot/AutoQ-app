import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { COHeader as Header } from "@Component";


const NotificationDetail = (props) => {

    const goBack = () => props.navigation.goBack();
    const { user } = useSelector((state) => state.auth);
    const details = props.route.params?.item

    return (
        <View style={styles.main}>
            <Header title="Notification" onPress={goBack} styleView={styles.body} />
            <View style={styles.botCover}>
                <Image source={require("@Assets/image/Frame26.png")} style={styles.lolaImg} />
                <Text style={styles.botText}>Lola from Remedial</Text>
            </View>

            <View style={styles.userCover}>
                <Text style={styles.nameText}>Hi {user.name?.split(" ")[0]},</Text>
            </View>

            <View style={styles.descCover}>
                <Text style={styles.descText}>
                    {details.description}
                </Text>
            </View>
        </View>
    )
};

export default NotificationDetail;