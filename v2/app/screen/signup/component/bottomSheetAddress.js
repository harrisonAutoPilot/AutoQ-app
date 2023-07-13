import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from "react-native-config";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import Icon from "react-native-vector-icons/MaterialIcons";



import styles from "../style";



const FormStoreDetailsBottomSheet = (props) => {

    const { prop } = props;

    const CustomBackdrop = ({ animatedIndex, style }) => {
        // animated variables
        const containerAnimatedStyle = useAnimatedStyle(() => ({
            opacity: interpolate(
                animatedIndex.value,
                [0, 1],
                [0, 1],
                Extrapolate.CLAMP
            ),
        }));

        const containerStyle = useMemo(
            () => [
                style,
                {
                    backgroundColor: "rgba(0,0,0,0.6)"
                },
                containerAnimatedStyle,
            ],
            [style, containerAnimatedStyle]
        );

        return <Animated.View style={containerStyle} />;
    };


    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 350,
        easing: Easing.exp,
    });

    const close = () => {

        Keyboard.dismiss();

        props?.wait();
        
    }


    return (
        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheetRef}
                index={1}
                initialSnapIndex={1}
                snapPoints={['90%', "90%"]}
                style={styles.bottomSheetContainer}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                animateOnMount={true}
                keyboardBehavior={Platform.OS === "ios" ? "fillParent" : "fullscreen"}
                keyboardBlurBehavior="restore"
                enableHandlePanningGesture={false}
                draggable={false}
                handleIndicatorStyle={{ display: "none" }}
                enableContentPanningGesture={false}
            >
                <View style={styles.headerView}>
                    <TouchableOpacity
                        onPress={props.closeBottomSheet}
                        style={styles.headerCloseIcon}>
                        <Icon name="close" size={24} color="#1B1B1F" />
                    </TouchableOpacity>

                </View>

                <View style={styles.mainContainer}>
                    <KeyboardAvoidingView>

                        <View style={styles.container}>

                            <View style={styles.labelView}>
                                <Text style={[styles.label]}>Store Address</Text>
                            </View>
                            <GooglePlacesAutocomplete
                                nearbyPlacesAPI="GooglePlacesSearch"
                                debounce={400}
                                styles={{
                                    container: styles.googleContainer,
                                    textInput: styles.labelTitle,
                                    description: styles.labelTitle
                                }}
                                placeholder='Search Address'
                                onPress={(data, details = null) => {
                                    prop.setFieldTouched("store_address", true, false);
                                    prop.setFieldValue("store_address", details?.description);
                                    close();
                                }}
                                textInputProps={{
                                    onChangeText: (text) => {
                                        prop.setFieldValue("store_address", text);
                                    }
                                }}
                                query={{
                                    key: "AIzaSyDLDpaD54vnybCiA1y3Qym10e2G-i3_wiE",
                                    language: 'en',
                                }}
                                enablePoweredByContainer={false}
                                minLength={2}
                                listEmptyComponent={() => <View style={styles.notFoundView}>
                                    <Text style={[styles.labelTitle, { color: "#BA1A1A" }]}>Not Found</Text>
                                </View>}
                            />
                        </View>

                        <TouchableOpacity style={styles.addressNotFoundView} onPress={props.setAddressNotFound}>
                            <Text style={styles.labelTitle}>Address not found?</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </View>


            </BottomSheetModal>

        </BottomSheetModalProvider>

    )
};

export default FormStoreDetailsBottomSheet;