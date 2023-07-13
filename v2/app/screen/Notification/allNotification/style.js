import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    miniListContainer:{
        height:"100%",
  
       
    },
    cardCover:{
        width:wp('100%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        paddingHorizontal:20,
        paddingVertical:25,
        borderBottomWidth:1,
        borderBottomColor:"rgba(121, 116, 126, 0.16)",
    },
 
    amountTextDebit:{
        color:"#BA1A1A",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight:20,
    },
    iconImg:{
    width:18,
    height:18,
    resizeMode:"contain"
    },
    iconImg2:{
        width:22,
        height:22,
        resizeMode:"contain",
        marginTop:-5
  
        },
    leftCover:{
        alignItems:'center',
        width:50,
        height:50,
        justifyContent:"center",
        backgroundColor:"#F2F0F4",
        borderRadius:100,
        marginRight:11,
        
    },
    rightCover:{
        width:wp('72%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:0,
    },
    typeText:{
        color: "#1B1B1F",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight:24,
    },
    dateText:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight:20,
    },
    subText:{
        color: "#1B1B1F",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight:20,
    },
    arrowImg:{
        width:14,
        height:14,
        resizeMode:'contain'
    },
    botCover:{
       
      
 height:hp('100%'),
overflow:"visible",
  flex:1,
  //position:'absolute'
 
    }
    
})

