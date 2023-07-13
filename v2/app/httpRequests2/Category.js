import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const browseCategories = createAsyncThunk("category/all",
 async(_, thunkAPI) => {
    const Axios = await AxiosBase();
     return apiRequest(Axios.get('api/v1/categories'), thunkAPI)});
