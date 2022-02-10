import React, { useState, Fragment, useEffect } from "react";
import { View, ImageBackground, Text, Image, StatusBar, BackHandler, Animated } from "react-native";
import styles from "./style";

import { Btn } from "@Component/index"

const Onboarding = (props) => {

    const slideInLeft = new Animated.Value(0)

     handleBackButton = () => {
        if(props.navigation.isFocused()){
          BackHandler.exitApp()   
          return true;
        }
      };

      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButton);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      }, []);

      const start = () => {
          Animated.timing(slideInLeft, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
          })
        }

    const OnboardingViewOne = () => (

        <View style={styles.topSlide}>
            <View>
                <View style={styles.osView}>
                    <View style={styles.o1View}>
                        <Image source={require("@Assets/image/o2.png")} style={styles.o1sImg} />
                    </View>

                    <View style={styles.o2View}>
                        <Image source={require("@Assets/image/o1.png")} style={styles.o2sImg} />
                    </View>

                    <View style={styles.o3View}>
                        <Image source={require("@Assets/image/o3.png")} style={styles.o1sImg} />
                    </View>
                </View>
            </View>

            <View style={styles.captionCover}>
                <Text style={styles.secondHeading}>Medicines at Wholesale prices</Text>
                <View style={styles.secondMiniHeadingView}>
                    <Text style={styles.secondMiniHeading}>Restock your pharmacy or patent medicine store at prices {'\n'}cheaper or equal to the market from your mobile phone.</Text>
                </View>
            </View>

            <View style={styles.slideView}>
                <View style={styles.slide1}></View>
                <View style={styles.slide2}></View>
                <View style={styles.slide3}></View>
            </View>

        </View>
    );

    const [description, setDescription] = useState(OnboardingViewOne);
    const [nextSlide, setNextSlide] = useState(0);

    const OnboardingViewTwo = () => (
        <View style={styles.topSlide}>
            <View>
                <View style={styles.osView}>
                    <View style={styles.o1View}>
                        <Image source={require("@Assets/image/o1.png")} style={styles.o1sImg} />
                    </View>

                    <View style={styles.o2View}>
                        <Image source={require("@Assets/image/o2.png")} style={styles.o2sImg} />
                    </View>

                    <View style={styles.o3View}>
                        <Image source={require("@Assets/image/o3.png")} style={styles.o1sImg} />
                    </View>
                </View>
            </View>
            <View style={styles.captionCover}>
                <Text style={styles.secondHeading}>Quick Delivery</Text>
                <View style={styles.secondMiniHeadingView}>
                    <Text style={styles.secondMiniHeading}>Get access to medicines and medical devices from over {'\n'}500 manufacturers & distributors delivered to you {'\n'}within 24 hours.’</Text>
                </View>
            </View>

            <View style={styles.slideView}>
                <View style={[styles.slide2, { marginLeft: 0 }]}></View>
                <View style={[styles.slide1, { marginLeft: 8 }]}></View>
                <View style={styles.slide3}></View>
            </View>
        </View>
    );

    const OnboardingViewThree = () => (
        <View style={styles.topSlide}>
            <View>
                <View style={styles.osView}>
                    <View style={styles.o1View}>
                        <Image source={require("@Assets/image/o1.png")} style={styles.o1sImg} />
                    </View>

                    <View style={styles.o2View}>
                        <Image source={require("@Assets/image/o3.png")} style={styles.o2sImg} />
                    </View>

                    <View style={styles.o3View}>
                        <Image source={require("@Assets/image/o2.png")} style={styles.o1sImg} />
                    </View>
                </View>
            </View>
            <View style={styles.captionCover}>
                <Text style={styles.secondHeading}>Access Instant Loan</Text>
                <View style={styles.secondMiniHeadingView}>
                    <Text style={styles.secondMiniHeading}>Vendors use Remedial to get access to inventory &#38; loans {'\n'} to stock up their shelves.</Text>
                </View>
            </View>

            <View style={styles.slideView}>
                <View style={[styles.slide2, { marginLeft: 0 }]}></View>
                <View style={styles.slide3}></View>
                <View style={[styles.slide1, { marginLeft: 8 }]}></View>
            </View>
        </View>
    );

    const nextSlideView = () => {
        setDescription(OnboardingViewTwo);
        setNextSlide(1)
    };

    const lastSlideView = () => {
        setDescription(OnboardingViewThree);
        setNextSlide(2)
    };

    const skip = () => {
        setDescription(OnboardingViewThree);
        setNextSlide(2)
    }
    const redirectToLogin = () => props.navigation.navigate("Login");

    const register = () => props.navigation.navigate("PreRegister")

    return (
        <Fragment >
            <StatusBar hidden />
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
                                <Text style={styles.subHeading}>Digitizing Pharmaceutical Supply Chain in Africa.</Text>
                            </View>
                        </View>
                    </View>


                </ImageBackground>
            </View>
            <View >

                <View style={styles.secondHeadingView} >
                    {description}

                    <View style={styles.downBtn}>
                        <Btn style={styles.btn} onPress={nextSlide === 0 ? nextSlideView : nextSlide === 1 ? lastSlideView : redirectToLogin} title={nextSlide === 1 || nextSlide === 0 ? "Continue" : "Login"} styles={styles.btnText} />
                    </View>

                    {nextSlide !== 2 ?
                        <Btn onPress={skip} title="Skip" style={styles.btnSkip} styles={styles.btnSkipText} />
                        :
                        <Btn onPress={register} title={nextSlide === 1 || nextSlide === 0 ? "Skip" : "Create Account"} style={styles.registerBtn} styles={styles.btnSkipText} />
                    }
                </View>
            </View>
        </Fragment>
    )
};

export default Onboarding;