import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    squareCard:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        alignSelf:'flex-start',
        paddingHorizontal:20
    },
    smLine: {
        width:90,
        height:20,
        borderRadius:20,
        backgroundColor:"#e6e6e6",
        marginVertical:8
    },
    mdLine: {
        width:200,
        height:20,
        borderRadius:20,
        backgroundColor:"#bfbfbf",
        
    },
   squareLine: {
    width:70,
    height:70,
    borderRadius:4,
    backgroundColor:"#e6e6e6",
    marginRight:20,
    },
  
})