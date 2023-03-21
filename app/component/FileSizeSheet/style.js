import {StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  padImg: {
    width: 50,
    height: 50,
    borderRadius:100,

   
  },
  padCover:{
    width: 80,
    height: 80,
    marginTop: -80,
    marginBottom:20,
    borderRadius:100,
    borderWidth:0,
    backgroundColor:"#f5f5f5",
    padding:10,
    alignItems:'center',
    justifyContent:'center'
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  body5: {
    backgroundColor: 'rgba(233, 235, 249, 1)',
    borderRadius: 10,
    paddingTop: 40,
    padding:5,
    alignSelf:'center',
    paddingBottom:40,
    width:wp("100%"),
    position:"absolute",
    bottom:hp("-52%")
 
  },
  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
  },

  titleText: {
    fontSize: 18,
    color: '#04393A',
    marginTop: 10,
    fontFamily: "Urbanist-SemiBold",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
    fontWeight:"600",
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 14,
    marginRight: 20,
    color: '#424242',
    marginTop: 10,
    fontFamily: "Urbanist-Regular",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    width:"100%",
    padding:10,
      },
      getLocCoverActive:{
        width:wp('43%'),
        flexDirection:'row',
        justifyContent:'space-around',
        padding:8,
        borderWidth:0,
        backgroundColor:"#00319D",
        borderStyle:'solid',
        alignSelf:'center',
        marginVertical:10,
        borderRadius:30,
      },
      getLocCoverActive1:{
        width:wp('43%'),
        flexDirection:'row',
        justifyContent:'space-around',
        padding:8,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:"#bfbfbf",
        alignSelf:'center',
        marginVertical:10,
        borderRadius:30,
      },
      touchText:{
        fontSize: 14,
        color: '#1D2939',
        fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "500", 
        paddingVertical:5, 
      },
      touchTextActive:{
        fontSize: 14,
        color: '#fff',
        fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "500", 
        paddingVertical:5, 
      },
      touchTextActive1:{
        fontSize: 14,
        color: '#454545',
        fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "500", 
        paddingVertical:5, 
      },
});

export default styles