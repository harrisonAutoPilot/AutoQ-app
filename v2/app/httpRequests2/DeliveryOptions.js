import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/AxiosBase";
import { apiRequest } from "@Request/Request";


export const getDeliveryOptions = createAsyncThunk("delivery_options/all",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/delivery_types?state=${id}`), thunkAPI)
    });
