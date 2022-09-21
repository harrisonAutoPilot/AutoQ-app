import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';


const Check = (props, id) => {

    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress} id={id}>
              { props.isChecked ? <AIcon name="checksquare" size={20} color="green" /> :  <Icon name="square" size={20} color="green" />}  
                              
                            
            </Pressable>
           
        </View>
    );
};

export default Check;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // position:'absolute',
        marginLeft:17,
        marginTop:-10,
        zIndex:900


    },
    title: {
        fontSize: 18,
        color: "#5f9a32",
        marginLeft: 5,
        fontWeight: "500",
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2,
    },
});