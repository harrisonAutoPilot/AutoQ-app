import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";

const List = (props) => {
    const item = props.item;

    const [showDesc, setShowDesc] = useState(true);
    const [id, setId] = useState("1");

    const descCalled = (id) => {
        setId(id);
        setShowDesc(!showDesc)
    }

    return (
        <View >
            <TouchableOpacity style={[styles.listContainer]} onPress={() => descCalled(item.id)}>

                <View style={styles.listTextView}>
                    <View style={styles.listTextInnerView}>
                        <Text style={styles.listTitle}>{item.title}</Text>
                    </View>
                </View>

                {showDesc && item.id === id ?
                    <View style={styles.thrashIcon} >
                        <Icon name="chevron-up" color="#757575" size={20} />
                    </View>
                    : 
                    <View style={styles.thrashIcon} >
                        <Icon name="chevron-down" color="#757575" size={20} />
                    </View>}

            </TouchableOpacity>

            {showDesc && item.id === id ?
                <View style={styles.descView}>
                    <Text style={styles.listTitle}>{item.desc}</Text>
                </View>
                : showDesc && item.id !== id ?
                null:
                null}

        </View>
    )
};

export default List;