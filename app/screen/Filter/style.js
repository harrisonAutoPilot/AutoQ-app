import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },
    header: {
        backgroundColor: "#00319D",
        height: Platform.OS === "ios" ? null: 60,
        paddingLeft: 20,
        justifyContent: "center",
        paddingBottom: Platform.OS === "ios" ? 10 : 0
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.1,
    },
    headerTitle2: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#fff",
        letterSpacing: 0.1,
        marginTop:10,
    },
    pricesView: {
        marginTop: 12,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24
    },
    pricesView1: {
        marginTop: 5,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    listView: {
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        borderColor: "#fafafa",
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginRight: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    column: {
        flexDirection: "row",
        paddingHorizontal: 16,
    },
    priceMainView: {
        borderWidth: 1,
        borderColor: "rgba(224, 224, 224, 1)",
        paddingBottom: 0,
        paddingTop: 5,
        maxHeight:200,
        flex:1,
    },
    priceMainView1: {
        borderWidth: 1,
        borderColor: "rgba(224, 224, 224, 1)",
        paddingBottom: 10,
        paddingTop: 5,
        paddingLeft:10,
        paddingRight:30,
        flex:1,
    },
    reset: {
        borderColor: "#000",
        borderRadius: 100,
        borderWidth: 1,
        paddingLeft: 45,
        paddingRight: 45,
         paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "#f5f5f5",
    },
    done: {
        borderColor: "rgba(124, 207, 36, 1)",
        borderRadius: 100,
        borderWidth: 0,
        paddingLeft: 45,
        paddingRight: 45,
         paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "rgba(124, 207, 36, 1)"
    },
    elevation: {
        elevation: 1,
        shadowColor: '#52006A',
    },
    resetText: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        // lineHeight: 20,
        color: "rgba(66, 66, 66, 1)",
        letterSpacing: 0.1,
    },
    btnCover: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 35,
        width: wp('100%'),
        position: "absolute",
        alignSelf:'center',
        padding: 30,
        paddingHorizontal:45,
        bottom: 0,
        backgroundColor: "rgba(238, 238, 238, 1)",
        // top: Dimensions.get("window").height / 2.65,

    },
    activeView: {
        backgroundColor: "#E9EBF9",
    },
    activeText: {
        color: "#00319D"
    },
    color2: {
        color: "rgba(97, 97, 97, 1)"
    },
    iconView: {
        marginRight: 10
    },
    //THIS IS FOR THE PRICES VIEW
    optionView: {
        flexDirection: "row",
        borderRadius: 8,
        borderWidth: 0,
        borderColor: "#f0f0f5",
        paddingTop:1,
        paddingBottom:5,
    
    },
    activeCover: {
        flexDirection: 'row',
        width: wp('100%'),
        paddingLeft: 18,
        paddingTop:0,
       

    },
    bottomBorder: {
        width: wp('80%'),
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        alignSelf: 'center',
        paddingTop: 30,
         marginTop: 10,
    },
    colorInfo: {
        width: wp('85%'),
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#E9EBF9',
        justifyContent: 'space-between',
        borderRadius: 10,
        alignSelf: 'center'
    },
    iconInfo: {
        marginRight: 10,
        marginTop: 5,
    },
    colorInfoText: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,
        color: "#00319D",
        width: 270,
        flexWrap: 'wrap',
        flex: 1,

    },
    optionIconView: {
        width: 24,
        borderRadius: 44,
        justifyContent: "flex-start"
    },
    optionIconView2: {
        width: 24,
        borderRadius: 44,
        justifyContent: "flex-start"
    },
    optionTextView: {
        marginLeft: 0,
        paddingTop: 5,
        width: "80%",
        color: '#3858CF'
    },
    optionText: {
        fontFamily: "Urbanist-Medium",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.3,
        color: "#3858CF",
        textTransform: "capitalize",
       
    },
    optionText2: {
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.3,
        color: "#616161",
        textTransform: "capitalize",
       
    },
    optionMiniTextView: {
        justifyContent: "center",
        paddingTop: 5,

    },
    iconCircle: {
        borderColor: "#3858CF",
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 15,
        alignSelf: "center",
        justifyContent: "center",
    },
    iconCircle2: {
        borderColor: "#BDBDBD",
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 15,
        alignSelf: "center",
        justifyContent: "center",
    },
    icon: {
        alignSelf: "center"
    },
    optionTextCover:{
        marginLeft:10,
    },
    itemCover:{
        paddingBottom: 30
    },
    errMainView: {
        top: 0,
        width: wp('84%'),
        borderWidth: 1,
        borderColor: "red",
        marginTop: 5,
        backgroundColor: "#FFE5E5",
        borderRadius: 8,
        alignSelf: 'center',
        paddingLeft: 30,
        paddingVertical: 10,
    },
})