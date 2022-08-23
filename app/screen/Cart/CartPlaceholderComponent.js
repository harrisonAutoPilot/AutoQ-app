import React from 'react';
import { View } from 'react-native';
import styles from './style';


const CartPlaceholderComponent = () => (
    <View>
        <View style={styles.midCard}>
            <View style={styles.cover}>
                <View style={styles.imgCoverP} />

                <View style={styles.descCover}>
                    <View style={styles.descTextViewP} />
                    <View style={styles.amountP} />

                </View>

                <View>
                    <View style={styles.iconCoverP} />
                </View>

            </View>

        </View>



    </View>

);

export default CartPlaceholderComponent;