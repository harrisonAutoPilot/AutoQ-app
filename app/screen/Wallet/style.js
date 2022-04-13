import { StyleSheet, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    body: {
        backgroundColor: "#fff",
        marginBottom: 20
    },
    body2: {
        backgroundColor: "#fff",
      paddingHorizontal: 32,
      paddingTop: 24
    },
    headerText: {
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    mainBody: {
        paddingTop:5,
        paddingHorizontal: 16,
        borderRadius:15,
    },
    downCover:{
        width:wp('100%'),
        height:hp('60%'),
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        position:'absolute',
        top:hp('24%'),
        left:wp('-5%'),
        padding:16,
        paddingTop:10,
     
    },
    view: {
        flex: 1,
        backgroundColor:'#00319D',
    },
    subHeader: {
        borderRadius: 20,
        borderColor: "#000",
        borderWidth: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:1,
    },
    activeSubHeader: {
       borderBottomColor:'#00b300',
       borderBottomWidth:5,
       borderBottomStyle:'solid',
        width: "50%",

    },
    inActiveSubHeader: {
 
        width: "50%"
    },
    activeSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.1,
        fontWeight: "700",
        textAlign: "center"
    },
    sortText2: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#424242",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    inActiveSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.1,
        fontWeight: "700",
        textAlign: "center"
    },
    miniSubHeader: {
        // paddingHorizontal: 46,
        paddingVertical: 10,
    },
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 4,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 30,
        borderRadius: 5,
    },
    inputMainHolder: {
        // marginTop: Dimensions.get("window").height /50,
        height: "100%",
        flexGrow: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
       
    },
    inputMainHolder2: {
        marginTop: Dimensions.get("window").height /50,
        height: "100%",
        backgroundColor: "#fff",
        alignSelf: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
       
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.2,
        fontWeight: "600"
    },
    innerLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop:5,
    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    btnCover: {
       position: "absolute",
        borderTopColor: "rgba(238, 238, 238, 1)",
        borderTopWidth: 1,
        height: "100%",
        width: "100%",
        paddingVertical: 30,
        alignItems: "center",
        top: hp("64%")
    },
    btnCover2: {
        top: hp("54%")
     },
    submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "rgba(124, 207, 36, 1)",
        borderRadius: 100,
        width: "100%"
    },
    btnText: {
        color: 'rgba(33, 33, 33, 1)',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        // flexWrap: "wrap",
        // alignItems: "center"
    },
    showTextPin: {
        color: "#9E9E9E",
        fontSize: 11,
        // marginTop: Platform.OS === "android" ? 16 : 5,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    showCover:{
        paddingTop:20,
        marginRight:5,
    },
    sortContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        paddingLeft:5,
        paddingRight:20,
        marginBottom:15,
    },
    sortCover:{
        padding:2,
        paddingLeft:12,
        paddingRight:12,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#E0E0E0'
    },
     sortText:{
        color: '#212121',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
        textAlign: "center"
    },
    refreshImg:{
        width:12,
        height:12,
        margin:3,
    
    },
    sortCon:{
        flexDirection:'row',
    },
    smCardCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:19,
        paddingHorizontal:10,
        backgroundColor:'#FAFAFA',
        marginBottom:8,
        borderRadius:8,
    },
    smCardCoverP:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:19,
        paddingHorizontal:10,
        // backgroundColor:'#FAFAFA',
        marginBottom:8,
        borderRadius:8,
        backgroundColor:'#bfbfbf'
    },
    bottomCover:{
        marginTop:5,
        padding:5,
        height: hp('81%'),   
    },
     fundTitle:{
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        
    },
       fundDate:{
        color: '#757575',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        marginTop:3,
        
    },
    fundAmount:{
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        marginTop:10,
    },
    leftCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
    },
    leftCoverP:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        height:10,
        width:40,
        backgroundColor:'#ebebeb',
        borderRadius:20,
        marginTop:15,

    },
      rightCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:25,
    },
    iconCoverCredit:{
        width:30,
        height:30,
        borderWidth:1,
        borderRadius:100,
        borderColor:'rgba(124, 207, 36, 0.2)',
        padding:7,
        backgroundColor:'rgba(124, 207, 36, 0.05)',
        marginRight:10,
        marginTop:5,
    },
    iconCoverDebit:{
        width:30,
        height:30,
        borderWidth:1,
        borderRadius:100,
        borderColor:'rgba(211, 47, 47, 0.2))',
        padding:7,
        backgroundColor:'rgba(211, 47, 47, 0.05)',
        marginRight:10,
        marginTop:5,
    },
    iconCoverDebitP:{
        width:30,
        height:30,
        borderWidth:0,
        borderRadius:100,
        borderColor:'rgba(211, 47, 47, 0.2))',
        padding:7,
        // backgroundColor:'rgba(211, 47, 47, 0.05)',
        marginRight:10,
        marginTop:5,
        backgroundColor:'#ebebeb'
    },
    side:{
        marginTop:10,
        width:wp('50%'),
        height:20,
        backgroundColor:'#ebebeb',
        borderRadius:20,
    },
    modalPadding:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    modalPadding2:{
        paddingBottom: 20
    },
    modalTitle:{
        color: '#424242',
        fontSize: 18,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1,
    },
    modaltitle:{
        color: 'rgba(97, 97, 97, 1)',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        letterSpacing: 0.1,
    },
   active:{
        color: 'rgba(70, 157, 0, 1)',
        fontFamily: "Urbanist-SemiBold",
    },
    comingSoonCover:{
        width:wp('80%'),
        height:hp('80%'),
        marginLeft:wp('10%'),
        marginRight:wp('10%'),
        marginTop: 20
        // alignItems:'center',
        // justifyContent:'center',
    },
    comingSoonCover2:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf: "center",
        height:hp('60%'),
    },
    comingSoonText:{
        color: '#424242',
        fontSize: 24,
        fontFamily: "Urbanist-Regular",
        lineHeight: 36,
        fontWeight: "600",
        letterSpacing: 0.1,
        textAlign: "center"
       
    },
    comingSoonImg:{
        width:290,
        height:380,
        resizeMode:'contain',
    },
    mainView:{
        paddingBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    close:{
        backgroundColor: "rgba(250, 250, 250, 1)",
        height: "20%",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "rgba(238, 238, 238, 1)",
        justifyContent: "center",
        marginTop: 10
    },
    closeText: {
        color: 'rgba(158, 158, 158, 1)',
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
    }
})