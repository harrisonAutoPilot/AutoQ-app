import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    inputHolder: {
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        width: wp('83%'),
        marginLeft: wp('3%'),
        marginRight: wp('1%'),
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: Platform.OS === "ios" ?10:0
    },
    inputText: {
        marginLeft: 10.15,

    },
    inputF: {
        // position: 'absolute',
        paddingTop: 10,
        width: wp('90%'),
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400"

    },
    searchIcon: {
        marginLeft: 20,

    },
    inputTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400",
        textTransform: "capitalize",
        // width: "95%"
    },
    mainHeader: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderTopColor: "rgba(0, 0, 0, 0.1)",
        borderTopWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 15
    },
    listContainer: {
        backgroundColor: "#FAFAFA",
        marginBottom: 12,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: "center",
        flexDirection: "row",
        // flexGrow: 1
        width: wp('92%'),
        borderRadius: 8,
        marginHorizontal: 16,
        shadowColor: "rgba(235, 238, 255, 1)",
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 1,
        borderColor: "#EEEEEE",
        borderWidth: 1
        // height: 120
    },
    listContainerP: {
        backgroundColor: "#bfbfbf",
        marginBottom: 12,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: "center",
        flexDirection: "row",
        // flexGrow: 1
        width: wp('92%'),
        borderRadius: 8,
        marginHorizontal: 16,
        shadowColor: "rgba(235, 238, 255, 1)",
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 1,
        borderColor: "#EEEEEE",
        borderWidth: 1
        // height: 120
    },
    image: {
        width: 54,
        height: 88,
        resizeMode: 'contain',
    },
    imageP: {
        width: 70,
        height: 88,
        resizeMode: 'contain',
        backgroundColor:'#ebebeb',
        borderRadius:10,
    },
    listTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.25,
        textTransform: "capitalize"
    },
    listTitleView: {
        marginLeft: 10,
        flexWrap: "wrap",
        width: "78%",
        // marginRight: 20
    },
    listTitleView: {
        marginLeft: 10,
        flexWrap: "wrap",
        width: "78%",
       
        // marginRight: 20
    },
    listTitleViewP: {
       
        flexWrap: "wrap",
        width: "58%",
        backgroundColor:'#ebebeb',
        borderRadius:10,
        height:10,
        marginTop:-30,
        marginLeft: 20
    },
    listTitleViewPP: {
       
        flexWrap: "wrap",
        width: "50%",
        backgroundColor:'#ebebeb',
        borderRadius:10,
        height:10,
        marginTop:30,
        marginRight: 20
    },
    listTitleView2: {
        flexWrap: "wrap",
        width: "58%",
    },
    mainBody: {
        paddingTop: 14,
        paddingHorizontal: 16
    },
    body: {
        height: "100%",
        backgroundColor: "#f2f3f4",
        flexGrow: 1
    },
    priceView: {
        marginTop: 10
    },
    priceViewP: {
        marginTop: 10,
        width:50,
        height:10,
        backgroundColor:'#ebebeb',
        borderRadius:10,
        marginRight:20,
    },
    priceText: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#469D00",
        letterSpacing: 0.1
    },
    priceRoll: {
        textTransform: "capitalize"
    },
    iconView: {
        marginTop: 6,
        alignSelf: "flex-start",
        alignContent: "flex-end"
    },
    color: {
        color: "#212121"
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
        width: "23%",
        backgroundColor: "#FAFAFA"
    },
    margin: {
        marginLeft: 4,
        width: '90%'
    },
    filterView: {
        borderRadius: 20,
        borderColor: "#BDBDBD",
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
    body2: {
        backgroundColor: "#00319D",
        marginBottom:10,
        paddingBottom: 5
    },
    titleCover: {
        // width: wp('79%'),
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    priceOverview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceOverviewP: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:30,
    },
    priceView2: {
        borderWidth: 1,
        borderColor: "#3858CF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        // marginLeft: 20
    },
    
    priceView2P: {
        borderWidth: 0,
        borderColor: "#3858CF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        width:50,
        height:10,
        backgroundColor:'#ebebeb',
        marginLeft:10,
        marginRight:10,
    },
    priceText2: {
        fontSize: 11,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color:  "#3858CF",
        letterSpacing: 0.2,
        marginLeft: 5
    },
    priceText2Icon: {
      marginRight: 10
    },
    icon:{
        alignSelf: "center"
    },
    badge:{
        backgroundColor: "#D32F2F",
        borderRadius: 10,
        position: "absolute",
        top: -6,
        left: 25,
        width: 14,
        height: 14,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontFamily: "Urbanist-Medium",
        lineHeight: 12,
        letterSpacing: 0.1,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"

    },


})