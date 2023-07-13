import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image, FlatList } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { InputField, FormikValidator, OnboardinBtn,ContinueBtn, SuccessMsgBottom} from "@Component2";
import { registerSchema } from "@Helper2/Schema";
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import CountryCodeDropdown from '@Screen2/login/phoneNumber/CountryCodeDropdown';
import { countryCodeList, } from "@Request2/Auth";
import { cleanCountryCodeStatus } from "@Store2/Auth";
import PaymentOption from "@Screen2/PaymentOption"
import { getPaymentOptions } from "@Request/paymentOptions";
import data from "./data";
import data2 from "./data2";

const Step1 = (props) => {
    const dispatch = useDispatch();
    const dismissKeyboard = () => Keyboard.dismiss();
    const { countryCodeStatus, countryCodeData} = useSelector((state) => state.auth);
    const [active, setActive] = useState("");
    const [userType, setUserType] = useState("")
    const [payment, setPayment] = useState("Select Payment")
    const [paymentId, setPaymentId] = useState()
    const [showPaymentOption, setShowPaymentOption] = useState(false);
     
    const [countryCode, setCountryCode] = useState(null);

    const offset = useSharedValue(0);

    const [selected, setSelected] = useState(null);

    const [successMsg, setSuccessMsg] = useState(null);
  
    const [errMsg, setErrMsg] = useState(null);
  
    const [loader, setLoader] = useState(false);

    const { errors, options } = useSelector((state) => state.paymentOptions);
  
    const [add] = useState("+");
  
    const [getProps, setProps] = useState(null);
  
    const [propsname, setPropsName] = useState(null);
    const registerState = props.details;
    const editable = props.active;
    const submit = props.submit
    // const type = props.user_details?.user_type;
    const type = "";
    const credit = props?.user_details?.credit_option;
    // const keys = props.keys;
    const keys = 2;

    useEffect(() => {
        dispatch(getPaymentOptions())
      }, []);

      console.log("the options", options)


    const { pendingStatus } = useSelector((state) => state.store);


    console.log("the types", type)

    useEffect(() => {
        if (type) {
            setUserType(type)
        };
    }, [type]);

    useEffect(() => {
        if (credit?.name) {
            setPayment(credit.name)
        };
    }, [credit]);

    const selectUserType = (id, name) => {
        console.log("the return", id, name);
        setActive(id);
        setUserType(name)
        bounce()
    };

    changeOption = () => {
        setShowPaymentOption(true)
    }

    const selectCategory = (id) => {

        setSelected(id);

        bounce()


    };

    const selectType = (id) => {

        setUserType(id);

        bounce()


    };



    const bounce = () => {

        offset.value = withSpring(0.1, {}, (finished) => {
            if (finished) {
                offset.value = withSpring(0)
            }

        });
    }


    console.log("the select", selected)

      
    const bottomSheetCode = useRef(null);
  
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withSpring(offset.value * 255),
                },
            ],
        };
    });


  useEffect(() => {
    if(countryCodeStatus === "failed"){
  
        setErrMsg(errors.msg);
        setLoader(false)
        wait(5000).then(() => {
            setSuccessMsg(null)
              setErrMsg(null)
            })

    }

    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
  };
    
  
  },[countryCodeStatus])
  
  
  const showDropDownBottomSheet = async (prop, name) => {
  
    setProps(prop);
  
    setPropsName(name);
  
    bottomSheetCode.current?.present();
  
    if (countryCodeStatus !== "success") {
  
         dispatch(countryCodeList());
  
    }
  
  };


  const RenderItem = ({ item }) => {

    return (
        <Animated.View
            style={item.id == selected && animatedStyles}
        >
            <TouchableOpacity
                style={[styles.renderItemContainer,
            active === item.id && styles.activeRenderItemContainer]}
                onPress={() => { selectUserType(item.id, item.title.toLowerCase());}}>

                <View style={styles.categoryTitleView}>
                    <Text style={styles.categoryTitle}>{item.title}</Text>

                    { active === item.id &&

                        <Text style={styles.categoryDesc}>{item.desc}</Text>
                    }
                </View>

                <View>
                    {
                        active !== item.id
                            ?
                            <Icon name="radio-button-off" size={22} color="#C2C5DD" />
                            :
                            <Icon name="radio-button-on" size={22} color="#3353CB" />
                    }

                </View>
            </TouchableOpacity>
        </Animated.View>

    )

}

const RenderType = ({ item }) => {

    return (
        <Animated.View
            style={item.id == userType && animatedStyles}
        >
            <TouchableOpacity
                style={[styles.renderItemContainer,
                    active === item.id || userType?.toLowerCase() === item.title.toLowerCase() && styles.activeRenderItemContainer]}
                onPress={() => selectType(item.id)}>

                <View style={styles.categoryTitleView}>
                    <Text style={styles.categoryTitle}>{item.title}</Text>

                    {active === item.id || userType?.toLowerCase() === item.title.toLowerCase() &&

                        <Text style={styles.categoryDesc}>{item.desc}</Text>
                    }
                </View>

                <View>
                    {
                        active !== item.id || userType?.toLowerCase() === item.title.toLowerCase()
                            ?
                            <Icon name="radio-button-off" size={22} color="#C2C5DD" />
                            :
                            <Icon name="radio-button-on" size={22} color="#3353CB" />
                    }

                </View>
            </TouchableOpacity>
        </Animated.View>

    )

}


  const closeDropDownBottomSheet = () => {
  
    if(countryCodeStatus === "failed"){
  
        dispatch(cleanCountryCodeStatus());
  
    };
  
    bottomSheetCode.current?.close();
  }

    const RenderItem2 = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.optionView, active === item.id || userType?.toLowerCase() === item.title.toLowerCase() ? styles.optionViewBetween1 : styles.optionViewBetween2]} key={item.id}
                onPress={() => { selectUserType(item.id, item.title.toLowerCase()); }}>
                <View style={active === item.id || userType?.toLowerCase() === item.title.toLowerCase() ? styles.optionIconView : styles.optionIconView2}>
                    {userType?.toLowerCase() === item.title.toLowerCase() || active === item.id ?
                        <View style={styles.iconCircle} >
                            <Icon name="lens" size={12} color="#469D00" style={styles.icon} />
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
            horizontal={false} 
            showsVerticalScrollIndicator={false}
            bounces={false}
        >
            <ScrollView
                horizontal={true}
                bounces={false}
            >

                <View style={styles.bottomCover1}>
                    <View >
                       
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
                                                   <View >

                                                    <View style={styles.formInputFieldFlex}>

                                                        <View style={styles.inputContainer}>
                                                            <InputField
                                                                title="First Name"
                                                                placeholder="John"
                                                                placeholderTextColor="#757575"
                                                                name="firstname"
                                                                {...props}
                                                                width="100%"
                                                            />
                                                        </View>

                                                        <View style={styles.inputContainer}>
                                                            <InputField
                                                                title="Last Name"
                                                                placeholder="Sulaimon"
                                                                placeholderTextColor="#757575"
                                                                name="surname"
                                                                {...props}
                                                                width="100%"
                                                            />
                                                        </View>
                                                        <View style={styles.inputFieldView}>
                                                        <View style={styles.codeCover}>
                                                            <Text style={styles.fadeText}>+234</Text>
                                                        </View>
                                                        <InputField
                                                            title="Phone"
                                                            placeholder="8094XXXXXX"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="number-pad"
                                                            name="phone"
                                                            {...props}
                                                            width="65%"

                                                        />

                                                        </View>

                                                        <View style={styles.inputContainer}>
                                                            <InputField
                                                                title="Email"
                                                                placeholder="johnsulaimon@gmail.com"
                                                                placeholderTextColor="#757575"
                                                                name="email"
                                                                {...props}
                                                                width="100%"
                                                            />
                                                        </View>
                                                    </View>


                                                    <View style={styles.listContainer}>
                                                    <View style={styles.storeCover}>
                                                        <Text style={styles.bioTitleText}>SELECT STORE TYPE</Text>
                                                    </View>
                                                    <FlatList
                                                        data={data}
                                                        renderItem={RenderItem}
                                                        keyExtractor={item => item.id}
                                                    />

                                                    </View>
                                                    {/* { userType && userType === "hospital" ?

                                                    <View style={styles.typeContainer}>
                                                    <View style={styles.storeCover}>
                                                        <Text style={styles.bioTitleText}>SELECT PAYMENT TYPE</Text>
                                                    </View>
                                                    <FlatList
                                                        data={data2}
                                                        renderItem={RenderType}
                                                        keyExtractor={item => item.id}
                                                    />

                                                    </View>
                                                    :
                                                    null
                                                    } */}
                                                    <View style={styles.paymentInputCover}>
                                                                    {payment === "Select Payment" ?
                                                                       <PaymentOption
                                                                       id={credit?.id ? { id: credit.id, name: credit.name } : undefined}
                                                                       visibleRetrieve={showPaymentOption}
                                                                       returnBack={(option, id) => {
                                                                           setShowPaymentOption(false);
                                                                           setPayment(option)
                                                                           setPaymentId(id)
                                                                       }}
                                                                       closeOption={() => setShowPaymentOption(false)}
                                                                       onInputChanged={() => setPayment(payment)}
                                                                   />
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
                                                    <View style={styles.submitBtnContainer}>
                                                    {keys === 1 && pendingStatus === "success"
                                                    ?

                                                    <View style={styles.btnCover}>
                                                         <ContinueBtn
                                                        title="Next"
                                                        onPress={userType ? props.handleSubmit : null}
                                                        backgroundColor="#3353CB"
                                                        color="#fff"
                                                       
                                                    />
                                                        {/* <BtnLg title="Next" onPress={userType ? props.handleSubmit : null} style={styles.submit} stylea={styles.angleImg} /> */}
                                                    </View> :
                                                    userType === "hospital" && payment === "Select Payment" ?
                                                        <View style={styles.btnCover} />
                                                        :
                                                        keys === 2 ?
                                                            <View style={styles.btnCover}>
                                                                <ContinueBtn
                                                                    title="Next"
                                                                    onPress={userType ? props.handleSubmit : null} 
                                                                    backgroundColor="#3353CB"
                                                                    color="#fff"
                                                                   
                                                                />
                                                            </View> : <View style={styles.btnCover}>
                                                                <ContinueBtn
                                                                    title="Next"
                                                                    backgroundColor="#3353CB"
                                                                    color="#fff"
                                                                    disabled
                                                                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                                                />
                                                                
                                                            </View>
                                                }
                                                   
                                                    </View>
                                                    </View>





                                                {/* <View style={styles.card1}>
                                                    <View >
                                                        <Text style={styles.bioTitleText}>USER TYPE</Text>
                                                    </View>
                                                    <View style={styles.flatCover}>

                                                        <FlatList
                                                            data={data}
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


                                                </View> */}
                                               

                                            </View>
                                        )}

                                    </FormikValidator>
                                </View>

                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                </View>

            </ScrollView>


           
            {/* <CountryCodeBottomSheet
            bottomSheetRef={bottomSheetCode}
            closeBottomSheet={closeDropDownBottomSheet}
            data={countryCodeData}
            name="Select Country Code"
            status={countryCodeStatus}
            keys={1}
            itemKey="dial_code"
            err={errMsg}
            getProps={getProps}
            propsname={propsname}

        /> */}
        </ScrollView>
    )
};

export default Step1;