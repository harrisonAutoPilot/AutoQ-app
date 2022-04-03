import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    afterTop: {
        width: wp('70%'),
        marginLeft: wp('15%'),
        marginRight: wp('15%'),
        marginTop: 10,
    },
    topText: {
        fontSize: 32,
        fontFamily: "Urbanist-Regular",
        lineHeight: 40,
        color: "#ffffff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    downText: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "rgba(255, 255, 255, 0.8)",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
    },
    midCover: {
        width: wp('85%'),
        marginLeft: wp('7.5%'),
        marginRight: wp('7.5%'),
        marginTop: 0,
        borderWidth: 0,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,

    },
    midItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    itemText: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "rgba(255, 255, 255, 0.6)",
        letterSpacing: 0.2,
        textAlign: "center"

    },
    midItemColor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        borderStyle: 'solid',
    },
    itemTextColor: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#B1FF5C",
        letterSpacing: 0.2,
        fontWeight: "700",
        textAlign: "center"

    },
    orderItem: {
        width: wp('80%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        marginTop: 15,
    },

    addressBtn2: {
        width: wp('80%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginTop: 75,
    },
    sucBtnText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    detailCover:{
        width:wp('80%'),
        padding:20,
        borderTopWidth:1,
        borderColor:'rgba(255, 255, 255, 0.2)',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:20,
    },
    detailText:{
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#FFFFFF",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    imgCover:{
        width:70,
        height:70,
        borderWidth:3,
        borderColor:'#fff',
        borderRadius:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    regImg:{
        width:70,
        height:70,
        resizeMode:'contain'   
    },
    itemCover:{
        flexDirection:'row',
        padding:10,
        marginBottom:-10,
        width:wp('70%'),

    },
    itemImg:{
        width:20,
        height:20,
        resizeMode:'contain',
    },
    itemText:{
        fontSize: 16,
        fontFamily: "Urbanist",
        lineHeight: 24,
        color: "#FFFFFF",
        letterSpacing: 0.3,
        textAlign: "left",
        fontWeight:'400',
        marginTop:-2,
        marginLeft:10,
    },
sucBtnCover:{
marginTop:-25,
}
});

export default styles