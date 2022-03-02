import React from "react";
import { View, Text, TouchableOpacity,  Image, Dimensions} from "react-native";
import Modal from "react-native-modal";
import FIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./style";
import globalStyle from "@Helper/GlobalStyles";
import BottomSheet from "react-native-gesture-bottom-sheet";


const Sort = (props) => {

    return (
        <BottomSheet hasDraggableIcon ref={props.bottomSheetS} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 2.1} radius={50} styles={styles.addStoreBottomSheet}>
            <View style={styles.body2}>
           
                <View style={styles.modalPadding2}>
                    <TouchableOpacity onPress={props.closeSort} style={styles.backCover}>
                        <Image source={require("@Assets/image/left.png")} style={globalStyle.backImgSort} />
                    </TouchableOpacity>
                    <View style={{alignSelf: "center", alignContent: "center", alignItems: "center"}}>
                    <Text style={styles.modalTitle}>Sort</Text>
                    </View>
                  
                </View>

                <TouchableOpacity style={styles.mainView} onPress={() => props.sort(1)}>
                    <Text style={styles.modaltitle}>Amount</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => props.sort(2)}>
                    <Text style={styles.modaltitle}>Debit Transactions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => props.sort(3)}>
                    <Text style={styles.modaltitle}>Credit Transactions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => props.sort(4)}>
                    <Text style={styles.modaltitle}>Date</Text>
                </TouchableOpacity>

            </View>

            </BottomSheet >
    )
};

export default Sort