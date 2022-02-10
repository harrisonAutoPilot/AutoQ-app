import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/axiosBase";
import { apiRequest } from "@Request/request";

export const login = createAsyncThunk("auth/login",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/login', user),
            thunkAPI, "auth")
    });

export const register = createAsyncThunk("auth/register",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/register', user),
            thunkAPI, "auth")
    });

export const getUser = createAsyncThunk("auth/user",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/user'), thunkAPI);
    });

export const getPhoneVerificationPin = createAsyncThunk("auth/phone_verification",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/user/verification_code/send'), thunkAPI);
    });

export const verifyPin = createAsyncThunk("auth/verify/pin",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/user/phone/verify', user), thunkAPI);
    });

export const activateAccount = createAsyncThunk("auth/activate_account",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/activate_account', user), thunkAPI);
    });

export const forgotPin = createAsyncThunk("auth/forgot_pin",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/forgot_pin', user),
            thunkAPI)
    });

export const updateUserDetails = createAsyncThunk("auth/user/update",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.patch(`api/v1/users/${user.id}`, user),
            thunkAPI)
    });

export const updateUserPassword = createAsyncThunk("auth/password/update",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.patch(`api/v1/users/password/${user.id}`, user),
            thunkAPI)
    });