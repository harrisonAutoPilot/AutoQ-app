import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    mainBody: {
        paddingTop: 24,
        backgroundColor: "#fff",
        height: "100%",
        paddingHorizontal: 16,
        flex: 1
    },
    main:{
        height: "100%",
        flexGrow: 1
    },
    listContainer: {
        width: wp('44%'),
        marginTop: 15,
        borderRadius: 16,
        backgroundColor: '#F5F5F5',
        marginBottom: 20
    },
    column: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listContainerImageView: {
        height: 115,
        marginBottom: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    listContainerTextView: {
        height: 50,
        marginBottom: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE"
    },
    listContainerInnerTextView: {
      width: "80%"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#616161",
        letterSpacing: 0.1
    },
    elevation: {
        elevation: 0.6,
        shadowColor: '#52006A',
    },
    bookcardFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: Platform.OS === "ios" ? 12 : 0,
        marginVertical: 10,
        marginBottom: 20
    },
    blueColor: {
        backgroundColor: '#00319D',
    },
    searchIcon: {
        paddingHorizontal: 10,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    inputField: {
        width: wp('92%'),
        color: '#424242',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: "400",

    },

})