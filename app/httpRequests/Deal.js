import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";


export const getDeals = createAsyncThunk("deals/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/deals?page=${no}`), thunkAPI)
    });


export const getDealById = createAsyncThunk("deals/id",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/deals/${id}`), thunkAPI)
    });


export const addDealToCart = createAsyncThunk("deals/cart",
    async (deals, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/cart/deals/${deals.id}`, deals), thunkAPI)
    });
