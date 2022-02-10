import { combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import authReducer from "./auth";
import productReducer from "./product";
import categoryReducer from "./category";
import orderReducer from "./order";
import storeReducer from "./stores";
import cartReducer from "./cart";
import paymentReducer from "./paymentMethod";
import walletReducer from "./wallet";

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
    product: productReducer,
    category: categoryReducer,
    order: orderReducer,
    store: storeReducer,
    cart: cartReducer,
    payment: paymentReducer,
    wallet: walletReducer
});