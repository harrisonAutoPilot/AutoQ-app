import { StyleSheet, Platform } from "react-native";

export default styles = StyleSheet.create({

    // LOGIN HEADER
    loginIconContainer: {
        width: "15%"
    },
    loginInnerContainer:{
        flexDirection:"row",
        paddingBottom: 24,
        paddingTop: 12,
        paddingHorizontal: 16,
        alignItems: "center",
    },

    // HOME HEADER
    homeHeaderContainer: {
        backgroundColor: "#DDE1FF"
    },
    homeHeaderInnerView: {
        marginTop: 12,
        paddingHorizontal: 16
    },

    // this is for the CrossHeader
    crossContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        alignSelf: 'center',
        width: "100%",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(121, 116, 126, 0.16)',
    },
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingLeft:7,
        alignItems: 'center',
        alignSelf: 'center',
        width: "100%",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(121, 116, 126, 0.16)',
    },
    arrowCover: {
        width: "30%",
        paddingVertical: 14,
        paddingHorizontal: 16
    },
    evenView: {
        width: "30%",
        paddingVertical: 24,
        paddingHorizontal: 16
    },
    crossImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    backImg: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    backImThinny: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 22,
        color: '#1B1B1F',
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2,
        fontWeight: "600",
    },
    titleNew: {
        fontSize: 22,
        color: '#1B1B1F',
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2,
        fontWeight: "600",  
    },
       // this is for the OrderHeader
       orderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
        alignItems:'center',
        alignSelf:'center',
        width:"100%",
        backgroundColor:"#fff",
        borderBottomWidth:0,
        borderBottomColor:'rgba(121, 116, 126, 0.16)',
    },
    // this is for the TeamHeader
    teamContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:5,
    paddingBottom:12,
    alignItems:'center',
    alignSelf:'center',
    width:"100%",
    backgroundColor:"#fff",
    borderBottomWidth:1,
    borderBottomColor:'rgba(121, 116, 126, 0.16)',
        },
    myTitle:{
        fontSize: 22,
        color: '#1B1B1F',
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2,
        fontWeight: "600",  
    },
    arrowCover1:{
        width:"10%",
        paddingVertical: 5,
        paddingHorizontal: 6,
  
    },
    arrowCoverTransaction:{
        width:"10%",
        // paddingVertical: 24,
        paddingHorizontal: 6,
  
    },
    textCover1:{
        width:"60%",
        marginBottom:5,
        alignItems:'center'
    },
    textCoverTransaction:{
        width:"80%",
        alignItems:'center',
        alignSelf:'center'  
    },

    // this is for the store Header
    storeContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
        alignItems:'center',
        alignSelf:'center',
        width:"100%",
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderBottomColor:'rgba(121, 116, 126, 0.16)',
    },
         // this is for the NotificationHeader
         noteContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:10,
            paddingVertical:5,
            alignItems:'center',
            alignSelf:'center',
            width:"100%",
            backgroundColor:"#fff",
            borderBottomWidth:0,
            borderBottomColor:'rgba(121, 116, 126, 0.16)',
        },
})