import React, { seEffect } from "react";
import { View, ImageBackground, Text,LogBox, Image, StatusBar} from "react-native";
import styles from "./style";


const Slide = ({ item }) => {


  return (
    <View > 
    <StatusBar hidden />
    <View key={item.key} >
    <View >

        <ImageBackground source={require("@Assets/image/Ellipse.png")}
            style={styles.backgroundImg}
            resizeMode='stretch'
        >
            <Image source={require("@Assets/image/backgroundImg.png")} style={styles.img} resizeMode='stretch' />
            <View style={styles.logoHolder}>
                <View>

                </View>

                <View style={styles.headingView}>
                    <Image source={require("@Assets/image/rh_logo_splashscreen.png")} style={styles.logoImg} />
                    <View>
                        <Text style={styles.heading}>REMEDIAL HEALTH</Text>
                        <Text style={styles.subHeadingN}>Digitizing Pharmaceutical Supply Chain in Africa.</Text>
                    </View>
                </View>
            </View>


        </ImageBackground>
        
    </View>
  <View style={styles.topSlide} >
          <View>
              <View style={styles.osView}>
                  <View style={styles.o1View}>
                      <Image source={item.img1}   style={styles.o1sImg} />
                  </View>

                  <View style={styles.o2View}>
                      <Image source={item.img2}  style={styles.o2sImg} />
                      
                  </View>

                  <View style={styles.o3View}>
                      <Image source={item.img3}  style={styles.o1sImg} />
                  </View>
              </View>
          </View>

  <View style={styles.captionCover}>
      <Text style={styles.secondHeading}>{item.smDesc}</Text>
      <View style={styles.secondMiniHeadingView}>
          <Text style={styles.secondMiniHeading} numberOfLines={4}>{item.bgDesc}</Text>
      </View>
  </View>
<View>
  
</View>
  {/* <View style={styles.slideView}>
      <View style={styles.slide3}></View>
      <View style={styles.slide3}></View>
      <View style={styles.slide3}></View>
  </View> */}

</View>
</View>          
</View>

  );
};

export default Slide;
