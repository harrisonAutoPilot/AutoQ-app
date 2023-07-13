import React from "react";
import { View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


import style from "./style";



export default onBoardingItem = ({ item, closeBottomSheet,
    resetSearch, keys, itemKey, ids, getProps, propsname }) => {

    const name = getProps.values[propsname]

    const setCountryCode = (item) => {

        resetSearch();

        closeBottomSheet();

        ids && ids(item.id)

        getProps.setFieldValue(propsname, item[itemKey]);

    };



    return <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed && 'rgba(223, 225, 249, 0.3)',
            },
            style.renderItemContainer,
            name == item[itemKey] && style.renderActiveItemContainer
        ]}

        onPress={() => setCountryCode(item)}>

        <View style={style.renderItemImgContainer}>
            {keys == 1 ?
                null
                :
                <Icon
                    name="location-pin"
                    size={20}
                    color="rgba(90, 93, 114, 1)"
                    style={style.renderItemImg} />
            }

            <Text style={style.renderItemTitle}>{item.name}</Text>
        </View>
        {keys == 1 &&
            <View style={style.onBoardingTitleContainer}>
                <Text style={style.renderItemDialCode}>+{item.dial_code}</Text>
            </View>
        }


    </Pressable>

}