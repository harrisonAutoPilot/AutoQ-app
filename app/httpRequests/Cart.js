import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const listCart = createAsyncThunk("cart/all",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/cart'), thunkAPI)
    });

export const addToCart = createAsyncThunk("cart/add",
    async (items, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/cart', items), thunkAPI)
    });

export const updateCart = createAsyncThunk("cart/update",
    async (items,thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/bulk_cart`, items), thunkAPI)
    });

export const deleteCart = createAsyncThunk("cart/delete",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.delete(`api/v1/cart/${id}`), thunkAPI)
    });