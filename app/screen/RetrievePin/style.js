import {StyleSheet} from "react-native";


const styles = StyleSheet.create({

  padImg: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginBottom:20,
   
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  body5: {
    backgroundColor: 'rgba(233, 235, 249, 1)',
    borderRadius: 10,
    paddingTop: 30,
    padding:5,
    paddingBottom:20,
  },
  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
  },

  titleText: {
    fontSize: 16,
    color: '#3858CF',
    marginTop: 10,
    fontFamily: "Urbanist-SemiBold",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
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
    fontFamily: "Urbanist-Regular",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  
});

export default styles