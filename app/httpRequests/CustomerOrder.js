import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const getCustomerOrders = createAsyncThunk("order/all",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/agent/orders'), thunkAPI)
   });

export const placeOrder = createAsyncThunk("order/place",
   async (details, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/place_order', details), thunkAPI)
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
