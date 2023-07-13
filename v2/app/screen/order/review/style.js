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
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
    },
    formCover:{
      width:"100%",
      paddingHorizontal:20,
    },
    smText:{
      color: "#5A5D72",
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 20,
  },
  starCover:{
    width:"100%",
    padding:20,
    paddingHorizontal:10,
    alignSelf:'center',
    alignItems:'center',
  },
  starStyle:{
    margin:3,
    width:"100%",
    justifyContent:'space-between',

  },
  formFlex:{
flexDirection:"column",
justifyContent:"space-between",
height:hp("60%")
  },

  submitBtnContainer:{
    // marginTop:200,
  }
})

