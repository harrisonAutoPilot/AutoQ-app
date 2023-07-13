import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
    },
    topCover:{
      width:"100%",
      paddingVertical:80,
      alignSelf:'center',
      alignItems:'center'
    },
    successImg:{
      width:160,
      height:160,
      resizeMode:"contain",
      marginTop:20
    },
    captionCover:{
width:"100%",
alignSelf:"center",
alignItems:'center',
padding:40
    },
   caption:{
    color: "#1B1B1F",
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 24,
   },
   bgText:{
    color: "#171B2C",
    fontSize: 28,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 36,
    marginTop:10,
    marginBottom:5,
    alignItems:'center'
   },
   smText:{
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    textAlign:'center'

   },
   midCardContainer:{
    width:wp("80%"),
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'rgba(121, 116, 126, 0.16)',
    borderStyle:'dashed',
    paddingVertical:20,
  

   },
   midCardInner:{
    width:wp("80%"),
    flexDirection:"row",
    justifyContent:'space-between',
    alignSelf:'center',
    alignItems:'center',
    padding:10,

   },
   flex:{
flexDirection:'column',
justifyContent:'space-between',
height:hp('95%')
   },
   btnCover:{

    paddingHorizontal:25,
    width:"100%",
    alignSelf:'center'
   }
   
   
})

