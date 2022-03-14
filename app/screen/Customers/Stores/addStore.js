import React, { useState, useCallback, useEffect,useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions,SafeAreaView, Keyboard, ScrollView, Image, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import { AuthBtn as Btn, BtnPre, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import { profileSchema, registerSchema } from "@Helper/Schema";
import FIcon from "react-native-vector-icons/FontAwesome5";
// import BottomSheet from "react-native-gesture-bottom-sheet";
// import SelectState from "@Screen/Registration/SelectState"
// import SelectLga from "@Screen/Registration/SelectLga"
import data from './data'
import styles from './style';
import globalStyle from "@Helper/GlobalStyles";
import StoreSuccess from "@Screen/StoreSuccessOverlay"


const Overlay = (props) => {
    const [copiedText, setCopiedText] = useState('Copy Account No');
    const [successMsg, setSuccessMsg] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const bottomSheet = useRef();
    const bottomSheetStoreSuccess = useRef();
    const [errMsg, setErrMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
 

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
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

    const closeSuccess = () => {
        bottomSheetStoreSuccess.current.close();
    };
    const storeSuccess = () => {
        bottomSheetStoreSuccess.current.show();
    };


 

 const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, globalStyle.marginTop, { marginHorizontal: 20 }]}>
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <View style={{ marginHorizontal: 20 }}>
                <SuccessMsgViewTwo title={successMsg} />
            </View>
        )
    };
    const ListView = ({ item, index }) => {

        return (
           
            <View style={styles.card} key={item.id}>
                    <View style={styles.cardImgCover}>
                            <Image source={require("@Assets/image/storeN.png")} style={globalStyle.backImg} />  
                    </View>
                    <View style={styles.cardDesCover}>
                        <Text style={styles.storeName}>Pharma Store Ikeja</Text>
                        <Text style={styles.storeAddress}>{item.address}</Text>
                    </View>
                    <View style={styles.cardArrowCover}>
                        <Text style={styles.storeView}>view</Text>
                        <Image source={require("@Assets/image/greater.png")} style={styles.greaterImg} /> 
                    </View>
              </View>
        
        )
    };



    // const AddStore = () => (
        // <BottomSheet hasDraggableIcon ref={props.bottomSheetAddStore} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.05} radius={50} styles={styles.addStoreBottomSheet}>

           
           
        //         <View style={styles.modalPadding}>
        //             <TouchableOpacity  onPress={props.closeSheet2} style={styles.backCover}>
        //                 <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
        //             </TouchableOpacity >
        //             <Text style={styles.modalTitle}>Add New Store</Text>
        //         </View>
        //         <ScrollView style={styles.modalView}>
        //        <View >
        //        <View style={styles.formCover}>
        //                     <TouchableWithoutFeedback onPress={dismissKeyboard}>
        //                         <View>

        //                             {errMsg ? <View style={globalStyles.errMainView}>
        //                                 <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
        //                             </View> : null}

        //                             <FormikValidator
        //                                 initialValues={registerState}
        //                                 validationSchema={registerSchema}
        //                                 onSubmit={(values, actions) => {
        //                                     submit(values)
        //                                 }}
        //                             >
        //                                 {props => (
        //                                     <View>
        //                                         <View>
        //                                             <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
        //                                                 <View style={styles.labelView}>
        //                                                     <Text style={styles.label}>Name of Store</Text>
        //                                                 </View>

        //                                                 <InputField
        //                                                     style={{ color: 'gray' }}
        //                                                     value={props.values.firstname}
        //                                                     onBlur={props.handleBlur('firstname')}
        //                                                     placeholder="Kingsley"
        //                                                     placeholderTextColor="#757575"
        //                                                     keyboardType="default"
        //                                                     onChangeText={(val) => {
        //                                                         props.setFieldValue('firstname', val)
        //                                                         props.setFieldTouched('firstname', true, false);
        //                                                         setErrMsg("")
        //                                                     }}
        //                                                 />
        //                                             </View>
        //                                             {props.touched.firstname && props.errors.firstname ? (
        //                                                 <View style={styles.errView}>
        //                                                     <Text style={styles.errText}>{props.errors.firstname}</Text>
        //                                                 </View>) : null}
        //                                         </View>

        //                                         <View style={styles.inputCoverr}>
        //                                             <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.surname && props.errors.surname ? styles.inputErrHolder : null]}>
        //                                                 <View style={styles.labelView}>
        //                                                     <Text style={styles.label}>Street Address</Text>
        //                                                 </View>

        //                                                 <InputField
        //                                                     style={{ color: 'gray' }}
        //                                                     value={props.values.surname}
        //                                                     onBlur={props.handleBlur('surname')}
        //                                                     placeholder="James"
        //                                                     placeholderTextColor="#757575"
        //                                                     keyboardType="default"
        //                                                     onChangeText={(val) => {
        //                                                         props.setFieldValue('surname', val)
        //                                                         props.setFieldTouched('surname', true, false);
        //                                                         setErrMsg("")
        //                                                     }}
        //                                                 />
        //                                             </View>
        //                                             {props.touched.surname && props.errors.surname ? (
        //                                                 <View style={styles.errView}>
        //                                                     <Text style={styles.errText}>{props.errors.surname}</Text>
        //                                                 </View>) : null}
        //                                         </View>
        //                                         <View style={styles.inputCoverr}>
        //                                             <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
        //                                                 <View style={styles.labelView}>
        //                                                     <Text style={styles.label}>State</Text>
        //                                                 </View>

        //                                                 {/* <SelectState /> */}

        //                                             </View>
        //                                             {props.touched.phone && props.errors.phone ? (
        //                                                 <View style={styles.errView}>
        //                                                     <Text style={styles.errText}>{props.errors.phone}</Text>
        //                                                 </View>) : null}
        //                                         </View>

        //                                         <View style={styles.inputCoverr}>
        //                                             <View style={[styles.inputHolder, styles.registerInputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
        //                                                 <View style={styles.labelView}>
        //                                                     <Text style={styles.label}>LGA</Text>
        //                                                 </View>

        //                                                 {/* <SelectLga /> */}

        //                                             </View>
        //                                             {props.touched.phone && props.errors.phone ? (
        //                                                 <View style={styles.errView}>
        //                                                     <Text style={styles.errText}>{props.errors.phone}</Text>
        //                                                 </View>) : null}
        //                                         </View>

        //                                         <View style={styles.inputCover2}>
        //                                             <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
        //                                                 <View style={styles.labelView}>
        //                                                     <Text style={styles.label}>License(s)/Organization Certificate(s)</Text>
        //                                                 </View>

        //                                                 <InputField
        //                                                     style={{ color: 'gray' }}
        //                                                     value={props.values.firstname}
        //                                                     onBlur={props.handleBlur('firstname')}
        //                                                     placeholder="img.jpg"
        //                                                     placeholderTextColor="#757575"
        //                                                     keyboardType="default"
        //                                                     onChangeText={(val) => {
        //                                                         props.setFieldValue('firstname', val)
        //                                                         props.setFieldTouched('firstname', true, false);
        //                                                         setErrMsg("")
        //                                                     }}
        //                                                 />
        //                                                 <TouchableOpacity>
        //                                                     <View style={styles.selectCover}>
        //                                                         <Text style={styles.selectText}>Select Image</Text>
        //                                                     </View>
        //                                                 </TouchableOpacity>
        //                                             </View>
        //                                             {props.touched.firstname && props.errors.firstname ? (
        //                                                 <View style={styles.errView}>
        //                                                     <Text style={styles.errText}>{props.errors.firstname}</Text>
        //                                                 </View>) : null}

        //                                         </View>
        //                                         <View style={styles.inputCover2}>
        //                                             <View style={[styles.registerInputHolder, props.touched.firstname && props.errors.firstname ? styles.inputErrHolder : null]}>
        //                                                 <View style={styles.labelView}>
        //                                                     <Text style={styles.label}>Store Photo</Text>
        //                                                 </View>

        //                                                 <InputField
        //                                                     style={{ color: 'gray' }}
        //                                                     value={props.values.firstname}
        //                                                     onBlur={props.handleBlur('firstname')}
        //                                                     placeholder="img.jpg"
        //                                                     placeholderTextColor="#757575"
        //                                                     keyboardType="default"
        //                                                     onChangeText={(val) => {
        //                                                         props.setFieldValue('firstname', val)
        //                                                         props.setFieldTouched('firstname', true, false);
        //                                                         setErrMsg("")
        //                                                     }}
        //                                                 />
        //                                                 <TouchableOpacity>
        //                                                     <View style={styles.selectCover}>
        //                                                         <Text style={styles.selectText}>Select Image</Text>
        //                                                     </View>
        //                                                 </TouchableOpacity>
        //                                             </View>
        //                                             {props.touched.firstname && props.errors.firstname ? (
        //                                                 <View style={styles.errView}>
        //                                                     <Text style={styles.errText}>{props.errors.firstname}</Text>
        //                                                 </View>) : null}

        //                                         </View>
        //                                     </View>
        //                                 )}

        //                             </FormikValidator>
        //                         </View>

        //                     </TouchableWithoutFeedback>


                           
        //                 </View>
        //        </View>
            
        //        </ScrollView>
                
           
        //     <View style={styles.btnCover}>
        //             <Btn title="Add New Store" onPress={storeSuccess} style={styles.submit}  />
        //         </View>

        //         <StoreSuccess
        //         bottomSheetStoreSuccess={bottomSheetStoreSuccess}
        //         bottomSheetCloseSuccess={closeSuccess}
        //         />
        //     </BottomSheet >
    // );

    return (
        <View>
            {/* {AddStore()} */}
        </View>
    )
};

export default Overlay;