import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
 
    },
   
    activeSubHeaderText:{
        color: "#3353CB",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
    },
    midCard:{
        width:"80%",
        // height:"50%",
        paddingVertical:20,
        backgroundColor:'#F2F0F4',
        borderRadius:2,
        alignSelf:"center",
        marginTop:50
    },
    cardTop:{
        alignSelf:'center',
        alignItems:'center',
        padding:20,
    },
    price:{
        color: "#1B1B1F",
        fontSize: 24,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 32,  
    },
    type:{
        color: "#5A5D72",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        marginTop:4
    },
    cardTopMid:{
      width:"80%",
      paddingHorizontal:20,
      paddingVertical:15
    },
    transCaption:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
    },
    transId:{
        color: "#1B1B1F",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        marginTop:4
    },
    cardMid:{
        width:"100%",
        paddingHorizontal:20,
        borderBottomColor:"rgba(121, 116, 126, 0.16)",
        borderTopColor:"rgba(121, 116, 126, 0.16)",
        borderBottomWidth:1,
        borderTopWidth:1,
        alignSelf:'center',
        paddingVertical:15
      },

      creditImg:{
        width:50,
        height:50,
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:-45
      },
      footer:{
        width:"88%",
        alignSelf:'center',
        padding:20,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopColor:"rgba(121, 116, 126, 0.16)",
        borderTopWidth:1,
      },
      smsImg:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginTop:10,
      },
      reportTop:{
        color: "#1B1B1F",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
      },
      reportDown:{
        color: "#5A5D72",
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
      },
      cover:{
        flexDirection:"column",
        height:hp("90%"),
        justifyContent:"space-between"
      },
      rightImg:{
        width:12,
        height:12,
        resizeMode:"contain",
        marginTop:10,
      },
      midContent:{
        width:"73%",
       
      }
})

