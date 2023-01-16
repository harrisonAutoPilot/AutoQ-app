import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

import styles from './style';
import {searchProducts} from '@Request/Product';
import {
  SuccessMsgViewTwo,
  COHeader as Header,
  EmptyCategory,
} from '@Component/index';
import BottomSheet from '@Screen/Overlay';
import List from './ListView';
import ProductPlaceholderCard from './ProductPlaceholderCard';
import {listCart} from '@Request/Cart';
import data from './data';
import {cleanup, cleanProducts} from '@Store/Product';
import {getPaymentOptions} from '@Request/paymentOptions';
import DealsModal from './DealSheet';
import { Portal } from 'react-native-portalize';
// this is where i start my endpoint calls
import {getDeals} from '@Request/Deal';
// new
import Deals from './Types/Deals';
import Kessington from './Types/Kessington'
import BackInStock from './Types/BackInStock';
import PopularItems from './Types/PopularItems';
import NewItems from './Types/NewItems'

const GenProducts = props => {
  const dispatch = useDispatch();

  const {status, errors, deals, addDealStatus, dealsItems, addDeal} =
    useSelector(state => state.deal);

  const {popularProducts, popularProductItems} = useSelector(
    state => state.popularProduct,
  );

  const [err, setErr] = useState('');

  const [refreshing, setRefreshing] = useState(false);

  const [refreshingKess, setRefreshingKess] = useState(false);

  const [refreshingBackInStock, setRefreshingBackInStock] = useState(false);

  const [refreshingPopularProducts, setRefreshingPopularProducts] = useState(false);

  const [refreshingNewProducts, setRefreshingNewProducts] = useState(false);

  const [dealsResult, setDealsResult] = useState({});


//   neww
const [productDetails, setProductDetails] = useState({});

const [
    kessProductDetails, setKessProductDetails] = useState({});

  const [result, setResult] = useState({});

  const [active, setActive] = useState('1');

  const [category, setCategory] = useState('Deals');

  const [successMsg, setSuccessMsg] = useState('');

  const [visible, setVisible] = useState(false);

  const [visibleDeals, setVisibleDeals] = useState(false);

  const [searchArray, setSearchArray] = useState([]);

  const [selectArray, setSelectArray] = useState([]);

  const bottomSheetDeals = useRef();

  const bottomSheet = useRef();

  const {items} = useSelector(state => state.cart);



  useEffect(() => {
    setActive('1');
    dispatch(getDeals(1));

  }, []);

  const selectBtn = id => {
    setActive(id);
  };

  const selectCategory = name => {
    setCategory(name);
  };

  const openSheet = () => {

    setVisible(true);

    bottomSheet.current?.present();

};


const openDealsSheet = () => {
    bottomSheetDeals.current?.present();
    setVisibleDeals(true);


};



  useEffect(() => {
    if (status === 'failed' && props.navigation.isFocused()) {
      setErr(errors?.msg);
    }
  }, [errors]);



  const closeSheet = () => {
    setVisible(false);
    bottomSheet.current.close();
  };

  const closeSheetDeals = () => {
    bottomSheetDeals.current.close();
    setVisibleDeals(false);
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const ScrollList = (props, index) => {
    const item = props.item;
    const redirectToNavigationDetail = props.navigation;

    return (
      <>
        {active === item.id ? (
          <TouchableOpacity
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}>
            <View style={styles.miniCard}>
              <Text style={styles.miniCardText}>{item.menu}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}>
            <View style={styles.miniCardInactive}>
              <Text style={styles.miniCardTextInactive}>{item.menu}</Text>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };




  const goBack = () => props.navigation.navigate('Catalogue');
  const redirectToFilter = () =>
    props.navigation.navigate('Filter', {
      display_name: props.route.params?.display_name,
      category: props.route.params?.category,
      name: 'Product',
    });
  const redirectToSearch = () => props.navigation.navigate('Search');

  const toastConfig = {
    error: () => (
      <View
        style={[
          globalStyles.errMainView,
          globalStyles.marginTop,
          {marginHorizontal: 20},
        ]}>
        <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
      </View>
    ),

    tomatoToast: () => <SuccessMsgViewTwo title={successMsg} />,
  };

 





  const openCart = () => props.navigation.navigate('Cart');

  return (
    <View style={styles.body}>
      <Header
        title={
          props.route.params?.display_name
            ? props.route.params?.display_name
            : 'All Product'
        }
        styleView={styles.body2}
        onPress={goBack}
        titleCover={styles.titleCover}>
        <View style={styles.headerSubIconView}>
          <TouchableOpacity onPress={redirectToSearch}>
            <IonIcon name="search" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerSubLastIconView}
            onPress={openCart}>
            <IonIcon name="md-cart-outline" size={20} color="#fff" />
            {items.carts && items.carts.to > 0 ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{items?.carts?.total}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </Header>

      {err ? <Toast config={toastConfig} /> : null}
      {successMsg ? <Toast config={toastConfig} /> : null}

      <View style={styles.mainBody}>
        <View style={styles.miniHeader}>
          <FlatList
            horizontal
            data={data}
            renderItem={ScrollList}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            scrollEnabled
          />
        </View>

        {err ? (
          <View style={[globalStyles.errMainView, {marginBottom: 10}]}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
          </View>
        ) : null}
      </View>

                <View style={{flex:1}}>
                {
                    active === "1" ?
                    <Deals 
                    data={setProductDetails}
                    openSheet={openDealsSheet} 
                    creditType={
                        props.route.params?.creditType ? props.route.params.creditType : ''}
                    />
                    : active  === "2" ?
                    <Kessington 
                    data={setKessProductDetails}
                    openSheet={openSheet} 
                    creditType={
                        props.route.params?.creditType ? props.route.params.creditType : ''}
                    />

                    : active === "3" ?
                    <BackInStock 
                    data={setKessProductDetails}
                    openSheet={openSheet} 
                    creditType={
                        props.route.params?.creditType ? props.route.params.creditType : ''}
                    />
                    : active === "4" ?
                    <PopularItems 
                    data={setKessProductDetails}
                    openSheet={openSheet} 
                    creditType={
                        props.route.params?.creditType ? props.route.params.creditType : ''}
                    />
                    :
                    <NewItems 
                    data={setKessProductDetails}
                    openSheet={openSheet} 
                    creditType={
                        props.route.params?.creditType ? props.route.params.creditType : ''}
                    />
                  
                   
                    
                
                }

                    </View>

   

         {dealsItems.length > 0 ?
    
          <DealsModal
            bottomSheetDeals={bottomSheetDeals}
            onPress={closeSheetDeals}
            result={productDetails && productDetails}
            isVisibleDeals={visibleDeals}
          />
      :
        null

        }
    
        <BottomSheet
          bottomSheet={bottomSheet}
          onPress={closeSheet}
          result={kessProductDetails}
          isVisible={visible}
        />
    

     


    </View>
  );
};

export default GenProducts;
