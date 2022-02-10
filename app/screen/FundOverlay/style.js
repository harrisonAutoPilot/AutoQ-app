import { StyleSheet, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    // MODAL
    modalImgView: {
        marginTop: 56,
    },
    modalView: {
        backgroundColor: "#fff",
        width: "100%",
        // marginTop: 60,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // flex: 1,
        marginLeft: 0,
        marginRight: 0,
        // paddingHorizontal: 29.75,
        paddingTop: 24.25,
        alignSelf: "center",
        marginBottom:-12,
    },
    modalImg: {
        width: 130,
        height: 153.33,
        alignSelf: "center",
        resizeMode: 'contain',
        marginTop: -40,
        marginBottom: -30,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    modalMiniBody: {
        backgroundColor: "#FAFAFA",
        height: "100%",
        shadowColor: '#EEEEEE',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingHorizontal: 29.75,
        paddingTop: 25.5
    },
    modalPadding: {
        paddingHorizontal: 29.75,

    },
    modalTitleView: {
        backgroundColor: "#fff",
        marginTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 35.75
    },
    modalminiTitle: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600"
    },
    modalminiSecondTitle: {
        color: "#212121"
    },
    modalminiSecondView: {
        marginBottom: 8
    },
    modalDiscount: {
        flexDirection: "row",
        // justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#E9EBF9",
        paddingVertical: 10,
        borderRadius: 5,
        paddingLeft: 20
    },
    modalDiscountText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#00319D",
        letterSpacing: 0.3,
        fontWeight: "400",
        textAlign: "right"
    },
    modalDiscountTextView: {
        paddingLeft: 11
    },
    increaseCartMainAmountView: {
        flexDirection: "row",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "space-between"
    },

    modalPadding: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('95%'),

    },
    modalTitle: {
        fontSize: 18,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "right"
    },
    backCover: {
        position: 'absolute',
        left: wp('5%'),
    },
    topPrompt: {
        flexDirection: 'row',
        backgroundColor: '#F6FCEF',
        justifyContent: 'space-around',
        borderRadius: 8,
        margin: 18,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    topPromptText: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.3,
        fontWeight: "600",
    },
    inforCover:{
      width:25,
      height:25,
      borderWidth:1,
      borderRadius:100,
      borderColor:'#469D00',
      justifyContent:'center',
      marginTop:20,
      marginLeft:5,
      marginRight:10,
    },
downInforCover:{
      width:25,
      height:25,
      borderWidth:1,
      borderRadius:100,
      borderColor:'#00319D',
      justifyContent:'center',
      marginTop:0,
      marginLeft:5,
      marginRight:10,

    },
    downInforText: {
        color: '#00319D',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
       topPromptTextCover:{
            width:260,
            marginLeft:8,
 
    },
         topPromptTextCoverSm:{
            width:280,
            marginLeft:10,
 
    },
    inforText: {
        color: '#469D00',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
    smCardCover: {
        width: wp('90%'),
        height: 200,
        borderRadius: 15,
        margin: 18,
        marginTop: 7,
        padding: 20,

    },
    midCardCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',
        marginTop: 10
    },
    nameText: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
    wemaCover: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'left',
        width: 100,
        margin: 3,

    },
    wemaImg: {
        width: 20,
        height: 20,
    },
    copyCover: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        width: 160,
        left: wp('18%'),
        borderRadius: 30,
        padding: 5,
        marginTop: 15,

    },
    wemaImg:{
        width:20,
        height:20,
    },
    copyCover:{ 
      flexDirection:'row',
      backgroundColor:'rgba(255, 255, 255, 0.2)',
      justifyContent:'center',
      width:160,
     left:wp('16%'),
     borderRadius:30,
     padding:5,
     marginTop:15,
      
    },
    copyText:{
        color:'#ffffff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center",
        marginLeft: 5,
    },
    downPrompt: {
        flexDirection: 'row',
        backgroundColor: '#E9EBF9',
        justifyContent: 'space-around',
        borderRadius: 8,
        width: wp('90%'),
        margin: 18,
        padding: 15,

    },
    downCover: {
        width: wp('60%'),
        marginLeft: wp('20%')
    },
    downPromptText: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },

})