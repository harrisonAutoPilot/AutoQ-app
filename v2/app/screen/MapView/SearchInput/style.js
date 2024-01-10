import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
       
        width:wp('88%'),
        alignSelf:'center',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:"#f5f5f5",
        marginBottom:20,
        borderRadius:30,
        elevation:2,
        shadowRadius: 3,
        
    },
    input:{
        padding:10,
        paddingLeft:60,
        color:'#000',
        fontSize:12,
        fontFamily: 'AnekLatin-Medium',
    },
       smLawImg:{
      width:25,
      height:25,
      resizeMode:'contain',
      marginTop:3
    },
    lawCover:{
      position:'absolute',
      marginTop:10,
      left:20,
    },
 
    
})