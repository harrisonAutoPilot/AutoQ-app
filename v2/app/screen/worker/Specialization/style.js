import {StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  steerCover:{
    width: 88,
    height: 88,
    marginTop: -90,
    borderRadius:100,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center'
  },
  padImg: {
    width: 90,
    height: 90,
   
   
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  body5: {
    backgroundColor: '#fff',
    borderRadius: 1,
    paddingTop: 40,
    padding:5,
    paddingBottom:40,
    height:900,
    width:wp('100%'),
    alignSelf:'center',
    bottom:hp('-20')
 
  },
  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
  },

  titleText: {
    fontSize: 16,
    color: '#5f9a32',
    marginTop: 10,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
    fontWeight:"600",
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 14,
    marginRight: 20,
    color: '#424242',
    marginTop: 10,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  signupTitleContainer: {
    paddingHorizontal: 28,
    height: "100%"
},
signupPinTitleContainer: {
    paddingHorizontal: 28,
    flex: 1
},
signupTitle: {
    color: "#171B2C",
    fontSize: 28,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 36,
    marginBottom: 8,
},
signupDesc: {
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom:10,
},
signupMiniTitleContainer: {
    marginBottom: 32,
    // flex: 0.4

},



// Flatlist Items
listContainer: {
    height:hp('65%'),
    width:wp('90%'),
    alignSelf:'center',
    flexDirection:'column',
    justifyContent:'space-between',

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
    width: "80%"

},
renderItemContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#C2C5DD",
    borderRadius: 8,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#fff"
},
activeRenderItemContainer: {
    borderColor: "#9ACD32",
    backgroundColor: "#f5f5f5"

},
continueBtnView: {
    // flex: 0.2
},

  
});

export default styles