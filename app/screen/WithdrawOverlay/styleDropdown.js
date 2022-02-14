import { Dimensions, StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 60,
        zIndex: 1,
        borderWidth: 0,
        borderColor: '#f3f4f5',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
      },
      buttonText: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 10,
      },
      buttonText1: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 10,
        marginRight:3,
        marginTop:15,
      },
      icon: {
        marginRight: 20,
      },
      dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: wp('90%'),
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        paddingLeft: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation: 2,
        marginTop:-15,
        borderRadius:10,
      },
      overlay: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
       
      },
      item: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f5',
        flexDirection:'row',
        justifyContent:'space-around'
        
      },
      dropContent: {
        paddingTop: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingRight:20,
  
    
    
      }
})