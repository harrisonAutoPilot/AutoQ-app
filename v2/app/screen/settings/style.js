import { StyleSheet, Platform} from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
      flex:1,
 
    },
      footer:{
        width:"100%",
        alignSelf:'center',
        padding:20,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:"#fff",
        borderTopColor:"rgba(121, 116, 126, 0.16)",
        borderTopWidth:1,
      },
      midLine:{
        backgroundColor: "#f5f5f5",
        height:10,
        width:wp('100%')
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
        height:hp("80%"),
        flexGrow:1,
        justifyContent:"space-between",
        // backgroundColor:"#fff"
      },
      rightImg:{
        width:12,
        height:12,
        resizeMode:"contain",
        marginTop:10,
      },
      
      top:{
        width:wp('100%'),
        padding:8,
        backgroundColor:"#fff",
        flexDirection:'row',
        justifyContent:'space-between',
      },
      topContentCover:{
        width:wp('65%'),
        paddingVertical:10,
      },
      myImg:{
        width:80,
        height:80, 
        borderRadius:100
      },
      topInner:{
        width:"25%",
        padding:20,
        // paddingVertical:10,
        // alignSelf:'center',
        alignItems:"flex-start",
        justifyContent:'center'
      },
   
      agentImg:{
        width:110,
        height:110,
        borderRadius:7,
        alignSelf:"center",
      },
      regText:{
        color: "rgba(69, 70, 79, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
      },
      idText:{
        color: "#171B2C",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
      },
   
      smStyle:{
        width:"60%",
        borderRadius:6,
        paddingVertical:10,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      smInner:{
        paddingHorizontal:10,
        alignItems:'center'
      },
      smText:{
        color: "#45464F",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        marginTop:11,
      },
      nameText:{
        color: "rgba(69, 70, 79, 1)",
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 28,
        marginVertical:5,
        marginTop:20,
        textTransform:"capitalize"
      },
      nameFlex:{
        flexDirection:'row',
        justifyContent:"flex-start"
      },
      verImg: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginTop: 30,
        right: -3,
        top: -5,
      },
      smCircle:{
        width:20,
        height:20,
        borderRadius:60,
        backgroundColor:"#6EBF0C",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        marginTop:-7,
        right:4
      },
      countText:{
        color: "#FFFFFF",
        fontSize: 11,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
      },
      middle:{
        width:"80%",
        paddingHorizontal:5,
        paddingVertical:24,
        backgroundColor:"#fff",
        borderTopWidth:1,
        borderTopColor:"#f5f5f5",
        flexDirection:'row',
        justifyContent:'space-between'
      },
      // this is where the card start
      card:{
      width:"100%",
      paddingVertical:4,
      flexDirection:'row',
      justifyContent:"space-between",
      },
      penCover:{
        justifyContent:'center',
        alignItems:'flex-end',
        width:50,
      },
      left:{
        width:"78%",
        alignItems:"flex-start",
        justifyContent:'center',
        
      },
      right:{
        width:"20%",
        alignItems:"center",
        justifyContent:'center',
      },
      phoneText:{
        color: "#1B1B1F",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        letterSpacing:0.5,
      },
      numberText:{
        color: "#45464F",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
      },
      smLine:{
        width:"100%",
        height:5,
        backgroundColor:"#e6e6e6"
      },
      abbrevText:{
        color: "#fff",
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        textTransform:"capitalize"
      },
      circleCover:{
        width:80,
        height:80,
        borderRadius:100,
        alignItems:"center",
        justifyContent:'center',
        borderWidth:0,
        borderStyle:"solid",
    },
    circleCoverInner:{
      width:80,
      height:80,
      borderRadius:100,
      alignItems:"center",
      justifyContent:'center',
      borderWidth:0,
      borderStyle:"solid",
  },
    errorCover:{
      width:"100%",
      alignSelf:'center',
      alignItems:'center'
    },
    gearImg:{
      width:10,
      height:10,
      resizeMode:'contain',
    },
    descText:{
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 20,
      color: "rgba(69, 70, 79, 1)"
    },
    listCover:{
      // marginTop:10,
    },
    camCircle:{
      width:25,
      height:25,
      borderRadius:100,
      backgroundColor:"#fff",
      alignItems:'center',
      justifyContent:'center',
      marginTop:-28,
      left:59,
     
    },
    toastCover: {
      // position: 'absolute',
      bottom:Platform.OS === "android" ? hp('4%') : hp('7%'),
      alignSelf: 'center',
      width: wp('100%'),
      zIndex: 9000,
    },
    errView:{
      paddingVertical: 14,
      paddingHorizontal: 16,
      backgroundColor: "#BA1A1A",
      marginHorizontal: 16,
      borderRadius: 8,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
      elevation: 2,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20
  },
  errText:{
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      letterSpacing: 0.25,
      marginLeft: 13,
      color: "#fff"
  },
  successView:{
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#106D34",
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  successText:{
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    marginLeft: 13,
    color: "#fff"
  }
})

