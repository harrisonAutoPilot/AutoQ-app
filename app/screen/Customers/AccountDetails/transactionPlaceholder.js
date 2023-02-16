import React from 'react';
import {View} from 'react-native';
import styles from './walletStyle';


const TransactionCardPlaceholder = () => (
  

   <View>
     <View style={styles.holderCard} >
            <View style={styles.leftCover}>
                    
                <View style={styles.imgLine} />   
               
            </View>
            <View style={styles.leftCover}>
            <View style={styles.mdLine} />
            <View style={styles.smLine}/>

            </View>
            
        </View>

        <View style={styles.holderCard} >
            <View style={styles.leftCover}>
                    
                <View style={styles.imgLine} />   
               
            </View>
            <View style={styles.leftCover}>
            <View style={styles.mdLine} />
            <View style={styles.smLine}/>

            </View>
            
        </View>
        <View style={styles.holderCard} >
            <View style={styles.leftCover}>
                    
                <View style={styles.imgLine} />   
               
            </View>
            <View style={styles.leftCover}>
            <View style={styles.mdLine} />
            <View style={styles.smLine}/>

            </View>
            
        </View>
   </View>

);

export default TransactionCardPlaceholder;