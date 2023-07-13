import {StyleSheet} from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
    },
    header: {
        backgroundColor: "#DDE1FF",
        paddingLeft: 16,
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 20,
     
    },
    linearView: {
        paddingVertical: 10,
        height: "100%",
        borderRadius: 100,
        width: 46,
        height: 46,
        marginRight: 16,
        alignItems:'center',
        justifyContent:"center"
    
    },
    shortCut:{
        fontSize: 16,
        fontFamily: "AnekLatin-Medium",
       lineHeight: 24,
       color: "#DDE1FF",
       letterSpacing: 0.1,  
    },
    icon:{
        alignSelf: "center"
    },
    leftCover:{
     marginTop:-8
    },
    headerInnerView:{
        flexDirection: "row",
        alignItems: "center",
    },
    titleText:{
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
       lineHeight: 24,
       color: "#001454",
       letterSpacing: 0.1,
       textTransform:'capitalize'
    },
    headerTitle:{
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "rgba(0, 0, 0, 1)",
        letterSpacing: 0.1,
    },
    headerTitleCover:{
        width:"85%",
    },
    headerTitleInnerView:{
        marginTop: 6,
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: "center",    
        width:wp('76%')
      
    },
    headerTitleInnerTitle:{
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        color: "#5A5D72",
        letterSpacing: 0.2,
    },
    chevronIcon: {
        marginLeft: 10
    },
    route:{
        paddingVertical: 5,
        backgroundColor: "#fff",
        borderBottomWidth:1,
        borderBottomColor:"#F2F0F4"
     
    },
    
    routeText: {
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight:20,
        color: "#45464F",
        letterSpacing: 0.3
    },
    countCover:{
    backgroundColor:"#BA1A1A",
    paddingHorizontal:12,
    paddingVertical:2,
    borderRadius:8
    },
    activityCover:{
        paddingHorizontal:5,
        paddingVertical:2,
        borderRadius:8
    },
    countText:{
        fontSize: 11,
        fontFamily: "AnekLatin-Medium",
        lineHeight:16,
        color: "#fff",
        letterSpacing: 0.3
    },
    disabled:{
        color: "#D3D3D3"
    },
    routeInnerView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 23
    },
    routeInnerView2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical:12,
        paddingHorizontal: 18,
    },
    headerCover:{
        width:"60%",
        paddingHorizontal:20
    },
    headerTitle:{
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight:24,
        color: "#1B1B1F",
        letterSpacing: 0.3
    },
    routeTextView: {
        flexDirection: "row",
        alignItems: "center",
    },
    routeTextIconView: {
        marginRight: 15
    },
    activityIcon: {
        marginLeft: 15
    },
    agentView:{
        padding: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "rgba(238, 238, 238, 1)"
    },
    agentInnerView:{
        marginBottom: 18
    },
    logout:{
        position: "absolute",
        bottom: 0, 
        left: 0,
        right: 0,
        backgroundColor: "rgba(250, 250, 250, 1)",
        paddingVertical: 20
    },
    logoutInnerView:{
        alignSelf: "center",
        flexDirection: "row",
    },
    logoutText: {
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        color: "rgba(211, 47, 47, 1)",
        letterSpacing: 0.3,
        fontWeight: "600",
    },
    logoutIcon:{
        marginLeft: 10
    },
    listCover:{
    height:hp("78%"),
    flex:1,

    
    },
    scrollView:{
        height: "100%",
    },
    toastCover: {
        // position: 'absolute',
        bottom:Platform.OS === "android" ? hp('4%') : hp('3%'),
        alignSelf: 'center',
        width: wp('100%'),
        zIndex: 9000,
      },
      errView:{
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: "#BA1A1A",
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    },
    successView:{
      paddingVertical: 14,
      paddingHorizontal: 16,
      backgroundColor: "#106D34",
      marginHorizontal: 16,
      borderRadius: 8,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
      elevation: 2,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20
    },
    successText:{
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      letterSpacing: 0.25,
      marginLeft: 13,
      color: "#fff"
    },
    profileImgCover: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 100,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      userImg: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        borderRadius: 100,
      },
      verImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginTop: 30,
        marginLeft: 30,
        position: 'absolute',
        right: -7,
        top: 2,
      },
  
})