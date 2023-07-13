import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

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
   
   export const orderFilter = createAsyncThunk("order/all/filter",
   async (params, thunkAPI) => {
      const Axios = await AxiosBase();
      const { id, stat, date } = params
      return apiRequest(Axios.get(`api/v1/users/${id}/filter_orders?status=${stat}&date=${date}`), thunkAPI)
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

   export const verifyCodeIncomplete = createAsyncThunk("order/verify_code/incomplete",
   async (code, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/agent/orders/verify?without=1', code), thunkAPI)
   });

// this is the endpoint re-add incomplete order to cart
export const reAddToCart = createAsyncThunk("add/order/cart",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/order_groups/${id}/add_to_cart`), thunkAPI)
   });

// this is the endpoint to get the incomplete Items
export const getIncompleteItems = createAsyncThunk("item/incomplete",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/agent/orders/${id}/out_of_stock`), thunkAPI)
   });

   // this is for the incomplete order
export const deleteIncompleteOrder = createAsyncThunk("order/delete/incomplete",
async (id, thunkAPI) => {
   const Axios = await AxiosBase();
return apiRequest(Axios.delete(`api/v1/agent/orders/${id}`), thunkAPI)
    });