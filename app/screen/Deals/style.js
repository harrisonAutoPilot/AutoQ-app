import {StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
        backgroundColor: "#00319D",
        marginBottom: 10,
        paddingBottom: 5
    },
    headerText:{
        fontSize: 22,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "600",
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
        paddingVertical: 32,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        marginTop: 12,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center"
       
    },
    listIcon:{
        alignItems:'center',
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor:'#f3f4f5',
        borderWidth:0,
        borderRadius: 20,
        alignSelf: "center",
        width: 40,
        height: 40,
        justifyContent: "center"
    },
    listTextView:{
        marginLeft: 16,
        // flexWrap: "wrap",
        width: "67%"
    },
    listTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.1,
        fontWeight: "600",
    },
    desc:{
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#fff",
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
        marginLeft: 20,
        marginTop:-30,
    },
    color: {
        color: "#fff"
    }
    
})