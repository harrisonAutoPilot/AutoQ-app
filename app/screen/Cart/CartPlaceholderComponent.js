import React from 'react';
import { View } from 'react-native';
import styles from './style';


const CartPlaceholderComponent = () => (
    <View>
        <View style={styles.midCard}>
    <View style={styles.cover}>
        <View style={styles.imgCoverP}>
           
        </View>
        <View style={styles.descCover}>
            <View style={styles.descTextViewP}>
                {/* <Text style={styles.descText} numberOfLines={2}>{item.product.name}</Text> */}
            </View>
           
             <View style={styles.amountP}>

             </View>

        </View>

        <View>
           
            <View style={styles.iconCoverP}>
               
            </View>

        </View>

    </View>
    
</View>



    </View>

);

export default CartPlaceholderComponent;