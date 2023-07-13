import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { StoreHeader} from "@Component2";
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewDocument from "../ViewDocument"


const StoreDetails = (props, navigation) => {
 const items = props.route.params.item
 const [showDocument, setShowDocument] = useState(false);
 const [storeImg, setStoreIMg] = useState("");
  const returnBack = () => {
    props.navigation.goBack()
  }


  // console.log("the item", items)

const StoreImg = ({ item }) => (
  <TouchableOpacity onPress={() => viewDoc(item.url)}>
   <Image source={{ uri: `${item.url}`}} style={styles.photoCover}/>
  </TouchableOpacity>
);

const viewDoc = (img) => {
  setShowDocument(true);
  setStoreIMg(img)
}

  return (
    <View style={styles.container}>
        <StoreHeader title="Store Details"  onPress={returnBack} />
      
   <View style={styles.titleCover}>
    <Text style={styles.titleText}>STORE INFORMATION</Text>
   </View>
       <View style={styles.cardCover}>
        <View style={styles.iconCover}>
          <Icon name='store' color="#767680" size={24} />
        </View>
       <View style={styles.contentCover}>
         <Text style={styles.nameText}>Store Name</Text>
        <Text style={styles.addressText}>{items?.name}</Text>
       </View>
      </View>

      <View style={styles.cardCover}>
        <View style={styles.iconCover}>
          <Icon name='map-marker-outline' color="#767680" size={24} />
        </View>
       <View style={styles.contentCover}>
         <Text style={styles.nameText}>Store Address</Text>
        <Text style={styles.addressText}>{items?.address}</Text>
       </View>
      </View>

     <View style={styles.photoTitleCover}>
      <Text style={styles.photoTitleText}>STORE PHOTOS</Text>
     </View>

        <View style={styles.photoContainer}>
            <FlatList
                //  horizontal={true}
                data={items?.store_images}
                renderItem={StoreImg}
                keyExtractor={item => item.id}
                numColumns={3}
                ListFooterComponent={<View style={{ height: 50 }} />}
                showsHorizontalScrollIndicator={false}

            />
           
        </View>

        <ViewDocument
                visibleDocument={showDocument}
                returnBack={() => setShowDocument(false)}
                img={storeImg}
            />

        </View>
  
  );
};

export default StoreDetails;
