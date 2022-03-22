import React, { useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";

import styles from "./style";
import { BtnLg, BtnPre, FormikValidator, InputField } from "@Component/index";
import { addStoreSchemaImg } from "@Helper/Schema";
import RegConfirm from "./RegConfirmOverlay"

const Step3 = (props) => {
    const dismissKeyboard = () => Keyboard.dismiss();

    const registerState = props.details;
    const { storePhotoOne, storePhotoTwo, licenseImg, submit, redirect, bottomSheetRegConfirm } = props

    const closeSheet = () => {
        bottomSheetRegConfirm.current.close();
    };


    return (
        <View style={styles.container}>
            <ScrollView
                indicatorStyle="white"
                contentContainerStyle={[
                    styles.scrollContentContainer,
                ]}>

                <View style={styles.bottomCover}>
                    <View style={styles.card}>
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioTitleText}>DOCUMENTATION</Text>
                        </View>
                        <View style={styles.formCover}>
                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={registerState}
                                        validationSchema={addStoreSchemaImg}
                                        onSubmit={(values, actions) => {
                                            submit(values)
                                        }}
                                    >
                                        {props => (
                                            <View>

                                                <View >
                                                    <View style={[styles.registerInputHolder, props.touched.images && props.errors.images ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>PHARMACIST LICENSE</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.label4}
                                                            value={storePhotoOne}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            onPressIn={() => {
                                                                licenseImg(1, props)
                                                                props.setFieldTouched('images', true, false);

                                                            }}
                                                        />
                                                        <TouchableOpacity onPress={() => licenseImg(1, props)}>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {props.touched.images && props.errors.images ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.images}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View >
                                                    <View style={[styles.registerInputHolder, props.touched.images2 && props.errors.images2 ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STORE PHOTO</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.label4}
                                                            value={storePhotoTwo}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            onPressIn={() => {
                                                                licenseImg(2, props)
                                                                props.setFieldTouched('images2', true, false);

                                                            }}
                                                        />
                                                        <TouchableOpacity  onPress={() => licenseImg(2, props)}>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {props.touched.images2 && props.errors.images2 ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.images2}</Text>
                                                        </View>) : null}

                                                </View>

                                                <View style={styles.btnStep3Cover}>
                                                    <BtnPre title="Previous" onPress={redirect} style={styles.submitStep3} stylea={styles.angleImg} styles={styles.preText} />
                                                    <BtnLg title="Complete" onPress={props.handleSubmit} style={styles.submitStep2} stylea={styles.angleImg} styles={styles.preText1} />
                                                </View>

                                            </View>
                                        )}

                                    </FormikValidator>
                                </View>

                            </TouchableWithoutFeedback>

                        </View>

                    </View>

                </View>

            </ScrollView>

            <RegConfirm
                bottomSheetRegConfirm={bottomSheetRegConfirm}
                closeSheet={closeSheet}
            />
        </View>
    )
};

export default Step3;