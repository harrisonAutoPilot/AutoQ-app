import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const listCart = createAsyncThunk("cart/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        // const {no} = params
        // return apiRequest(Axios.get(`api/v1/cart?store=${id ? id : ""}`), thunkAPI)
        return apiRequest(Axios.get(`api/v1/cart/dev?page=${no}`), thunkAPI)
       
    });

export const addToCart = createAsyncThunk("cart/add",
    async (items, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/cart', items), thunkAPI)
    });

export const updateCart = createAsyncThunk("cart/update",
    async (items, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/bulk_cart`, items), thunkAPI)
    });

export const deleteCart = createAsyncThunk("cart/delete",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.delete(`api/v1/cart/${id}`), thunkAPI)
    });
    
    export const deleteMultipleCart = createAsyncThunk("cart/multiple/delete",
    async (items, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/cart/delete/multiple`, items), thunkAPI)
    });

    export const deleteAllCart = createAsyncThunk("cart/delete/all",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.delete(`api/v1/cart/delete/all`), thunkAPI)
    });