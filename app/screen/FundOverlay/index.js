import React, { useState, useCallback, useEffect,useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView,Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import FIcon from "react-native-vector-icons/FontAwesome5";
import BottomSheet from "react-native-gesture-bottom-sheet";

import styles from './style';
import globalStyle from "@Helper/globalStyles";


const Overlay = (props) => {
    const [copiedText, setCopiedText] = useState('Copy Account No');
    const [successMsg, setSuccessMsg] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const bottomSheet = useRef();

    const copyToClipboard = () => {
        Clipboard.setString('5000112926');
        setCopiedText("Copied");
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        wait(4000).then(() => setCopiedText('Copy Account No'));
    }, []);

    useEffect(() => {
        refreshView()
    }, [copiedText])

    const copyIt = () =>{ 
      Clipboard.setString("5000112926");
      setSuccessMsg("Copy Successfully");
      setShowMsg(true);
       
    };
  useEffect(() => {
         if(copyIt()=== true) {
            setSuccessMsg("Copy Successfully");
            setErr("");           
            setShowMsg(true);
            Toast.show({
                type: 'tomatoToast',
                visibilityTime: 3000,
                autoHide: true
            });
            
          }
    }, []);

  

   
  
 

 const toastConfig = {
        error: () => (
            <View style={[globalStyle.errMainView, globalStyle.marginTop, { marginHorizontal: 20 }]}>
                <Text style={globalStyle.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <View style={{ marginHorizontal: 20 }}>
                <SuccessMsgViewTwo title={successMsg} />
            </View>
        )
    };




    const FundView = () => (
        <BottomSheet hasDraggableIcon ref={props.bottomSheetF} sheetBackgroundColor={'#ffffff'} height={Dimensions.get("window").height / 1.20} radius={50} styles={styles.addStoreBottomSheet}>

            <ScrollView style={styles.modalView}>
           
                <View style={styles.modalPadding}>
                    <TouchableOpacity onPress={props.bottomSheetClose} style={styles.backCover}>
                        <Image source={require("@Assets/image/left.png")} style={globalStyle.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Account Details</Text>
                </View>

                <View style={styles.topPrompt}>
                    <View style={styles.inforCover}>
                        <Text style={styles.inforText}>i</Text>
                    </View>
                    <View style={styles.topPromptTextCover}>
                        <Text style={styles.topPromptText}>
                        We’ve automatically created a bank account for you with Wema bank that is linked to your Remedial wallet. Transfer from the bank, ATM, USSD or your mobile app into this account to be instantly credited in your wallet.

                        </Text>
                    </View>
                </View>
                <LinearGradient
                    colors={['#9C1787', '#5C0E50']}
                    style={styles.container}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0.2, y: 0 }}
                    style={styles.smCardCover}
                >
                    <View style={styles.midCardCover}>
                        <Text style={styles.nameText}>BANK:</Text>
                        <View style={styles.wemaCover}>
                            <Text style={styles.nameText}>Wema bank</Text>
                            <Image source={require("@Assets/image/wemaImg.png")} style={styles.wemaImg} />
                        </View>

                    </View>
                    <View style={styles.midCardCover}>
                        <Text style={styles.nameText}>ACCOUNT NUMBER:</Text>
                        <View style={styles.wemaCover}>
                            <Text style={styles.nameText}>5000112926</Text>
                        </View>

                    </View>

                    <View style={styles.midCardCover}>
                        <Text style={styles.nameText}>ACCOUNT NAME:</Text>
                        <View style={styles.wemaCover}>
                            <Text style={styles.nameText}>SAM K</Text>
                        </View>

                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <View style={styles.copyCover}>

                            <Icon name="copy" size={18} color="#ffffff" />
                            <Text style={styles.copyText} onPress={copyToClipboard}>{copiedText}</Text>

                        </View>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.downPrompt}>
                    <View style={styles.downInforCover}>
                        <Text style={styles.downInforText}>i</Text>
                    </View>
                    <View style={styles.topPromptTextCover}>
                        <Text style={[styles.topPromptText, { color: "rgba(0, 49, 157, 1)" }]}>
                            Tip: Save it as a beneficiary for quick transaction.
                        </Text>
                    </View>
                </View>

                <View style={styles.downCover}>
                    <Text style={styles.downPromptText}>
                        ₦50 transaction fee to enable instant wallet updates.
                    </Text>
                </View>
            </ScrollView>

            </BottomSheet >
    );

    return (
        <View>
            {FundView()}
        </View>
    )
};

export default Overlay;