import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/axiosBase";
import { apiRequest } from "@Request/request";

export const getStore = createAsyncThunk("store/all",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/stores'), thunkAPI)
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

