import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image, FlatList } from "react-native";
import FIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";

import styles from "./style";
import { BtnLg, FormikValidator, InputField } from "@Component";
import { registerSchema } from "@Helper/Schema";
import PaymentOption from "@Screen/PaymentOption"
import data2 from "./data2";

const Step1 = (props) => {
    const dismissKeyboard = () => Keyboard.dismiss();
    const [active, setActive] = useState("");
    const [userType, setUserType] = useState("")
    const [payment, setPayment] = useState("Select Payment")
    const [paymentId, setPaymentId] = useState()
    const [showPaymentOption, setShowPaymentOption] = useState(false);
    const registerState = props.details;
    const editable = props.active;
    const submit = props.submit
    const type = props.user_details?.user_type;
    const keys = props.keys;

    const { pendingStatus } = useSelector((state) => state.store);

    useEffect(() => {
        if (type) {
            setUserType(type)

        };
    }, [type]);

    const selectUserType = (id, name) => {
        setActive(id);
        setUserType(name)
    };

    changeOption = () => {
        setShowPaymentOption(true)
    }

    const RenderItem = ({ item }) => {
        return (
            <TouchableOpacity 
            style={[styles.optionView, active === item.id || userType?.toLowerCase() === item.title.toLowerCase() ? styles.optionViewBetween1 : styles.optionViewBetween2]} key={item.id} 
            onPress={() => { selectUserType(item.id, item.title.toLowerCase()); }}>
                <View style={active === item.id || userType?.toLowerCase() === item.title.toLowerCase() ? styles.optionIconView : styles.optionIconView2}>
                    {userType?.toLowerCase() === item.title.toLowerCase() || active === item.id ?
                        <View style={styles.iconCircle} >
                            <FIcon name="lens" size={12} color="#469D00" style={styles.icon} />
                        </View >
                        :
                        <View style={styles.iconCircle2} />

                    }
                </View>
                {active === item.id || userType?.toLowerCase() === item.title.toLowerCase() ?
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
            </TouchableOpacity>
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
                                            submit(values, userType, paymentId)
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

                                                        />
                                                    </View>
                                                    {props.touched.surname && props.errors.surname ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.surname}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View>
                                                    <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.email && props.errors.email ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>EMAIL</Text>
                                                        </View>

                                                        <InputField
                                                            style={styles.label4}
                                                            value={props.values.email}
                                                            onBlur={props.handleBlur('email')}
                                                            placeholder="samwr@gmail.com"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="default"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('email', val)
                                                                props.setFieldTouched('email', true, false);
                                                            }}
                                                        // editable={editable}
                                                        />
                                                    </View>
                                                    {props.touched.email && props.errors.email ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.email}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View>
                                                    <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>PHONE</Text>
                                                        </View>

                                                        <InputField
                                                            style={!editable ? styles.innerLabelPhone : styles.innerLabelPhoneEnabled}
                                                            value={props.values.phone}
                                                            onBlur={props.handleBlur('phone')}
                                                            placeholder="234809XXXXXXX"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="number-pad"
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
                                                        {userType && userType === "hospital" ?
                                                            <View>
                                                                <View>
                                                                    <Text style={styles.paymentHeader}>PAYMENT METHOD</Text>
                                                                </View>
                                                                <View>
                                                                    <Text style={styles.paymentSmHeader}>Select a Preferred Payment</Text>
                                                                </View>
                                                                <View style={styles.paymentInputCover}>
                                                                    {payment === "Select Payment" ?
                                                                        <View style={styles.innerPaymentCover}>
                                                                            <Icon name="calendar" size={22} color="#424242" style={styles.calendarIcon} />
                                                                            <Text>{payment}</Text>
                                                                        </View>
                                                                        :
                                                                        <View style={styles.innerPaymentCover}>
                                                                            <FIcon name="check-circle-outline" size={22} color="#469D00" style={styles.calendarIcon} />
                                                                            <Text style={styles.paymentOptionText}>{payment}</Text>
                                                                        </View>
                                                                    }
                                                                    <TouchableOpacity onPress={changeOption}>
                                                                        <Text style={styles.changeStyle}>Change</Text>
                                                                    </TouchableOpacity>
                                                                </View>

                                                                <View style={styles.colorInfo}>
                                                                    <Icon name="info" size={22} color="#00319D" style={styles.iconInfo} />
                                                                    <Text style={styles.colorInfoText}>
                                                                        Exclusive for Hospitals Only. Make Orders and Select Preffered Payment Method.
                                                                    </Text>
                                                                </View>
                                                            </View>

                                                            :
                                                            null

                                                        }
                                                    </View>


                                                </View>
                                                {keys === 1 && pendingStatus === "success"
                                                    ?

                                                    <View style={styles.btnCover}>
                                                        <BtnLg title="Next" onPress={userType ? props.handleSubmit : null} style={styles.submit} stylea={styles.angleImg} />
                                                    </View> :
                                                    userType === "hospital" && payment === "Select Payment" ?
                                                        <View style={styles.btnCover} />
                                                        :
                                                        keys === 2 ?
                                                            <View style={styles.btnCover}>
                                                                <BtnLg title="Next" onPress={userType ? props.handleSubmit : null} style={styles.submit} stylea={styles.angleImg} />
                                                            </View> : <View style={styles.btnCover}>
                                                                <BtnLg title="Loading ..." style={styles.submit} stylea={styles.angleImg} />
                                                            </View>
                                                }

                                            </View>
                                        )}

                                    </FormikValidator>
                                </View>

                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                </View>

            </ScrollView>

            <PaymentOption
                 visibleRetrieve={showPaymentOption}
                 returnBack={(option, id) => {
                     setShowPaymentOption(false);
                     setPayment(option) 
                     setPaymentId(id) 
                 }}
                closeOption={() => setShowPaymentOption(false)}
                onInputChanged={() => setPayment(payment)}
            />
        </ScrollView>
    )
};

export default Step1;