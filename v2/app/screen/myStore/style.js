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
   topCover:{
    width:"100%",
    padding:20,
    alignSelf:'center',
    alignItems:'flex-start'
   },
   storeContainer:{
    width:"100%",
    alignSelf:'center',
    alignItems:'flex-start',
    padding:20,
    paddingVertical:15
   },
   storeText:{
    color: "#45464F",
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
   },
   bottom:{
    height:"80%",
    flex:1
   },
   card:{
    width:"92%",
    borderRadius:6,
    backgroundColor:"rgba(121, 116, 126, 0.08)",
    padding:10,
    marginBottom:7,
    alignSelf:"center",
    alignItems:'center',
    flexDirection:"row",
    justifyContent:'space-between'
   },
   imgCover:{
    width:56,
    height:56,
    borderRadius:8,
    backgroundColor:"#767680",
    alignSelf:"center",
    alignItems:'center',
    justifyContent:'center'

   },
   abvText:{
    color: "#fff",
    fontSize: 22,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
    textTransform:'capitalize',
    marginTop:-5
   },
   contentCover:{
    width:"60%",
  
   },
   arrowCover:{
    width:40,
   
   },
   bgText:{
    color: "#1B1B1F",
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    textTransform:'capitalize',
    marginTop:-5
   },
   smText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
   },
   addBtn:{
    position:"absolute",
    top:hp("85%"),
    right:wp("6%"),
   },
   btnInner:{
    flexDirection:"row",
     justifyContent:"center",
     paddingHorizontal:20,
     padding:18,
     backgroundColor:"#3353CB",
     borderRadius:10,
   },
   addText:{
    color: "#fff",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    marginLeft:5
   },
  
//    this is for the empty screen
emptyContainer:{
    width:"100%",
     height:hp("50%"),
    justifyContent:'center',
     flex:1,
    alignItems:'center',
    alignSelf:'center',
   
},
storeImg:{
    width:100,
    height:100,
    resizeMode:'contain',
    marginTop:hp('25%'),
    
},
emptyTextCover:{
 width:"100%",
alignSelf:'center',
alignItems:'center',
marginTop:20,
},
emptyBgText:{
    color: "#1B1B1F",
    fontSize: 22,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
},
emptySmText:{
    color: "#45464F",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    marginTop:10
},

// this is where the placeholder styles start
imgCoverP:{
    width:56,
    height:56,
    borderRadius:8,
    backgroundColor:"#bfbfbf",
    alignSelf:"center",
    alignItems:'center',
    justifyContent:'center' 
},
smLine:{
    width:70,
    height:15,
    borderRadius:20,
    backgroundColor:"#bfbfbf",
    marginBottom:8
},
mdLine:{
    width:150,
    height:15,
    borderRadius:20,
    backgroundColor:"#e6e6e6",
},
badgeStyle:{
    width:20,
    height:20,
    borderRadius:100,
    zIndex:9000,
    position:'absolute',
    right:-8,
    top:-5
},
toastCover:{
    position:"absolute",
    bottom:Platform.OS === "android" ? hp('4%') : hp('4.5%'),
    alignSelf:'center',
    width:wp('100%'),
    zIndex:9000,
  },

  errView:{
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#BA1A1A",
    marginHorizontal: 5,
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
}
  

})

