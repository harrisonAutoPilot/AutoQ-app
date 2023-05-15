import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  FlatList,
  RefreshControl,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Acon from 'react-native-vector-icons/AntDesign';
import {searchProducts} from '@Request/Product';
import CatelogueCardPlaceholder from './CatelogueCardPlaceholder';
import {InputField, Header} from '@Component';
import {browseCategories} from '@Request/Category';
import PriceBottomSheet from "./PriceBottomSheet"
import styles from './style';


const ViewTypes = {
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

const Catalogue = props => {
  const dispatch = useDispatch();
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCategoryArray, setSearchCategoryArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState([])
  const [priceCat, setPriceCat] = useState("CHEMIST")
  const [objectValues, setObjectValues] = useState()
  const [err, setErr] = useState('');
  const flatListRef = useRef();

  const bottomSheet = useRef();

  const toTop = () =>
    flatListRef.current.scrollToOffset({animated: true, offset: 0});

  const {categories, status} = useSelector(state => state.category);
  const {searchedProducts} = useSelector(state => state.product);
  const openNotification = () => props.navigation.navigate('Notification');
  const openCart = () => props.navigation.navigate('Cart');
  const openDrawer = () => props.navigation.openDrawer();
  const redirectToSearch = () => props.navigation.navigate('Search', {objectValues});
  const gotoGen = () =>  props.navigation.navigate("GenProducts")
   
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
    if (searchCategory.length) {
      searchCategoryItem();
    } else if (!searchCategory.length) {
      setSearchCategoryArray([]);
    }
  }, [searchCategory]);



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
  }, []);



  const getAllProducts = (category, display_name, id) => {
     props.navigation.navigate('Product', {
      category,
      priceCat,
      display_name,
      category_id:id, 
      objectValues,
      
    })

}



  const dismissKeyboard = () => Keyboard.dismiss();

  const staticObj = {
    id: 354667, 
    category: 'All Products', 
    image_url: "https://cdn.remedial.health/product_images/pbeX5jDYmP4xCaMdZmKvQYYkqCAxbatgpcTkUqPO29041.webp",
    display_name: "All Products",
    name:"All Product"
  };

  const callPrice = () => {
    bottomSheet.current.show();

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


  const ListView = ({item}) => (
    

     <View>
      <TouchableOpacity
        style={[styles.listContainer, styles.elevation]}
        onPress={() =>
          
          {item.id === 354667 ? 
            gotoGen()
            :
           getAllProducts(item.name, !searchCategoryArray.length ? item.display_name  : item.category?.display_name,item.id)
          }
        }>
        <View style={styles.listContainerImageView}>
          <Image
            source={{uri: `${item.image_url}`}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.listContainerTextView}>
          <View style={styles.listContainerInnerTextView}>
            <Text style={[styles.title]}>
              {!searchCategoryArray.length
                ? item.display_name
                : item.category?.display_name}
            </Text>
          </View>
          <View>
            <Icon name="chevron-right" size={18} color="#757575" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.main}>
      <Header
        title="Catalog"
        style={styles.btnText}
        notify={openNotification}
        cart={openCart}
        drawer={openDrawer}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <TouchableOpacity style={styles.blueColor} onPress={redirectToSearch}>
            <View style={[styles.searchSection]}>
              <Icon
                name="search"
                color="rgba(255, 255, 255, 0.8)"
                size={24}
                style={styles.searchIcon}
              />
              <InputField
                style={styles.inputField}
                value={searchCategory}
                placeholder="Search product by name"
                placeholderTextColor="rgba(255, 255, 255, 0.8)"
                onChangeText={text => setSearchCategory(text)}
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </Header>

      <View style={styles.mainBody}>
        <Text style={globalStyles.title}>PRODUCT CATALOG</Text>
        <View style={styles.inputHolder2}>
          <View style={styles.labelView}>
              <Text style={styles.label}>Select Product Pricing type</Text>
          </View>
            <TouchableOpacity style={styles.selectCover} onPress={callPrice}>
              <Text style={styles.selectOption}>{priceCat}</Text>
              <Acon name='caretdown' color="#79747E" size={14} />
            </TouchableOpacity>

       </View>
        {err ? (
          <View style={globalStyles.errMainView}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
          </View>
        ) : null}

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
      </View>

      <PriceBottomSheet
       bottomSheet={bottomSheet} 
       props={props}
       objList = {(item) =>  setObjectValues(item)}
       sort={sortPrice}
       />
    </View>
  );
};

export default Catalogue;
