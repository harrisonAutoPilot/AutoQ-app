import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";

import styles from "./style";
import { ContinueBtn, FormikValidator } from "@Component2";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addStoreSchemaImg } from "@Helper/Schema";

const Step3 = (props) => {
    const dismissKeyboard = () => Keyboard.dismiss();

    const registerState = props.details;
    const { storePhotoOne, storePhotoTwo, licenseImg, submit, redirect, bottomSheetRegConfirm } = props
    const [savedImgOne, setSavedImgOne] = useState([])




const Card = ({ bottom,icon, title, imgCount, onPressIn}) => (
    <TouchableOpacity onPressIn={onPressIn}>
    <View style={styles.imgCardCover}>
    <View style={styles.leftCover}>
       <Icon name={icon} size={20} />
       <View>
       <Text style={styles.pharmaText}>{title}</Text>
        <Text style={styles.addText}>Add {title}</Text>
     </View>
    </View>
    <View style={styles.rightCover}>
       
    {
        imgCount.length > 0 ?
        <View style={styles.savedCover}>
        <Text style={styles.savedText}>saved</Text>
        </View>
        :
        null
    }
       {
        bottom === 'true' ?
        <Icon name="chevron-right" size={24} />
        :
        null
       }
     
      
    </View>
    </View>
       
    <View  style={styles.bottomLine}/>
    </TouchableOpacity>

)

    return (
        <ScrollView
         contentContainerStyle={[
             styles.scrollContentContainer
         ]}
     >
        <View style={styles.container}>
           

                <View >
                    <View >
                        <View style={styles.bioTitleCover}>
                            <Text style={styles.bioTitleText}>Document Verification</Text>
                        </View>
                        <View >
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
                                                <ScrollView
                                                indicatorStyle="white"
                                                contentContainerStyle={[
                                                    styles.scrollContentContainer,
                                                ]}>
                                     
                                           
                                                    <View style={[styles.registerInputHolder, props.touched.images && props.errors.images ? styles.inputErrHolder : null]}>
                                                       

                                                      <Card
                                                        title="Pharmacist License"
                                                        imgCount={storePhotoOne}
                                                        icon='insert-drive-file'
                                                        bottom={false}
                                                        onPressIn={() => {
                                                            licenseImg(1, props)
                                                            props.setFieldTouched('images', true, false);

                                                        }}
                                                        />
                                                        <Card
                                                        title="Store Images"
                                                        imgCount={storePhotoTwo}
                                                        icon='photo-library'
                                                        bottom={true}
                                                        onPressIn={() => {
                                                            licenseImg(2, props)
                                                            props.setFieldTouched('images2', true, false);

                                                        }}
                                                        />


                                        </View> 
                                             </ScrollView>
                                             <View style={styles.btnStep3Cover}>
                                                {/* <BtnPre title="Previous" onPress={redirect} style={styles.submitStep3} stylea={styles.angleImg} styles={styles.preText} /> */}
                                                <ContinueBtn
                                                    title="Next"
                                                    onPress={props.handleSubmit} 
                                                    backgroundColor="#3353CB"
                                                    color="#fff"   
                                                    />
                                            </View>
                                            </View>
                                        )}

                                    </FormikValidator>
                                </View>

                            </TouchableWithoutFeedback>

                        </View>

                    </View>

                </View>
               
          
        </View>
        </ScrollView>
    )
};

export default Step3;