import { combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import authReducer from "./Auth";
import agentReducer from "./Agent";
import orderReducer from "./CustomerOrder";
import categoryReducer from "./Category";
import productReducer from "./Product";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: createSensitiveStorage({
        keychainService: 'myKeychain',
        sharedPreferencesName: 'mySharedPrefs'
      })
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export default combineReducers({
    auth: persistedReducer,
    agent: agentReducer,
    order: orderReducer,
    category: categoryReducer,
    product: productReducer
});