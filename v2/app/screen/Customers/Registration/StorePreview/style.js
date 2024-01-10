import { StyleSheet, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    view: {
     height:hp('100%'),
    flexDirection: 'column',
    justifyContent: 'space-between', // will create the gutter between body and footer
    backgroundColor: '#fff',
    },
    topCover:{
        width:wp('100%'),
        height:hp('80%'),
    },
    submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
    },
    imgCardCover: {
        width:wp('100%'),
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:"flex-start",
        flexWrap:'wrap',
        padding: 10,
        backgroundColor: '#fff',

    },
    smCardCover: {
     flex:1
    },
    zoomImg:{
        width:50,
        height:50,
        resizeMode:'contain',
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center',
        top:60,

    },
    smCard: {
        width:wp('42%'),
         height:170,
        borderRadius: 10,
        alignSelf:'center',
        marginRight:15,
   
    },
    smImg: {
        width:wp('42%'),
         height:150,
         marginVertical:5,
        borderRadius: 6,
        marginRight:5,
        alignSelf:'center'
      
    },
    smText:{
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
    },
    titleCover:{
    padding:20,
    paddingBottom:0,
    },
    countText:{
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#212121",
    },

    modalView: {
        backgroundColor: "#fff",
        width: "100%",
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 24.25,
        alignSelf: "center",
        marginBottom: -12,
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
        fontFamily: "AnekLatin-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },


    modalPadding: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('95%'),
        marginTop: 10,

    },
    modalTitle: {
        fontSize: 18,
        fontFamily: "AnekLatin-Regular",
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

    listCover: {
        width: wp('100%'),
        padding: 20,
        marginTop: -15,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    itemTitle: {
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#757575",
        textTransform: "capitalize",

    },

    itemMainTitle: {
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#757575",
        textTransform: "capitalize",

    },
    itemName: {
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: "#424242",
        textTransform: "capitalize",
        width: 200,
        textAlign: 'right',

    },
    btnCover: {
        width: "100%",
        padding: 20,
        justifyContent: 'center',
        alignSelf:'center',

    },

 

})