import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/axiosBase";
import { apiRequest } from "@Request/request";

export const getWallet = createAsyncThunk("wallet/all",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/wallet'), thunkAPI)
    });