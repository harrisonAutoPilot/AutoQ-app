import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const screenHeight = Dimensions.get('screen').height

export default styles = StyleSheet.create({

    body2: {
        backgroundColor: "#fff",
        height: Platform.OS === "android" ? "70%" : "44%",
        width: "100%",
        // alignItems: "center",
        alignSelf: "center",
        //  position: "absolute",
        //  bottom: "-5%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 20
      },
      orderImg: {
        width: 70,
        height: 70,
        marginTop: 10,
      },
      mainView: {
        paddingVertical: 20,
        borderTopColor: "#f2f3f4",
        borderTopWidth: 1,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        width: wp('80%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
      },
      modaltitle: {
        color: '#212121',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
    
      },
      modaltitleP: {
        color: '#212121',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textTransform: 'uppercase',
    
      },
      modalPadding: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('95%'),
        marginBottom: 20,
      },
    
      modalPadding2: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('95%'),
        marginBottom: 20,
        alignItems: "center"
      },
      backCover: {
        position: 'absolute',
        left: wp('5%'),
      },
      modalTitle: {
        fontSize: 20,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center",
        marginLeft: 20,
      },
      body5: {
        height: Dimensions.get("screen").height / 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 30,
      },
      imageHolder: {
        // flexDirection:'row',
        // justifyContent:'space-around',
        // paddingLeft:20,
        // paddingRight:20,
        alignItems: "center"
      },
      productTitle: {
        flexWrap: "wrap",
        width: Dimensions.get("window").width - 100,
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 18,
        color: "gray",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlignVertical: "top"
      },
      titleText: {
        fontSize: 18,
        color: '#212121',
        marginTop: 10,
        // textTransform: 'uppercase',
        fontFamily: "Urbanist-SemiBold",
        marginBottom: 5
      },
      reasonCover: {
        // width:wp('90%'),
        alignItems: 'center',
        paddingHorizontal: 16,
        // paddingRight: 40,
      },
      reasonText: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#757575"
      },
      inputCover: {
        width: wp('80%'),
        justifyContent: 'center',
        paddingLeft: 20,
    
      },
      registerInputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 30,
        marginBottom: Dimensions.get("window").height / 30,
        borderRadius: 5,
        width: wp('80%'),
        height: 100,
        justifyContent: "flex-start",
    
      },
      labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
      },
      label: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2
      },
      btnCover: {
        flexDirection: 'row',
        marginTop: -20,
        padding: 20,
        justifyContent: 'space-between'
      },
      submitt: {
        width: '50%',
        padding: 10,
        backgroundColor: 'rgba(124, 207, 36, 1)',
        borderRadius: 50,
      },
      loading: {
        width: "90%",
        paddingVertical: 12,
        backgroundColor: 'rgba(124, 207, 36, 1)',
        borderRadius: 50,
        alignItems: "center",
        alignSelf: "center"
      },
      loadingText: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2
      },
      submitN: {
        width: '50%',
        padding: 10,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#D32F2F',
        borderRadius: 50,
        marginLeft: 5,
      },
      mdLine:{
        width:170,
        height:10,
        borderRadius:10,
        backgroundColor:"#f2f2f2",
        marginVertical:8
      },
      smLine:{
        width:70,
        height:10,
        borderRadius:10,
        backgroundColor:"#f2f2f2",
        marginVertical:8
      },
      tnLine:{
        width:50,
        height:10,
        borderRadius:10,
        backgroundColor:"#f2f2f2",
        marginVertical:8
      }
})