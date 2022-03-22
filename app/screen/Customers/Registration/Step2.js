import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { BtnLg, BtnPre, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component";
import { addStoreSchema } from "@Helper/Schema";
import { updateUserDetails } from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import SelectState from "./SelectState"
import SelectLga from "./SelectLga"

const Step2 = (props) => {
    const dispatch = useDispatch();
    const dismissKeyboard = () => Keyboard.dismiss();
    const registerState2 = props.details;
    const [state_id, setState_id] = useState({});


    const { user, errors, update } = useSelector((state) => state.auth);
    const { states } = useSelector((state) => state.state);

    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: user.id };
        await dispatch(updateUserDetails(newValue))
    };

    return (
        <ScrollView
            indicatorStyle="white"
            contentContainerStyle={[
                styles.scrollContentContainer
            ]}
            horizontal={true}
        >

            <View style={styles.bottomCover}>
                <View style={styles.card}>
                    <View style={styles.bioTitleCover}>
                        <Text style={styles.bioTitleText}>STORE</Text>
                    </View>
                    <View style={styles.formCover}>
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>
                            <View>

                                <FormikValidator
                                    initialValues={registerState2}
                                    validationSchema={addStoreSchema}
                                    onSubmit={(values, actions) => {
                                        submit(values)
                                    }}
                                >
                                    {props => (
                                        <View>
                                            <View>
                                                <View style={[styles.registerInputHolder, props.touched.name && props.errors.name ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>STORE NAME</Text>
                                                    </View>

                                                    <InputField
                                                        style={styles.label4}
                                                        value={props.values.name}
                                                        onBlur={props.handleBlur('name')}
                                                        placeholder="Kingsley"
                                                        placeholderTextColor="#757575"
                                                        keyboardType="default"
                                                        onChangeText={(val) => {
                                                            props.setFieldValue('name', val)
                                                            props.setFieldTouched('name', true, false);
                                                            setErrMsg("")
                                                        }}
                                                    />
                                                </View>
                                                {props.touched.name && props.errors.name ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.name}</Text>
                                                    </View>) : null}
                                            </View>

                                            <View>
                                                <View style={[styles.inputHolderTetArea, props.touched.address && props.errors.address ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>STREET ADDRESS</Text>
                                                    </View>

                                                    <InputField
                                                        style={styles.label4}
                                                        value={props.values.address}
                                                        onBlur={props.handleBlur('address')}
                                                        placeholder="James"
                                                        placeholderTextColor="#757575"
                                                        keyboardType="default"
                                                        onChangeText={(val) => {
                                                            props.setFieldValue('address', val)
                                                            props.setFieldTouched('address', true, false);
                                                        }}
                                                        numberOfLines={3}
                                                        multiline
                                                    />
                                                </View>
                                                {props.touched.address && props.errors.address ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.address}</Text>
                                                    </View>) : null}
                                            </View>
                                            <View>
                                                <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.state_id && props.errors.state_id ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>State</Text>
                                                    </View>
                                                    {states.length ?

                                                        <SelectState onSelect={setState_id} props={props} />
                                                        : <Text style={styles.loadingLabel}>Loading....</Text>}

                                                </View>
                                                {props.touched.state_id && props.errors.state_id ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.state_id}</Text>
                                                    </View>) : null}

                                            </View>

                                            <View >
                                                <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.lga_id && props.errors.lga_id ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>LGA</Text>
                                                    </View>

                                                    {state_id?.lgas ?
                                                        <SelectLga data={state_id?.lgas} props={props} />
                                                        : <Text style={styles.loadingLabel}>Loading....</Text>}

                                                </View>
                                                {props.touched.lga_id && props.errors.lga_id ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.lga_id}</Text>
                                                    </View>) : null}

                                            </View>

                                            <View style={styles.btnStep2Cover}>
                                                <BtnPre title="Previous" onPress={props.handleSubmit} style={styles.submitStep3} stylea={styles.angleImg} styles={styles.preText} />
                                                <BtnLg title="Next" onPress={props.handleSubmit} style={styles.submitStep2} stylea={styles.angleImg} styles={styles.preText1} />
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
    )
};

export default Step2;