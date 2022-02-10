import React, { useState, Fragment } from "react";
import { View, ImageBackground, Text, Image, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";
import globalStyles from "@Helper/globalStyles";

import { InputField } from "@Component/index";

import Header from "@Component/HeaderCategory";

const AllCategory = (props) => {

   return (
      <View >
         <Header style={styles.header}>
            <View style={styles.headerTitle}>
               <Text style={styles.headerText}>Browse Categories</Text>
            </View>
         </Header>
         <View style={styles.captionCover}>
            <Text style={styles.captionText}>ALL CATEGORIES</Text>
         </View>
         <View style={styles.bottomCover} >
            <ScrollView vertical={true} ref={(scrollView) => { scrollView = scrollView; }} showsVerticalScrollIndicator={false}>
               <View style={styles.mainContainer}>

                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Antibiotics</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>

                  </TouchableOpacity>

                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Antidiabetics</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>

                  </TouchableOpacity>

                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Multivitamins</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>

                  </TouchableOpacity>


                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Antimalaria</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>
                  </TouchableOpacity>


                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Antibiotics</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>

                  </TouchableOpacity>


                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Antibiotics</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>

                  </TouchableOpacity>

                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Antibiotics</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>

                  </TouchableOpacity>

                  <TouchableOpacity >
                     <View style={[styles.card, styles.elevation]}>
                        <Image source={require("@Assets/image/Rectangle_88.png")} style={styles.mdCatImg} />
                        <View style={styles.catDes}>
                           <Text style={styles.catText}>Antibiotics</Text>
                           <Image source={require("@Assets/image/Vector.png")} style={styles.smAngleImg} />
                        </View>
                     </View>

                  </TouchableOpacity>

               </View>
            </ScrollView>

         </View>

      </View>
   )
};

export default AllCategory;