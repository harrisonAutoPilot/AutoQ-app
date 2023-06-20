import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const listPaymentMethod = createAsyncThunk("payment_method/all",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/payment_methods'), thunkAPI)
    });