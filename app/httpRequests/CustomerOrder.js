import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const getOrders = createAsyncThunk("order/all",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/order_groups'), thunkAPI)
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