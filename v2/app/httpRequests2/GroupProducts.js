import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";


export const getKessington = createAsyncThunk("kessington_products/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/kessington_products?page=${no}`), thunkAPI)
    });


    export const getBackInStock = createAsyncThunk("backInstock_products/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/back_in_stock_products?page=${no}`), thunkAPI)
    });

    export const getPopularProducts = createAsyncThunk("popular_products/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/popular_products?page=${no}`), thunkAPI)
    });


    export const getNewProducts = createAsyncThunk("newProducts/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/new_products?page=${no}`), thunkAPI)
    });


