import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

export const getNotification = createAsyncThunk("notification/all",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/notifications'), thunkAPI)
    });


export const getReadNotification = createAsyncThunk("notification/read",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/notifications/${id}/read`), thunkAPI)
    });