import { Dimensions, StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ffffff',
        // height: 60,
        zIndex: 1,
        borderWidth: 1,
        borderColor: 'rgba(189, 189, 189, 1)',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        paddingVertical: 15,
        paddingRight:20,
      },
      buttonText: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 20,
        fontFamily: "Urbanist-Regular",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: "#212121",
      },
      buttonText2: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 20,
        fontFamily: "Urbanist-Regular",
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "500",
        color: "#616161",
      },
      icon: {
        alignItems:'center',
        marginLeft:1.5,
    
      },
      dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: wp('88%'),
        shadowColor: '#ffffff',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        paddingLeft: 3,
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
        paddingVertical: 10,
        borderBottomWidth: 0,
        borderBottomColor: '#f2f3f4',
        backgroundColor:'#fff',
        borderRadius:20,
        
        // #E9EBF9'
       
      },
      itemCover: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f4f4',
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:20,
        // #e6e6e6' #daf4be
        
       
      },
      dropContent: {
        // paddingTop: 2,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // paddingBottom: 2,
    
        // alignItems: 'center',
        // alignSelf: "center",
        
        borderRadius:20,
    
      },
      iconCircleDrop: {
        borderColor: "#212121",
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 100,
        alignSelf: "center",
        justifyContent: "center",
        marginTop:4,
        marginLeft:7,
      },
      iconCircleActive: {
        borderColor: "rgba(70, 157, 0, 1)",
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 100,
        alignSelf: "center",
        justifyContent: "center",
        marginTop:4,
        marginLeft:7,
      },
      dropLabelCover:{
    paddingLeft:30,
    marginTop:20,
      },
      dropLabel:{
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "400",
        color:'#3858CF',
      }
})