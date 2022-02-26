import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const listProducts = createAsyncThunk("product/all",
    async (_, thunkAPI) => {
        const Axios = AxiosBase();
        return apiRequest(Axios.get('api/v1/products'), thunkAPI)
    });

export const searchProducts = createAsyncThunk("product/search",
    async (search, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/search_result?q=${search}`), thunkAPI)
    });

export const searchProductsByItems = createAsyncThunk("product/type-head",
    async (search, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/search_products_typeahead?q=${search}`), thunkAPI)
    });