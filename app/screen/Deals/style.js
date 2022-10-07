import {StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

       container:{
        flex: 1,
        flexGrow: 1,
        height: "100%",
        backgroundColor:'#fff'
    },

    navStyle: {
        backgroundColor: "#E9EBF9",
        marginBottom: 20,
       
    },
    headerText:{
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        textAlign: "center"
    },
    listItem:{
        width:wp('95%'),
        height:220,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        alignSelf:"center",
        padding:10,
        marginBottom:10,
    },
    imgCard:{
        alignSelf:'center',
        width:120,
        height:80,
        backgroundColor:'#fff',
        borderRadius:4,
    },
    textCover:{
       alignSelf:'center',
       alignItems:'center',
       paddingVertical:15
    },
    redText:{
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        color: "#D32F2F",
        letterSpacing: 0.3,

    },
    bgText:{
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.3,   
    },

    btnStyle:{
        width:150,
        paddingVertical:10,
        borderRadius:20,
        backgroundColor:'#00319D',
        alignSelf:'center',
        alignItems:'center',

    },
    btnText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.3,   
    },
    dealTagImg:{
        width:40,
        height:40,
        resizeMode:'contain',
        
    },
    // this is for the placeholder
    imgCardP:{
        alignSelf:'center',
        width:120,
        height:80,
        backgroundColor:'#bfbfbf',
        borderRadius:4,
    },
    smLine:{
      width:180,
      height: 15,
      backgroundColor:"#bfbfbf",
      borderRadius:40,
      marginBottom:10,
    },
    mdLine:{
        width:240,
        height: 15,
        backgroundColor:"#bfbfbf",
        borderRadius:40, 

      },
      btnStyleP:{
        width:100,
        height:40,
        borderRadius:50,
        backgroundColor:"#bfbfbf",
        alignSelf:"center",

      },
      listItemP:{
        width:wp('95%'),
        height:220,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        alignSelf:"center",
        padding:10,
        alignItems:'center',
        marginBottom:10,
    }
})