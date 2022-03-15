import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
 } from 'react-native-responsive-screen';
 const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    mainBody: {
        // backgroundColor: "#fff",
        height: hp('100%'),
    },
    img: {
        // width: null,
        height: Dimensions.get("window").height /3,
    },
    backgroundImg: {
        height: Dimensions.get("window").height / 2.2,
        width:wp('100%'),
    },
    miniBody: {
        height: "100%"
    },
    logoImg: {
        width: 70,
        height: 70,
        marginTop:-10,
    },
    logoHolder: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: Dimensions.get("window").height /15,
        left: Dimensions.get("window").width /18,
        right: Dimensions.get("window").width /18
    },
    heading:{
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "400",
        color: "#fff",
        fontFamily:"Urbanist-Regular"
    },
    headingView: {
        position:'absolute',
        top:hp('2%'),
        right:wp('7%'),
        flexDirection:'row',
        
    },
    subHeading:{
        fontSize: 10,
        fontWeight: "400",
        color: "#fff",
        lineHeight: 2,
        letterSpacing: 0.2,
        opacity: 0.6,
        fontFamily:"Urbanist-Regular"
    },
    subHeadingN:{
        fontSize: 10,
        fontWeight: "400",
        color: "#fff",
        lineHeight: 20,
        letterSpacing: 0.2,
        opacity: 0.6,
        fontFamily:"Urbanist-Regular"
    },
    o1View: {
        // marginTop: Platform.OS === "ios" ? Dimensions.get("window").height /13: Dimensions.get("window").height /14
        position:'absolute',
        left:wp('3%'),
        top:hp('5%'),
    },
    osView:{
        // marginHorizontal: Dimensions.get("window").width /13,
        position:'absolute',
        flexDirection:"row",
        justifyContent:"space-between",
        width:wp('80%'),
    },
    o1sImg: {
        width: 64,
        height: 64
    },
    o2View: {
        position:'absolute',
        left:wp('25%'),
        top:hp('-2%'),
        // marginTop: Platform.OS === "android" ? -30: -10,
        borderWidth: 1,
        borderColor: "#B1FF5C",
       
        width: 162,
        height: 162,
        borderRadius: 162/2,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'dashed',
    },
    o2sImg: {
        width: 112,
        height: 112   
    },
    o3View:{
        position:'absolute',
        right:wp('-14%'),
        top:hp('-4%'),
    },
    o3Vie:{
        position:'absolute',
        right:wp('-27%'),
        top:hp('-4%'),
    },
    o3Vieww:{
        position:'absolute',
        right:wp('-29%'),
        top:hp('-4%'),
    },
    topSlide:{
        zIndex:9000,
   
        marginTop:hp('-10%'),
        marginBottom:20,


    },
    captionCover:{
        //position:'absolute',
        marginTop:hp('19%'),
        zIndex:9000,
       
    },
    secondHeading:{
        fontFamily:"Urbanist-Regular",
        fontSize: 23,
        lineHeight: 32,
        color: "#212121",
        left:wp('7%'),
        fontWeight: "600"
    },
    secondHeadingView:{
        // position:'absolute',
        top:hp('-38.5%'),
        zIndex:9000,
     
        // marginTop: Dimensions.get("window").height /12,
        // marginHorizontal: 32
    },
    downBtn:{
    position:'absolute',
    width:wp('95%'),
    top:hp('38%'),
    zIndex:4,
    textAlign:'center',
    margin:10,
    },

    secondMiniHeadingView:{
      
        left:wp('3%'),
        // width:wp('74%'),
        width:wp('93%'),
        paddingLeft:17,
        paddingRight:13,
    },
    secondMiniHeading:{
        fontFamily:"Urbanist-Regular",
        fontSize: 13,
        lineHeight: 22,
        color: "#757575",
        letterSpacing: 0.3,
        fontWeight: "400",
        
    },
    slide1:{
        backgroundColor: "#212121",
        width: 32,
        height: 6,
        borderRadius: 5
    },
    slide2:{
        backgroundColor: "#212121",
        width: 6,
        height: 6,
        borderRadius: 5,
        opacity: 0.24,
        marginLeft: 8
    },
    slide3:{
        backgroundColor: "#212121",
        width: 7,
        height: 6,
        borderRadius: 5,
        opacity: 0.24,
        marginLeft: 8
    },
    slideView:{
        // marginTop: Dimensions.get("window").height /22,
        flexDirection: "row",
        marginTop:15,
        left:wp('7%'),
    },
    btn:{
        // marginTop: Dimensions.get("window").height / 21,
        width:wp('85%'),
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        alignItems:'center',
        textAlign:'center',
        marginLeft:wp('5%'),
        outline:'none',
    },
    btnText:{
        fontFamily:"Urbanist-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#fff",
        letterSpacing: 0.1,
        fontWeight: "400",
        textAlign: "center"
    },
    btnSkip:{
        // marginTop: 32,
        // marginBottom: 75,
        top:hp('51%'),
    },
    btnSkipText:{
        fontFamily:"Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "#3858CF",
        letterSpacing: 0.3,
        fontWeight: "400",
        textAlign: "center"
    },
    registerBtn:{
        // top:hp('51%'),
        // width:wp('85%'),
        // marginLeft:wp('5%'),
        // paddingVertical: 16,
        // paddingHorizontal: 24,
        // borderColor: "#3858CF",
        // borderRadius: 100 ,
        // borderWidth: 1
        color:'#3858CF',
        top:hp('49%'),
        width:wp('85%'),
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#3858CF",
        alignItems:'center',
        textAlign:'center',
        marginLeft:wp('8%'),
        outline:'none',
        // <Banner data={BannerData}/>
    },



});

export default styles;