import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    // ONBOARDING
    onboardingView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        width:wp('100%'),
        height:hp('100%'),
        backgroundColor:'#fff'
       
    },
    carCover:{
      width:wp('100%'),
      position:'absolute',
      alignSelf:'center',
      marginTop:30,
      zIndex:-1
    },
    successImg:{
      width:wp('100%'),
      height:hp('50%'),
      marginTop:60,
      resizeMode:'contain',
    },
    carImg:{
        width:wp('80%'),
        height:hp('35%'),
        alignSelf:'center',
        resizeMode:'contain',
        marginTop:hp('10%')
        
       
    },

    onBoardingInnerContainer: {
        flex: 1
    },


    titleCover:{
        marginBottom:-10,
    },
    title:{
        color: "#fff",
        fontSize: 24,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 32,
        marginTop:-10,
       
    },
    bottomSheetCover:{
        width:wp('100%'),
        height:hp('30%'),
        backgroundColor:'#fff',
        position:'absolute',
        bottom:hp('-2%'),
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    btnOne:{
      width:wp('85%'),
      backgroundColor:'#9ACD32',
      borderWidth:1,
      borderColor:"#fff",
      paddingVertical:16,  
      borderRadius:30,
      marginBottom:20,
      alignItems:'center'
    },
    btnTwo:{
        width:wp('85%'),
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#757575',
        paddingVertical:16,  
        borderRadius:30,
        alignItems:'center'
      },
      btnOneText:{
        color: "#fff",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
      
      },
      btnTwoText:{
        color: "#454545",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
      
      },
   
    // this new styles
    downCover:{
        width:"100%",
        position:'absolute',
        alignSelf:'center',
        alignItems:"center",
        top:Platform.OS === "android" ? hp('79%') : hp('78%'),
        zIndex:9000,
      },
      downTitle:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignSelf:"center",
        alignItems:'center',
        width:"90%",
      },
      mdLine:{
        borderWidth:0.6,
        borderColor:"#e6e6e6",
        width:110,
        marginHorizontal:5,
      },
      followText:{
        fontSize: 16,
        color: '#000',
        lineHeight: 24,
        fontFamily: 'AnekLatin-Medium',
        textAlign: 'center',
      },
      socialContainer:{
  width:"80%",
  padding:20,
  flexDirection:"row",
  justifyContent:'space-between',
  alignSelf:'center',
  alignItems:'center',
      },
      socialCover:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:"#f5f5f5",
        alignItems:'center',
        justifyContent:'center'
      },
      logoImg:{
        width:25,
        height:25,
        resizeMode:"contain"
      },
      arrowCover: {
        width: 150,
        height: 155,
        borderWidth: 0,
        borderColor: '#eeeeee',
        borderRadius: 30,
        position: 'absolute',
        right: wp('30%'),
        top: hp('85%'),
        // flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 10,
      },
      arrowCover1:{
        width:wp('100%'),
       paddingVertical:10,
       flexDirection:'row',
        borderWidth:0,
        borderColor:"#f5f5f5",
        borderRadius:30,
        position:'absolute',
        alignSelf:'center',
        top:Platform.OS === "android" ? hp('94%') : hp('88%'),
        alignItems: 'center',
        justifyContent: 'center',
    
        paddingHorizontal: 10,
      },
      startedButton:{
        width:"80%",
        backgroundColor:"#47d147",
        borderRadius:40,
        marginTop:hp('3%'),
        paddingVertical:18,
        zIndex:9000,
        paddingHorizontal:32,
        alignSelf:'center',
           //top:Platform.OS === "android" ? hp('68%') : hp('82%'),
           alignItems:'center'
    
    
      },
      startedText: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 16,
        fontWeight: '400',
        textTransform: 'capitalize',
      },
    
      logoCoverLogo:{
      flexDirection:'row',
      paddingHorizontal:30,
      paddingTop:40,
      },
      logoText: {
        fontSize: 34,
        color: '#757575',
        fontFamily: 'AnekLatin-SemiBold',
      },
      logoTextBig:{
        fontSize: 54,
        color: '#757575',
        fontFamily: 'AnekLatin-SemiBold',
        marginTop:-15
      },
      logImg:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginTop:5,
      },

})