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
        paddingVertical: Platform.OS === "ios" ? 10 : 0
    },
    inputText: {
        marginLeft: 10.15,

    },
    inputF: {
        // position: 'absolute',
        paddingTop: 8,
        paddingBottom: 8,
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
        fontWeight: "400"
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
        backgroundColor: "#fff",
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
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 1,
        // height: 120
    },
    image: {
        width: 74,
        height: 88,
        resizeMode: 'contain',
    },
    listTitle: {
        fontSize: 13,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.25,
        fontWeight: "600"
    },
    listTitleView: {
        marginLeft: 20,
        flexWrap: "wrap",
        width: "58%",
        marginRight: 20
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
        marginTop: 10,
        flexDirection: 'row',
        // justifyContent:'space-between',

    },
    addCover: {
        position: 'absolute',
        right: wp('5%'),
        top: hp('8%'),
        
    },
    addCoverInner: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#3858CF',
        borderStyle: 'solid',
        padding: 5,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 30,
       
    },
    addText: {
        color: '#3858CF',
        fontSize: 10,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.1,
        fontWeight: "500"

    },
    addPlus: {
        color: '#3858CF',
        fontSize: 15,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.1,
        fontWeight: "100",
        paddingTop: -2,
    },
    priceText: {
        fontSize: 15,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "#469D00",
        letterSpacing: 0.1,
        fontWeight: "600"
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
    },
    margin: {
        marginLeft: 4
    },
    filterView: {
        borderRadius: 20,
        borderColor: "rgba(189, 189, 189, 1)",
        borderWidth: 0,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "rgba(250, 250, 250, 1)",
        marginRight: 6,
    },
    filterText: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "rgba(66, 66, 66, 1)",
        letterSpacing: 0.2,
        fontWeight: "600"
    },
    heartCover: {
        position: 'absolute',
        right: wp('5%'),
        top: hp('2%')
    },

})