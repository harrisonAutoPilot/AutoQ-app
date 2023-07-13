import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const globalStylesV2 = StyleSheet.create({

    failedResponseText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        letterSpacing: 0.2,
        textAlign: "center",
        paddingTop: 3,
        width: "80%"
    },
    successBottomStyle: {
        backgroundColor: "#BA1A1A",
        borderRadius: 8,
        alignSelf:'center',
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        paddingVertical: 18,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        width: wp('100%'),
        elevation: 5,
        top:-20
        // position: "absolute",
      

    },
    errMainViewBottom: {
        borderWidth: 0,
        borderColor: "#FFE5E5",
        marginTop: -15,
        backgroundColor: "#FF0038",
        borderRadius: 8,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        paddingVertical: 15,
        paddingHorizontal: 10,
        width:wp('96%'),
        alignItems:'center',
        alignSelf: "center",
        // zIndex: 4,
        elevation: 3
    },
    errMainViewTeam: {
        borderWidth: 0,
        borderColor: "#FFE5E5",
        marginTop: -15,
        backgroundColor: "#FF0038",
        borderRadius: 8,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        paddingVertical: 15,
        paddingHorizontal: 10,
        width:wp('95%'),
        alignItems:'center',
        alignSelf: "center",
        // zIndex: 4,
        elevation: 3
    },
    phoneNoVerifySuccessIconView: {
        width: 22,
        height: 22,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },

    failedResponseView: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: "red"
    },

    phoneNoInnerView: {
        width: 1,
        height: 18,
        backgroundColor: "#FAF9F6",
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },
    phoneNoVerifyInnerSuccessView2: {
        width: "30%",
        flexGrow: 1,
    },

    successResponseText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.2,
        // textAlign: "center"
    },
    errMainView3: {
        borderWidth: 0,
        borderColor: "#FFE5E5",
        marginTop: -15,
        backgroundColor: "#FF0038",
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: "100%",
        alignSelf: "center",
        // zIndex: 4,
        elevation: 3
    },
    badgeStyle:{

    }

    // ends here




   
});

global.globalStylesV2 = globalStylesV2

export default globalStylesV2;