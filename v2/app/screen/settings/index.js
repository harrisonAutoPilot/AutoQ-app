import React, { useState, useEffect, useCallback, useRef, } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
// import * as ImagePicker from "react-native-image-picker"
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import MIcon from "react-native-vector-icons/MaterialIcons";
import {getUser, updateProfileImg} from "@Request2/Auth";
import globalStylesV2 from "@Helper2/globalStyles";
import { TransactionHeader } from "@Component2";
import { SuccessMsgBottom } from "@Component2/index";
import { logout, cleanProfileImg } from "@Store2/Auth";
import Loader from "@Screen2/loader";
import styles from './style';
import LogoutModal from "../drawerScreen/logoutModal";
import PinBottomSheet from './pinBottomSheet';
import EditProfileBottomSheet from "./editBottomSheet"



const Settings = (props) => {


  const dispatch = useDispatch();

  const { user, updateImg, errors } = useSelector((state) => state.auth);

  const item = props.route.params?.item;

  const [errMsg, setErrMsg] = useState(null);

  const [successMsg, setSuccessMsg] = useState(null);

  const [loader, setLoader] = useState(false);

  const bottomSheetRef = useRef();

  const editBottomSheetRef = useRef();

  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const data = [
    {
      id: '1',
      title: "First Name",
      icon: "account-outline",
      desc:`${user?.name}`,
      
    },
    {
      id: '2',
      title: "Last Name",
      desc:`${user?.name}`,
      icon: "account-outline",
   
    },
    {
      id: '3',
      title: "Phone",
      desc:`${user?.phone}`,
      icon: "phone-outline",
  

    },
    {
      id: '4',
      title: "Email",
      desc:`${user?.email}`,
      icon: "email-outline",
   
    },
    {
      id: '5',
      title: "****",
      desc:'PIN',
      icon: "key-outline",
      route: "pin",
      pen:true,
    },



  ];

  const getRandomColor = str => {

    const colors = [
      '#018091', '#03A896', '#00C29B', '#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A', '#07668C',
    ];

    let numberFromText = function (text) {

      const charCodes = text?.split('')
        .map(char => char.charCodeAt(0))
        .join('');
      return parseInt(charCodes, 10);
    };

    return colors[numberFromText(str) % colors.length];
  };

  const redirectBack = () => {

    bottomSheetRef.current?.close();

  };


  const returnBack = () => {

    props.navigation.goBack();

  };

  const closeBottomSheet = () => {

    bottomSheetRef.current?.close();

  }

  useEffect(() => {
    if (updateImg === "success") {
      setLoader(false)
      setSuccessMsg("Image update successfully");
      wait(5000).then(() => {
        dispatch(cleanProfileImg())
        setSuccessMsg(null)
        dispatch(getUser())
        })

    } else if (updateImg === "failed") {
      setLoader(false)
      setErrMsg(errors?.msg)
      wait(5000).then(() => {
        dispatch(cleanProfileImg())
        setErrMsg(null)
  
        })
  
     
    }
  }, [updateImg]);


  const wait = (timeout) => {

    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const redirect = (item) => {
    if (item.route === "edit") {
      editBottomSheetRef.current?.present()
    } else if (item.route === "logout") {
      setShowLogoutModal(true)
    } else if (item.route === "delete") {
      props.navigation.navigate("CloseAccount")
    } else if (item.route === "pin") {
      bottomSheetRef.current?.present()
    }
  }


  const logUserOut = () => {
    setShowLogoutModal(false)
    wait(1000).then(() => { dispatch(logout()) })
  }



const profileImg = () => {
  ImagePicker.openPicker({
    multiple: false,
    includeBase64: false,
    mediaType: 'photo',
  })
    .then(image => {
      setErrMsg('');
      const fileName = image.path.split('/').pop();
  
      const uri = Platform.OS === "android"
          ? image.path
          : image.path.replace("file:///", "");
      const filename = image.path.split("/").pop();
      const match = /\.(\w+)$/.exec(filename);
      const ext = match?.[1];
      const imageFile = {
          uri,
          name: `image.${ext}`,
          type: image.mime
      };
         
          const newValue = { picture:imageFile, id:user.id };
          wait(1000).then(() => {dispatch(updateProfileImg(newValue))})

      })
 
    .catch(err => {
      console.log(err);
     //setErrMsg(err)
     
    });
};


  const AgentList = ({ item }) => {
    return (
     
        <View style={styles.middle} >
          <View style={styles.card}>
            <View style={styles.right}>
              <Icon name={`${item.icon}`} size={26} color="#767680" />
            </View>
           <View style={styles.left}>
           <View style={styles.leftInner}>
              <Text style={styles.phoneText}>{item.title ? item?.title : "Loading ..."}</Text>
           </View>
            <View style={styles.leftInner}>
              <Text style={styles.descText}>{item.desc ? item?.desc : "Loading ..."}</Text>
            </View>
           </View>
          </View>
         {
          item.pen ?
          <TouchableOpacity style={styles.penCover} onPress={() => redirect(item)}>
         <Icon name='pencil-outline' color="rgba(118, 118, 128, 1)" size={24} />
          </TouchableOpacity>
          :
          null
         }
        </View>
       
   

    )
  };



  return (
    <View style={styles.container}>

      <TransactionHeader title="My Account" onPress={returnBack} />

      <View style={styles.cover}>
        <View>
          <View style={styles.top}>
            <View style={styles.topInner}>
              {user?.picture_url === null ?
              <View style={[styles.circleCover, { backgroundColor: getRandomColor(user?.name) }]}>
                <Text style={[styles.abbrevText]}>{user?.name?.substring(0, 1)}</Text>
              </View> 
              :
              <View style={styles.circleCover}>
                  <Image source={{ uri:user?.picture_url }} style={styles.myImg} /> 
              </View>
              }
              
              <TouchableOpacity style={styles.camCircle} onPress={profileImg}>
                <View>
                  <Icon name="camera-outline" size={16} color="#767680" />
                </View>
              </TouchableOpacity>
            </View>
             <View style={styles.topContentCover}>
           <View style={styles.nameFlex}>
           <Text style={styles.nameText}>{user?.name}</Text>
            <Image
                  style={styles.verImg}
                  source={require('@Assets2/image/verified.png')}
                />
           </View>
            <Text style={styles.regText}>RH/AG/{user?.id} - Verified Agent</Text>
             </View>
           </View>
              <View style={styles.midLine} />
          <View style={styles.listCover}>
            <FlatList
              showsVerticalScrollIndicator={false}
              vertical
              scrollEnabled={true}
              data={data}
              keyExtractor={item => item.id}
              renderItem={AgentList}
            />

          </View>
        </View>

      </View>

      <Loader isVisible={loader} />

      <LogoutModal
        logoutModal={showLogoutModal}
        returnBack={() => setShowLogoutModal(false)}
        proceed={logUserOut}
      />

      <PinBottomSheet
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={() => closeBottomSheet()}
        redirectBack={redirectBack}
        item={item}
      />

    
      <View style={styles.toastCover}>
        {errMsg ? <View style={styles.errView} >
        <MIcon name="error-outline" size={22} color="#fff" />
        <Text style={styles.errText}>{errMsg}</Text>
      </View> : null}

      {successMsg ? <View style={styles.successView} >
        <MIcon name="check-circle" size={22} color="#fff" />
        <Text style={styles.successText}>{successMsg}</Text>
      </View> : null}
       
      </View>
    </View>
  );
};

export default Settings;
