import React, {useEffect,useCallback, useState} from 'react';
import {View, Text,StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { NotificationHeader } from '@Component2';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleSwitch from 'toggle-switch-react-native'
import {getAgent} from '@Request2/Agent';
import {getDeals} from '@Request2/Deal';
import styles from './style';
import {getCustomers} from '@Request2/Customer';
import {listCart} from '@Request2/Cart';

const SearchList = props => {
  const dispatch = useDispatch();

  const date = new Date();

  const {user} = useSelector(state => state.auth);

  const {customers} = useSelector(state => state.customer);

  const {deals} = useSelector(state => state.deal);

  const {agent} = useSelector(state => state.agent);

  const [dayTime, setDayTime] = useState(null);

  const [dayTimeImage, setDayTimeImage] = useState(null);

  const [toggleSwitch, setToggleSwitch] = useState(false)

  const redirectToDeals = () => props.navigation.navigate('GenProducts');

  const data = props.route.params.item

  const redirectToCustomerOrders = () =>
    props.navigation.navigate('Order');

  const openNotification = () => props.navigation.navigate('Notification');

  const returnBack = () => props.navigation.goBack();

  const gotoActivity = () => props.navigation.navigate('ActivityReport');

  const redirectToPendingCustomers = () =>
    props.navigation.navigate('CustomersDashboard', {id: 3});

  console.log("the reeee", data)

    useEffect(() => {
     if(user.status === 0){
      props.navigation.navigate("AwaitVerification")
     }
    }, [user.status]);


    const gotoDetails = () =>{
      props.navigation.navigate('WorkerDetails', {item:'MECHANIC'})
    }

    const redirectToElectrician = () =>{
      props.navigation.navigate('MapViewScreen', {item:'CAR_ELECTRICIAN'})
    }

    const redirectToGarage = () =>{
      props.navigation.navigate('MapViewScreen', {item:'GARAGE'})
    }

    const redirectToPanel = () =>{
      props.navigation.navigate('MapViewScreen', {item:'PANEL_BEATER'})
    }

  useEffect(() => {
    if ((date.getHours() > 0 || date.getHours() == 0) && date.getHours() < 12) {
      setDayTime('Good Morning');

      setDayTimeImage(require('@Assets/image/sun.png'));
    } else if (
      (date.getHours() > 12 || date.getHours() == 12) &&
      date.getHours() < 18
    ) {
      setDayTime('Good Afternoon');

      setDayTimeImage(require('@Assets/image/sun.png'));
    } else {
      setDayTime('Good Evening');

      setDayTimeImage(require('@Assets/image/night.png'));
    }

    dispatch(getAgent());

    dispatch(getCustomers());

    dispatch(listCart());

    dispatch(getDeals({no: 1}));
  }, []);


const CardList = useCallback(({
  imageOne,
  imageTwo,
  title,
  count,
  style,
  styleOne,
  onPress,
}) => (
  <TouchableOpacity style={style} onPress={onPress}>
     <View style={styleOne}>
              <View style={styles.bottomCardInner}>
                <View style={styles.imgCover}>
                <Image
                  style={styles.barImg}
                  source={imageOne}
                />
                <View style={{width:100}}>
                <Text style={styles.comText}>Completed Jobs</Text>
                <Text style={styles.comCount}>{count}</Text>
                </View>
                </View>
                <View style={styles.bottomCardLeft}>
                  <Text style={styles.barText}> Name: {title}</Text>
                  <Text style={styles.barTextSm}>Service Location:Lugbe, Jabi, Dutse, Kubwa, Mabuchi, Mpape, Wuse, Area 1</Text>
                  <Text style={styles.barTextSm}>Service Fee: ₦700</Text>
                  <View style={styles.iconCover}>
                  <TouchableOpacity>
                    <Icon name='phone' color="#000" size={20} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon name='whatsapp' color="green" size={20} />
                  </TouchableOpacity>
                </View>
                </View>

                
              </View>
              
              <View>
                
              </View>
            </View>
  </TouchableOpacity>
), []);


  return (
    <View style={styles.container}>

      <StatusBar backgroundColor={"#fff"}
       barStyle="dark-content"
        />
  <NotificationHeader title={data.spec} onPress={returnBack} />
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
        colors={['#ffffff', '#fff']}
        start={{x: 0, y: 2}}
        end={{x: 0, y: 0}}
        style={styles.mainContainer}>
     
          <View style={styles.middleContainer}>
           
            <CardList
              onPress={gotoDetails}
              title ="Chukwuemeka Oguejiofor"
              count={14}
              styleOne={styles.cardBottom}
              imageOne={require('@Assets2/image/portrait-of-real-black-african-man-with-no-expression-for-id-or-passport-photo-194405582.webp')}
              
            />

          <CardList
              onPress={gotoDetails}
              count={87}
              title ="Samson Balogun"
              styleOne={styles.cardBottom}
              imageOne={require('@Assets2/image/images.jpeg')}
              
            />
            <View style={styles.adCard}>

          <Image source={require('@Assets2/image/istockphoto-1034249292-612x612.jpeg')} style={styles.adImg}/>
          <View style={styles.adContentCover}>
            <Text style={styles.adBgText}>GET <Text style={styles.adLgText}>7%</Text> DISCOUNT</Text>
           <View style={styles.addBtnCover}>
           <Text style={styles.adSmText}>On every Purchase of spare parts</Text>
           <TouchableOpacity style={styles.getBtn}>
            <Text style={styles.getText}>Get Now</Text>
           </TouchableOpacity>
           </View>
          </View>

            </View>
            <CardList
              onPress={gotoDetails}
              count={58}
              title ="Emmanuel Odeme"
              styleOne={styles.cardBottom}
              imageOne={require('@Assets2/image/okk.jpeg')}
              
            />

            
          </View>
       
      </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default SearchList;
