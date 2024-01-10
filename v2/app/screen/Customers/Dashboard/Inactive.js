import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { InputField } from "@Component";
import Icon from 'react-native-vector-icons/Ionicons';
import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers } from "@Request/Customer";
import EmptyPending from "./empty/emptyPending"
import FilterBottomSheet from "./FilterBottomSheet";
import data from "./data"


const InActive = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()

    const { status, errors, customers } = useSelector((state) => state.customer);

    const [objectValues, setObjectValues] = useState()
    const [duration, setDuration] = useState("6 Months")
  
      const returnBack = () => {
          props.navigation.goBack();
        };
  
        const filterList = () => {
          bottomSheetS.current.show();
      
        };
  
     
       const applyFilter =(item)=>{
        sortOrder(item)
        bottomSheetS.current.close()
     
       }

    useEffect(()=> {
        setResult(props.result)
    },[props.result.length])

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const closeSheetSort = () => {
        bottomSheetS.current.close();
        setSheetOpen(false)
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


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }, []);


    const ListView = ({ item, index }) => {

        return (
             <TouchableOpacity onPress={() => props.details(item)}  key={item.id}>

           <View style={styles.cardBottom}>
                    <View style={styles.bottomCardInner}>
                      <View style={styles.imgCover}>
                      <Image
                        style={styles.barImg}
                        source={{uri: item.img}}

                      />
                      {/* <View style={{width:100}}>
                      <Text style={styles.comText}>Completed Jobs</Text>
                      <Text style={styles.comCount}>{count}</Text>
                      </View> */}
                      </View>
                      <View style={styles.bottomCardLeft}>
                        <Text style={styles.barTextRed}> Name: {item.name}</Text>
                        <Text style={styles.barTextSm}>PROFESSION: {item.profession}</Text>
                        <Text style={styles.barTextSm}>Service Fee: ₦{item.service_fee}</Text>
                       
                        <View style={styles.iconCoverCan}>
                          <Zcon name='calendar' color="red" size={20} />
                          <Text style={styles.barTextSmRed}>{item.date}</Text>

                      </View>
                      </View>
      
                      
                    </View>
                    
                    <View>
                      
                    </View>
                  </View>    
        </TouchableOpacity>
            
        )
    };

    // const CardList = useCallback(({
    //     imageOne,
    //     imageTwo,
    //     title,
    //     count,
    //     style,
    //     styleOne,
    //     onPress,
    //   }) => (
    //     <TouchableOpacity style={style} onPress={onPress}>
    //        <View style={styleOne}>
    //                 <View style={styles.bottomCardInner}>
    //                   <View style={styles.imgCover}>
    //                   <Image
    //                     style={styles.barImg}
    //                     source={imageOne}
    //                   />
    //                   {/* <View style={{width:100}}>
    //                   <Text style={styles.comText}>Completed Jobs</Text>
    //                   <Text style={styles.comCount}>{count}</Text>
    //                   </View> */}
    //                   </View>
    //                   <View style={styles.bottomCardLeft}>
    //                     <Text style={styles.barTextRed}> Name: {title}</Text>
    //                     <Text style={styles.barTextSm}>PROFESSION: MOBILE MECHANICS</Text>
    //                     <Text style={styles.barTextSm}>Service Fee: ₦700</Text>
                       
    //                     <View style={styles.iconCoverCan}>
    //                       <Zcon name='calendar' color="red" size={20} />
    //                       <Text style={styles.barTextSmRed}>3 Weeks ago</Text>

    //                   </View>
    //                   </View>
      
                      
    //                 </View>
                    
    //                 <View>
                      
    //                 </View>
    //               </View>
    //     </TouchableOpacity>
    //   ), []);
      

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
                            placeholder="Search "
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
                    // data={data}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={EmptyPending}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
                    // columnWrapperStyle={styles.column}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />

                    }
                    ref={flatListRef}
                    extraData={data}
                />
                   
                


            {/* <CardList
            //   onPress={gotoDetails}
              title ="Chukwuemeka Oguejiofor"
              count={14}
              styleOne={styles.cardBottom}
              imageOne={require('@Assets2/image/portrait-of-real-black-african-man-with-no-expression-for-id-or-passport-photo-194405582.webp')}
              
            /> */}
            </View>
            
            <FilterBottomSheet
                bottomSheet={bottomSheetS} 
                props={props}
                apply={applyFilter}
                // objList = {(item) =>  setObjectValues(item)}
                // sort={changeDuration}
                />
        </View>
    )
};

export default InActive;