import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { BtnLg, BtnPre, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component";
import { registerSchema } from "@Helper/Schema";
import { updateUserDetails} from "@Request/Auth";
import { cleanup } from "@Store/Auth";
import SelectState from "./SelectState"
import SelectLga from "./SelectLga"

const Step2 = (props) => {
    const dispatch = useDispatch();
    const dismissKeyboard = () => Keyboard.dismiss();
  
    const [category, setCategory] = useState("");
    const [active, setActive] = useState("0");

    const selectUserType = id => {
        setActive(id);
    };


    const { user, errors, update } = useSelector((state) => state.auth);


    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: user.id };
        await dispatch(updateUserDetails(newValue))
    };

    const registerState = {
        phone: "",
        email: "",
        password: "",
        firstname: "",
        surname: "",
        store: "",
        c_password: ""
    };

    return (
            <ScrollView
                indicatorStyle="white"
                contentContainerStyle={[
                    styles.scrollContentContainer
                ]}>

                <View style={styles.bottomCover}>
                    <View style={styles.card}>
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioTitleText}>STORE</Text>
                        </View>
                        <View style={styles.formCover}>
                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={registerState}
                                        validationSchema={registerSchema}
                                        onSubmit={(values, actions) => {
                                            submit(values)
                                        }}
                                    >
                                        {props => (
                                            <View>
                                                <View>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STORE NAME</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="Kingsley"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                    </View>
                                                    {props.touched.firstname && props.errors.firstname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.firstname}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View>
                                                    <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.surname && props.errors.surname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STREET ADDRESS</Text>
                                                        </View>

                                                        <InputField
                                                            style={{ color: 'gray' }}
                                                            value={props.values.surname}
                                                            onBlur={props.handleBlur('surname')}
                                                            placeholder="James"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('surname', val)
                                                                props.setFieldTouched('surname', true, false);
                                                                setErrMsg("")
                                                            }}
                                                        />
                                                    </View>
                                                    {props.touched.surname && props.errors.surname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.surname}</Text>
                                                        </View>) : null}
                                                </View>
                                                <View>
                                                    <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>STATE</Text>
                                                        </View>

                                                        <SelectState />

                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View>
                                                    <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>LGA</Text>
                                                        </View>

                                                        <SelectLga />

                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                            </View>
                                        )}

                                    </FormikValidator>
                                </View>

                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                    <View style={styles.btnStep2Cover}>
                        <BtnPre title="Previous" onPress={props.handleSubmit} style={styles.submitStep3} stylea={styles.angleImg} styles={styles.preText} />
                        <BtnLg title="Next" onPress={props.handleSubmit} style={styles.submitStep2} stylea={styles.angleImg} styles={styles.preText1} />
                    </View>
                </View>
            </ScrollView>
    )
};

export default Step2;