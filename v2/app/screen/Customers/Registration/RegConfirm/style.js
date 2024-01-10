import { StyleSheet, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    view: {
     height:hp('100%'),
    flexDirection: 'column',
    justifyContent: 'space-between', 
    backgroundColor: '#fff',
    },
    modalView: {
        backgroundColor: "rgba(242, 240, 244, 1)",
        width: wp('90%'),
        alignSelf: "center",
        padding:10,
        paddingVertical:0,
        marginTop:50,
        borderRadius:6
    },
    listCover: {
        width: wp('90%'),
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:'rgba(121, 116, 126, 0.12)'

    },
    itemTitle: {
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "rgba(27, 27, 31, 1)",
        textTransform: "capitalize",

    },
    itemName: {
        fontFamily: "AnekLatin-Medium",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "rgba(69, 70, 79, 1)",
        textTransform: "capitalize",
        width: 200,
        textAlign: 'right',

    },
    itemNameLink: {
        fontFamily: "AnekLatin-Medium",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "rgba(51, 83, 203, 1)",
        textTransform: "uppercase",
        width: 200,
        textAlign: 'right',

    },

    btnCover: {
        paddingHorizontal:20,
        width:wp('100%'),
        paddingVertical:30,
        justifyContent: 'center',
        alignSelf:'center',
    },
    errorCover:{
        width:"100%",
        alignSelf:'center',
        zIndex:9000,
        top:20,
    }

})