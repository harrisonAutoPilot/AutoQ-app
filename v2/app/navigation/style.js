import { StyleSheet, Platform, Dimensions } from "react-native";
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    tabLable: {
        fontSize: 11,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.5,
        color: "#45464F",
    },
    tabLableActive: {
        color: "#3858CF",
        fontSize: 11,
        fontFamily: "AnekLatin-Medium",
    },
    iconStyle: {
        paddingTop: 10,
        alignItems: "center"
    },
    badgeStyle: {
        backgroundColor: "rgba(186, 26, 26, 1)",
        fontSize: 11,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.2,
    },
    tabBarStyle: {
        borderTopWidth: 0, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        height: 80,
        paddingTop: 5,
        paddingBottom: 26
    },
    toast: {
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.2,
        color: "#fff"
    },

    toastView: {
        position: "absolute",
        top: Platform.OS === "ios" ? 50 : 20,
        padding: 16,
        borderRadius: 6,
        width: wp('80%'),
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    activeStyle:{
        padding:5,
        backgroundColor:"#00b300"
    },

    item:{
        alignItems: "center",
        backgroundColor: "rgba(223, 225, 249, 1)",
        borderRadius: 20,
        width: "80%",
        paddingVertical:5,
    },
    uniqueStyle:{
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor:"rgba(51, 83, 203, 1)",
        alignItems:'center',
        justifyContent:'center'
    }
})