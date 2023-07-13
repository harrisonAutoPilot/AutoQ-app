import { combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import authReducer from "./Auth";
import agentReducer from "./Agent";
import orderReducer from "./CustomerOrder";
import walletReducer from "./Wallet";
import ratingReducer from "./Rating"
import stateReducer from "./State";
import lgaReducer from "./Lga";
import notificationReducer from "./Notification";
import customerReducer from "./Customer"
import storeReducer from "./Stores";
import categoryReducer from "./Category";
import productReducer from "./Product";
import cartReducer from "./Cart";
import paymentReducer from "./PaymentMethod";


import productRequestReducer from "./ProductRequest";
import paymentOptionReducer from "./paymentOptions";
import deliveryOptionReducer from "./DeliveryOptions";
import priceListReducer from "./PriceList";
import dealReducer from "./Deal";

import groupProductReducer from "./GroupProducts";

import kessingtonReducer from "./Kessington";
import backInStockReducer from "./BackInStock";
import popularProductReducer from "./PopularProducts";
import newProductReducer from "./NewProducts";


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
    wallet: walletReducer,
    order: orderReducer,
     customer: customerReducer,
    state: stateReducer,
    lga: lgaReducer,
    agent: agentReducer,
    store: storeReducer,
    notification: notificationReducer,
    rating: ratingReducer,
  
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    payment: paymentReducer,
  

   
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