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

// this is where i start my endpoint calls
import {getDeals} from '@Request/Deal';
import {getKessington} from '@Request/Kessington';
import {getBackInStock} from '@Request/BackInStock';
import {getPopularProducts} from '@Request/PopularProducts';
import {getNewProducts} from '@Request/NewProducts';

import {cleanupDealStatus} from '@Store/Deal';

const GenProducts = props => {
  const dispatch = useDispatch();

  const {kessingtonStatus, kessingtons, kessingtonItems} = useSelector(
    state => state.kessington,
  );

  const {bisStatus, backInStocks, backInStocksItems} = useSelector(
    state => state.backInStock,
  );

  const {newProductStatus, newProducts, newProductItems} = useSelector(
    state => state.newProduct,
  );

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

  console.log('the backIn kessington22', kessingtons.current_page);

  useEffect(() => {
    setActive('1');
    dispatch(getDeals(1));
    dispatch(getKessington());
    dispatch(getBackInStock());
    dispatch(getPopularProducts());
    dispatch(getNewProducts());

    dispatch(listCart(1));

    dispatch(getPaymentOptions());

    return () => {
      dispatch(cleanup());

      dispatch(cleanProducts());
    };
  }, []);

  const selectBtn = id => {
    setActive(id);
    console.log('the id', id);

    if (id === '1') {
      setSelectArray(dealsItems);
    } else if (id === '2') {
      setSelectArray(kessingtonItems);
    } else if (id === '3') {
      setSelectArray(backInStocksItems);
    } else if (id === '4') {
      setSelectArray(popularProductItems);
    } else if (id === '5') {
      setSelectArray(newProductItems);
    } else {
      setSelectArray([]);
    }
  };
  const selectCategory = name => {
    setCategory(name);
    //console.log("you selected:" + name);
  };

  const loadMore = () => {
    dispatch(getDeals(deals?.current_page + 1));
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

  // const refreshView = useCallback(() => {
  //     setErr("");
  //     if(active === "1"){
  //         setRefreshing(true);
  //         dispatch(getDeals(1))
  //     }else if (active === "2"){
  //         setRefreshing(true);
  //         dispatch(getKessington())
  //     }else if (active === "3"){
  //         setRefreshing(true);
  //         dispatch(getBackInStock())
  //     }else if (active === "4"){
  //         setRefreshing(true);
  //         dispatch(getPopularProducts())
  //     }else if (active === "5"){
  //         setRefreshing(true);
  //         dispatch(getNewProducts())
  //     }else{
  //         setRefreshing(false);
  //     }
  //     wait(1000).then(() => setRefreshing(false));
  // }, []);

  const refreshViewDeals = useCallback(() => {
    setErr('');
    setRefreshing(true);
    dispatch(getDeals(1));

    wait(1000).then(() => setRefreshing(false));
  }, []);

  const refreshViewKess = useCallback(() => {
    setErr('');
    setRefreshingKess(true);
    dispatch(getKessington());

    wait(1000).then(() => setRefreshing(false));
  }, []);

  const refreshViewBackInStock = useCallback(() => {
    setErr('');
    setRefreshingBackInStock(true);
    dispatch(getBackInStock());

    wait(1000).then(() => setRefreshingBackInStock(false));
  }, []);

  const refreshViewPopularProducts = useCallback(() => {
    setErr('');
    setRefreshingPopularProducts(true);
    dispatch(getPopularProducts());
    wait(1000).then(() => setRefreshingPopularProducts(false));
  }, []);

  const refreshViewNewProducts = useCallback(() => {
    setErr('');
    setRefreshingNewProducts(true);
    dispatch(getNewProducts());

    wait(1000).then(() => setRefreshingNewProducts(false));
  }, []);

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

  const ListViewDeals = ({item}) => (
    <View style={styles.listItem}>
      <View style={styles.imgCard}>
        {/* <Image
                        source={{ uri: `${URL}${item?.product?.product_images[0]?.url}` }}
                        style={styles.dealImg}
                    /> */}
        {/* <Image source={require("@Assets/image/dealRed.png")} style={styles.dealTagImg} /> */}
      </View>
      <View style={styles.textCover}>
        <Text style={styles.redText} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.bgText}>{item.product?.name}</Text>
      </View>

      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => filterProductD(item.id)}>
        <Text style={styles.btnText}>See Deal</Text>
      </TouchableOpacity>
    </View>
  );

  const filterProductD = id => {
    let resultArray = dealsItems.filter(item => item.id === id)[0];

    console.log('the filter', resultArray);
    bottomSheetDeals.current?.present();
    setVisibleDeals(true);
    return setResult(resultArray);
  };

  // Get the ID of the product to filter and show the Modal
  const getItem = item => {
    console.log('check for active again', active);
    if (active === '1') {
      filterProductDeals(item.id);
      bottomSheetDeals.current?.present();
      setVisibleDeals(true);
    } else {
      filterProduct(item.id);
      bottomSheet.current?.present();
      setVisible(true);
    }
  };

  console.log('the results...', result);

  console.log('the active...', active);

  console.log('the result yyyyy', category);

  // Filter Products and show them in the Modal
  const filterProduct = id => {
    let resultArray = selectArray.filter(item => item.id === id)[0];
    return setResult(resultArray);
  };

  const filterProductDeals = id => {
    let resultArray1 = dealsItems.filter(item => item.id === id)[0];
    // console.log("the active 1", resultArray)
    return setDealsResult(resultArray1);
  };

  const ListView = ({item}) => {
    return (
      <List
        item={item}
        productType={active}
        getItem={() => getItem(item)}
        creditType={
          props.route.params?.creditType ? props.route.params.creditType : ''
        }
      />
    );
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


      {
        active === "1" ?
        <>
         {status === 'idle' || status === 'pending' ? (
        <ProductPlaceholderCard />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dealsItems}
          keyExtractor={item => item.id}
          renderItem={ListView}
          ListEmptyComponent={EmptyCategory}
          ListFooterComponent={<View style={{height: 40}} />}
          columnWrapperStyle={styles.column}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshViewDeals}
            />
          }
          initialNumToRender={8}
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index,
            index,
          })}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (active === '1' && deals?.current_page < deals?.last_page) {
              loadMore();
              console.log('the page length', dealsItems.length);
            }
          }}
        />
      )}
        </>
        :
        <>
        {
            status ==="idle" || status === "pending" ?
            <ProductPlaceholderCard />
            :
            <FlatList
                showsVerticalScrollIndicator={false}
                data={selectArray}
                keyExtractor={item => item.id}
                renderItem={ListView}
                ListEmptyComponent={EmptyCategory}
                ListFooterComponent={<View style={{ height: 40 }} />}
                columnWrapperStyle={styles.column}

                refreshControl={   
                     active === "2" ? 
                    <RefreshControl refreshing={refreshingKess} onRefresh={refreshViewKess} />
                    : active === "3" ?
                    <RefreshControl refreshing={refreshingBackInStock} onRefresh={refreshViewBackInStock} />
                    : active === "4" ?
                    <RefreshControl refreshing={refreshingPopularProducts} onRefresh={refreshViewPopularProducts} />
                    : active === "5" ? 
                    <RefreshControl refreshing={refreshingNewProducts} onRefresh={refreshViewNewProducts} />
                    :
                    null
                }
                         
                initialNumToRender={8}
                getItemLayout={(data, index) => (
                    { length: 100, offset: 100 * index, index }
                )}
                onEndReachedThreshold={0.5}

                onEndReached={() => {  
                if(active === "1" && deals?.current_page < deals?.last_page) {
                    loadMore()
                    console.log("the page length",dealsItems.length )
                }
                   
                }}

                    />
                    }
       </>
      }

     

      {active === '1' ? (
        <DealsModal
          bottomSheetDeals={bottomSheetDeals}
          onPress={closeSheetDeals}
          result={dealsResult}
          isVisibleDeals={visibleDeals}
        />
      ) : null}

      {active != '1' ? (
        <BottomSheet
          bottomSheet={bottomSheet}
          onPress={closeSheet}
          result={result}
          isVisibleDeals={visible}
        />
      ) : null}
    </View>
  );
};

export default GenProducts;