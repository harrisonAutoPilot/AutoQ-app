import {StyleSheet} from "react-native";


const styles = StyleSheet.create({

  padImg: {
    width: 80,
    height: 80,
    marginTop: -80,
    marginBottom:20,
    borderRadius:100,
   
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
    backgroundColor: 'rgba(233, 235, 249, 1)',
    borderRadius: 10,
    paddingTop: 40,
    padding:5,
    paddingBottom:40,
 
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
    marginTop:-10
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
    marginBottom: 10
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  btnCover1:{
    padding:8,
    borderRadius:50,
    paddingHorizontal:40,
    borderWidth:1,
    borderColor:'#f5f5f5',
    elevation:0,
    backgroundColor:'#f5f5f5'
  }
});

export default styles