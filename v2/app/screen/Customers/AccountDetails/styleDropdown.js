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
        height: 45,
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
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        
      },
      buttonText1: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 10,
        marginRight:3,
        marginTop:4,
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        
      },
      icon: {
        marginRight: 20,
        width:25,
        height:25
      },
      dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: wp('90%'),
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        paddingLeft: 0,
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
        justifyContent:'flex-start',
        paddingLeft:30,
        
      },
      dropContent: {
        paddingTop: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingBottom: 5,
        paddingRight:20,
        alignItems:'flex-start'
  
    
    
      }
})