import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { InputField } from "@Component";
import Icon from 'react-native-vector-icons/Ionicons';
import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers} from "@Request/Customer";
import EmptyActive from "./empty/emptyActive"
import data from "./completeData"
import FilterBottomSheet from "./FilterBottomSheet";
import CompletedDetail from "./CompletedDetail"

const Active = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('');
    const bottomSheetS = useRef();
    const flatListRef = React.useRef();
    const [showRetrieve, setShowRetrieve] = useState(false);
    const [passValue, setPassValue] = useState('');


    const { status, errors, customers } = useSelector((state) => state.customer);

    useEffect(()=> {
        setResult(props.result)
    },[props.result.length])

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
    const filterList = () => {
        bottomSheetS.current.show();
    
      };

      const changeDuration = (item) => {
        setDuration(item)
   
      }
    
 
    
     const applyFilter =(item)=>{
      sortOrder(item)
      bottomSheetS.current.close()
     }

     const sortOrder = (id) => {
        
      let customer = [...data];

      if (id === 1) {
          let searched = customer.sort((a, b) => { return  a.name.localeCompare(b.name) })
          toTop()
          return setResult(searched);
      } else if (id === 2) {
          let searched = customer.sort((a, b) => { return new Date(b.created_at) - new Date(a.created_at) })
          toTop()
          return setResult(searched)
      } 
      else if (id === 3) {
        let searched = customer.sort((a, b) => { return new Date(b.profession) - new Date(a.profession) })
        toTop()
        return setResult(searched)
    } 
      else if (id === 4) {
          let searched = customer.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
          toTop()
          return setResult(searched)
      }
  }

    const openSheetSort = () => {
        setSheetOpen(true)
        bottomSheetS.current.show();
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }, []);


    const request = (item) => {
      setPassValue(item);
     setShowRetrieve(true)
    
    }
  
    const closeBrief =() => {
      setShowRetrieve(false)
    }
  

    useEffect(() => {

      if (search.length) {
  
        filterResult();
  
      }
  
    }, [search.length]);


  const filterResult = () => {

      let searched = data?.filter(val => {
  
        if (val?.name !== null && val?.name.toLowerCase().includes(search.toLowerCase())) {
  
          return val
        }
      });
  
      return setResult(searched)
  
    };



      const ListView = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => request(item)}  key={item.id}>
              <View style={styles.cardBottom}>
                    <View style={styles.bottomCardInner}>
                      <View style={styles.imgCoverComplete}>
                      <Image
                        style={styles.barImg}
                        source={{uri: item.img}}
                      />
                     
                      </View>
                      <View style={styles.bottomCardLeft}>
                        <Text style={styles.barTextRed}> Name:{item.name}</Text>
                        <Text style={styles.barTextSm}>PROFESSION:{item.profession}</Text>
                        <Text style={styles.barTextSm}>Service Fee: ₦{item.service_fee}</Text>
                       <View style={{flexDirection: 'row'}}>
                        <View style={styles.iconCoverCanPink}>
                          <Zcon name='calendar-clock' color="#ff9900" size={18} />
                          <Text style={styles.barTextSmSucStart}>{item.start_date}</Text>
                      </View>
                     
                      <View style={styles.iconCoverCanSuc}>
                          <Zcon name='calendar-check' color="#00b300" size={18} />
                          <Text style={styles.barTextSmSuc}>{item.end_date}</Text>
                      </View>
                     </View>
                     <View style={styles.iconCoverCanRight}>
                     <Image source={require('@Assets2/image/feedback.png')} style={styles.smImg} />
                          <Text style={styles.barTextSmRight}>{item.review}</Text>
                      </View>
                      </View>
      
                      
                    </View>
                    
                    <View>
                      
                    </View>
                  </View>
    
       </TouchableOpacity>
           
       )
    };
     


    return (
              <View style={styles.container}>
            {
                customers?.pending?.users.length > 0 ?
         
             <View style={styles.searchContainer}>
             <View style={styles.searchSection}>
                        <Icon name="md-search-outline" color="rgba(90, 93, 114, 1)" size={20} style={styles.searchIcon} />
                        <InputField
                            style={styles.inputField}
                            value={search}
                            placeholder="Search .."
                            placeholderTextColor="rgba(90, 93, 114, 1)"
                            onChangeText={(text) => setSearch(text)}
                        />
                    </View>
                    <View style={styles.filterCover}>
                    <TouchableOpacity style={styles.flexItems} onPress={filterList}>
                        <Text style={styles.filterCaption}>A - Z</Text>
                      <Icon name="chevron-down" color="rgba(90, 93, 114, 1)" size={20} style={styles.filterIcon} />  
                     
                    </TouchableOpacity>
                    </View>
              </View> 
              :
              null
            }
            <View style={styles.bottomCover}>
           
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={!result.length ? data : result }
                    keyExtractor={item => item.id}
                    ListEmptyComponent={EmptyActive}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
                    columnWrapperStyle={styles.column}
                    ref={flatListRef}
                    refreshControl= {
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                    }
                    extraData={customers?.active?.users}
                />


            </View>


            <FilterBottomSheet
                bottomSheet={bottomSheetS} 
                props={props}
                apply={applyFilter}
                objList = {(item) =>  setObjectValues(item)}
                sort={changeDuration}
                />
              <CompletedDetail
                  visibleRetrieve={showRetrieve}
                  returnBack={() => setShowRetrieve(false)}
                  title="Completed Job Details"
                  message={passValue}
                  submit={closeBrief}
                />

        </View>
    )
};

export default Active;