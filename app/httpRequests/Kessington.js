import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";


export const getKessington = createAsyncThunk("kessington_products/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/kessington_products?page=${no}`), thunkAPI)
    });


export const getKessingtonById = createAsyncThunk("kessington_products/id",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/kessington_products/${id}`), thunkAPI)
    });


export const addKessingtonToCart = createAsyncThunk("kessington_products/cart",
    async (kessington, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/cart/kessington_products/${kessington.id}`, kessington), thunkAPI)
    });
