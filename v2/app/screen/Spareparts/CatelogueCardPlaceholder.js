import React from 'react';
import { View } from 'react-native';
import styles from './style';


const CatelogueCardPlaceholder = () => (
    <View>
    <View style={styles.placeholderCover}>
        <View style={styles.listContainerP} >
            <View style={styles.listContainerImageViewP}>
                <View style={styles.imageP} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextViewP} >
                <View style={styles.listContainerInnerTextViewP} />
                <View />

            </View>
        </View>

        <View style={[styles.listContainerP, styles.elevation]} >
            <View style={styles.listContainerImageViewP}>
                <View style={styles.imageP} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextViewP} >
                <View style={styles.listContainerInnerTextViewP} />
                <View />
            </View>
        </View>

    </View>

    <View style={styles.placeholderCover}>
        <View style={[styles.listContainerP, styles.elevation]} >
            <View style={styles.listContainerImageViewP}>
                <View style={styles.imageP} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextViewP} >
                <View style={styles.listContainerInnerTextViewP} />
                <View />

            </View>
        </View>

        <View style={[styles.listContainerP, styles.elevation]} >
            <View style={styles.listContainerImageViewP}>
                <View style={styles.imageP} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextViewP} >
                <View style={styles.listContainerInnerTextViewP} />
                <View />
            </View>
        </View>

    </View>
    
    <View style={styles.placeholderCover}>
        <View style={[styles.listContainerP, styles.elevation]} >
            <View style={styles.listContainerImageViewP}>
                <View style={styles.imageP} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextViewP} >
                <View style={styles.listContainerInnerTextViewP} />
                <View />

            </View>
        </View>

        <View style={[styles.listContainerP, styles.elevation]} >
            <View style={styles.listContainerImageViewP}>
                <View style={styles.imageP} resizeMode="cover" />
            </View>
            <View style={styles.listContainerTextViewP} >
                <View style={styles.listContainerInnerTextViewP} />
                <View />
            </View>
        </View>

    </View>
    
    
    </View>

);

export default CatelogueCardPlaceholder;