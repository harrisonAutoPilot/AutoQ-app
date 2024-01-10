import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {SafeAreaView,ScrollView, StyleSheet,Keyboard,TouchableOpacity,ImageBackground, TouchableWithoutFeedback,Text,Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import styles from './style';
import SwipeButton from 'rn-swipe-button';
import ServiceSheet from './serviceSheet';
import AreaSheet from './areaSheet';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const WorkerDetails = (props) => {
  const spec = props.route.params.item
    const myApiKey = "AIzaSyBd1bJf4v8ryChX5uRBFrc7uZu6hwJxZxw";
    const [username, setUsername] = useState("");
    const [showZoom, setShowZoom] = useState(false);
    const [swipeRight,setSwipeRight] = useState(false)
    const [displayTime, setDisplayTime] = useState('')
    const bottomSheet = useRef();
    const bottomSheetBrand = useRef();
    const [time, setTime] = React.useState(props.initialValue || 600);
    const timerRef = React.useRef(time);
    const bottomSheetService = useRef();
    const bottomSheetArea = useRef();
  



       const goBack = () => props.navigation.goBack();

       const dismissKeyboard = () => Keyboard.dismiss();

        const switchZoom = () =>{
          setShowZoom(true)
        }

        const returnZoom = () =>{
          setShowZoom(false)
        }

        const callServices = () => {
          bottomSheetService.current?.show(); 
        }

        const callArea = () => {
          bottomSheetArea.current?.show(); 
        }
       
        const closeServices = () => {
          bottomSheetService.current?.close(); 
        }
       
        
         useEffect(() => {
            if(swipeRight){
              const timerId = setInterval(() => {
                timerRef.current -= 1;
                if (timerRef.current < 0) {
                  clearInterval(timerId);
                } else {
                  setTime(timerRef.current);
                }
              }, 1000);
              return () => {
                clearInterval(timerId);
              };
            }
            setDisplayTime(time)
          }, [swipeRight]);

          const children = ({ time }) => {
            const minutes = Math.floor(time / 60)
            const seconds = time % 60
          
            return `${minutes}:${seconds}`
          }


        const CheckoutButton = () => {
          return(
              <View style={{width:50, height:50, borderRadius: 100, justifyContent: 'center', borderWidth:0}}>
                <LottieView
               source={require('@Assets2/image/steer.json')} autoPlay loop
               style={{ width:50, height:50,resizeMode:'contain',marginTop:0,alignSelf:'center', marginBottom:0}}
                 /> 
              </View>
          );
        } 

        function secondsToDhms(time) {
          time = Number(time);
          var d = Math.floor(time / (3600 * 24));
          var h = Math.floor((time % (3600 * 24)) / 3600);
          var m = Math.floor((time % 3600) / 60);
          var s = Math.floor(time % 60);
      
          var dDisplay = d > 0 ? d + 'd ' : '';
          var hDisplay = h > 0 ? h + 'h ' : '';
          var mDisplay = m > 0 ? m + 'm ' : '';
          var sDisplay = s > 0 ? s + 's ' : '';
          return dDisplay + hDisplay + mDisplay + sDisplay;
        }



  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <ScrollView>
      <View>
        <View style={styles.backCover}>
        <TouchableOpacity onPress={goBack}>
            <Icon name='arrow-back' color="#000" size={24} />
        </TouchableOpacity>
    </View>
      {showZoom ?
       <View style={styles.topCover}>
       <ImageBackground source={require('@Assets2/image/images.jpeg')} style={styles.backgroundImage}>
       <View style={styles.profileCirlcle}>
       <View>
       <Image source={require('@Assets2/image/images.jpeg')} style={styles.innerImg} />
       <TouchableOpacity style={styles.zoomCover} onPress={returnZoom}>
       <Image source={require('@Assets2/image/zoom.png')} style={styles.zoomImg} />
       </TouchableOpacity>
       </View>
         <View>
           <Text style={styles.BgNameB}>Harrison Ebube</Text>
           <Text style={styles.BgRoleB}>Mobile Mechanic</Text>
             <View style={styles.statCover}>
                 <View style={styles.jobCover}>
                   <Icon name='briefcase' color="#fff" size={24} />
                 <Text style={styles.jobText}>46 Jobs</Text>
                 </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.jobCover}>
               <Zcon name='comment-question' color="#fff" size={24} />
               <Text style={styles.reviewText}>18 Reviews  </Text>
             </View>
             <View style={styles.jobCover}>
               <Zcon name='alert' color="red" size={24} />
               <Text style={styles.reviewText}>0 Issue</Text>
             </View>
            </View>
           </View>
           
         </View>
         
       </View>
           </ImageBackground>
 
       </View>
       :
      <View style={styles.topCover}>
      <ImageBackground source={require('@Assets2/image/istockphoto-1034249292-612x612.jpeg')} blurRadius={4} style={styles.backgroundImage}>
      <View style={styles.profileCirlcle}>
      <View>
      <Image source={require('@Assets2/image/images.jpeg')} style={styles.innerImg} />
      <TouchableOpacity style={styles.zoomCover} onPress={switchZoom}>
      <Image source={require('@Assets2/image/zoom.png')} style={styles.zoomImg} />
      </TouchableOpacity>
      </View>
        <View>
          <Text style={styles.BgName}>Harrison Ebube</Text>
          <Text style={styles.BgRole}>Mobile Mechanic</Text>
            <View style={styles.statCover}>
                <View style={styles.jobCover}>
                  <Icon name='briefcase' color="#fff" size={24} />
                <Text style={styles.jobText}>46 Jobs</Text>
                </View>
           <View style={{flexDirection:'row'}}>
           <View style={styles.jobCover}>
              <Zcon name='comment-question' color="#fff" size={24} />
              <Text style={styles.reviewText}>18 Reviews  </Text>
            </View>
            <View style={styles.jobCover}>
              <Zcon name='alert' color="red" size={24} />
              <Text style={styles.reviewText}>0 Issue</Text>
            </View>
           </View>
          </View>
          
        </View>
        
      </View>
          </ImageBackground>

      </View>
        
      }

       {swipeRight ?
         <View>
          <View style={styles.introCoverNew}>
            <Text style={styles.introTextB}>YOUR REQUEST HAS BEEN SENT TO <Text style={{color:"gray"}}> Harrison Ebube</Text>
          
            </Text>
            <Text style={styles.introTextSm}> Please call or chat, if you dont receive any call after 3 Minutes</Text>
            <View style={styles.counterCover}>
              { time <= 50 ?
            <CountdownCircleTimer
                isPlaying
                duration={50}
                strokeWidth={8}
                size={120}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
              >
                {({ remainingTime }) => 
                 <View>
                 <Text style={styles.counterText}> Too Late ..</Text>
                </View>
                
                }
              </CountdownCircleTimer>
              :
              <CountdownCircleTimer
              isPlaying
              duration={600}
              strokeWidth={8}
              size={120}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
            >
              {({ remainingTime }) => 
               
                <View>
                <Text style={styles.counterTextLn}> Remaining</Text>
                <Text style={styles.counterText}>{remainingTime}</Text>
                <Text style={styles.counterTextLnn}>Seconds</Text>
               </View>
              
              }
            </CountdownCircleTimer>
              }
            <Text style={styles.tnText}>This request will be terminated if not confirmed within 10 minutes</Text>
            </View>
          </View>
           
         </View>

         :
         <View>
         <View style={styles.introCover}>
           <Text style={styles.introText}>Hi, I am Harrison Ebube, I recide in Abuja.
             I am a mobile mechanics with 4 years experience.
             Below are the list of some of my services and coverage location.
             I hope you request my service for all your auto mobile services.
           </Text>
         </View>
         <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={callServices}>
          <Image source={require('@Assets2/image/customer-support.png')} style={styles.serImg} />
          <Text style={styles.count}>32</Text>
          <Text style={styles.serviceText}>My Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={callArea}>
          <Image source={require('@Assets2/image/car.png')} style={styles.serImg} />
          <Text style={styles.count}>20</Text>
          <Text style={styles.serviceText}>My Cover Areas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
          <Image source={require('@Assets2/image/review.png')} style={styles.serImg} />
          <Text style={styles.count}>2</Text>
          <Text style={styles.serviceText}>My Reviews</Text>
          </TouchableOpacity>

         </View>
        </View>
        
}

       
         {swipeRight ?


           <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnCover}>
              <Image source={require('@Assets2/image/telephone.png')} style={styles.phoneImg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCover}>
              <Image source={require('@Assets2/image/whatsapp.png')} style={styles.phoneImg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCoverLg} onPress={goBack}>
              <Image source={require('@Assets2/image/stop-violence.png')} style={styles.phoneImg} />
              <Text style={styles.reportText}>Terminate Request</Text>
            </TouchableOpacity>
            </View> 
          :
            
            <SwipeButton
                disabled={false}
                swipeSuccessThreshold={70}
                height={45}
                width={wp('80%')}
                title="SWIPE RIGHT TO REQUEST SERVICE"
                thumbIconComponent={CheckoutButton}
                onSwipeSuccess={() => {
                 setSwipeRight(true)
                }}
                titleStyles={styles.titleStyle}
                containerStyles={styles.swipeContainer}
                //After the completion of swipe (Optional)
                 railFillBackgroundColor="#fff" //(Optional)
                railFillBorderColor="#fff" //(Optional)
                thumbIconBackgroundColor="#fff" //(Optional)
                railStyles={{borderWidth:0, height:50, justifyContent:'center'}}
                // thumbIconBorderColor="#ed9aff" //(Optional)
                railBackgroundColor="#000" //(Optional)
                railBorderColor="#fff" //(Optional)
             />
              }
      </View>
            
         <ServiceSheet 
            bottomSheetService = {bottomSheetService}
          />
          <AreaSheet 
            bottomSheetArea = {bottomSheetArea}
          />
         
         </ScrollView>      
    </SafeAreaView>
  );
};

export default WorkerDetails ;

  