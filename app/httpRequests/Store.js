import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const getStore = createAsyncThunk("store/all",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/agent/stores'), thunkAPI)
   });

export const getUserStore = createAsyncThunk("store/user",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/stores/users/${id}`), thunkAPI)
   });

export const getPendingUserStore = createAsyncThunk("store/pending_user",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/agent/customers/${id}/stores`), thunkAPI)
   });

export const deleteStore = createAsyncThunk("store/update",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.delete(`api/v1/stores/${id}`), thunkAPI)
   });

export const createStore = createAsyncThunk("store/create",
   async (data, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post(`api/v1/stores`, data), thunkAPI)
   });

