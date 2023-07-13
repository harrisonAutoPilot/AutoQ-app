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
   
    activeSubHeaderText:{
        color: "#3353CB",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
    },
    inputStyle:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 18,
        marginLeft:5,
    },
    inputCover:{
      width:"90%",
      alignSelf:"center",
      flexDirection:"row",
      paddingHorizontal:8,
      paddingVertical:2,
      borderWidth:1,
      borderColor:"rgba(121, 116, 126, 0.12)",
      borderRadius:8,
      backgroundColor:"rgba(121, 116, 126, 0.08)",
      height:45,
      marginTop:8,
      marginBottom:8,
      alignItems: "center"
    },
    searchIcon:{
      marginTop:Platform.OS === "android" ? 2 : 4,
      paddingLeft:10,
    },
    bottomContainer:{
      width:"100%",
      flex:1,
      backgroundColor:"rgba(121, 116, 126, 0.08)",
      paddingVertical:10,
      paddingTop:0,
      paddingBottom:0,
    },
    cardCover:{
      width:"95%",
      alignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#fff",
      padding:10,
      marginVertical:5
    },
    cardCoverNew:{
      width:"95%",
      alignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#fff",
      borderBottomWidth:1,
      borderBottomColor:"#f5f5f5",
      padding:10,
      marginVertical:5,
    },
    cardTop:{
      width:wp('60%'),
      padding:5,
      alignItems:'flex-start',
    },
    orderNumberText:{
      color: "#1B1B1F",
      fontSize: 16,
      fontFamily: "AnekLatin-SemiBold",
      lineHeight: 24,
    },
    descText:{
      color: "#45464F",
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 20,
      marginTop:5,
      textTransform: "capitalize"
    },
    countText:{
      color:"#5A5D72",
      fontSize: 12,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 16,
    },
    amountText:{
      color: "#45464F",
      fontSize: 14,
      fontFamily: "AnekLatin-SemiBold",
      lineHeight: 20,
    },
    amountCover:{
      paddingRight:10,
      paddingTop:10,
    },
    statusCover:{
      paddingHorizontal:8,
      paddingVertical:3,
      backgroundColor:"#E3F3FF",
      borderRadius:20,
      marginBottom:8
    },
    statusText:{
      color: "#001E2C",
      fontSize: 11,
      fontFamily: "AnekLatin-Medium",
      lineHeight: 16,
    },
    deliveredCover:{
      flexDirection:"row",
      justifyContent:'center',
      alignItems:"center",
      borderRadius:20,
      paddingHorizontal:8,
      paddingVertical:3,
      backgroundColor:"#106D34",
      marginBottom:5

    },
    deliverText:{
      color: "#FFFFFF",
      fontSize: 11,
      fontFamily: "AnekLatin-Medium",
      lineHeight: 16,
      marginLeft:5
    },
    cancelCover:{
      flexDirection:"row",
      justifyContent:'center',
      alignItems:"center",
      borderRadius:20,
      paddingHorizontal:8,
      paddingVertical:3,
      backgroundColor:"#FFDAD6",
      marginBottom:5,
      borderWidth: 1,
      borderColor: "rgba(255, 180, 171, 1)"

    },
    cancelText:{
      color: "#410002",
      fontSize: 11,
      fontFamily: "AnekLatin-Medium",
      lineHeight: 16,
    },

  // this is for the order Placeholder loader
  statusLine:{
    width:120,
    height:15,
    borderRadius:20,
    backgroundColor:"#e6e6e6",
    marginVertical:10,
    marginTop:15,
  },
  tnLine:{
    width:80,
    height:20,
    borderRadius:20,
    backgroundColor:"#e6e6e6",
    marginVertical:2,
  },
  smLine:{
    width:60,
    height:15,
    borderRadius:20,
    backgroundColor:"#e6e6e6",
    marginVertical:5,
  },
  mdLine:{
    width:160,
    height:20,
    borderRadius:20,
    backgroundColor:"#e6e6e6",
  },
  cardTopP:{
    width:wp('90%'),
    padding:5,
    alignItems:'flex-start',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  amountCoverP:{
    paddingRight:10,
    paddingTop:10,
    marginVertical:10,
  },


    // this is for the empty screen
    emptyNoteCover: {
      borderWidth:1,
      borderColor:"rgba(121, 116, 126, 0.12)",
      height:hp('100%'),
       backgroundColor:"#fff",
      justifyContent: 'center',
     
    },
    imgCoverBg: {
     alignSelf:'center',
     alignItems:'center',
    marginBottom:hp('25%')
    },
    emptyCartImg: {
      width: 85,
      height: 85,
      resizeMode: 'contain',
    
    },
    emptyTextBg: {
      fontFamily: 'AnekLatin-SemiBold',
      fontSize: 22,
      lineHeight: 28,
      color: '#1B1B1F',
      letterSpacing: 0.1,
    },
    textCover: {
      width: '100%',
      alignItems: 'center',
      padding: 30,
      paddingVertical: 10,
    },
    emptyTextSm: {
      fontFamily: 'AnekLatin-Regular',
      fontSize: 14,
      lineHeight: 20,
      color: '#5A5D72',
      letterSpacing: 0.1,
      marginTop: 4,
      textAlign: 'center',
    },
    emptyNoteImg: {
      width: 85,
      height: 85,
      resizeMode: 'contain',
    },
    toastCover:{
      position:"absolute",
      bottom:Platform.OS === "android" ? hp('4%') : hp('7%'),
      alignSelf:'center',
      width:wp('100%'),
      zIndex:9000,
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

