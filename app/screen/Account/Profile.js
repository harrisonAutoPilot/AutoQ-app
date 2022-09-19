import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";
import { updateUserImage, getUser, deleteUserAccount } from "@Request/Auth";
import { cleanup, logout } from "@Store/Auth";
import Loader from "@Screen/Loader";
import ConfirmDelete from "./ConfirmDelete";
import { SuccessMsgViewTwo } from "@Component";
import links, { TLinks } from "./links";

export default Profile = () => {

    const dispatch = useDispatch();

    const [loader, setLoader] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);

    const { user, update, deleteAccount, errors } = useSelector((state) => state.auth);

    useEffect(() => {
        return () => {
            dispatch(cleanup())
        }
    }, []);

    // UPDATE PROFILE IMG
    const updateProfilePic = () => {
        setErrMsg("");

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',

            },
            includeBase64: true,
            title: "Select Photo",

        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                setErrMsg('ImagePicker Error: ', response.error)
            } else if (response.fileSize > 2000000) {
                waitTime2("Image size is too large")
            } else {
                setLoader(true);
                const img = `data:image/jpg;base64,${response.assets[0].base64}`;
                const datas = { picture: { path: img }, id: user.id }
                dispatch(updateUserImage(datas))
            }
        });

    };

    // DISABLE ACCOUNT
    const deleteMyAccount = () => {
        setShowConfirm(false)
        setLoader(true);
        dispatch(deleteUserAccount(user.id))
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((err, suc) => {
        wait(1000).then(() => {
            setLoader(false);

            if (suc) {
                setSuccessMsg(suc);
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                });
                dispatch(getUser())
            } else {
                setErrMsg(err);
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }

        });

        wait(4000).then(() => { dispatch(cleanup()) })
    }, []);

    const waitTime2 = useCallback((err) => {
        wait(1000).then(() => {
            setLoader(false);
            setErrMsg(err);

            Toast.show({
                type: 'error',
                visibilityTime: 5000,
                autoHide: true,
                position: 'top',
                topOffset: 0
            })

        });

    }, []);

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, styles.inputOuterView2]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),
        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    useEffect(() => {
        if (update === "failed") {
            waitTime(errors?.msg, "");
        } else if (update === "success") {
            waitTime("", "Profile Image Updated");
        } else {
            setSuccessMsg("")
        }
    }, [update]);

    useEffect(() => {
        if (deleteAccount === "failed") {
            setSuccessMsg("");
            waitTime(errors?.msg, "");
        } else if (deleteAccount === "success") {
            dispatch(logout());
        }

    }, [deleteAccount]);

    const List = ({ item }) => (

        <View style={styles.cardCover}>
            <View style={styles.locCover}>
                <View style={styles.locImgCover}>
                    <Image source={item.icon} style={styles.locImg} />
                </View>
                <Text style={styles.locTextTitle}>{item.title}:</Text>
            </View>
            <View>
                <Text style={styles.locText}>{user?.phone}</Text>
            </View>
        </View>

    )



    return (
        <View style={styles.container}>

            {successMsg ? <Toast config={toastConfig} /> : null}
            {errMsg ? <Toast config={toastConfig} /> : null}

            <View style={styles.topCover}>
                <View style={styles.imgCover}>
                    <Image source={{ uri: `${URL}${user?.picture_url}` }} style={styles.img} />
                    <View style={styles.cameraCover}>
                        <TouchableOpacity onPress={updateProfilePic}>
                            <Image source={require("@Assets/image/camera.png")} style={styles.camImg} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.topTextCover}>
                    <Text style={styles.agentNameText}>{user?.name}</Text>
                    <Text style={styles.agentCodeText}>RH/AG/{user?.id} - Registered Agent</Text>
                </View>

            </View>
            <View style={styles.bottomCover}>

                <View>


                    <FlatList data={links} renderItem={List} keyExtractor={item => item.id} horizontal={false} />
                    <View >
                        <TouchableOpacity style={styles.deleteCover} onPress={() => setShowConfirm(true)}>
                            <Icon name="trash-2" color="#D32F2F" size={16} />
                            <Text style={styles.deleteText}>Delete Account</Text>
                        </TouchableOpacity>


                    </View>

                </View>
            </View>

            <Loader isVisible={loader} />

            <ConfirmDelete
                visibleConfirm={showConfirm}
                returnBack={() => setShowConfirm(false)}
                deleteAccount={deleteMyAccount}
            />
        </View>
    )
};
