import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RNFetchBlob from 'rn-fetch-blob'
import { useSelector, useDispatch } from "react-redux";
import { PermissionsAndroid, View, Text } from "react-native";

import { cleanup } from "@Store/PriceList"
import styles from "./style";
import RootNavigation from "./Stack";

const RootNavigator = () => {

    const dispatch = useDispatch();
    const { priceStatus, list } = useSelector((state) => state.priceList);
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        if (priceStatus === "pending") {

            // background color should be light blue
            setColor("#3858CF")
            setText("You will be notified when the download starts");
            removeText("")
        } else if (priceStatus === "success") {
            download()
            refresh();
        }
        else if (priceStatus === "failed") {
            // background color should be light red
            setColor("rgba(211, 47, 47, 1)")
            setText("Price List download failed")
            removeText("")
            refresh();
        }
    }, [priceStatus]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const refresh = useCallback(() => {
        wait(4000).then(() => dispatch(cleanup()));
    }, []);

    const removeText = useCallback(() => {
        wait(5000).then(() => setText(""));
    }, []);

    const download = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Access to Storage",
                    message: "Download Price List"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // background color should be light green
                setColor("rgba(124, 207, 36, 1)")
                setText('Downloading Price List')
                removeText("")

                const { config, fs: { dirs } } = RNFetchBlob
                let DownloadDir = dirs.DownloadDir
                let options = {
                    fileCache: true,
                    addAndroidDownloads: {
                        useDownloadManager: true,
                        notification: true,
                        path: `${DownloadDir}/RemedialHealth_Pricelist${new Date().getTime()}.pdf`,
                        mediaScannable: true,
                        mime: 'application/pdf',
                    }
                }
                config(options).fetch('GET', list.path).then((res) => {
                    // do some magic here
                })
            } else {
                // background color should be light red
                setColor("rgba(211, 47, 47, 1)")
                setText('Download cancelled')
                removeText()
                console.log("Permission denied");
            }
        } catch (err) {
            console.warn(err);
        }

    };

    return (
        <NavigationContainer>

            <RootNavigation />

            {text ?
                <View style={[styles.toastView, { backgroundColor: color }]} >
                    <Text style={styles.toast}>{text}</Text>
                </View> : null}
        </NavigationContainer>
    )
}


export default RootNavigator;