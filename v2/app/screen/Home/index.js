import React, {useEffect, useState} from 'react';
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

  const CardList = ({imageOne, imageTwo, title, count, style, styleOne, onPress}) => (
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
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(221, 225, 255, 3)"}
       barStyle="dark-content"
        />
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
        colors={['#ffffff', 'rgba(221, 225, 255, 3)']}
        start={{x: 0, y: 2}}
        end={{x: 0, y: 0}}
        style={styles.mainContainer}>
        <View style={styles.topNav}>
          <View style={styles.leftNav}>
            <View style={styles.profileImgCover}>
              {user.picture_url === null ? (
                <Image
                  style={styles.userImg}
                  source={require('@Assets2/image/mee.jpg')}
                />
              ) : (
                <Image
                  style={styles.agentImg}
                  source={{uri: `${URL}${user?.picture_url}`}}
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
       
        <View style={styles.toggleCover}>
                {
                  toggleSwitch ?
                  <Text style={styles.toggleText}>I'm online</Text>
                  :
                  <Text style={styles.toggleTextOff}>I'm offline</Text>
                }
             
              

              <ToggleSwitch
                isOn={toggleSwitch}
                onColor="rgba(105, 189, 123, 1)"
                offColor="#f5f5f5"
                size="small"
                onToggle={isOn => setToggleSwitch(isOn)}
              />
            </View>
          <View style={styles.middleContainer}>
           
            <CardList
              style={styles.innerCard}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/waveGroup1.png')}
              imageTwo={require('@Assets2/image/lab_profile.png')}
              title="NEW & PENDING REGISTRATION"
              count={agent.users_count}
            />

            <CardList
              onPress={redirectToCustomerOrders}
              style={styles.innerCardTwo}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/wave2.png')}
              imageTwo={require('@Assets2/image/inventory_2.png')}
              title="ALL ORDERS"
              count={agent.orders_count}
            />
            <CardList
              style={styles.innerCardThree}
              styleOne={styles.waveImg}
              imageOne={require('@Assets2/image/sunWave.png')}
              imageTwo={require('@Assets2/image/Tag.png')}
              title="SPECIAL DEALS"
              count={deals?.total}
            />

            <CardList
             onPress={redirectToPendingCustomers}
              style={styles.innerCardFour}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/wave2.png')}
              imageTwo={require('@Assets2/image/account_circle_off.png')}
              title="INACTIVE CUSTOMERS"
              count={customers?.inactive?.count}
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
