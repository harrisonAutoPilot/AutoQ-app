import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import Navigation from '@Navigation/index';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "@Store/Store";

let persistor = persistStore(store);

const App = () => {

  return (
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* <GestureHandlerRootView> */}
        <Navigation />
        {/* </GestureHandlerRootView> */}
      </PersistGate>
    </Provider>
  
  );
};

export default App;