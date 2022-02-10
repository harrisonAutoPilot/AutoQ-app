import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import Navigation from '@Navigation/index';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import NetInfo from "@react-native-community/netinfo";

import store from "@Store/store";
import Network from "@Screen/Network";

let persistor = persistStore(store);

const App = () => {
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
}, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        {isOffline ? <Network />: null}
      </PersistGate>
    </Provider>
  );
};

export default App;
