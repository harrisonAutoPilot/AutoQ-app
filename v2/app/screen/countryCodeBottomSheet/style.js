import { StyleSheet, Platform } from "react-native";


export default styles = StyleSheet.create({

    // DROPDOWN CODE BOTTOMSHEET
    headerTitle: {
        color: "#1B1B1F",
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.4,
    },
    headerView: {
        flexDirection: "row",
        width: "68%",
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        alignItems: "center"

    },
    headerCloseIcon: {
        marginRight: 20
    },
    bottomSheetContainer: {
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        paddingTop: 10,

    },

    // RenderItemView
    renderItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        alignItems: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.08)"
    },
    renderActiveItemContainer: {
        backgroundColor: "#DFE1F9"

    },
    renderItemImgContainer: {
        flexDirection: "row",
        paddingVertical: 12,
        width: "85%",
    },

    renderItemTitle: {
        color: "#1B1B1F",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    renderItemDialCode: {
        color: "#1B1B1F",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    renderItemImg: {
        width: 20,
        height: 20,
        marginRight: 6,
        alignContent: "center"
    },
    bottomSheetTextInputContainer: {
        backgroundColor: "rgba(121, 116, 126, 0.12)",
        borderRadius: 8,
        paddingVertical: Platform.OS === "ios" ? 10: 0,
        marginTop: 18,
        paddingHorizontal: 14,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16

    },
    bottomSheetTextInputInnerContainer: {
        flexDirection: "row",
        alignItems: "center"

    },
    bottomSheetTextInput: {
        color: "#45464F",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        // lineHeight: 20,
        letterSpacing: 0.25,
        marginLeft: 20,
        width: "80%",

    },
    bottomSheetTextInputCloseIconView: {
        justifyContent: "center",
        alignItems: "center"
    },
    bottomsheetFooter: {
        paddingBottom: 50
    },
    errView:{
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: "#BA1A1A",
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center"
    },
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    }
})