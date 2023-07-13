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
   titleCover:{
    width:"100%",
    alignSelf:'center',
    alignItems:"flex-start",
    padding:20,
    paddingBottom:1,

   },
   titleText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
   },
   cardCover:{
    width:"85%",
    alignSelf:'center',
    paddingVertical:20,
    alignItems:"center",
    flexDirection:'row',
    justifyContent:"flex-start",
    borderBottomColor:"rgba(121, 116, 126, 0.16)",
    borderBottomWidth:1,

   },
   contentCover:{
    width:"70%",
    alignItems:"flex-start",
    marginLeft:10,
   },
   iconCover:{
    width:"10%",
    alignItems:"flex-start",
    justifyContent:"center"
   },
   nameText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
   },
   addressText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
   },
   photoTitleCover:{
    width:"100%",
    alignSelf:'center',
    alignItems:"flex-start",
    padding:20,
    paddingBottom:1,
   },
   photoTitleText:{
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
   },

   photoContainer:{
    width: wp('100%'),
    padding:20,
    flexDirection:'row',
    justifyContent:"space-between",
    flexWrap:'wrap',
   },


   photoCover:{
    width: wp('28%'),
    height:110,
    borderRadius:10,
    marginBottom:10,
    marginRight:5,
    resizeMode: 'cover',
   }
  

})

