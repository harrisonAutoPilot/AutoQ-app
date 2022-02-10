import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request/axiosBase";
import { apiRequest } from "@Request/request";

export const listProducts = createAsyncThunk("product/all",
    async (_, thunkAPI) => {
        const Axios = AxiosBase();
        return apiRequest(Axios.get('api/v1/products'), thunkAPI)
    });

export const listPopularProducts = createAsyncThunk("product/popular",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/popular_products'), thunkAPI)
    });

export const listWishlistProducts = createAsyncThunk("product/wishlist",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/wishlist'), thunkAPI)
    });

export const addToWishlistProducts = createAsyncThunk("product/add_wishlist",
    async (product, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/wishlist', product), thunkAPI)
    });

export const removeFromWishlistProducts = createAsyncThunk("product/remove_wishlist",
    async (product, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.delete(`api/v1/wishlist/${product}`), thunkAPI)
    });

export const searchProducts = createAsyncThunk("product/search",
    async (search, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/search_result?q=${search}`), thunkAPI)
    });

export const searchProductsByItems = createAsyncThunk("product/type-head",
    async (search, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/search_products_typeahead?q=${search}`), thunkAPI)
    });