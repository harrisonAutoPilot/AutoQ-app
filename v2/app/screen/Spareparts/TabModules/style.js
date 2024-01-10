import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    inputHolder: {
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        width: wp('83%'),
        marginLeft: wp('3%'),
        marginRight: wp('1%'),
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: Platform.OS === "ios" ?10:0
    },
    arrowCover:{
        marginTop:20,
        marginRight:5,
    },
    inputText: {
        marginLeft: 10.15,

    },
    blueColor: {
        width:wp('100%'),
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: 'rgba(221, 225, 255, 1)',
        paddingTop:Platform.OS === 'ios' ? 40 : 10,
        padding:2,
    
    },
    inputF: {
        // position: 'absolute',
        paddingTop: 10,
        width: wp('90%'),
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400"

    },
    searchIcon: {
        marginHorizontal: 10,

    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width:wp('85%'),
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: Platform.OS === "ios" ? 12 : 0,
        marginVertical: 10,
        marginRight:15,
        marginBottom: 10
    },
    inputField: {
        width: wp('80%'),
        color: 'rgba(118, 118, 128, 1)',
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        height:Platform.OS === "android" ? 45 : 20,
        letterSpacing: 0.25,
        paddingBottom:Platform.OS === "android" ? 11 : 5,

    },
    inputTitle: {
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400",
        textTransform: "capitalize",
        // width: "95%"
    },
    mainHeader: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderTopColor: "rgba(0, 0, 0, 0.1)",
        borderTopWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 15
    },
    listContainer: {
        backgroundColor: "#FAFAFA",
        marginBottom: 12,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: "center",
        flexDirection: "row",
        // flexGrow: 1
        width: wp('92%'),
        borderRadius: 8,
        marginHorizontal: 16,
        shadowColor: "rgba(235, 238, 255, 1)",
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 1,
        borderColor: "#EEEEEE",
        borderWidth: 1
        // height: 120
    },
    listContainerP: {
        backgroundColor: "#bfbfbf",
        marginBottom: 12,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: "center",
        flexDirection: "row",
        // flexGrow: 1
        width: wp('92%'),
        borderRadius: 8,
        marginHorizontal: 16,
        shadowColor: "rgba(235, 238, 255, 1)",
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 1,
        borderColor: "#EEEEEE",
        borderWidth: 1
        // height: 120
    },
    image: {
        width: 54,
        height: 88,
        resizeMode: 'contain',
    },
    imageP: {
        width: 70,
        height: 88,
        resizeMode: 'contain',
        backgroundColor:'#ebebeb',
        borderRadius:10,
    },
    listTitle: {
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.25,
        textTransform: "capitalize"
    },
    
    listTitleView: {
        marginLeft: 10,
        flexWrap: "wrap",
        width: "78%",
        // marginRight: 20
    },
  
    listTitleViewP: {
       
        flexWrap: "wrap",
        width: "58%",
        backgroundColor:'#ebebeb',
        borderRadius:10,
        height:10,
        marginTop:-30,
        marginLeft: 20
    },
    listTitleViewPP: {
       
        flexWrap: "wrap",
        width: "50%",
        backgroundColor:'#ebebeb',
        borderRadius:10,
        height:10,
        marginTop:30,
        marginRight: 20
    },
    listTitleView2: {
        // flexWrap: "wrap",
        width: "88%",
        flexDirection:'row',
        justifyContent:'space-between'
    },
    listTitleView22: {
        // flexWrap: "wrap",
        width: "80%",
        flexDirection:'row',
        justifyContent:'space-between'
    },
    mainBody: {
        paddingTop: 14,
        paddingHorizontal: 16,
        backgroundColor:'#fff'
    },
    body: {
        height: "100%",
        backgroundColor: "#f2f3f4",
        flexGrow: 1,

    },
    crossCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        right:wp('-9%'),
        height:22,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderColor:'rgba(211, 47, 47, 0.24)',
        borderRadius:30,
        alignItems:'center',
        // marginRight:10 
    },
    smCrossImg:{
        width:13,
        height:13,
        resizeMode:'contain',
        marginBottom:2,
    },
    listPercent: {
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 16,
        color: "#D32F2F",
        letterSpacing: 0.25,
        textTransform: "capitalize",
        marginLeft:5,
    },
    priceView: {
        marginTop: 10
    },
    priceViewP: {
        marginTop: 10,
        width:50,
        height:10,
        backgroundColor:'#ebebeb',
        borderRadius:10,
        marginRight:20,
    },
    priceText: {
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        color: "#469D00",
        letterSpacing: 0.1
    },
    outOfStockPriceText:{
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        color: "#eee",
        letterSpacing: 0.1,
    },
    priceRoll: {
        textTransform: "capitalize"
    },
    iconView: {
        marginTop: 6,
        alignSelf: "flex-start",
        alignContent: "flex-end"
    },
    color: {
        color: "#212121"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 13
    },
    miniHeader: {
        flexDirection: "row",
        marginBottom: 13,
        marginTop:-5,
    },
    miniHeaderView: {
        flexDirection: "row",
        alignItems: "center",
        width: "65%"
    },
    miniHeaderView2: {
        flexDirection: "row",
        alignItems: "center",
        width: "23%",
        backgroundColor: "#FAFAFA"
    },
    margin: {
        marginLeft: 4,
        width: '90%'
    },
    filterView: {
        borderRadius: 20,
        borderColor: "#BDBDBD",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    filterText: {
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        color: "#424242",
        letterSpacing: 0.2,
    },
    heartCover: {
        position: 'absolute',
        right: wp('5%'),
        top: hp('2%')
    },
    headerSubIconView: {
        flexDirection: "row",
        marginLeft: -20,
    },
    headerSubLastIconView: {
        paddingLeft: 15
    }, 
    body2: {
        backgroundColor: "#00319D",
        marginBottom:10,
        paddingBottom: 5
    },
    titleCover: {
        // width: wp('79%'),
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    priceOverview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceOverviewP: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:30,
    },
    priceView2: {
        borderWidth: 1,
        borderColor: "#3858CF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        // marginLeft: 20
    },
    
    priceView2P: {
        borderWidth: 0,
        borderColor: "#3858CF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        width:50,
        height:10,
        backgroundColor:'#ebebeb',
        marginLeft:10,
        marginRight:10,
    },
    priceText2: {
        fontSize: 11,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        color:  "#3858CF",
        letterSpacing: 0.2,
        marginLeft: 5
    },
    priceText2Icon: {
      marginRight: 10
    },
    icon:{
        alignSelf: "center"
    },
    badge:{
        backgroundColor: "#D32F2F",
        borderRadius: 10,
        position: "absolute",
        top: -6,
        left: 25,
        width: 14,
        height: 14,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 12,
        letterSpacing: 0.1,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"

    },
miniCard:{
paddingHorizontal:20,
paddingVertical:7,
borderRadius:30,
backgroundColor:"rgba(51, 83, 203, 1)",
marginHorizontal:5
 },
 miniCardInactive:{
    paddingHorizontal:20,
    paddingVertical:7,
    borderRadius:30,
    borderWidth:1,
    borderColor:"rgba(194, 197, 221, 1)",
    marginHorizontal:5
     },
 miniCardText:{
    color: '#fff',
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: "center",
    justifyContent: "center",  
    marginBottom:2
 },
 miniCardTextInactive:{
    color: "rgba(66, 70, 89, 1)",
    fontFamily: "AnekLatin-Medium",
    fontSize: 14,
    lineHeight: 20,
    marginBottom:2
 },
 typeContainer: {
    width:wp('100%'),
    paddingHorizontal: 16,
    flex: 1,
    alignSelf:'center',
    alignItems:'center'
},


// This is for the cards
squareCard:{
width:wp('50%'),
height:198,
borderWidth: 0.7,
borderColor: '#f2f3f4',
padding:20
},
squareImgCover:{
    width:120,
    height:100,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center'

},
squareImg:{
    width:100,
    height:90,
    resizeMode: 'contain',
},
descCover:{
paddingTop:5,
},
cardDesc:{
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.1,
 
},
heartCover:{
position:'absolute',
right:-15,
top:-2,

},
amountText:{
    color: 'rgba(23, 27, 44, 1)',
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    letterSpacing: 0.1,
},
filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    marginBottom:20
},
allText:{
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    letterSpacing: 0.1,
},
filterCover:{
flexDirection:'row',
justifyContent:'center'
},
filterText:{
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.1,
    marginHorizontal:3
},
// this is for the deal
productCard: {
    width: '50%',
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: '#f2f3f4',
    overflow: "hidden",
},
dealLogo:{
    backgroundColor:"#DE3730",
    transform:[{rotateZ: '305deg'}],
    alignSelf: "center",
    paddingRight:10,
    marginLeft: "-1%",
    paddingVertical: 5,
    paddingLeft: 45,

},
dealLogoContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -20
},
dealLogoText:{
    fontFamily: "AnekLatin-Medium",
    fontSize: 12,
    lineHeight: 16,
    color: "#fff",
    letterSpacing: 0.1,
    textAlign: "center"
},
productInnerCard: { 
    padding: 20,
},
productImgView: {
    marginTop: 5,
    alignItems: "center",
    height: 110,

},

productImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
},
productTitle: {
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    color: "#5A5D72",
    letterSpacing: 0.24,
    textTransform: "capitalize",
    marginTop:-10,
},
priceViewDeal: {
    paddingTop: 2,
    alignItems:'flex-start'
},
priceTitle: {
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    color: "#171B2C",
    letterSpacing: 0.1,
},

// this is the new one
productCardNew: {
    width:wp('100%'),
    flexDirection:'row',
    backgroundColor: "#ffffff",
    justifyContent:'space-between',
    alignSelf:'center',
    borderWidth: 0.5,
    borderColor: '#f2f3f4',
    paddingHorizontal:1,
    // overflow: "hidden",
},
productImgViewNew: {
    marginTop: 5,
    height: 120,
    width:120,
    alignItems:'flex-start',

},
contentCover:{
justifyContent:'center',
alignItems:'flex-start',
width:wp('68%')
},
dealImg:{
width:150,
height:80,
resizeMode:'contain',
position:'absolute',
zIndex:90,
left:wp('-8%')
},
    // EMPTY PLACEHOLDER
    emptyCover: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'center',
        flex: 1,
        marginTop: "35%"
    },
    emptyImg: {
        width: 100,
        height: 100,
        marginBottom: 24,
    },
    emptyText: {
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 22,
        lineHeight: 28,
        color: "#1B1B1F",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    emptyTextDesc: {
        fontFamily: "AnekLatin-Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "#45464F",
        letterSpacing: 0.25,
        textAlign: "center",
        paddingTop: 4
    },

    // Filter
    filterHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    filterHeaderText:{
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        color: "rgba(27, 27, 31, 1)"
    },
    filterResetText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        color: "rgba(51, 83, 203, 1)",
        letterSpacing: 0.25
    },
    filterPriceTitle:{
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        color: "rgba(27, 27, 31, 1)",
        letterSpacing: 0.1,
        lineHeight: 24
    },
    filterPriceView:{
        paddingHorizontal: 16,
        marginTop: 8
    },
    filterPriceList:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 10
    },
    filterPriceListTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        color: "rgba(90, 93, 114, 1)",
        letterSpacing: 0.25
    },
    filterPriceActiveListTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        color: "rgba(27, 27, 31, 1)",
        letterSpacing: 0.25
    },
    divider:{
        borderWidth: 1,
        borderColor: "rgba(121, 116, 126, 0.16)",
        marginTop: 8
    },
    filterBtn:{
        paddingHorizontal: 16,
        marginTop: 26,
        marginBottom: 26
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    checkCover:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:"rgba(51, 83, 203, 1)",
        borderRadius:4,
        paddingHorizontal:5,
        paddingVertical:3,
        marginLeft:5,
        backgroundColor:'rgba(223, 225, 249,1)'
    },
    checkText:{
        fontSize: 11,
        lineHeight:16,
        fontFamily: "AnekLatin-Medium",
        color: "rgba(51, 83, 203, 1)",
        letterSpacing: 0.25,
        marginLeft:3   
    }


})