import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        // getFcmToken()
    }
}


const getFcmToken = async () => {
    try {
        const fcmToken = await messaging().getToken()
        console.log("fcm token", fcmToken)
    } catch (err) {
        console.log("err fcmToken", err)
    }
}




