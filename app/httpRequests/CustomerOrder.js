import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const getCustomerOrders = createAsyncThunk("order/all",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v2/agent/orders?page=${id}`), thunkAPI)
   });

export const getCustomerPendingOrders = createAsyncThunk("order/pending",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/users/pending_orders?page=${id}`), thunkAPI)
   });

export const placeOrder = createAsyncThunk("order/place",
   async (details, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v2/agent/orders', details), thunkAPI)
   });


export const reOrder = createAsyncThunk("order/reorder",
   async (details, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/reorder', details), thunkAPI)
   });


export const trackOrder = createAsyncThunk("order/trackorder",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/trackorder/${id.id}`), thunkAPI)
   });


export const verifyOrder = createAsyncThunk("order/verify",
   async (details, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/agent/orders/verification_code/send', details), thunkAPI)
   });


export const verifyCode = createAsyncThunk("order/verify_code",
   async (code, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/agent/orders/verify', code), thunkAPI)
   });
