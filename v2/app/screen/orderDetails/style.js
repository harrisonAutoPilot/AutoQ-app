import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
      flex:1,
      
    },

    topContainer:{
      flexDirection:"row",
      justifyContent:'space-between',
      width:"100%",
      padding:20,
  
    },
    // footerHeight:{
    //   marginTop:Platform.OS === "ios" ? hp('15%') :  120,
    // },
    topCover:{
      width:"100%",
      flexDirection:'column',
      justifyContent:'space-between',
      // height:hp("100%"),
      flex:1,
    },
    topInner:{    
     // height:hp('100%'),
      flex:1
    },
    orderNumber:{
      color: "#1B1B1F",
      fontSize: 16,
      fontFamily: "AnekLatin-SemiBold",
      lineHeight: 24,
  },
  orderDate:{
    color: "rgba(27, 27, 31, 1)",
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 20,
  },
  statusCoverPending:{
    paddingHorizontal:12.5,
    height:25,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    alignItems:'center',
    borderColor:"#E3F3FF",
    backgroundColor:"#F5FAFF"
  },
  statusCoverCancelled:{
    paddingHorizontal:15,
    height:25,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:0,
    alignItems:'center',
    borderColor:"#E3F3FF",
    backgroundColor:"#FFB4AB"
  },
  statusCoverDelivered:{
    paddingHorizontal:15,
    height:25,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    alignItems:'center',
    borderColor:"#E3F3FF",
    backgroundColor:"#106D34"

  },
 
  pendingStatusText:{
    color: "#001E2C",
    fontSize: 11,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    marginLeft:5,
    textTransform:"capitalize"
  },
  cancelledStatusText:{
    color: "#410002",
    fontSize: 11,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    marginLeft:5,
    textTransform:"capitalize"
  },
  deliveredStatusText:{
    color: "#fff",
    fontSize: 11,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    marginLeft:5,
    textTransform:"capitalize"
  },
  itemTitleCover:{
    width:"100%",
    paddingHorizontal:20,
  },
  itemTitle:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 16,
  },
  cardContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    width:"100%",
    paddingHorizontal:20,
    paddingVertical:10,
  },
  cardLeft:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:wp('60%')
  },
  countCover:{
    paddingVertical:2,
    paddingHorizontal:7.5,
    backgroundColor:"#E4E1E6",
    borderRadius:2,
    alignSelf:'flex-start'

  },
  countText:{
    color: "#1B1B1F",
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
  },
  amountText:{
    color: "#1B1B1F",
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
  },
  descCover:{
width:wp('50%'),
justifyContent:'center',
alignSelf:'center',
marginLeft:10,
  },
  nameText:{
    color: "#1B1B1F",
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
    textTransform: "capitalize"
  },
  qtyText:{
    color: "#73768B",
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
  },
  qtyText1:{
    color: "#73768B",
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    textTransform:"capitalize"
  },
  // this is where i start the syle for the footer
  footer:{
    width:wp("100%"),
    alignSelf:'center',
    // flexGrow:1

  },
  totalContainer:{
    alignSelf:'center',
    alignItems:'center',
    marginVertical:10,
    width:wp("90%"),
    padding:5,
    borderTopWidth:1,
    borderTopColor:"rgba(121, 116, 126, 0.16)"
  },
  totalTop:{
    width:wp("89%"),
    alignSelf:'center',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    paddingVertical:3,

  },
  subText:{
    color: "#1B1B1F",
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
  },
  subAmountText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
  },
  deliveryContainer:{
    width:wp("90%"),
    padding:10,
    backgroundColor:"#F2F0F4",
    alignSelf:'center'
  },
  deliveryContainerTop:{
    width:wp("90%"),
    paddingHorizontal:10,
    backgroundColor:"#F2F0F4",
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:"rgba(121, 116, 126, 0.16)",
    paddingVertical: 16
  },

  deliveryCoverTop:{
    width:wp('85%'),
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start",
   
  },
  deliveryCover:{
    width:wp('85%'),
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start"
  },
  locCover:{
    width:wp('5%'),
    justifyContent:"flex-start",
    alignItems:"center",
    paddingVertical:3,
  },
  deliveryInner:{
    width:wp('78%'),
    alignItems:"flex-start"
  },
  deliveryCaption:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
  },
  deliveryCaption:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
  },
  deliveryName:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
  },
  deliveryAddress:{
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
  },
  btnCover:{
    width:"100%",
    alignSelf:"center",
    paddingHorizontal:20,
    paddingVertical:20,
    marginVertical:0,

  },
  cancelBtn:{
    width:"80%",
    padding:10,
    alignSelf:'center',
    alignItems:'center',
    marginVertical:10,
  },
  historyBtn:{
    width:"100%",
    padding:13,
    alignSelf:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:"#3353CB",
    borderRadius:30,
    marginVertical:10,
  },
  cancelText:{
    color: "#BA1A1A",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
  },
  historyText:{
    color: "#3353CB",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
  },
  reviewBtn:{
  flexDirection:"row",
  justifyContent:"center",
  width:"80%",
  padding:15,
  alignSelf:'center',
  marginVertical:10,
  },
  reviewText:{
    color: "#3353CB",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    marginLeft:10
     },
     reviewImg:{
      width:19,
      height:19,
      resizeMode:"contain"
     },
 
     toastCover: {
      // position: 'absolute',
      bottom:Platform.OS === "android" ? hp('3%') : hp('6%'),
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
      marginTop: 20,
   
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
  },
  testFlex:{
    flexDirection:'column',
    justifyContent:'space-between',
    height:hp('40%')
 
  },
  btnContainer:{
    // marginTop:hp('10%')
  }
  
   
})

