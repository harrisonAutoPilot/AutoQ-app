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
    bgText:{
        color: "#1B1B1F",
        fontSize: 18,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
    },
    smText:{
      color: "#5A5D72",
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 20,
  },
  starCover:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
    paddingHorizontal:15,
    alignSelf:'center',
    alignItems:'center'
  
  },
  starStyle:{
    margin:3,
    width:"60%",
    alignItems:'flex-start'

  },
  dateText:{
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20, 
    marginRight:10
  }

})

