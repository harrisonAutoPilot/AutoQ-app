import { combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import authReducer from "./Auth";
import agentReducer from "./Agent";
import orderReducer from "./CustomerOrder";
import categoryReducer from "./Category";
import productReducer from "./Product";
import cartReducer from "./Cart";
import paymentReducer from "./PaymentMethod";
import walletReducer from "./Wallet";
import storeReducer from "./Stores";
import notificationReducer from "./Notification";
import customerReducer from "./Customer";
import stateReducer from "./State";
import lgaReducer from "./Lga";
import productRequestReducer from "./ProductRequest";
import paymentOptionReducer from "./paymentOptions";
import deliveryOptionReducer from "./DeliveryOptions";
import priceListReducer from "./PriceList";
import dealReducer from "./Deal";
import groupProductReducer from "./GroupProducts";


import kessingtonReducer from "./Kessington";
import backInStockReducer from "./BackInStock";
import popularProductReducer from "./PopularProducts";
import  newProductReducer from "./NewProducts";


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
    product: productReducer,
    cart: cartReducer,
    payment: paymentReducer,
    wallet: walletReducer,
    store: storeReducer,
    notification: notificationReducer,
    customer: customerReducer,
    state: stateReducer,
    lga: lgaReducer,
    productRequest: productRequestReducer,
    paymentOptions: paymentOptionReducer,
    deliveryOptions: deliveryOptionReducer,
    priceList: priceListReducer,
    deal:dealReducer,
    groupProduct:groupProductReducer,

    kessington:kessingtonReducer,
    backInStock:backInStockReducer,
    popularProduct:popularProductReducer,
    newProduct:newProductReducer
});