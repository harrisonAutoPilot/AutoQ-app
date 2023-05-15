import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    searchIcon: {
        marginLeft: 20,
    },
    cirleIcon: {
        marginLeft: -90,
    },
    heartStyle: {
        opacity: 0.6,
    },
    mainBody:{
        backgroundColor: "#00319D"
    },

    inputHolder: {
        borderRadius: 4,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        width: wp('73%'),
        marginRight: wp('2%'),
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: Platform.OS === "ios" ? 10:0
    },
    inputText: {
        marginLeft: 10.15,
        width: "77%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    clearTextView:{
        backgroundColor: '#DCDCDC',
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 50
    },
    clearText:{
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400"
    },
    inputF: {
        // paddingTop: 10,
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400",
        width: "80%",
        paddingBottom:Platform.OS === "android" ? 10 :5,

    },
    inputTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.25,
        fontWeight: "400",
        textTransform: "capitalize"
    },
    column: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        alignItems: "center",
        paddingRight: 8,
    },
    categoryColumn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: 20
    },
    color1: {
        color: "rgba(33, 33, 33, 1)"
    },
    color2: {
        color: "rgba(117, 117, 117, 1)"
    },
    listContainer: {
        marginLeft: 20,
        paddingVertical: 15,
    },
    innerContainer: {
        height: "100%",
        paddingVertical: 15,
        paddingLeft: 8,
        // height: 50
    },
    activeColor: {
        borderBottomColor: "rgba(124, 207, 36, 1)",
        borderBottomWidth: 2
    },
    body: {
        height: "100%",
        flexGrow: 1
    },
    requestCover: {
        position: 'absolute',
        width: wp('80%'),
        right: wp('1%'),
        top: hp('90%'),
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#7CCF24',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 60,
    },
    requestCover2: {
        position: 'absolute',
        width: wp('80%'),
        right: wp('1%'),
        top: hp('10%'),
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#7CCF24',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 60,
    },
    requestText: {
        color: '#fff',
        fontSize: 12,
    },
    // THIS IS FOR THE FILTER
    filterCover:{
        width:wp('95%'),
        paddingHorizontal: Platform.OS === "ios" ? 10:10,
        paddingVertical: Platform.OS === "ios" ? 10: -5,
        alignSelf:'center',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 13
    },
    miniHeaderView: {
        flexDirection: "row",
        alignItems: "center",
        width: "65%"
    },
    miniHeaderView2: {
        flexDirection: "row",
        alignItems: "center",
        width: "20%",
        backgroundColor: "#FAFAFA"
    },
    margin: {
        marginLeft: 4,
        width: '90%'
    },
    filterView: {
        borderRadius: 20,
        borderColor: "#bfbfbf",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    filterText: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#424242",
        letterSpacing: 0.2,
    },
    heartCover: {
        position: 'absolute',
        right: wp('5%'),
        top: hp('2%')
    },
    headerSubIconView: {
        flexDirection: "row",
        marginLeft: -20,
    },
    headerSubLastIconView: {
        paddingLeft: 15
    },
    cartCover:{
        width:wp("100%"),
        padding:10,
        backgroundColor:"#469D00",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginBottom:14,
        marginTop:-18,
    },
    cartText:{
        color: '#fff',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal:10, 
    }
})