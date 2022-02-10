import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/axiosBase";
import { apiRequest } from "@Request/request";

export const browseCategories = createAsyncThunk("category/all",
 async(_, thunkAPI) => {
    const Axios = await AxiosBase();
     return apiRequest(Axios.get('api/v1/categories'), thunkAPI)});
