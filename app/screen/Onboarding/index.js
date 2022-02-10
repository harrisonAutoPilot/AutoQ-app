import React, { PureComponent } from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Slide from './Slide';
import { BannerData } from './data/BannerData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window"); 
import styles from "./style";
import Banner from './Banner';

import { Btn } from "@Component/index"


export default class Onboarding extends PureComponent{

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          deviceWidth :Dimensions.get('window').width,
          index:0,
          
      }
    }
    deviceWidth = Dimensions.get('window').width
    
    _renderItem({item,index}){
        return (
          <View style={{width:wp('100%')}}>
            <Slide item ={item}/>
          </View>

        )
    }
  //   componentDidMount() {
  //     if (this.state.activeSlide === BannerData.length - 1) {
  //         setTimeout(() => {
  //           this.carousel.current.snapToItem(0);
  //         }, 3500)
  //         this.state.activeSlide
  //     }
  // };
   
    get pagination () {
      const { entries, activeSlide, index} = this.state;
    
      return (
        <Pagination
        dotsLength={BannerData.length}
        activeDotIndex={this.state.activeIndex}
        ref={ref => this.carousel = ref}
        containerStyle={{width:40, marginLeft:35, marginTop:-40}}
        dotStyle={{
          width: 15,
          height: 8,
          borderRadius: 10,
          marginHorizontal: 0,
          backgroundColor: '#000',
        }}
       
        inactiveDotStyle={{
          backgroundColor: 'black',
          width: 10,
          height:10,
          marginHorizontal: 0,
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      );
  }


    render() {
        return (

            <View >
              
                  <StatusBar hidden />
                 <Carousel
                  layout={"default"}
                  carouselRef={ref => this.carousel = ref}
                  data={BannerData}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('100%')}
                  layoutCardOffset={9}
                  lockScrollWhileSnapping={true}
                  // lockScrollWhileSnapping={true}
                  enableMomentum={false}
                  autoplayDelay={500}
                  autoplayInterval={5000}
                  snapToAlignment="center"
                  scrollEventThrottle={16}
                  decelerationRate={"normal"}
                  inactiveSlideScale={1}
                  autoplay={true}
                  initialNumToRender={1}
                  loop={true}
                  useScrollView={true}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  {this.pagination }
                  
                   
                {/* <Banner data={BannerData}/> */}
                  <View style={styles.secondHeadingView} >
                    <View style={styles.downBtn}>
                        <Btn style={styles.btn} onPress={() => this.props.navigation.navigate("Login")} title={"Log In"} styles={styles.btnText} />
                    </View>

                        <Btn onPress={() => this.props.navigation.navigate("PreRegister")} title={"Create Account"} style={styles.registerBtn} styles={styles.btnSkipText} />
                        </View>           
                
            </View>
        );
    }
}
