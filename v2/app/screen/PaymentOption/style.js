import {StyleSheet, Dimensions} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  renderItemContainer: {
    width:wp('90%'),
    marginBottom: 16,
    borderWidth: 1,
    paddingHorizontal:20,
    borderColor: "#C2C5DD",
    borderRadius: 8,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#fff"
},
activeRenderItemContainer: {
    borderColor: "#3353CB",
    backgroundColor: "#DDE1FF"
},

categoryTitle: {
    color: "#171B2C",
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.25,
    marginBottom: 4

},
categoryDesc: {
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.25,
},


categoryTitleView: {
    width:wp('60%'),
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
},
storeCover:{
    paddingVertical:10,
},
bioTitleText: {
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
},
codeCover: {
    width: wp("28%"),
    alignItems:"flex-start",
    alignSelf: "center",
    marginTop:14,
    justifyContent: "center",
    marginRight: 10,
    padding:15,
    paddingVertical:16,
    borderWidth:1.3,
    borderRadius:6,
    borderColor: "#5A5D72"
  },
  fadeText:{
   fontSize: 16,
   fontFamily: "AnekLatin-Regular",
   lineHeight: 24,
   color: "rgba(69, 70, 79, 1)",
   letterSpacing: 0.1,  
  },
      btnCover: {
    borderTopColor: "#F5F5F5",

    paddingBottom: 30
},
itemCover:{
width:wp('90%'),
alignSelf:'center',
alignItems:'center'
},
  bioTitleCover: {
    width: wp('100%'),
    padding:20,
},

  
});

export default styles