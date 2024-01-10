import React, {useEffect,useCallback, useState} from 'react';
import {View, Text,StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleSwitch from 'toggle-switch-react-native'
import {getAgent} from '@Request2/Agent';
import {getDeals} from '@Request2/Deal';
import styles from './style';
import {getCustomers} from '@Request2/Customer';
import {listCart} from '@Request2/Cart';

const Home = props => {
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

  const redirectToCustomerOrders = () =>
    props.navigation.navigate('Order');

  const openNotification = () => props.navigation.navigate('Notification');

  const openCart = () => props.navigation.navigate('Cart');

  const gotoActivity = () => props.navigation.navigate('ActivityReport');

  const redirectToPendingCustomers = () =>
    props.navigation.navigate('CustomersDashboard', {id: 3});



    useEffect(() => {
     if(user.status === 0){
      props.navigation.navigate("AwaitVerification")
     }
    }, [user.status]);


    const goToMap = () =>{
      props.navigation.navigate('MapViewScreen', {item:'MOBILE MECHANIC'})
    }

    const redirectToElectrician = () =>{
      props.navigation.navigate('MapViewScreen', {item:'CAR ELECTRICIAN'})
    }

    const redirectToGarage = () =>{
      props.navigation.navigate('MapViewScreen', {item:'NEARBY GARAGE'})
    }

    const redirectToPanel = () =>{
      props.navigation.navigate('MapViewScreen', {item:'PANEL BEATER'})
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

  // const CardList = ({imageOne, imageTwo, title, count, style, styleOne, onPress}) => (
  //   <TouchableOpacity style={style} onPress={onPress}>
  //     <Image style={styleOne} source={imageOne} />
  //     <View style={styles.cardTop}>
  //       <Image style={styles.smIconImg} source={imageTwo} />
  //       <Text style={styles.numberText}>{count}</Text>
  //     </View>

  //     <View>
  //       <Text style={styles.captionText}>{title}</Text>
  //     </View>
 
  //   </TouchableOpacity>
  // );
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
      <Image style={styleOne} source={imageOne} />
      <View style={styles.cardTop}>
        <Image style={styles.smIconImg} source={imageTwo} />
        <Text style={styles.numberText}>{count}</Text>
      </View>

      <View>
        <Text style={styles.captionText}>{title}</Text>
      </View>
    </TouchableOpacity>
  ), []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"}
       barStyle="dark-content"
        />
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
        colors={['#ffffff', '#fff']}
        start={{x: 0, y: 2}}
        end={{x: 0, y: 0}}
        style={styles.mainContainer}>
        <View style={styles.topNav}>
          <View style={styles.leftNav}>
            <View style={styles.profileImgCover}>
              {user.picture_url === null ? (
                <Image
                  style={styles.userImg}
                  source={require('@Assets2/image/personIcon_2.png')}
                />
              ) : (
                <Image
                  // style={styles.agentImg}
                  style={styles.userImg}
                  source={require('@Assets2/image/personIcon_2.png')}
                  // source={{uri: `${URL}${user?.picture_url}`}}
                />
              )}
              <Image
                style={styles.verImg}
                source={require('@Assets2/image/verified.png')}
              />
            </View>

            <View style={styles.greetCover}>
              <View style={styles.greetingInner}>
                <Text style={styles.greetingText}>{dayTime}</Text>
                <Image style={styles.sunImg} source={dayTimeImage} />
              </View>

              <Text style={styles.nameText}>{user.name}</Text>
            </View>
          </View>
          <View style={styles.rightNav}>
            <TouchableOpacity onPress={openNotification}>
              <Icon
                name="bell-outline"
                size={20}
                color={'rgba(28, 27, 31, 1)'}
              />
              <View style={styles.noteDot} />
            </TouchableOpacity>
            <View>
              <Icon
                name="cart-outline"
                size={20}
                color={'rgba(28, 27, 31, 1)'}
              />
              <View style={styles.countCover}>
                <Text style={styles.countText}>2</Text>
              </View>
            </View>
          </View>
        </View>
       
     
          <View style={styles.middleContainer}>
           
            <CardList
              onPress={goToMap}
              style={styles.innerCard}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/waveGroup1.png')}
              imageTwo={require('@Assets2/image/auto-mechanic-cartoon-character-vector.jpg')}
              title="GET MOBILE MECHANICS"
              // count={agent.users_count}
            />

            <CardList
              onPress={redirectToGarage}
              style={styles.innerCardTwo}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/wave2.png')}
              imageTwo={require('@Assets2/image/female-automotive-mechanic-repair-car-free-vector.jpg')}
              title="ACCESS NEARBY GARAGE"
              // count={agent.orders_count}
            />
            <CardList
            onPress={redirectToPanel}
              style={styles.innerCardThree}
              styleOne={styles.waveImg}
              // imageOne={require('@Assets2/image/sunWave.png')}
              imageTwo={require('@Assets2/image/car-body-frame-repair-vector-260nw-348348671.jpg')}
              title="GET NEARBY PANEL BEATER"
              // count={deals?.total}
            />

            <CardList
             onPress={redirectToElectrician}
              style={styles.innerCardFour}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/wave2.png')}
              imageTwo={require('@Assets2/image/car-electrician-logo-template-auto-260nw-234164944.jpg')}
              title="GET NEARBY CAR ELECTRICIAN"
              // count={customers?.inactive?.count}
            />

            <View style={styles.cardBottom}>
              <View style={styles.bottomCardInner}>
                <Image
                  style={styles.barImg}
                  source={require('@Assets2/image/barr.png')}
                />
                <View style={styles.bottomCardLeft}>
                  <Text style={styles.barText}>
                    Your Weekly Activity/Performance Report is here
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.bottomView}
                  onPress={gotoActivity}>
                  <Icon
                    name="eye"
                    color="#3353CB"
                    style={styles.smEye}
                    size={20}
                  />
                  <Text style={styles.bottomViewText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
       
      </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Home;
