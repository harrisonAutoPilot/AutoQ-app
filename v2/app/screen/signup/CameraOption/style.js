import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    paddingTop: 14,
  },
  middleLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(121, 116, 126, 0.08)',
  },
  mainView: {
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 32,
    paddingVertical: 14,
    width: '60%',
  },
  modalPadding2: {
    paddingBottom: 20,
  },
  modaltitle: {
    color: 'rgba(97, 97, 97, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 24,
    letterSpacing: 0.1,
    textAlign: 'left',
    marginLeft: 20,
  },
  smImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
