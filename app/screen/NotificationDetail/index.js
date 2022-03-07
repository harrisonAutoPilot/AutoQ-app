import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { COHeader as Header } from "@Component";


const NotificationDetail = (props) => {

    const goBack = () => props.navigation.goBack();
    const { user } = useSelector((state) => state.auth);

    return (
        <View style={styles.main}>
              <Header title="Discount Monday !!!" onPress={goBack} styleView={styles.body}/> 
            <View style={styles.botCover}>
                <Image source={require("@Assets/image/Frame26.png")} style={styles.lolaImg} />
                <Text style={styles.botText}>Lola from Remedial</Text>
            </View>

            <View style={styles.userCover}>
                <Text style={styles.nameText}>Hi {user.name?.split(" ")[0]},</Text>
            </View>

            <View style={styles.descCover}>
                <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae. Aliquet sagittis id consectetur purus.
                    Semper risus in hendrerit gravida rutrum. Pellentesque dignissim enim sit amet venenatis urna cursus. Dignissim sodales ut eu sem integer vitae justo eget. Eget nulla facilisi etiam dignissim.

                </Text>
            </View>
        </View>
    )
};

export default NotificationDetail;