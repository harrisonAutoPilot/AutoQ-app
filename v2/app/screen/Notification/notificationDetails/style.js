import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    mainContainer:{
        height:hp('100%'),
        width:"100%"
   
    },
    listContainer:{
    width:wp("100%"),
    alignSelf:"center",
    padding:10,
    },
    headerContainer:{
      flexDirection:"row",
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
    contentCover:{
      marginLeft:10,
      justifyContent:"center"
    },
    imgCover:{
      width:50,
      height:50,
      borderRadius:100,
      backgroundColor:"#D0FFA2",
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
      color: "#45464F",
      fontSize: 12,
      fontFamily: "AnekLatin-Medium",
      lineHeight:16,
    },
    closeCover:{
      justifyContent:"center"
    },
    botImg:{
      width:50,
      height:50,
      borderRadius:100,
    },
    middleContainer:{
      width:"85%",
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      padding:20,
      borderBottomWidth:1,
      borderBottomColor:"rgba(121, 116, 126, 0.16)"
    },
    titleText:{
      color: "#45464F",
      fontSize: 16,
      fontFamily: "AnekLatin-Medium",
      lineHeight:24,
    },
    imageCover:{
      width:130,
      height:130,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
    },
    speakerImg:{
      width:100,
      height:100,
      resizeMode:"contain"
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
    }

   
})

