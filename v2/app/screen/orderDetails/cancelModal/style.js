import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFBFF',
    borderRadius: 10,
    paddingVertical: 25,
    width: wp('88%'),
    alignSelf: 'center',
  },

  xCover: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  xImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  captionCover: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  captionText: {
    fontSize: 24,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 32,
    color: '#1B1B1F',
    letterSpacing: 0.1,
  },
  captionTextSm: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: '#45464F',
    letterSpacing: 0.1,
    marginTop: 10,
  },
  optionCover:{
    width:"70%",
    flexDirection:"row",
    justifyContent:'flex-end',
    alignSelf:"flex-end",
    paddingHorizontal:30,
    marginTop:40,
  },
  confirmCover:{
    marginLeft:30,
  },
  cancelCover:{

  },
  cancelText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#3353CB',
    letterSpacing: 0.1,
  },
  confirmText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#3353CB',
    letterSpacing: 0.1,
  
  }
});

export default styles;
