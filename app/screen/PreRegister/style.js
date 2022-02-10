import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    mainBody: {
        marginTop: Platform.OS == "android" ? Dimensions.get("screen").height / 20 : Dimensions.get("screen").height / 15,
        marginHorizontal: 29,
        flex: 1,
        height: "100%"

    },
    scrollView: {
        height: "100%"
    },
    logoImg: {
        width: 70,
        height: 70
    },
    logoImgView: {
        marginTop: Dimensions.get("screen").height / 27,
        marginBottom: 19
    },
    onboardTitle: {
        fontFamily: "Urbanist-Regular",
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0.2,
        fontWeight: "600",
        color: "rgba(33, 33, 33, 1)"
    },
    onboardSubTitleView: {
        marginTop: 6,
        fontSize: 9,
        flexShrink: 1,
    },
    onboardSubTitle: {
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "400",
        color: "#757575"
    },
    onboardSubTitle1: {
        fontFamily: "Urbanist-Regular",
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.2,
        fontWeight: "400",
        color: "#757575",
        flexShrink: 1,
        width: wp('62%'),
    },
    optionView: {
        flexDirection: "row",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#f0f0f5",
        marginTop: Dimensions.get("screen").height / 27,
        height: 88,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 0.1,
        backgroundColor: "#fff",
    },
    optionViewBetween1: {
        marginTop: Dimensions.get("screen").height / 27,
    },
    optionViewBetween2: {
        marginTop: Dimensions.get("screen").height / 54,
    },
    optionIconView: {
        backgroundColor: "#7CCF24",
        width: 44,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: "center"
    },
    optionIconView2: {
        backgroundColor: "#F5F5F5",
        width: 44,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: "center"
    },
    optionTextView: {
        marginLeft: 16,
        paddingTop: 8,
        width: "85%"
    },
    optionText: {
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "400",
        color: "#212121",
        textTransform: "capitalize"
    },
    optionMiniTextView: {
        justifyContent: "center",
        paddingTop: 4,

    },
    iconCircle: {
        borderColor: "#fff",
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
    loginView: {
        marginTop: 20,
        // marginTop: Dimensions.get("screen").height / 8,
        // position:'absolute',
        // top:hp('85%'),
        // right:wp('15%'),
        flexDirection: "row",
        justifyContent: "center"
    },
    loginText: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        color: "#3858CF"
    },
    redirectIcon: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    errMainView: {
        top: 0,
        width: wp('84%'),
        borderWidth: 1,
        borderColor: "red",
        marginTop: 5,
        backgroundColor: "#FFE5E5",
        borderRadius: 8,
        paddingVertical: 15,
    },
    failedResponseText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },

    preBtnCover: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 30,
        // width: "50%"
    },
    btn:{
        // marginTop: Dimensions.get("window").height / 21,
        width:'100%',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        alignItems:'center',
        textAlign:'center',
    },

    scrollStyle2: {
        flexGrow: 1,
        paddingBottom: 50
    },

    scrollStyle3: {
        flexGrow: 1,
    },
    mainContainer: {

        height: "100%",
        paddingBottom: 50,
        width: "100%",
    },

});

export default styles;