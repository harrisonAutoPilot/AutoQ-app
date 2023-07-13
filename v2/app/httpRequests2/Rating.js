import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";


export const getRating = createAsyncThunk("rating/all",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/users/feedbacks/${id}`), thunkAPI)
    });

export const postRating = createAsyncThunk("rating/create",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/users/feedbacks/${data.id}`, data), thunkAPI)
    });
