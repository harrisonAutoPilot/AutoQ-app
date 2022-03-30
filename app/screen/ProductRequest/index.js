import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { Btn, FormikValidator, InputField } from "@Component";
import { productSchema } from "@Helper/schema";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';

import styles from "./style";
import globalStyles from "@Helper/GlobalStyles";
import {COHeader as Header, SuccessMsgViewTwo} from "@Component";
import { productRequest } from "@Request/ProductRequest";
import { cleanup } from "@Store/ProductRequest";
import Loader from "@Screen/Loader";

const ProductRequest = (props) => {
  const dispatch = useDispatch();
  const productState = {
    description: ""
  };

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const { status, errors, request } = useSelector((state) => state.productRequest);

  const goBack = () => props.navigation.navigate("Home");

  const toastConfig = {

    error: () =>
    (
      <View style={[globalStyles.errMainView3]}>
        <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
      </View>
    ),
    tomatoToast: () => (
      <SuccessMsgViewTwo title={successMsg} />
    )
  };


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const refreshView = useCallback((msg, suc) => {
    wait(1000).then(() => {
      setLoader(false)
      if (msg) {
        setErrMsg(msg);
        Toast.show({
          type: 'error',
          visibilityTime: 5000,
          autoHide: true,
          position: 'top',
          topOffset: 0
        })

      } else {
        setSuccessMsg(suc);
        Toast.show({
          type: 'tomatoToast',
          visibilityTime: 5000,
          autoHide: true,
          position: 'top',
          topOffset: 0
        })
      }
    })

    wait(4000).then(() => { dispatch(cleanup()); })
  }, []);

  useEffect(() => {
    return () => dispatch(cleanup())
  }, [])

  useEffect(() => {
    if (status === "failed" && props.navigation.isFocused()) {
      setSuccessMsg("");
      refreshView(errors?.msg, "")
    } else if (status === "success" && props.navigation.isFocused()) {
      setErrMsg("");
      refreshView("", "Product Request Created");
    }
  }, [status]);

  const dismissKeyboard = () => Keyboard.dismiss();

  const submit = (data) => {
    setLoader(true)
    dispatch(productRequest(data))
  }


  return (
    <View style={styles.main}>
      <Header title="Product Request" onPress={goBack} styleView={styles.body} statusBar="#fff" />

      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.infoContainer}>
          <Image source={require("@Assets/image/request/3.jpg")} style={styles.customerImg} />

        </View>

        <View style={styles.bottomCover} >

          <View style={styles.textCover}>
            <Text style={styles.bgText}>Kindly register your request</Text>
            <Text style={styles.smText}>We will make available within 48 hours</Text>
          </View>

          {errMsg ? <Toast config={toastConfig} /> : null}
            {successMsg ? <Toast config={toastConfig} /> : null}

          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View>

              <FormikValidator
                initialValues={productState}
                validationSchema={productSchema}
                onSubmit={(values, actions) => {
                  submit(values)
                }}
              >
                {props => (
                  <View style={styles.inputContainer}>
                    <View style={[styles.registerInputHolder, props.touched.description && props.errors.description ? styles.inputErrHolder : null]}>
                      <View style={styles.labelView}>
                        <Text style={styles.label}>Request Products</Text>
                      </View>

                      <InputField
                        style={styles.productTitle}
                        value={props.values.description}
                        onBlur={props.handleBlur('description')}
                        placeholder="Tell us what product you need ...."
                        placeholderTextColor="#757575"
                        keyboardType="default"
                        onChangeText={(val) => {
                          props.setFieldValue('description', val)
                          props.setFieldTouched('description', true, false);
                          setErrMsg("")
                        }}
                        numberOfLines={5}
                        multiline
                      />
                    </View>

                    <Btn title="Request" onPress={props.handleSubmit} style={styles.submit} />

                 
                  </View>
                )}

              </FormikValidator>
            </View>

          </TouchableWithoutFeedback>
         
                
        </View>
        
      </ScrollView>
    
      <Loader isVisible={loader} />
    </View>
  )
};

export default ProductRequest;