import { StyleSheet,Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    body: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        height: hp('100%'),
        width: Dimensions.get("window").width
    },
    container:{
        paddingHorizontal:20,
    },
    topTitle:{
        width:"100%",
        paddingHorizontal:10,
        alignItems:'flex-start'

    },
    topTitleText:{
        color: "rgba(66, 70, 89, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.25
    },
    dropDownCover:{
        width:wp('90%'),
        borderWidth:1,
        borderColor:"#f5f5f5",
        borderRadius:4,
        padding:14,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
    },
    dropLeft:{
        flexDirection:"row",
        justifyContent:'flex-start',
        width:'70%'
    },
    dropText:{
        color: "rgba(69, 70, 79, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        letterSpacing: 0.25,
        marginLeft:10,
    },
    cardsContainer:{
        width:"100%",
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingVertical:20
    },
    smCard:{
        width:wp('43%'),
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'rgba(242, 240, 244, 1)',
        borderRadius:6,
        marginBottom:20,
    },

    smImgCover:{
      width:40,
      height:40,
      borderRadius:8,
      backgroundColor:'rgba(228, 225, 230, 1)',
      justifyContent:'center',
      alignItems:'center'
    },
    smTextCover:{

    },
    smCardTitle:{
        color: "rgba(69, 70, 79, 1)",
        fontSize: 11,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        letterSpacing: 0.25,
    },
    smCardCount:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.25, 
    },
    statisticCover:{
        width:'100%',
        marginBottom:10
    },
    statisticCaption:{
        color: "rgba(66, 70, 89, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 24,
        letterSpacing: 0.25,   
    },
    statisticSmCaption:{
        color: "rgba(167, 170, 193, 1)",
        fontSize: 11,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        letterSpacing: 0.25, 
    },
    chartContainer:{
        width:wp('90%'),
        paddingHorizontal:20,
        alignSelf:'center',
        alignItems:'center'
    }
});

export default styles;