import { StyleSheet} from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
 } from 'react-native-responsive-screen';

 
const styles = StyleSheet.create({
    btn:{
        width:wp('85%'),
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        alignItems:'center',
        textAlign:'center',
        marginLeft:wp('5%'),
        outline:'none',
    },
    btnText:{
        fontFamily:"Urbanist-SemiBold",
        fontSize: 16,
        lineHeight: 24,
        color: "#fff",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    btnLg:{
        // marginTop: Dimensions.get("window").height / 21,
        width:wp('85%'),
        flexDirection:'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "red",
        borderRadius: 100,
        alignItems:'center',
        textAlign:'center',
        marginLeft:wp('5%'),
        outline:'none',
      },
    


});

export default styles;