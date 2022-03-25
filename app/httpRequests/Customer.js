import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const getCustomers = createAsyncThunk("customer/all",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/agent/customers'), thunkAPI)
   });

export const updatePendingCustomers = createAsyncThunk("customer/pending/update",
   async (user, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post(`api/v1/agent/users/${user.id}/pending`, user), thunkAPI)
   });

export const registerCustomer = createAsyncThunk("customer/register",
   async (user, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/register', user),
         thunkAPI, "auth")
   });