import { StyleSheet, Platform, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("screen")
const IosHeight = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
    tabLable: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400",
        marginBottom: 15,
        // paddingBottom:20,


    },
    tabLableIOS: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400",
        // paddingBottom:10,
        alignSelf:'center',
        //remember
        position:'absolute',
        paddingTop:80,
    },
tabBarStyle:{
    height: Platform.OS === "android" ? 70 : IosHeight / 8.3,
     display: "flex",
     marginBottom:Platform.OS === "android" ? -0 : 1 ,
    position:'relative'
},
tabLableTop: {
    position: "absolute",
    top: Platform.OS === "android" ? -8 : -18,
    borderTopColor: "#3858CF",
    borderTopWidth: 4,
    width: 60,
    left: -22,
    alignItems: "center"
},
    iconStyle: {
        paddingTop:Platform.OS === "android" ?  5 :  1,
        paddingBottom:Platform.OS === "android" ? 5 :10,
        alignItems: "center",
        // marginBottom: 5
    },
 
    toast:{
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        letterSpacing: 0.2,
        color: "#fff"
    },
    innerTabView:{
        // paddingBottom:10,
        // width:"25%"
    },
    toastView: {
        position: "absolute",
        top: 20,
        padding: 16,
        borderRadius: 6,
        width: wp('80%'),
        alignSelf: 'center',
        elevation: 2
    },


})