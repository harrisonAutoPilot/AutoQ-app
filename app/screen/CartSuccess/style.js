import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
    height: "100%",
    // flexGrow: 1,
    backgroundColor:'#4747d1',
  },
  top:{
    alignItems:'center',
    marginTop:10,

  },
  groupImg:{
    width:180,
    height:140,
  },
  topCircle:{
width:65,
height:65,
borderWidth:3,
borderColor:'#8585e0',
borderStyle:'solid',
borderRadius:100,
marginTop:-105,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#ffffff',
  },
  frameImg:{
    width:25,
    height:25,
  },
  afterTop:{
    width:wp('70%'),
    marginLeft:wp('15%'),
    marginRight:wp('15%'),
    marginTop:60,
  },
  topText:{
fontSize: 24,
fontFamily: "Urbanist-Regular",
lineHeight: 28,
color: "#ffffff",
letterSpacing: 0.2,
fontWeight: "400",
textAlign: "center"
  },
  downText:{
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 18,
    color: "rgba(255, 255, 255, 0.6)",
    letterSpacing: 0.2,
    fontWeight: "400",
    textAlign: "center"
  },
  midCover:{
    width:wp('85%'),
    marginLeft:wp('7.5%'),
    marginRight:wp('7.5%'),
    marginTop:30,
    borderWidth:1,
    borderRadius:10,
    borderStyle:'dashed',
    borderColor:'rgba(255, 255, 255, 0.4)',
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    padding:20,

  },
  midItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
  },
  itemText:{
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "rgba(255, 255, 255, 0.6)",
    letterSpacing: 0.2,
    fontWeight: "700",
    textAlign: "center"
   
  },
  midItemColor:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:5,
    marginTop:10,
    borderTopWidth:1,
    borderTopColor:'rgba(255, 255, 255, 0.1)',
    borderStyle:'solid',
  },
  itemTextColor:{
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "#B1FF5C",
    letterSpacing: 0.2,
    fontWeight: "700",
    textAlign: "center"

  },
  orderItem:{
    width:wp('80%'),
    marginLeft:wp('10%'),
    marginRight:wp('10%'),
    marginTop:15,

  },

  addressBtn2: {
    width:wp('80%'),
    marginLeft:wp('10%'),
    marginRight:wp('10%'),
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(124, 207, 36, 1)',
    marginTop: 75,

  },
 
});

export default styles