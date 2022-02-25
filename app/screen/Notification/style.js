import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    body: {
        backgroundColor: "#fff",
        marginBottom: 20
    },
    headerText:{
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    iconView: {
        marginRight: 85
    },
    view:{
        flex: 1,
        flexGrow: 1,
        height: "100%",
    },
    miniHeaderView: {
        flexDirection: "row",
        alignItems: "center",
    },
    filterView: {
        borderRadius: 20,
        borderColor: "rgba(224, 224, 224, 1)",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 6,
    },
    subHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    mainBody: {
        paddingHorizontal: 16,
        flex: 1,
    },
    subHeadingTitle: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "600"
    },
    text: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#424242",
        letterSpacing: 0.2,
        fontWeight: "600"
    },
    listContainer:{
        borderWidth: 1,
        borderColor: "#EEEEEE",
        paddingVertical: 24,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        marginTop: 12,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center"
       
    },
    listIcon:{
        alignItems:'center',
        backgroundColor: "#F0F7FD",
        borderRadius: 40,
        paddingVertical: 16,
        height: 47,
        alignSelf: "center",
        paddingHorizontal: 15
    },
    listTextView:{
        marginLeft: 16,
        // flexWrap: "wrap",
        width: "67%"
    },
    listTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.1,
        fontWeight: "600",
    },
    desc:{
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#757575",
        letterSpacing: 0.2,
    },
    descView:{
        marginTop: 8,
    },
    listTextInnerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        alignItems: "center"
    },
    thrashIcon:{
        marginLeft: 20
    },
    color: {
        color: "#9E9E9E"
    }
    
})