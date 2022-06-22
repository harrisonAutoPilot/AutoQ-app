import { createSlice } from "@reduxjs/toolkit";
import { listProducts, searchProducts, searchProductsByItems } from "@Request/Product"

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        searchedProducts: [],
        status: "idle",
        errors: {},
        type_head: [],
        loaded: "idle",
        searchProductsData: [],
    },
    reducers: {
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.loaded = "idle";
            state.products = []
            state.searchedProducts = []
        },
        cleanProducts: (state) => {
            state.searchedProducts = []
            state.searchProductsData = []
        },
    },
    extraReducers: builder => {
        builder
            .addCase(listProducts.pending, state => {
                state.status = "pending";
                state.loaded = "pending";
                state.errors = {};
                state.products = []
            })
            .addCase(listProducts.fulfilled, (state, action) => {
                state.products = action.payload.data;
                state.loaded = "success";
                state.status = "success";
                state.errors = {};
            })
            .addCase(listProducts.rejected, (state, { payload }) => {
                state.status = "failed";
                state.loaded = "failed";
                state.errors = payload;
                state.products = [];
            })

        builder
            .addCase(searchProducts.pending, state => {
                // state.status = "pending";
                state.errors = {};
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.searchedProducts = [...state.searchedProducts, ...action.payload.data];
                state.searchProductsData = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(searchProducts.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.searchedProducts = [];
                state.searchProductsData = [];
            })

            builder
            .addCase(searchProductsByItems.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.type_head = [];
            })
            .addCase(searchProductsByItems.fulfilled, (state, action) => {
                state.type_head = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(searchProductsByItems.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.type_head = [];
            })

    }
});


export const { cleanup, cleanProducts } = productSlice.actions

export default productSlice.reducer;