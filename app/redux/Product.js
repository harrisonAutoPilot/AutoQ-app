import { createSlice } from "@reduxjs/toolkit";
import { listProducts, searchProducts, searchProductsByItems } from "@Request/Product"

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        popularProducts: [],
        relatedProducts: [],
        shopProducts: [],
        searchedProducts: [],
        wishList: [],
        status: "idle",
        errors: {},
        update: "idle",
        wishlistStatus: "idle",
        type_head: [],
        loaded: "idle"
    },
    reducers: {
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle",
            state.wishlistStatus = "idle"
        }
    },
    extraReducers: builder => {
        builder
            .addCase(listProducts.pending, state => {
                state.status = "pending";
                state.update = "idle";
                state.errors = {};
            })
            .addCase(listProducts.fulfilled, (state, action) => {
                state.products = action.payload.data;
                state.status = "success";
                state.errors = {};
            })
            .addCase(listProducts.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.products = [];
            })

        builder
            .addCase(searchProducts.pending, state => {
                state.update = "idle";
                state.status = "pending";
                state.errors = {};
                state.searchedProducts = [];
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.searchedProducts = action.payload.data;
                state.status = "success";
                state.errors = {};
            })
            .addCase(searchProducts.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.searchedProducts = [];
            })

            builder
            .addCase(searchProductsByItems.pending, state => {
                state.update = "idle";
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


export const { cleanup } = productSlice.actions

export default productSlice.reducer;