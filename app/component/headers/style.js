import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = StyleSheet.create({

    mainBody: {
        paddingBottom: 12,
        paddingTop:10,
    },
    headerIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "ios" ? 10 :10,     
    },
    headerSubIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingBottom: 16
    },
    headerSubIconMenuView: {
        paddingLeft: 16
    },
    headerSubLastIconView: {
        paddingLeft: 20
    },
    
});

export default styles