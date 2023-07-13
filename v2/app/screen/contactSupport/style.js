import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
    },
    innerContainer:{
    flexDirection:"column",
    padding:20
    },
   card:{
    width:"85%",
    padding:20,
    paddingHorizontal:5,
    borderTopWidth:1,
    borderTopColor:"rgba(121, 116, 126, 0.16)",
    flexDirection:"row",
    alignSelf:"center",
    justifyContent:"space-between"
   },
   leftCover:{
    flexDirection:"row",
    justifyContent:'space-between',
    width:"80%",
    alignItems:"center",
   },
   imgCover:{
    width:55,
    height:55,
    borderRadius:100,
    backgroundColor:"#FEFBFF",
    justifyContent:"center",
    alignItems:'center',
    borderWidth:1,
    borderColor:"#F2F0F4"
   },
   contentCover:{
    width:"73%",
    alignItems:"flex-start",
    justifyContent:'center',
    alignSelf:'flex-start',
    marginTop:5
   },
   bgText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    letterSpacing: 0.25
   },
   smText:{
    color: "#5A5D72",
    fontSize: 11,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    letterSpacing: 0.25
   },
   arrowCover:{
    justifyContent:"center",
    alignItems:'center'
   },
   rightImg:{
    width:15,
    height:15,
    resizeMode:"contain"
   },
   img:{
    width:22,
    height:22,
   }
   
})

