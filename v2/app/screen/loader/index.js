import React, {useEffect} from "react";
import { View, ActivityIndicator, useWindowDimensions, Platform, StatusBar } from "react-native";
import Modal from "react-native-modal";

import style from "./style";


const Loader = (props) => {

    const { width, height } = useWindowDimensions();

   useEffect(() => {

        if(props.isVisible){
            
            Platform.OS == "android" && StatusBar.setHidden(true);

        }else {

            StatusBar.setHidden(false);

        }
        

    },[props.isVisible])

    return (
        <Modal
            isVisible={props.isVisible}
            animationIn="slideInUp"
            animationInTiming={300}
            animationOut="slideOutDown"
            animationOutTiming={300}
            useNativeDriver={false}
            coverScreen={true}
            style={{ width, alignSelf: "center", margin:0 }}
            deviceHeight={height}
            customBackdrop={<View style={{ flex: 1, backgroundColor: "rgba(23, 27, 44, 0.94)" }} />}

        >

            <View style={style.loaderContainer}>

                <View style={style.loaderHolder}>

                    <ActivityIndicator size={ Platform.OS == "ios" ? 70 : 40} color="red" />

                </View>

            </View>
        </Modal>
    )
};

export default Loader;