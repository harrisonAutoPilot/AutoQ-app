import { Platform,Dimensions, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    mainBody: {
        paddingTop: 24,
        backgroundColor: "#fff",
        height: "100%",
        paddingHorizontal: 12,
        flex: 1
    },
    main:{
        height: hp('100%'),
        flexGrow: 1
    },
    placeholderCover:{
        flexDirection:'row',
        lexWrap: 'wrap',
        justifyContent:'space-around'
        
    },
    listContainer: {
        width: wp('45%'),
        marginTop: 15,
        borderRadius: 16,
        backgroundColor: '#F5F5F5',
        marginBottom: 5
    },
    listContainer2: {
        width: wp('95%'),
        marginTop: 15,
        borderRadius: 16,
        backgroundColor: '#F5F5F5',
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    listContainerP: {
        width: wp('45%'),
        marginTop: 15,
        borderRadius: 16,
        backgroundColor: '#bfbfbf',
        marginBottom: 20
    },
    column: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listContainerImageView: {
        height: 115,
        marginBottom: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    listContainerImageViewP: {
        height: 115,
        marginBottom: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#bfbfbf',
        borderRadius:20,

    },
    listContainerTextView: {
        height: 50,
        marginBottom: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE"
      
    },
    listContainerTextViewP: {
        height: 50,
        marginBottom: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
        backgroundColor:'#bfbfbf',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    listContainerInnerTextView: {
      width: "85%",
      marginRight: 10
    },
    listContainerInnerTextViewP: {
        width: "95%",
        marginRight: 10,
        backgroundColor:'#ebebeb',
        height:15,
        borderRadius:10,
      },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    imageP: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain',
        backgroundColor:'#ebebeb'
    },
    title: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#616161",
        letterSpacing: 0.1,
        textTransform: "capitalize"
    },
    elevation: {
        elevation: 0.6,
        shadowColor: '#52006A',
    },
    bookcardFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: Platform.OS === "ios" ? 12 : 0,
        marginVertical: 10,
        marginBottom: 20
    },
    blueColor: {
        backgroundColor: '#00319D',
        padding:2,
    },
    searchIcon: {
        paddingHorizontal: 10,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    inputField: {
        width: wp('92%'),
        color: '#fff',
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        height:Platform.OS === "android" ? 50 : 20,
        letterSpacing: 0.25,
        fontWeight: "400",
        paddingBottom:Platform.OS === "android" ? 11 : 5,

    },
    staticCard:{
        width:wp('95%'),
        height:150,
        borderRadius:8,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
    },
    staticImg:{
        width:80,
        height:80,
        borderRadius:100,
    },
    imgCover:{
        width:80,
        height:80,
        borderRadius:100,
        backgroundColor:"#bfbfbf",
        marginTop:5,
        
    },
    cardImg:{
        width:wp('94%'),
        borderRadius:6,
        height:160,
    },
    downCover:{
        width:200,
        borderRadius:30,
        backgroundColor:"#fff",
        borderTopWidth:1,
        borderTopColor:'#fff',
        padding:10,
        alignItems:'center',
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    allProductText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#757575",
        letterSpacing: 0.1,
        textTransform: "capitalize"
    },
    // this is for the select pricing
    inputHolder2: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 18 : 16,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 40,
        marginBottom:10,
        borderRadius: 5
    },
    inputMainHolder: {

        backgroundColor: '#ffffff',
        height: hp('100%'),
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5
    },
    labelView1: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
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
        marginTop: 5,
        width: "70%"
    },
    selectCover:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:8,
    },
    selectOption:{
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#424242",
        letterSpacing: 0.2,
        fontWeight: "600",
        textTransform:'uppercase'
    },
    flexCover:{
        width:wp('100%'),
    //     flexDirection:'row',
       justifyContent:'space-between',
        paddingRight:25,
    }

})