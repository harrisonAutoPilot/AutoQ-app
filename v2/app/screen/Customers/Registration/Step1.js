import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';

import styles from './style';
import {InputField, FormikValidator, ContinueBtn} from '@Component2';
import {registerSchema} from '@Helper2/Schema';
import {cleanCountryCodeStatus} from '@Store2/Auth';
import PaymentOption from '@Screen2/PaymentOption';
import {getPaymentOptions} from '@Request/paymentOptions';
import data from './data';

const Step1 = props => {
  const dispatch = useDispatch();
  const dismissKeyboard = () => Keyboard.dismiss();
  const {countryCodeStatus, countryCodeData} = useSelector(state => state.auth);
  const [active, setActive] = useState('');
  const [userType, setUserType] = useState('');
  const [payment, setPayment] = useState('Select Payment');
  const [paymentId, setPaymentId] = useState();
  const [showPaymentOption, setShowPaymentOption] = useState(false);

  const offset = useSharedValue(0);

  const [selected, setSelected] = useState(null);

  const [successMsg, setSuccessMsg] = useState(null);

  const [errMsg, setErrMsg] = useState(null);

  const [loader, setLoader] = useState(false);

  const {errors, options} = useSelector(state => state.paymentOptions);

  const [getProps, setProps] = useState(null);

  const [propsname, setPropsName] = useState(null);
  const registerState = props.details;
  const editable = props.active;
  const submit = props.submit;
  // const type = props.user_details?.user_type;
  const type = '';
  const credit = props?.user_details?.credit_option;
  // const keys = props.keys;
  const keys = 2;

  useEffect(() => {
    dispatch(getPaymentOptions());
  }, []);

  const {pendingStatus} = useSelector(state => state.store);

  useEffect(() => {
    if (type) {
      setUserType(type);
    }
  }, [type]);

  useEffect(() => {
    if (credit?.name) {
      setPayment(credit.name);
    }
  }, [credit]);

  const selectUserType = (id, name) => {
    console.log('the return', id, name);
    setActive(id);
    setUserType(name);
    bounce();
  };

  changeOption = () => {
    setShowPaymentOption(true);
  };

  const bounce = () => {
    offset.value = withSpring(0.1, {}, finished => {
      if (finished) {
        offset.value = withSpring(0);
      }
    });
  };


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
    if (countryCodeStatus === 'failed') {
      setErrMsg(errors.msg);
      setLoader(false);
      wait(5000).then(() => {
        setSuccessMsg(null);
        setErrMsg(null);
      });
    }

    const wait = timeout => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    };
  }, [countryCodeStatus]);

  const RenderItem = ({item}) => {
    return (
      <Animated.View style={item.id == selected && animatedStyles}>
        <TouchableOpacity
          style={[
            styles.renderItemContainer,
            active === item.id && styles.activeRenderItemContainer,
          ]}
          onPress={() => {
            selectUserType(item.id, item.title.toLowerCase());
          }}>
          <View style={styles.categoryTitleView}>
            <Text style={styles.categoryTitle}>{item.title}</Text>

            {active === item.id && (
              <Text style={styles.categoryDesc}>{item.desc}</Text>
            )}
          </View>

          <View>
            {active !== item.id ? (
              <Icon name="radio-button-off" size={22} color="#C2C5DD" />
            ) : (
              <Icon name="radio-button-on" size={22} color="#3353CB" />
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <ScrollView
      indicatorStyle="white"
      contentContainerStyle={[styles.scrollContentContainer]}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <ScrollView horizontal={true} bounces={false}>
        <View style={styles.bottomCover1}>
          <View>
            <View style={styles.formCover}>
              <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View>
                  <FormikValidator
                    initialValues={registerState}
                    validationSchema={registerSchema}
                    onSubmit={(values, actions) => {
                      submit(values, userType, payment);
                    }}>
                    {props => (
                      <View>
                        <View>
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
                              <Text style={styles.bioTitleText}>
                                SELECT STORE TYPE
                              </Text>
                            </View>
                            <FlatList
                              data={data}
                              renderItem={RenderItem}
                              keyExtractor={item => item.id}
                            />
                          </View>

                          <View style={styles.listContainerNew}>
                            {userType && userType === 'hospital' ? (
                              <>
                                <View style={styles.storeCover}>
                                  <Text style={styles.bioTitleText}>
                                    SELECT PAYMENT TYPE
                                  </Text>
                                </View>
                                <PaymentOption
                                  id={
                                    credit?.id
                                      ? {id: credit.id, name: credit.name}
                                      : undefined
                                  }
                                  visibleRetrieve={showPaymentOption}
                                  returnBack={(option, id) => {
                                    console.log('the options', option);
                                    setShowPaymentOption(false);
                                    setPayment(option);
                                    setPaymentId(id);
                                  }}
                                  closeOption={() =>
                                    setShowPaymentOption(false)
                                  }
                                  onInputChanged={() => setPayment(payment)}
                                />
                              </>
                            ) : null}
                          </View>
                          <View style={styles.submitBtnContainer}>
                          
                              <View style={styles.btnCover}>
                                {userType === '' || userType === 'hospital' && payment === 'Select Payment' ?
                                 <View style={styles.btnCover}>
                                  <ContinueBtn
                                    title="Next"
                                    backgroundColor="#3353CB"
                                    color="#fff"
                                    disabled
                                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                  />
                               </View>
                                    :
                                  <ContinueBtn
                                   title="Next"
                                   onPress={userType ? props.handleSubmit : null}
                                   backgroundColor="#3353CB"
                                   color="#fff"
                                 />
                                }
                              </View>
                            
                          </View>
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
  );
};

export default Step1;
