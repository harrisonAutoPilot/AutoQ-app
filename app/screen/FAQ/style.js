import {StyleSheet} from "react-native";
import {
   heightPercentageToDP as hp,
   widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
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
    listContainer:{
        borderWidth: 1,
        borderColor: "#EEEEEE",
        paddingVertical: 24,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent : "space-between",
       marginBottom: 10,
       borderRadius:5,

    },
    listTextView:{
        width:wp('98%')
    },
    view:{
        flex: 1,
        flexGrow: 1,
        height: "100%",
    },
    mainBody: {
        paddingHorizontal: 16,
        flex: 1,
       
    },
    listTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "rgba(66, 66, 66, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        flexWrap: 'wrap'
    },
    descView:{
        paddingHorizontal: 5
    },
    chat: {
        backgroundColor: "#7CCF24",
        borderRadius: 40,
        padding: 16,
        position: "absolute", 
        top: "85%",
        right: "5%"
    },
    thrashIcon:{
        position:'absolute',
        right:wp('5%'),
        top:hp('4%'),

    },
    listTextInnerView:{
        width:wp('70%'),
    }
})