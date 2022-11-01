import 'react-native-gesture-handler';
import React, { useEffect, useState, useCallback } from 'react';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';


import { requestUserPermission, notificationListener } from "@Helper/NotificationPermission";
import ForGround from "@Component/foregroundToast";


const Notification = () => {

  const [notify, setNotify] = useState(false)


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  const waitTime = useCallback(() => {
    wait(5000).then(() => {
      setNotify(false)
    });

  }, []);


  const toastConfig = {
    tomatoToast: param => (
      <ForGround
        title={param.props.title}
        body={param.props.body}
      />
    )
  };



  useEffect(() => {

    requestUserPermission();
    
    notificationListener()

    const unsubscribe = messaging().onMessage(async remoteMessage => {

      setNotify(true)

      const message = remoteMessage

      if (message) {


        Toast.show({
          type: 'tomatoToast',
          visibilityTime: 5000,
          props: {
            title: message.notification.title,
            body: message.notification.body,
            img: ""
          }
        });

        waitTime();

      }

    })

    return () => {
      setNotify(false)
      unsubscribe();
    }


  }, []);

  return (
    <>
      { notify ?
        <Toast config={toastConfig} forwardRef={ref => Toast.setRef(ref)} />
        : null}
    </>

  )


};

export default Notification;
