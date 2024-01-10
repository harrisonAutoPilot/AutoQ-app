import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Pressable,TextInput, PermissionsAndroid, TouchableOpacity,SafeAreaView, FlatList, Platform} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-native-modal';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import Fcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from './data';
import {visitStore, leaveVisitedStore,currentVisitedStore, getAgentStores} from '@Request2/Store';
import {cleanUpVisitedStoreData,cleanUpCurrentStore,  cleanUpAgentStore} from '@Store2/Stores';
import Loader from '@Screen2/loader';
import Geolocation from 'react-native-geolocation-service';
import BottomSheet from "react-native-gesture-bottom-sheet";
import { getCustomers } from "@Request2/Customer";

const ActiveCustomers = props => {
  const dispatch = useDispatch();
  const [showActiveModal, setShowActiveModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [storeImg, setStoreIMg] = useState('');
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [location, setLocation] = useState(false);
  const [lat, setLat] = useState(0);
  const [longi, setLongi] = useState(0);

  const { status, customers } = useSelector((state) => state.customer);
  const {visitStatus,leaveStatus,currentStoreData, agentStoreErrors, agentStoreStatus,agentStoreData,leaveErrors, errors} = useSelector(state => state.store);

  const selectCategory = id => {
    setSelected(id);
  };

  useEffect(() => {

    if (search.length) {

      filterResult();

    }

  }, [search.length]);


  useEffect(() => {

    if (search == "") {
      setResult(agentStoreData?.stores)
    }

  }, [search]);

  const refreshView = useCallback(msg => {
    wait(100).then(() => {
      setLoader(false);
      setErrMsg(msg);
    });

    // This is to make the toast disappear
    wait(4000).then(() => {
      setErrMsg(null);
    });
  }, []);

       useEffect(()=> {
        dispatch(currentVisitedStore())
        getLocation()
        dispatch(getAgentStores())
        setResult(agentStoreData?.stores)
        },[])

  const filterResult = () => {

    let searched = result?.filter(val => {

      if (val?.name !== null && val?.name.toLowerCase().includes(search.toLowerCase())) {

        return val
      }
    });

    return setResult(searched)

  };




  // this is the permission to get user location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Remedial Agent App Will Like To Access Your Location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log('this is the position', position);
            setLocation(position);
            setLat(position?.coords.latitude)
            setLongi(position?.coords.longitude)
           
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };


  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  const submit = () => {
    console.log("the requested id for the store",selected )
    const data = {
      store_id: selected,
      longitude: longi,
      latitude: lat,
    };

    dispatch(visitStore(data));
  };

  useEffect(() => {
    if (visitStatus === 'success') {
      props.returnBackActive()
      dispatch(currentVisitedStore())
   

    } else if (visitStatus === 'failed') {
      console.log('this is the error', errors?.msg);
      refreshView(errors?.msg)
    }
  }, [visitStatus]);

const sheetHeight = Platform.OS === "android" ? 480 : 510

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderItemContainer,
          selected == item.id && styles.activeRenderItemContainer,
        ]}
        onPress={() => selectCategory(item.id)}>
        <View style={styles.cardCover}>
          <View style={styles.leftCover}>
          <View style={styles.badgeContainer}>
          <Text style={styles.bgText}>{item.name}</Text>
            {item.id == currentStoreData.id ? 
            <View style={styles.badgeCover}>
              <Text style={styles.badgeText}>CHECKED IN STORE</Text>
            </View>
            :
            null
            }

          </View>
            <Text style={styles.smText}>
              {item.address}
            </Text>
          </View>
          <View style={styles.rightCover}>
            {item.id !== currentStoreData.id ? (
              <Zcon
                name="checkbox-blank-circle-outline"
                size={24}
                color="#bfbfbf"
              />
            ) : (
              <Fcon
                name="checkmark-circle"
                size={24}
                color="rgba(51, 83, 203, 1)"
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (

    <BottomSheet  ref={props.bottomSheetActive} height={sheetHeight} radius={20} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >
        <View style={styles.body5}>
          <View style={styles.headerStyle}>
            <TouchableOpacity style={styles.touchCover} onPress={props.returnBackActive}>
              <Icon name="x" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Select Store</Text>
          </View>
         
         <View style={styles.listCover}>
         <View style={styles.inputCover}>
          <Icon name="search" size={14} style={styles.searchIcon} color="#767680" />
          <TextInput
            style={styles.inputStyle}
            value={search}
            placeholder='Search'
            placeholderTextColor={"#5A5D72"}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
         <FlatList
            data={!result?.length ? agentStoreData?.stores : result }
            renderItem={RenderItem}
            keyExtractor={item => item.id}
          />
               {errMsg && (
              <View style={styles.toastCover}>
                <View style={styles.errView}>
                  <MIcon name="error-outline" size={22} color="#fff" />
                  <Text style={styles.errText}>{errMsg}</Text>
                </View>
              </View>
            )}

         <TouchableOpacity style={styles.btnStyle} onPress={submit}>
            <Text style={styles.btnText}>Check in this store</Text>
            <Icon name='chevron-right' color="#fff" size={18} />
          </TouchableOpacity>
         </View>
        
        </View>
</BottomSheet>

  );
};

export default ActiveCustomers;
