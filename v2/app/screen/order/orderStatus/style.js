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
   
    activeSubHeaderText:{
        color: "#3353CB",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
    },
    cardContainer:{
      width:wp("90%"),
      flexDirection:"row",
      justifyContent:'space-between',
      alignSelf:'center',
      alignItems:'center',
      padding:20,
      marginBottom:30,
    },
    cardDetails:{
      padding:20,
      backgroundColor:"#F2F0F4",
      width:wp("70%"),
      borderRadius:4,
    },
    statusText:{
      color: "#1B1B1F",
      fontSize: 14,
      fontFamily: "AnekLatin-Medium",
      lineHeight: 20,
    },
    statusDate:{
      color: "#767680",
      fontSize: 11,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 16,
    },
    dotCover:{
      width:wp("90%"),
      paddingHorizontal:30,
      alignSelf:'center',
      position:'absolute',
     
    },
    divideImg:{
      height:114,
      width:1.8,
      marginTop:-125
    },
    pack:{
      width:24,
      height:24,
      resizeMode:'contain'
    },
  // this is the placeholder style
  placeholderCover:{
    width:wp('95%'),
    justifyContent:"space-between",
    flexDirection:'row',
    alignItems:'center',
    padding:20,
    alignSelf:'center',
  },
  leftBase:{
    width:270,
    height:80,
    borderRadius:4,
    backgroundColor:"#e6e6e6",
    padding:10,
    paddingHorizontal:20
  },
  imgLine:{
    width:30,
    height:30,
    borderRadius:100,
    backgroundColor:'#bfbfbf'
  },
  mdLine:{
    width:150,
    height:15,
    borderRadius:20,
    backgroundColor:'#bfbfbf',
    marginVertical:5
  },
  smLine:{
    width:80,
    height:15,
    borderRadius:20,
    backgroundColor:'#bfbfbf',
    marginVertical:8
  },
  middleContainer:{
    width:wp('100%'),
    height:'100%',
    flex:1
  }
   
})

