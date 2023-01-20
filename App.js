import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import Navigation from '@Navigation/index';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import NetInfo from "@react-native-community/netinfo";
import messaging from '@react-native-firebase/messaging';


import store from "@Store/Store";
import Network from "@Screen/Network";
import Notification from "@Component/notification";


let persistor = persistStore(store);


messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});


const App = () => {

  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {

    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {


      const offline = !(state.isConnected && (state.isInternetReachable || state.isInternetReachable === null ));

      setOfflineStatus(offline);

    });

    

    return () => removeNetInfoSubscription();

    
    
}, []);

  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>


        <Navigation />

        <Notification />

        {isOffline ? <Network />: null}
        
      </PersistGate>

      
    </Provider>
  
  );
};

export default App;