import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Acon from 'react-native-vector-icons/Ionicons';

import BottomSheet from "./TabModules/component/BottomSheet"
import { cleanSearchProducts } from "@Store2/Product";
import CatelogueCardPlaceholder from './CatelogueCardPlaceholder';
import {InputFieldSearch, Header} from '@Component2';
import {browseCategories} from '@Request2/Category';
import {searchProducts} from '@Request2/Product';
import PriceBottomSheet from "./PriceBottomSheet"
import styles from './style';
import CatalogHeaderComponent from "./CatalogHeaderComponent"
import data from "./data"

// this is for the tab module
import Deals from './TabModules/Types/Deals';
import Kessington from './TabModules/Types/Kessington';
import BackInStock from './TabModules/Types/BackInStock';
import PopularItems from './TabModules/Types/PopularItems';
import NewItems from './TabModules/Types/NewItems';



const ViewTypes = {
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

const SpareParts = props => {

  const dispatch = useDispatch();
  const [active, setActive] = useState('1');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCategoryArray, setSearchCategoryArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState([])
  const [priceCat, setPriceCat] = useState("CHEMIST")
  const [category, setCategory] = useState('Categories');
  const [objectValues, setObjectValues] = useState()
  const [err, setErr] = useState('');
  const [trackSearchStatus, setTrackSearchStatus] = useState(false);
  const [kessProductDetails, setKessProductDetails] = useState({});
  const [productDetails, setProductDetails] = useState({});

  const [sortId, setSortId] = useState("");

  const [packId, setPackId] = useState("");

  const [storeId, setStoreId] = useState("");
  const flatListRef = useRef();

  const bottomSheet = useRef();

  const goBack = () =>{
    props.navigation.goBack()
  }

  const toTop = () => flatListRef.current.scrollToOffset({animated: true, offset: 0});
   

  const {categories, status} = useSelector(state => state.category);
  const {searchedProducts} = useSelector(state => state.product);
  const openNotification = () => props.navigation.navigate('Notification');
  const openCart = () => props.navigation.navigate('Cart');
  const openDrawer = () => props.navigation.openDrawer();
  const redirectToSearch = () => props.navigation.navigate('SearchProducts', {objectValues, priceCat});
  const gotoGen = () =>  props.navigation.navigate("GenProducts")
  const bottomSheetRef = useRef(null);

  const { items, listItems } = useSelector((state) => state.cart);
   
  const carouselRef = useRef(null);

  const sortPrice = (item) => {
    console.log("the item", item)
    setPriceCat(item)
    bottomSheet.current.close()
  }


  useEffect(() => {
    dispatch(browseCategories());
  }, []);

    useEffect(() => {
    
    if (searchCategoryArray.length) {
      setResult(searchCategory)
    } else if (categories.length) { 
      const result = [staticObj, ...categories]
      setResult(result)
    }else if (priceCat){
        // setPriceCat(priceCat)
        const result = [staticObj, ...categories]
        setResult(result)
      }
    
  }, [categories, searchCategoryArray, priceCat]);

  useEffect(() => {
    if (searchCategory.length) {
      searchCategoryItem();
    } else if (!searchCategory.length) {
      setSearchCategoryArray([]);
    }
  }, [searchCategory])




  const searchCategoryItem = () => {
    const search = searchCategory.toLowerCase();
    dispatch(searchProducts({search,type:objectValues.option, idd:objectValues.idd }))
    setSearchCategoryArray(searchedProducts);
    toTop();
  };


  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const refreshView = useCallback(() => {
    setRefreshing(true);
    dispatch(browseCategories());
    
    if(status === "success"){
      setRefreshing(false)
    }
  }, [status]);



  const getAllProducts = (category, display_name, id) => {
     props.navigation.navigate('Product', {
      category,
      priceCat,
      display_name,
      category_id:id, 
      objectValues,
      
    })
}



const selectBtn = id => {
  setActive(id);
};

const selectCategory = name => {
  setCategory(name);
};

const reset = () => {

  closeBottomSheet()
  
  dispatch(cleanSearchProducts());
  
  setPackId("");
  
  setSortId("");
  
  dispatch(searchProducts({  id: "", no: 1, search: "", pack: "", sort: "", type:"", option:"" }));
  
  };

// this is for the TabModules
const openSheet = item => {
  props.navigation.navigate('ProductDetail', {products: item});
};

const openDealDetails = item => {
  props.navigation.navigate('DealDetail', {products: item});
};

const closeBottomSheet = () => {

  bottomSheetRef.current?.close();

};

const applyFilter = () => {

closeBottomSheet();

dispatch(cleanSearchProducts());

dispatch(searchProducts({
    id: "",
    no: 1,
    search: "",
    pack: packId,
    sort: sortId,
    type: objectValues?.option,
    option:objectValues?.idd
}));
};


  const dismissKeyboard = () => Keyboard.dismiss();

  const staticObj = {
    id: 354667, 
    category: 'All Products', 
    image_url: "https://www.cpdbox.com/wp-content/uploads/SparePartsIFRSL.jpg",
    display_name: "Shaft Plate",
    name:"Shaft Plate"
  };




  useEffect(() => {
    if (searchCategoryArray.length) {
      setResult(searchCategory)
    } else if (categories.length) { 
      const result = [staticObj, ...categories]
      setResult(result)
    }else if (priceCat){
        // setPriceCat(priceCat)
        const result = [staticObj, ...categories]
        setResult(result)
      }
    
  }, [categories, searchCategoryArray, priceCat]);



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


  const ListView = ({item}) => (
  
     <View>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() =>
          
          {item.id === 354667 ? 
            gotoGen()
            :
           getAllProducts(item.name, !searchCategoryArray.length ? item.display_name  : item.category?.display_name,item.id)
          }
        }>
        <View style={styles.listContainerImageView}>

          <View style={styles.locCover}>
            <Acon name='location' color="#fff" size={10} />
            <Text style={styles.locText}>Abuja</Text>
          </View>

          <Image
            source={{uri: `${item.image_url}`}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.listContainerTextView}>
          <View style={styles.listContainerInnerTextView}>
            <Text style={[styles.title]} numberOfLines={1}>
              {!searchCategoryArray.length
                ? item.display_name
                : item.category?.display_name}
            </Text>
           <View style={styles.innerCard}>
            <Text style={styles.cardPrice}>₦40,000</Text>
            <Image source={require('@Assets2/image/free-delivery.png')} style={styles.deliveryImg} />
           </View>
          </View>
         
        </View>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
    <View style={styles.main}>
    <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={false} />
        <CatalogHeaderComponent
          title="Sparepart"
          onPress={openNotification}
          onPressBack={goBack}
          onPressCart={openCart}
          orderCount={items.carts?.total}
           />
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <TouchableOpacity style={styles.blueColor} onPress={redirectToSearch}>
            <View style={[styles.searchSection]}>
              <Icon
                name="search"
                color="rgba(255, 255, 255, 0.8)"
                size={18}
                style={styles.searchIcon}
              />
              <InputFieldSearch
                style={styles.inputField}
                value={searchCategory}
                placeholder="I am looking for"
                placeholderTextColor="rgba(118, 118, 128, 1)"
                onChangeText={text => setSearchCategory(text)}
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
  

      <View style={styles.mainBody}>
       
        {err ? (
          <View style={globalStyles.errMainView}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
          </View>
        ) : null}

            <View style={styles.adContainer}>
              <View style={styles.adLeft}>
                <Text style={styles.bgText}>Clearance Sales</Text>
                <Text style={styles.smText}>Discount up to <Text style={styles.colorText}>40%</Text></Text>
                <TouchableOpacity style={styles.shopBtn}>
                  <Text style={styles.shopText}>Shop Now</Text>
                </TouchableOpacity>
              </View>
           
              <Image
                style={styles.adImg}
                source={require('@Assets2/image/istockphoto-1300646016-612x612.png')} />
              
            </View>


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
            { active == "1" ?
          <>
        {categories && categories.length > 0 ? (
          <View style={styles.flexCover}>
             
           <FlatList
            columnWrapperStyle= {{flexWrap: "wrap", justifyContent:'space-between'}}
            showsVerticalScrollIndicator={false}
            numColumns = {2}
            vertical
            data={result}
            renderItem={ListView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
              }
            ListFooterComponent={<View style={{ height: 50 }} />}
            keyExtractor={item => item.id}

            /> 
          
        
          </View>
        ) : (
          <CatelogueCardPlaceholder />
        )}
        </>
        :
        <View style={styles.verticalCover}>
         {active === '2' ? (
          <Deals
            data={setProductDetails}
            dealInfo={openDealDetails}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '3' ? (
          <Kessington
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '4' ? (
          <BackInStock
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '5' ? (
          <PopularItems
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : (
          <NewItems
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        )}
        </View>
        }
</View>
<PriceBottomSheet
       bottomSheet={bottomSheet} 
       props={props}
       objList = {(item) =>  setObjectValues(item)}
       sort={sortPrice}
       />

        <BottomSheet
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={closeBottomSheet}
        setPack={setPackId}
        setSort={setSortId}
        setStore={setStoreId}
        packId={packId}
        sortId={sortId}
        storeId={storeId}
        objList = {(item) =>  setObjectValues(item)}
        reset={reset}
        apply={applyFilter}
            />
    </View>
    </SafeAreaView>
   
 
  );
};

export default SpareParts;
