import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import {NativeViewGestureHandler} from "react-native-gesture-handler"

import CardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CardItems'


const SmallCard = (props) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
       <NativeViewGestureHandler>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.img}
        renderItem={CardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={150}
        lockScrollWhileSnapping={true}
        enableMomentum={false}
        autoplayInterval={5000}
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"normal"}
        inactiveSlideScale={1}
        autoplay={true}
        loop={true}
        initialNumToRender={1}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      </NativeViewGestureHandler>
      <Pagination
        dotsLength={props.img.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>

  )
}



export default SmallCard