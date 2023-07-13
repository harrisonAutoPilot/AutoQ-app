import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
   
    mainContainer:{
         height:'100%',
        width:"100%",
        // flex:1,
   
    },
    listContainer:{
    width:wp("100%"),
    alignSelf:"center",
    padding:10,
    },
    headerContainer:{
      flexDirection:"row",
      marginTop:Platform.OS === "android" ? 2 : 30,
      width:"100%",
      padding:20,
      paddingVertical:13,
      justifyContent:"space-between",
      borderBottomColor:'rgba(121, 116, 126, 0.16)',
      borderBottomWidth:1
    },
    titleContainer:{
      flexDirection:"row",
      justifyContent:"flex-start",
      width:"60%"
    },
    titleCover:{
      marginLeft:10,
      justifyContent:"center"
    },
    imgCover:{
      width:30,
      height:30,
      borderRadius:100,
      alignItems:'center',
      justifyContent:'center'
    },
    statusText:{
      color: "#4EA162",
      fontSize: 11,
      fontFamily: "AnekLatin-Medium",
      lineHeight:16,
    },
    botName:{
      color: "#1B1B1F",
      fontSize: 22,
      fontFamily: "AnekLatin-SemiBold",
      lineHeight:28,
    },
    closeCover:{
      justifyContent:"center"
    },
    crossImg:{
      width:25,
      height:25,
      borderRadius:100,
    },
    middleContainer:{
      width:"100%",
      alignSelf:'center',
      paddingHorizontal:20,
      paddingBottom:20,
      alignItems:'flex-start',
      justifyContent:'center',
      borderBottomWidth:1,
      borderBottomColor:"rgba(121, 116, 126, 0.16)"
    },
    titleText:{
      color: "#767680",
      fontSize: 14,
      fontFamily: "AnekLatin-Medium",
      lineHeight:20,
    },
    contentCover:{
      paddingVertical:10,
      paddingHorizontal:10,
      marginTop:-12,
      justifyContent:'center',
    },
    imageCover:{
      width:130,
      height:130,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
    },
   peopleImg:{
      width:"70%",
      height:90,
      resizeMode:"contain",
      marginVertical:10
    },
    contentContainer:{
      width:"100%",
      alignSelf:'center',
      alignItems:"flex-start"
    },
    contentHeader:{
      width:"100%",
      padding:20,
      alignItems:"flex-start"
    },
    contentHeaderText:{
      color: "#171B2C",
      fontSize: 16,
      fontFamily: "AnekLatin-SemiBold",
      lineHeight:20,
    },
    contentBodyCover:{
      width:"100%",
      padding:20,
      alignItems:"flex-start",
      paddingTop:10,
    },
    contentBodyText:{
      color: "#424659",
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight:24,
    },
    contentBodyTextFooter:{
      color: "#424659",
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight:24,
      marginTop:50,
    },
// this is for the form inputs
formContainer:{
flexDirection:"column",
justifyContent:"space-between",

},
formInputFieldFlex:{
  width:"100%",
  alignSelf:'center',
  alignItems:'center'
},
inputContainer:{
  width:wp("90%"),
  alignSelf:'center',
  flexDirection:'row'
},
formFlex: {
  marginBottom: 10,
  alignSelf:"center",
  backgroundColor:"transparent"
},
inputFieldView:{
  flexDirection: "row",
  justifyContent:"space-between"
},
codeCover:{
  width:wp("28%"),
  alignItems:"center",
  alignSelf:"center",
  justifyContent:"center",
  marginRight:5

},
smErrCover: {
  position: 'absolute',
  width: wp("100%"),
  top: hp("-20%"),
  alignSelf: 'center',
},
errCoverTeam: {
  width:wp("100%"),
  alignSelf:'center'
},
submitBtnContainer:{
  width:"100%",
  paddingHorizontal:10,
  marginTop:90,
},
toastCover:{
    position:"absolute",
    bottom:hp('4%'),
    alignSelf:'center',
    width:wp('100%'),
    zIndex:9000,
  }
  
    
});

export default styles