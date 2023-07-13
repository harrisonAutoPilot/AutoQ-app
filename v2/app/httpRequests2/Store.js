import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

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

// this is the create store for v2
export const createStoreV2 = createAsyncThunk("store/create/mobile",
async (data, thunkAPI) => {
   const formData = new FormData();
   for ( var key in data ) {
      if(typeof(data[key])==='object'){
         for(var key2 in data[key]){
            formData.append(key+"[]", data[key][key2]);
         }
      }
      else {
         formData.append(key, data[key]);
      }
     
   }

   const Axios = await AxiosBase();
   return apiRequest(Axios.post('api/v1/mobile_phone_store', formData, {
       headers: {
            'Content-Type': 'multipart/form-data',
       },
   }

   
      
  ),
   thunkAPI)

});

