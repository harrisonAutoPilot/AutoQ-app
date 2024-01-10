import React, {useCallback, memo, useRef, useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import styles from './style';
import data from './data';
import Logo from "../../component/logo"
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import {LoginBottomSheet} from '@Component';

const Slider = memo(function Slide({data}) {
  const {width, height} = Dimensions.get('window');

  return (


    <View style={styles.contentCover}>
  

  <View style={styles.imgCover}>
  <Image style={styles.imageStyle} source={data.img} />
  </View>
  <View style={styles.wrapper}>
        <Text style={styles.header}>{data.title}</Text>
        <Text style={styles.paragraph}>{data.desc}</Text>
      </View>
    </View>
  );
});

function Pagination({index, props}) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {data.map((_, i) => {
        //  {index === 2 ? props.navigation.navigate("Onboarding") : null }
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Slide(props) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const bottomSheet = useRef();

  const callLogin = () =>{
    bottomSheet.current.show()
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

  const goNext = () =>{
    bottomSheet.current.close()
    wait(1000).then(() => {  props.navigation.navigate("Root") })
  
  }

 

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <Slider data={item} />;
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.carousel}
          renderItem={renderItem}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          {...flatListOptimizationProps}
        />
        <Pagination index={index}></Pagination>
       <View style={styles.logoCover}>
          <Logo />
       </View>
    
      
        <TouchableOpacity style={styles.startedButton} onPress={callLogin}>
          <Text style={styles.startedText}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.downCover}>
 <View style={styles.downTitle}>
  <View style={styles.mdLine}/>
  <Text style={styles.followText}>Follow Us On</Text>
  <View style={styles.mdLine}/>
 </View>

 <View style={styles.socialContainer}>
    <View style={styles.socialCover}>
    <Image 
      source={require("@Assets/image/facebook.png")}
      style={styles.logoImg}
      />
    </View>
    <View style={styles.socialCover}>
    <Image 
      source={require("@Assets/image/google.png")}
      style={styles.logoImg}
      />
    </View>
    <View style={styles.socialCover}>
    <Image 
      source={require("@Assets/image/twitter.png")}
      style={styles.logoImg}
      />
    </View>
 </View>
        </View>
              <View style={styles.arrowCover1}>
              <View>
              <Text style={styles.swipeText1}>Powered by</Text>
              </View>
              <TouchableOpacity  onPress={() => props.navigation.navigate("Home")}>
              <Text style={styles.swipeText2}>Opay</Text>
              </TouchableOpacity>
              </View>
              <LoginBottomSheet
               bottomSheet={bottomSheet}
               next={goNext}
               closeSheet={() =>  bottomSheet.current.show()} />  
    </View>
    </>
  );
}
