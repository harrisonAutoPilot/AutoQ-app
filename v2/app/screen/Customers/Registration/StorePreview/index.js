import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

import {TransactionHeaderNew, OnboardinBtn} from '@Component2';
import styles from './style';
import ViewDocument from '@Screen/ViewDocument';

const StorePreview = props => {
  const [showDocument, setShowDocument] = useState(false);
  const [storeImg, setStoreIMg] = useState('');
  const details = props.route.params.images2;

  const goBack = () => props.navigation.goBack();


  const viewDoc = img => {
    setShowDocument(true);
    setStoreIMg(img);
  };

  const RenderItem = ({item, index}) => (
    <TouchableOpacity
    key={index}
      style={styles.smCardCover}
      onPress={() => viewDoc(item.uri)}>
      <View style={styles.smCard}>
        <Image source={{uri: item?.uri}} style={styles.smImg} /> 
      </View>
      <Image
          style={styles.zoomImg}
          source={require('@Assets2/image/zoom-in.png')}
        />
      {/* <TouchableOpacity onPress={() => viewDoc(item.uri)}>
                <View>
                    <Text style={styles.viewText}>View</Text>
                </View>
            </TouchableOpacity> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.view}>
      <TransactionHeaderNew title="Store Images" onPress={goBack} />
<View style={styles.topCover}>

<View style={styles.titleCover}>
        <Text style={styles.countText}>{details.length} Store image(s)</Text>
      </View>
  
        <View style={styles.imgCardCover}>
          <FlatList
            
            data={details}
            numColumns={2}
            renderItem={RenderItem}
            keyExtractor={(details, index) => String(index)}

            ListFooterComponent={<View style={{height: 50}} />}
     
          />
            
           
       
        </View>
</View>

      <View style={styles.btnCover}>
        <OnboardinBtn
          title="Save"
          onPress={goBack}
          backgroundColor="#3353CB"
          color="#fff"
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

export default StorePreview;
