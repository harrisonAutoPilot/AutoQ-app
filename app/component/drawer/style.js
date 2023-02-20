import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    header: {
        backgroundColor: "#00319D",
        paddingLeft: 16,
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 20,

    },
    firstInnerHeader: {
        marginLeft: 10, 
        backgroundColor: "rgba(207, 106, 135, 1)",
        height:21,
        width: 26,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4
    },
    firstInnerTitle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 11,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        letterSpacing: 0.2,
        textAlign: "center"
    },
    linearView: {
        paddingVertical: 10,
        height: "100%",
        borderRadius: 40,
        width: 46,
        height: 46,
        marginRight: 16,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        borderStyle: 'solid'
    },
    icon: {
        alignSelf: "center"
    },
    agentImg: {
        width: 43,
        height: 43,
        borderRadius: 26,
        resizeMode: "cover",
        // transform:[{rotate: "-90deg"}]
    },
    agentImgView: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 25
    },
    headerInnerView: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "rgba(0, 0, 0, 1)",
        letterSpacing: 0.1,
    },
    headerTitlee: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#fff",
        letterSpacing: 0.1
    },
    headerTitleInnerView: {
        marginTop: 6,
        flexDirection: "row",
        alignItems: "center"
    },
    headerTitleInnerTitle: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "rgba(255, 255, 255, 0.6)",
        letterSpacing: 0.2,
        fontWeight: "600",
    },
    chevronIcon: {
        marginLeft: 10
    },
    route: {
        paddingVertical: 19,
        paddingHorizontal: 18,
        backgroundColor: "#fff"
    },
    routeText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
    },
    routeInnerView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 23,
    },
    routeTextView: {
        flexDirection: "row",
        alignItems: "center",
    },
    routeTextIconView: {
        marginRight: 15
    },
    agentView: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: "rgba(238, 238, 238, 1)"
    },
    agentVieww: {
        marginTop: -30,
        padding: 16,
        borderWidth: 0,
        borderColor: "rgba(238, 238, 238, 1)"
    },
    agentInnerView: {
        marginBottom: 18
    },
    agentInnerVieww: {
        marginBottom: 18,
        marginLeft: 20,
        marginTop: 15,
    },
    logout: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(250, 250, 250, 1)",
        paddingVertical: 20
    },
    logoutInnerView: {
        alignSelf: "center",
        flexDirection: "row",
    },
    logoutText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "rgba(211, 47, 47, 1)",
        letterSpacing: 0.3,
        fontWeight: "600",
    },
    logoutIcon: {
        marginLeft: 10
    },
    scrollView: {
        height: "100%",
    },
    mainContainer: {
        height: "100%",
        paddingBottom: 50
    },
    dropCover:{
        paddingLeft:50,
        marginTop:-10,
        paddingBottom:10,
    },
    dropCoverChemist:{
        paddingLeft:50,
        marginTop:-35,
        paddingBottom:10,
    },
    dropItem:{
        padding:3,
        paddingTop:4
    },
    dropList:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#3858CF",
        letterSpacing: 0.1 
    },
    dropListChemist:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#00b300",
        letterSpacing: 0.1 
    },
    activityIcon: {
        marginLeft: 15
    },
})