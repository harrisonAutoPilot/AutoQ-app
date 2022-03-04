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
        fontSize: 20,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center",
        marginTop:10,
    },
    iconView: {
        marginRight: 70
    },
    view:{
        flexGrow: 1,
        height: "100%"
    },
    cardCover:{
        marginHorizontal:20,
        backgroundColor:'#ffffff',
        padding:20,
        borderRadius:1,
        marginTop:5,

    },
      oddCover:{
        marginHorizontal:20,
        backgroundColor:'#eeeeee',
        padding:20,
        borderRadius:1,
        borderWidth:1,
        borderColor:'#eeeeee',
        borderStyle:'solid',


    },
     titleText:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#424242",
        letterSpacing: 0.2,
        fontWeight: "400",
        marginBottom:1,
    },
      valueText:{
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#424242",
        letterSpacing: 0.2,
        fontWeight: "400",
       
    },
        valueTextOdd:{
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#469d00",
        letterSpacing: 0.2,
        fontWeight: "400",
       
    },
    valueTextOdd2:{
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#D32F2F",
        letterSpacing: 0.2,
        fontWeight: "400",
       
    },

})