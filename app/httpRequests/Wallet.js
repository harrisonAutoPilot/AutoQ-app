import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";

export const getWallet = createAsyncThunk("wallet/all",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/users/${id}/balances`), thunkAPI)
    });

export const getLoan = createAsyncThunk("loan/all",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/users/${id}/balances`), thunkAPI)
    });


export const getWalletTransaction = createAsyncThunk("wallet/users/all",
async (param, thunkAPI) => {
    const {no, id} = param
    const Axios = await AxiosBase();
    return apiRequest(Axios.get(`api/v1/users/${id}/transactions/wallet?page=${no}`), thunkAPI)
});

export const getLoanTransaction = createAsyncThunk("loan/users/all",
async (param, thunkAPI) => {
    const {no, id} = param
    const Axios = await AxiosBase();
    return apiRequest(Axios.get(`api/v1/users/${id}/transactions/loan?page=${no}`), thunkAPI)
});