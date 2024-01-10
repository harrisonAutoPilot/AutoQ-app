import React, { useState, useEffect, useRef, useCallback } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, CalloutSubview } from 'react-native-maps';

import {SafeAreaView,ScrollView, StyleSheet,Keyboard,TouchableOpacity, TouchableWithoutFeedback,Text,Image, View} from 'react-native';
import RetrieveLoc from './RetrieveLoc';
import AskBottomSheet from './AskBottomSheet';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import styles from './style';
import SearchInput from './SearchInput'
import BrandBottomSheet from './BrandList';
import AddressBottomSheet from "@Screen2/signup/component/bottomSheetAddress";
import {sort} from './sort'

const MapViewScreen = (props) => {
  const spec = props.route.params.item
    const myApiKey = "AIzaSyBd1bJf4v8ryChX5uRBFrc7uZu6hwJxZxw";
    const [username, setUsername] = useState("");
    const [search, setSearch] = useState("");
    const bottomSheet = useRef();
    const bottomSheetBrand = useRef();
    const [active, setActive] = useState("");
    const [carType, setCarType] = useState("")
    const [category, setCategory] = useState("");
    const [showRetrieve, setShowRetrieve] = useState(false);
    const [latitude, setLatitude ] = useState(9.0747);
    const [longitude, setLongitude ] = useState(7.4760);
    const [currentLongitude, setCurrentLongitude ] = useState('...');
    const [currentLatitude, setCurrentLatitude  ] = useState('...');
    const [locationStatus,  setLocationStatus  ] = useState('');
    const [showPanel, setShowPanel] = useState(true)
    const [addressProps, setAddressProps] = useState(null);

    const [addressNotFound, setAddressNotFound] = useState(false);

    const addressBottomSheet = useRef(null);

    let location = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }

      const getAutoLoc =() =>{
        // getOneTimeLocation()
         bottomSheet.current.close()
         setShowRetrieve(true)
       }

       const letGo = (details) =>{
       
          const dat = {details, carType,spec }
          console.log("the selected spec",dat )
        setShowPanel(true)
        props.navigation.navigate("SearchList", {item:dat})
       }

       const proceed = (id) =>{
        setCarType(id.title)
        setShowPanel(true)
        console.log("you selected and closed", id)
        bottomSheetBrand.current.close()
        
       }
   
       const anotherLoc = () =>{
        bottomSheet.current.show()
       }

       const goBack = () => props.navigation.goBack();

       const dismissKeyboard = () => Keyboard.dismiss();

       const makeSearch = (name) => {
        if (name) {
          setUsername(name)
        //   navigation.navigate("ResultOne", { name })
        console.log('the name')
        }
    
    
      }



      const waitTime = useCallback(() => {

        wait(5000).then(() => {
    
            setErrMsg(null);
    
            // dispatch(cleanCheckEmail())
    
        });
    
    }, []);

      const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      };
    

      const checkAddressExists = (data) => {

        dispatch(cleanCheckAddress());
    
        setErrMsg(null);
    
        setLoader(true);
    
        dispatch(checkAddressDetails({ address: myValues.store_address }))
          .unwrap()
          .then((suc) => {
    
              submit(data);
    
          }).catch((err) => {
            // handle error here
            setLoader(false);
    
            setErrMsg(err?.msg);
    
            waitTime()
          })
      };
    
      const showAddressNotFound = () => {
    
        setAddressNotFound(true);
    
        closeAddressBottomsheet();
    
      };
    
      const showAddressFound = (props) => {
    
        // props.setFieldValue("store_address", "")
    
        setAddressNotFound(false);
    
      }
    
    
      const showAddressBottomsheet = (props) => {
        setShowPanel(false)
        setAddressProps(props)
        addressBottomSheet.current?.present();
    
      };
    
    
      const closeAddressBottomsheet = () => {
    
        dismissKeyboard()
    
        addressBottomSheet.current?.close();
        wait(100).then(() => {
          setShowPanel(true)
    
        });
       
      };
    
    
      const close = () => {
    
        wait(100).then(() => {
    
          closeAddressBottomsheet();
          setShowPanel(true)
    
        });
    
      };
    

       const selectBtn = id => {
        setActive(id);
      };
      const selectCategory = (name) => {
       
        setCategory(name);
        setSearch(name)
        if (name === "VIEW OTHERS"){
          setCategory("")
          bottomSheetBrand.current.show()
        }
        console.log("you selected:" + name);
        console.log("new input :", search);
        // props.navigation.navigate("ResultOne", { name })
      };
    

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={styles.backCover}>
        <TouchableOpacity onPress={goBack}>
            <Icon name='arrow-back' color="#000" size={24} />
        </TouchableOpacity>
    </View>
      <MapView
         style={{ width: '100%', height: '100%' }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={location}
        >
         <Marker
            coordinate={{latitude:parseFloat(latitude) && parseFloat(latitude), longitude:parseFloat(longitude) && parseFloat(longitude)}}
            description={"This is a marker in React Natve"}
            >

            {/* <Image source={require('../../assets/judge.png')}
              style={{
                width: 50,
                height: 50,

                resizeMode: 'cover'
              }}
            /> */}
           

          </Marker>

        </MapView>
        
         

        <AskBottomSheet
            bottomSheet={bottomSheet}
            getAutoLoc={getAutoLoc}
            />
           
            <RetrieveLoc
            visibleRetrieve={showRetrieve}
            returnBack={() => setShowRetrieve(false)}
            title={"MY LOCATION"}
            address ={"Sorry we have exhaused the free google location api count"}
            disAgree ={() => setShowRetrieve(false)}
            agree ={() => setShowRetrieve(false)}
            />
            {/* { category != "" || carType != "" && showPanel ?
          <View style={styles.displayModal}>
          <LottieView
            source={require('@Assets2/image/steer.json')} autoPlay loop
            style={{ width:36, height:36,resizeMode:'contain',marginTop:1, marginBottom:4}}
              /> 
            <Text style={styles.displayText}>You selected : {category == "" ? carType : category}</Text>
          </View>
          :
          null
            } */}
      </View>
            

            <BrandBottomSheet  
          bottomSheet={bottomSheetBrand}
          sort={proceed}
            />
            { showPanel ?
            <>
            { category != "" || carType != "" ?
             <View style={styles.displayModal}>
             <LottieView
               source={require('@Assets2/image/steer.json')} autoPlay loop
               style={{ width:36, height:36,resizeMode:'contain',marginTop:1, marginBottom:4}}
                 /> 
               <Text style={styles.displayText}>You selected : {category == "" ? carType : category}</Text>
             </View>
              :
              null
            }

              <View style={styles.changeStyle}>
           
           <TouchableWithoutFeedback onPress={dismissKeyboard}>
           <View style={styles.topCover}>
           <View style={styles.welcomeCover}>
       <Text style={styles.smText}>Holla!</Text>
       <Text style={styles.bgText}>Where are you?</Text>
           </View>
         {/* This is where layertwo starts */}
         <View style={styles.selectCover}>
           <Text style={styles.selectText}>Select Car type</Text>
         </View>
         <View style={styles.layerTwo}>
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             {sort.map((item) => (

               <TouchableOpacity onPress={() => { selectBtn(item.id); selectCategory(item.name) }}>
                 {active === item.id ?
                   <TouchableOpacity onPress={() => { selectBtn(item.id); selectCategory(item.name) }}>
                     <View style={styles.scrollCover} key={item.id}>
                       <View style={styles.sortCoverSelected}>
                       <Image source={require('@Assets2/image/check-mark.png')}   style={styles.brandImgSm} />
                         <Text numberOfLines={1} style={styles.sortNameSelected}>{item.name}</Text>
                       </View>
                     </View>
                   </TouchableOpacity>
                   :
                   <TouchableOpacity onPress={() => { selectBtn(item.id); selectCategory(item.name) }}>
                     <View style={styles.scrollCover} key={item.id}>
                       {
                           item.id === '3' ?
                           <View style={styles.sortCover} >
                           <LottieView
                           source={require('@Assets2/image/steer.json')} autoPlay loop
                           style={{ width:36, height:36,resizeMode:'contain',marginTop:1, marginBottom:4}}
                            />
                              <Text numberOfLines={1} style={styles.sortName}>{item.name}</Text>
                       </View>
                       :
                       <View style={styles.sortCover} >
                       <Image source={item.img}  style={styles.brandImg} />
                      <Text numberOfLines={1} style={styles.sortName}>{item.name}</Text>
                       </View>
                       }
                      
                     </View>
                   </TouchableOpacity>
                 }
               </TouchableOpacity>

             ))}
           </ScrollView>
         </View>
         
         <View style={styles.selectCover}>
           <Text style={styles.selectText}>Enter your location</Text>
         </View>
   
         <TouchableOpacity style={styles.getLocCover} onPress={() => showAddressBottomsheet(props)}>
           <Icon name="search" color="#bfbfbf" size={24} style={styles.mdLogImg} />
           <Text style={styles.touchText}>Enter your Location</Text>
       </TouchableOpacity>
        
         {/* This is where the layertwo ends */}

         <TouchableOpacity style={styles.getLocCover} >
       <Image source={require('@Assets2/image/car.png')} style={styles.smLogImg} />
           <Text style={styles.touchText}>Get my location automatically</Text>
       </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
           </View>
           </>
            :
            null
            }
          <AddressBottomSheet
            bottomSheetRef={addressBottomSheet}
            closeBottomSheet={closeAddressBottomsheet}
            prop={addressProps}
            showPanel={letGo}
            setAddressNotFound={showAddressNotFound}
            wait={close}
         />
            
    </SafeAreaView>
  );
};

export default MapViewScreen ;

  