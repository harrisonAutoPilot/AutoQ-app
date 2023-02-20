import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const priceList = createAsyncThunk("price_list/all",
    async (option, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`/api/v1/products/price_list/download?type=&option=${option}`), thunkAPI)
    });

    export const priceListChemist = createAsyncThunk("price_list/chemist/all",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`/api/v1/products/price_list/download?type=chemist`), thunkAPI)
    });