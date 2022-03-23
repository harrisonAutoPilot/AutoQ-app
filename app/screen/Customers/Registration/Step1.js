import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import FIcon from "react-native-vector-icons/MaterialIcons";

import styles from "./style";
import { BtnLg, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component";
import { registerSchema } from "@Helper/Schema";
import data2 from "./data2";

const Step1 = (props) => {
    const dismissKeyboard = () => Keyboard.dismiss();
    const [category, setCategory] = useState("");
    const [active, setActive] = useState("");
    const registerState = props.details;
    const editable = props.active;
    const submit = props.submit
    const type = props.user_details?.user_type;

    const selectUserType = id => {
        setActive(id)
    };


    const RenderItem = ({ item }) => {
        return (
            <View style={[styles.optionView, active === item.id ? styles.optionViewBetween1 : styles.optionViewBetween2]} key={item.id}>
                <View style={active === item.id ? styles.optionIconView : styles.optionIconView2}>
                    {type?.toLowerCase() === item.title.toLowerCase() || active === item.id ?
                        <TouchableOpacity style={styles.iconCircle} onPress={ () => { selectUserType(item.id); setCategory(item.title); }}>
                            <FIcon name="lens" size={12} color="#469D00" style={styles.icon} />
                        </TouchableOpacity >
                        :
                        <TouchableOpacity style={styles.iconCircle2} onPress={ () => { selectUserType(item.id); setCategory(item.title); }}>

                        </TouchableOpacity>
                    }
                </View>
                {active === item.id || type?.toLowerCase() === item.title.toLowerCase() ?
                    <View style={styles.optionTextViewNew}>
                        <Text style={styles.optionText}>{item.title}</Text>
                        <View style={styles.optionMiniTextView}>
                            <Text style={styles.onboardSubTitle1}>{item.desc}</Text>
                        </View>
                    </View>
                    :
                    <View style={styles.optionTextView} >
                        <Text style={styles.optionText}>{item.title}</Text>
                        <View style={styles.optionMiniTextView}>
                            <Text style={styles.onboardSubTitle1}>{item.desc}</Text>
                        </View>
                    </View>}
            </View>
        )
    };

    return (
        <ScrollView
            indicatorStyle="white"
            contentContainerStyle={[
                styles.scrollContentContainer
            ]}
            horizontal={false} showsVerticalScrollIndicator={false}
        >
            <ScrollView
                horizontal={true}
            >

                <View style={styles.bottomCover}>
                    <View style={styles.card}>
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioTitleText}>BIO DATA</Text>
                        </View>
                        <View style={styles.formCover}>
                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={registerState}
                                        validationSchema={registerSchema}
                                        onSubmit={(values, actions) => {
                                            submit(values, active)
                                        }}
                                    >
                                        {props => (
                                            <View>
                                                <View>
                                                    <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>FIRST NAME</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.label4}
                                                            value={props.values.firstname}
                                                            onBlur={props.handleBlur('firstname')}
                                                            placeholder="Kingsley"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('firstname', val)
                                                                props.setFieldTouched('firstname', true, false);
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
                                                            <Text style={styles.label}>SURNAME</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.label4}
                                                            value={props.values.surname}
                                                            onBlur={props.handleBlur('surname')}
                                                            placeholder="James"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('surname', val)
                                                                props.setFieldTouched('surname', true, false);
                                                            }}
                                                            editable={editable}
                                                        />
                                                    </View>
                                                    {props.touched.surname && props.errors.surname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.surname}</Text>
                                                        </View>) : null}
                                                </View>
                                                <View>
                                                    <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>PHONE</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.innerLabelPhone}
                                                            value={props.values.phone}
                                                            onBlur={props.handleBlur('phone')}
                                                            placeholder="234809XXXXXXX"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('phone', val)
                                                                props.setFieldTouched('phone', true, false);
                                                            }}
                                                            editable={editable}
                                                        />
                                                        <View style={styles.flag}>
                                                            <Image style={styles.nigImg} source={require("@Assets/image/nigeria.png")} />
                                                        </View>
                                                    </View>
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>
                                                <View style={styles.card1}>
                                                    <View style={styles.bioTitleCover}>
                                                        <Text style={styles.bioTitleText}>USER TYPE</Text>
                                                    </View>
                                                    <View style={styles.flatCover}>

                                                        <FlatList
                                                            data={data2}
                                                            renderItem={RenderItem}
                                                            keyExtractor={item => item.id}
                                                        />

                                                    </View>

                                                </View>
                                                <View style={styles.btnCover}>
                                                    <BtnLg title="Next" onPress={active ? props.handleSubmit : null} style={styles.submit} stylea={styles.angleImg} />
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
        </ScrollView>
    )
};

export default Step1;