import React, { useState, useRef } from "react";
import { View, Text,Image, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImagePicker from 'react-native-image-crop-picker';

import { getUserDetails} from "@Store2/Auth";
import styles from "./style";
import { LoginHeader, OnboardinBtn } from "@Component2";
import Loader from "@Screen2/loader";
import CameraOption from "./CameraOption/Index";




const FormImageUpload = ({ navigation }) => {


    const dispatch = useDispatch();


    const bottomSheet = useRef(null);
   
    const goBack = () => navigation.goBack();

    const [loader, setLoader] = useState(false);

    const [myUpload, setMyUpload] = useState({});
    const [uploadIsHere, setUploadIsHere] = useState(false)
    const [photo, setPhoto] = useState(null)

    const [errMsg, setErrMsg] = useState(null);


const useCamera =()=>{
    bottomSheet.current.close()
    uploadCamera()
}

const useUpload =()=>{
    bottomSheet.current.close()
    uploadPhoto()
}

    const openSheet = () => {
        bottomSheet.current.show();

    }


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const submit = async () => {

        dispatch(getUserDetails({photo:photo }));

        navigation.navigate("FormPinDetails");

    };



    // const uploadPhoto = (id) => {

    //           ImagePicker.openPicker({
    //         includeBase64: true,
    //         cropping: true,
    //         mediaType: 'photo'
    //     }).then(images => {
     
    //         const img = images.path 
    //         // props.setFieldValue('images', img);
    //         console.log("the upload", img)
    //         setUploadIsHere(true)
    //         setMyUpload(img)

    //     }).catch(err => {
    //        console.log(err)
    //     })
    
    // }

    const uploadCamera = () => {
        ImagePicker.openCamera({ 
          multiple: false,
          width: 1024,
          height: 1024,
          includeBase64: false,
          mediaType: 'photo',
          cropping: true,
        })
          .then(image => {
           
            setUploadIsHere(true)
                const uri =
                Platform.OS === 'android'
                  ? image.path
                  : image.path.replace('file:///', '');
              const filename = image.path.split('/').pop();

              const match = /\.(\w+)$/.exec(filename);
              const ext = match?.[1];
              setMyUpload(uri)

            const transform =  {
                name: (Math.random() + 1).toString(12).substring(7),
                type: Platform.OS === "ios" ? image[0].type : "image/jpeg",
                uri: Platform.OS === "ios" ? image[0].uri.replace("file://", "") : image[0].uri,
              };

              formData.append('photo', transform);
              setPhoto(formData.append('photo', transform))
                return (transform)
                // setMyUpload(transform)
             
            
          })
          .catch(err => {
            console.log(err);
          });
      
    
      }

      const uploadPhoto = () => {
        ImagePicker.openPicker({ 
          multiple: false,
           width: 1024,
            height: 1024,
          includeBase64: false,
          mediaType: 'photo',
          cropping: true,
        })
          .then(image => {
           
            setUploadIsHere(true)
                const uri =
                Platform.OS === 'android'
                  ? image.path
                  : image.path.replace('file:///', '');
              const filename = image.path.split('/').pop();

              const match = /\.(\w+)$/.exec(filename);
              const ext = match?.[1];
              setMyUpload(uri)

            const transform =  {
                name: (Math.random() + 1).toString(12).substring(7),
                type: Platform.OS === "ios" ? image[0].type : "image/jpeg",
                uri: Platform.OS === "ios" ? image[0].uri.replace("file://", "") : image[0].uri,
              };

              formData.append('photo', transform);
              setPhoto(formData.append('photo', transform))
                return (transform)
                // setMyUpload(transform)
             
            
          })
          .catch(err => {
            console.log(err);
          });
      };



    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >

                <ProgressBar
                     percentage={'78%'}
                />

            </LoginHeader>

            <View style={styles.signupPinTitleContainer}>
            {!uploadIsHere ? 
                <>
                <Text style={styles.signupTitle}>Add Profile Image</Text>

                <Text style={styles.signupDesc}>Add a profile picture to identify you. Everyone will be able to see your picture.</Text>
                </>
                :
                null

            }
                {errMsg &&
                    <View style={styles.errView} >
                        <Icon name="error-outline" size={22} color="#fff" />
                        <Text style={styles.errText}>{errMsg}</Text>
                    </View>

                }


                            <ScrollView 
                            showsVerticalScrollIndicator={false} 
                            contentContainerStyle={styles.scrollViewContainer}>

                                <SafeAreaView>
                                    <View style={styles.imageContainer}>
                                    <View />
                                    {!uploadIsHere ?
                                    <Image
                                        source={require('@Assets2/image/personIcon.png')}
                                        style={styles.userIcon}
                                    />
                                    :
                                    <View style={styles.avartarCover}>
                                        <Image
                                          
                                            source={{
                                              
                                                uri: `${myUpload}`,
                                             }}
                                             style={styles.avatar}
                                            />
                                            <Image
                                            source={require('@Assets2/image/successV2.png')}
                                            style={styles.sucImg}
                                          />   


                                        <Text style={styles.bgText}>Capture Successful</Text>
                                        <Text style={styles.smText}>Proceed to the next step</Text>
                                   </View> 
                                    }
                                     {!uploadIsHere ? 
                                       <View style={{marginTop:80}}>
                                       <OnboardinBtn
                                        title="ADD PHOTO"
                                        onPress={openSheet}
                                        backgroundColor="#3353CB"
                                        color="#fff"
                                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                        />
                                       </View>
                                       :
                                       <View style={{marginTop:80}}>
                                           <View>
                                       <OnboardinBtn
                                        title="CONTINUE"
                                        onPress={submit}
                                        backgroundColor="#3353CB"
                                        color="#fff"
                                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                        />
                                       </View>

                                       <TouchableOpacity style={styles.retakeBtn} onPress={openSheet}>
                                        <Text style={styles.retakeText}>RETAKE PHOTO</Text>
                                       </TouchableOpacity>
                                       </View>
                                    }

                                    </View>
                                </SafeAreaView>
                            </ScrollView>



            </View>


         
        
            <Loader isVisible={loader} />
            <CameraOption
                bottomSheet={bottomSheet}
                upload={useUpload}
                camera={useCamera}

            />

        </View>

    )
};

export default FormImageUpload;