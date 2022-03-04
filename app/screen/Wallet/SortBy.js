import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";
import BottomSheet from "react-native-gesture-bottom-sheet";


const Sort = (props) => {

    const [active, setActive] = useState(0);

    const setActiveColor = (id) => {
        setActive(id)
    };

    useEffect(() => {
            setActive(0)
    },[props.sheet])

    return (
        <BottomSheet hasDraggableIcon ref={props.bottomSheetS} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 2.3} radius={50} styles={styles.addStoreBottomSheet}>
            <View style={styles.body2}>
           
                <View style={styles.modalPadding2}>
                    <Text style={styles.modalTitle}>Sort by</Text>
                </View>

                <TouchableOpacity style={[styles.mainView, ]} onPress={() => {props.sort(1); setActiveColor(1)}}>
                    <Text style={[styles.modaltitle,  active == 1 ? styles.active : null]}>Amount</Text>
                    {active == 1 ?
                    <Icon name="check" color="rgba(70, 157, 0, 1)" size={20}/>:
                    null}
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => {props.sort(2); setActiveColor(2)}}>
                    <Text style={[styles.modaltitle, active == 2 ? styles.active : null]}>Debit Transactions</Text>
                    {active == 2 ?
                    <Icon name="check" color="rgba(70, 157, 0, 1)" size={20}/>:
                    null}
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => {props.sort(3);  setActiveColor(3)}}>
                    <Text style={[styles.modaltitle, active == 3 ? styles.active : null]}>Credit Transactions</Text>
                    {active == 3 ?
                    <Icon name="check" color="rgba(70, 157, 0, 1)" size={20}/>:
                    null}
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => {props.sort(4);  setActiveColor(4)}}>
                    <Text style={[styles.modaltitle,  active == 4 ? styles.active : null]}>Date</Text>
                    {active == 4 ?
                    <Icon name="check" color="rgba(70, 157, 0, 1)" size={20}/>:
                    null}
                </TouchableOpacity>

            

            </View>
            <TouchableOpacity style={styles.close} onPress={props.closeSort}>
                    <Text style={styles.closeText}>CLOSE</Text>
                </TouchableOpacity>

            </BottomSheet >
    )
};

export default Sort