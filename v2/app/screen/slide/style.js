import {Dimensions, StyleSheet, Platform} from 'react-native';
import {color} from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imgCover:{
    height: 400,
    width: 350,
    alignSelf: 'center',
    alignItems:"center",
    marginRight:10,
  },
  imageStyle: {
    //  height: PixelRatio.getPixelSizeForLayoutSize(135),
    height: 400,
    width: 350,
    resizeMode:"contain",
    alignSelf: 'center',
   
    
  },
  imageStyle1: {
    //  height: PixelRatio.getPixelSizeForLayoutSize(135),
    height: 350,
    width: 380,
    alignSelf: 'center',
    // marginRight:150,
    resizeMode: 'contain',
  },
  logoStyle: {
    height: 40,
    width: 300,
    resizeMode: 'contain',
  },
  arrowStyle: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -40,
  },
  header: {
    fontSize: 26,
    fontFamily: 'AnekLatin-SemiBold',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    //  textTransform:'uppercase',
    color: '#04393A',
  },
  header1: {
    fontSize: 28,
    fontFamily: 'AnekLatin-Bold',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#0F8D8F',
    paddingHorizontal: 30,
  },
  paragraph: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    fontFamily: 'AnekLatin-Medium',
    width: 290,
    textAlign: 'center',
    marginTop: 5,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 150,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#0898A0',
    marginLeft: 10,
  },
  slideContainer: {
    alignSelf: 'center',
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
    backgroundColor:"#000",
    borderRadius:40,
    position:'absolute',
    paddingVertical:18,
    paddingHorizontal:32,
    alignSelf:'center',
       top:Platform.OS === "android" ? hp('68%') : hp('82%'),
       alignItems:'center'


  },
  startedText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  swipeText: {
    fontSize: 14,
    color: '#0F8D8F',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  swipeText1: {
    fontSize: 14,
    color: '#101828',
    fontWeight: '400',
    fontFamily: 'AnekLatin-Medium',
  },
  swipeText2: {
    fontSize: 14,
    lineHeight: 16,
    color: '#077174',
    fontWeight: '500',
    fontFamily: 'AnekLatin-SemiBold',
    marginLeft:5,
  },
  contentCover:{
    width:wp('100%'),
    height:750,
    marginTop:Platform.OS === "android" ? 25 : 50,
  },
  pagination: {
        position: "absolute",
        bottom: 8,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        top:Platform.OS === "android" ? hp('46%') : hp('7%'),
       
      },
      paginationDot: {
        // width: 8,
        height: 5,
        borderRadius: 4,
        marginHorizontal: 5,
      },
      paginationDotActive: { backgroundColor: "#5AA0A2", width:20},
      paginationDotInactive: { backgroundColor: "#EAECF0",width:7 },
    logoCover:{
      position:"absolute",
      top:hp("2%")
    },
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
    }
     
});

export default styles;
