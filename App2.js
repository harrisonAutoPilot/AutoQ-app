import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";


// import Network from "@Screen2/Network";
import store from "@Store2/Store";
import NetInfo from "@react-native-community/netinfo";
import Navigation from '@Navigation2/index';



let persistor = persistStore(store);


const App = () => {

    const [isOffline, setOfflineStatus] = useState(false);


    useEffect(() => {

        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
    
          const offline = !(state.isConnected && (state.isInternetReachable || state.isInternetReachable === null));
    
          setOfflineStatus(offline);
    
        });
    
    
        return () => removeNetInfoSubscription();
        
    
      }, []);



    return (
        <Provider store={store}>

            <PersistGate loading={null} persistor={persistor}>

            <Navigation />

            {/* {isOffline && <Network />} */}

            </PersistGate>
        

        </Provider>

    );
};

export default App;
