import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from "react-native-vector-icons/Feather";


import styles from './style';
import { getStore } from "@Request2/Store";
import { cleanUpStore, remove } from "@Store2/Stores"
import EmptyStore from './EmptyStore';
import StorePlaceholderLoader from './StorePlaceholderLoader';
import { TransactionHeader } from "@Component2";


const MyStore = (props) => {

  const dispatch = useDispatch();

  const { storeStatus, stores, errors, removeStatus } = useSelector(state => state.store);

  const [errMsg, setErrMsg] = useState(null);

  const [refreshing, setRefreshing] = useState(false);

  const [successMsg, setSuccessMsg] = useState(null);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  useEffect(() => {

    dispatch(getStore());

  }, []);

  useEffect(() => {

    if (removeStatus === "success"){

      setSuccessMsg("Store removed successfully")

      dispatch(remove())

      wait(5000).then(() => {
        setSuccessMsg(null)

      })

   
    }

  }, [removeStatus]);

  const refreshStore = useCallback(() => {

    setRefreshing(true);

    dispatch(cleanUpStore());

    dispatch(getStore())
        .unwrap()
        .then(() => {

            setRefreshing(false);

        }).catch((err) => {
            // handle error here
            
            setRefreshing(false);
          
        })

}, []);


  const returnBack = () => {

    props.navigation.goBack();

  };

  const details = item => {

    props.navigation.navigate('StoreDetails', { item });

  };


  const addStore = () => props.navigation.navigate('AddStore');

  const getRandomColor = str => {
    const colors = [
      '#018091',
      '#03A896',
      '#00C29B',
      '#00AA55',
      '#106D34',
      '#B381B3',
      '#939393',
      '#E3BC00',
      '#D47500',
      '#DC2A2A',
      '#07668C',
    ];
    let numberFromText = function (text) {
      const charCodes = text
        ?.split('')
        .map(char => char.charCodeAt(0))
        .join('');
      return parseInt(charCodes, 10);
    };

    return colors[numberFromText(str) % colors.length];
  };


  useEffect(() => {

    if (storeStatus === "failed") {

      setErrMsg(errors?.msg);

    }

  }, [storeStatus]);


  const StoreView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => details(item)}>
        <View style={styles.card}>

          <View
            style={[
              styles.imgCover,
              { backgroundColor: getRandomColor(item?.name) },
            ]}>
            {
              item.status === 1 ?

                <Image
                  source={require("@Assets2/image/ftick.png")}
                  style={styles.badgeStyle}
                />
                :
                null
            }
            <Text style={styles.abvText}>{item?.name.substring(0, 1)}</Text>

          </View>
          <View style={styles.contentCover}>
            <Text style={styles.bgText}>{item.name}</Text>
            <Text style={styles.smText}>{item.address}</Text>
          </View>
          <View style={styles.arrowCover}>
            <Icon name="chevron-right" color="#767680" size={24} />
          </View>
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <TransactionHeader title="Stores" onPress={returnBack} />

      {stores.length > 0 ? (
        <View style={styles.storeContainer}>
          <Text style={styles.storeText}>All Stores</Text>
        </View>
      ) : null}

      <View style={styles.bottom}>

        {storeStatus === "pending" || storeStatus === "idle"
          ?
          <StorePlaceholderLoader />
          :
          <FlatList
          contentContainerStyle={{flexGrow:1}}
            showsVerticalScrollIndicator={false}
            vertical
            data={stores?.stores}
            keyExtractor={item => item.id}
            renderItem={StoreView}
            ListEmptyComponent={EmptyStore}
            refreshControl={
              <RefreshControl
                  refreshing={refreshing}
                  onRefresh={refreshStore} />
          }
          ListFooterComponent={<View style={{paddingBottom: "30%"}}/>}
          />
        }
      </View>


      <View style={styles.addBtn}>
        <TouchableOpacity style={styles.btnInner} onPress={addStore}>
          <Icon name="store" color="#ffffff" size={20} />
          <Text style={styles.addText}>Add New Store</Text>
        </TouchableOpacity>
      </View>

      {errMsg && <View style={styles.toastCover}>
        <View style={styles.errView} >
          <MIcon name="error-outline" size={22} color="#fff" />
          <Text style={styles.errText}>{errMsg}</Text>
        </View>
      </View>}


      {successMsg && <View style={styles.toastCover}>
        <View style={styles.sucView} >
          <FIcon name="trash-2" size={22} color="#fff" />
          <Text style={styles.errText}>{successMsg}</Text>
        </View>
      </View>}
    </View>
  );
};

export default MyStore;
