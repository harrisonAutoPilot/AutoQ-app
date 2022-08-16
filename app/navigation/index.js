import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import FileViewer from "react-native-file-viewer";
import RNFS from "react-native-fs";
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

    const fileDownload = async () => {
        const localFile = `${RNFS.TemporaryDirectoryPath}/RemedialHealth_Pricelist.pdf`
        ;
        const options = {
          fromUrl: list.path,
          toFile: localFile,
        };
        try {
          await RNFS.downloadFile(options).promise
          await FileViewer.open(localFile);
        } catch (e) {
          console.log(e)
        }
      };

      const download = async () => {
        try {
          if (Platform.OS === "android") {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: "Access to Storage",
                message: "Download Price List"
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              fileDownload()
            } else {
              setColor("rgba(211, 47, 47, 1)")
              removeText();
              setText('Permission denied')
            }
          } else{
            fileDownload()
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