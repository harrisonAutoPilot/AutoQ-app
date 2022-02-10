import React from "react";
import { View, Text, TouchableOpacity,  Image, } from "react-native";
import Modal from "react-native-modal";
import FIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./style";
import globalStyle from "@Helper/globalStyles";
import GestureRecognizer from 'react-native-swipe-gestures';

const Sort = (props) => {

    return (
        <GestureRecognizer
            style={{flex: 1}}
            onSwipeUp={ props.isVisible}
            onSwipeDown={ props.onSwipeComplete1}
            >
        <Modal
            isVisible={props.isVisible}
            animationIn="slideInUp"
            animationInTiming={800}
            animationOut="slideOutDown"
            animationOutTiming={800}
            useNativeDriver={false}
            coverScreen={true}
            swipeDirection="down"
            onSwipeComplete={props.onSwipeComplete}
        >
            <View style={styles.body}>
            <View style={globalStyle.dragIconSm}><FIcon name="minus" color="gray" size={35}/></View>
            <View style={styles.modalPadding}>
                    <TouchableOpacity onPress={props.close} style={styles.backCover}>
                        <Image source={require("@Assets/image/left.png")} style={globalStyle.backImgSort} />
                    </TouchableOpacity>
                    
                    <Text style={styles.modalTitle}>Sort By</Text>
                </View>

                <TouchableOpacity style={styles.mainView} onPress={() => props.sort(1)}>
                    <Text style={styles.modaltitle}>Amount</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => props.sort(2)}>
                    <Text style={styles.modaltitle}>Item</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => props.sort(3)}>
                    <Text style={styles.modaltitle}>Date</Text>
                </TouchableOpacity>

            </View>

        </Modal>
        </GestureRecognizer>
    )
};

export default Sort