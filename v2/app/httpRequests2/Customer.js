import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const getCustomers = createAsyncThunk("customer/all",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/agent/customers'), thunkAPI)
   });


export const getCustomerOrder = createAsyncThunk("customer/order",
   async (details, thunkAPI) => {
      const {id, no} = details
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v2/agent/customers/${id}/orders?page=${no}`), thunkAPI)
   });

   export const updatePendingCustomers = createAsyncThunk("customer/pending/update",
   async (user, thunkAPI) => {
      const formData = new FormData();

      for ( var key in user ) {
         if(typeof(user[key])==='object'){
            for(var key2 in user[key]){
               formData.append(key+"[]", user[key][key2]);
            }
         }
         else {
            formData.append(key, user[key]);
         }
        
      }

      const Axios = await AxiosBase();
      return apiRequest(Axios.post(`api/v1/agent/users/${user.id}/pending_via_mobile`, formData,{
          headers: {
               'Content-Type': 'multipart/form-data',
          },
      }
         
     ),
      thunkAPI)
   });

export const registerCustomer = createAsyncThunk("customer/register",
   async (user, thunkAPI) => {
      const formData = new FormData();

      for ( var key in user ) {
         if(typeof(user[key])==='object'){
            for(var key2 in user[key]){
               formData.append(key+"[]", user[key][key2]);
            }
         }
         else {
            formData.append(key, user[key]);
         }
        
      }

      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/agent/users_via_mobile', formData,{
          headers: {
               'Content-Type': 'multipart/form-data',
          },
      }
         
     ),
      thunkAPI)
   });

