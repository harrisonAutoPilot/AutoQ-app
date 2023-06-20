import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";


export const getBackInStock = createAsyncThunk("backInstock_products/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/back_in_stock_products?page=${no}`), thunkAPI)
    });


;
