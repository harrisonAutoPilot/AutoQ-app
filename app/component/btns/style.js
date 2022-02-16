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
        fontFamily:"Urbanist-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#fff",
        letterSpacing: 0.1,
        fontWeight: "400",
        textAlign: "center"
    },
    


});

export default styles;