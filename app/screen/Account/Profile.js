import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useSelector,} from "react-redux";

import styles from "./style";

const Profile = () => {

    const { user} = useSelector((state) => state.auth);
 
    return (
        <View style={styles.container}>
            <View style={styles.topCover}>
                <View style={styles.imgCover}>
                    <Image source={require("@Assets/image/agentFace.png")} style={styles.img} />
                    <View style={styles.cameraCover}>
                        <TouchableOpacity>
                            <Image source={require("@Assets/image/camera.png")} style={styles.camImg} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.topTextCover}>
                    <Text style={styles.agentNameText}>{user?.name}</Text>
                    <Text style={styles.agentCodeText}>RH/AG/004 - Registered Agent</Text>
                </View>

            </View>
            
            <ScrollView
                indicatorStyle="white"
                contentContainerStyle={styles.scrollContentContainer}>
                <View style={styles.bottomCover}>

                    <View style={styles.cardCover}>
                        <View style={styles.locCover}>
                            <View style={styles.locImgCover}>
                                <Image source={require("@Assets/image/map-pin-fill.png")} style={styles.locImg} />
                            </View>
                            <Text style={styles.locTextTitle}>Location:</Text>
                        </View>
                        <View>
                            <Text style={styles.locText}>Lagos/Ikeja</Text>
                        </View>
                    </View>
                    <View style={styles.cardCover}>
                        <View style={styles.locCover}>
                            <View style={styles.locImgCover}>
                                <Image source={require("@Assets/image/agentPhone.png")} style={styles.locImg} />
                            </View>
                            <Text style={styles.locTextTitle}>Phone:</Text>
                        </View>
                        <View>
                            <Text style={styles.locText}>+{user?.phone}</Text>
                        </View>
                    </View>
                    <View style={styles.cardCover}>
                        <View style={styles.locCover}>
                            <View style={styles.locImgCover}>
                                <Image source={require("@Assets/image/agentWhatsapp.png")} style={styles.locImg} />
                            </View>
                            <Text style={styles.locTextTitle}>Whatsapp:</Text>
                        </View>
                        <View>
                            <Text style={styles.locText}>+{user?.phone}</Text>
                        </View>
                    </View>
                    <View style={styles.cardCover}>
                        <View style={styles.locCover}>
                            <View style={styles.locImgCover}>
                                <Image source={require("@Assets/image/agentEmail.png")} style={styles.locImg} />
                            </View>
                            <Text style={styles.locTextTitle}>Email:</Text>
                        </View>
                        <View>
                            <Text style={styles.locText}>{user?.email}</Text>
                        </View>
                    </View>

                    <View style={styles.bankCaption}>
                        <Text style={styles.captionText}>Bank Details</Text>
                    </View>
                    <View style={styles.downCover}>
                        <View style={styles.cardCover}>
                            <View style={styles.locCover}>

                                <Text style={styles.locTextTitle}>Bank:</Text>
                            </View>
                            <View>
                                <Text style={styles.locText}>Wema Bank</Text>
                            </View>
                        </View>

                        <View style={styles.cardCover}>
                            <View style={styles.locCoverNew}>
                                <Text style={styles.locTextTitle}>Account Number:</Text>
                            </View>
                            <View>
                                <Text style={styles.locText}>0045678900</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Added this line to know if its reflecting */}
            </ScrollView>

        </View>
    )
};

export default Profile;