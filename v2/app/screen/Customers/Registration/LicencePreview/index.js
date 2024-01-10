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

const LicencePreview = props => {
  const [showDocument, setShowDocument] = useState(false);
  const [storeImg, setStoreIMg] = useState('');
  const details = props.route.params.images;

  const goBack = () => props.navigation.goBack();


  const viewDoc = img => {
    setShowDocument(true);
    setStoreIMg(img);
  };

  const RenderItem = ({item, index}) => (
    <TouchableOpacity
      style={styles.smCardCover}
      onPress={() => viewDoc(item.uri)} key={index}>
      <View style={styles.smCard}>
        <Image source={{uri: item?.uri}} style={styles.smImg} />
      </View>
     
    </TouchableOpacity>
  );

  return (
    <View style={styles.view} >
      <TransactionHeaderNew title="Pharmacist License" onPress={goBack} />

      <View style={styles.titleCover}>
        <Text style={styles.countText}>{details.length} Licence image(s)</Text>
       
      </View>
      <ScrollView>
        <View style={styles.imgCardCover}>
          <FlatList
            horizontal={true}
            data={details}
            renderItem={RenderItem}
            keyExtractor={(details, index) => String(index)}
            ListFooterComponent={<View style={{height: 50}} />}
            showsHorizontalScrollIndicator={false}
          />
           {details.length > 1 ? (
          <Text style={styles.smText}>
            Scroll right to see more Licence images
          </Text>
        ) : null}
        </View>
      </ScrollView>
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

export default LicencePreview;
