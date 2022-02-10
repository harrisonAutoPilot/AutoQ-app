import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    mainBody: {
        paddingTop: 24,
        backgroundColor: "#f3f4f5",
        height: "100%",
        paddingHorizontal: 16
    },

    listContainer: {
        width: wp('42%'),
        height: wp('40%'),
        borderRadius: 10,
        marginTop: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#f3f4f5',
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        marginBottom: 20
    },
    column: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
    },
    listContainerImageView: {
        height: 115,
        marginBottom: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    listContainerTextView: {
        height: 50,
        marginBottom: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    title: {
        color: "#424242",
    },
    elevation: {
        elevation: 0.6,
        shadowColor: '#52006A',
    },
    bookcardFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
    }

})