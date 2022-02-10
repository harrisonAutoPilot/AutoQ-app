import { createSlice } from "@reduxjs/toolkit";
import { listProducts, listWishlistProducts, addToWishlistProducts, searchProducts, listPopularProducts, removeFromWishlistProducts, searchProductsByItems } from "@Request/products"

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
            .addCase(listPopularProducts.pending, state => {
                state.update = "idle";
                state.status = "pending";
                state.loaded = "pending";
                state.errors = {};
            })
            .addCase(listPopularProducts.fulfilled, (state, action) => {
                state.popularProducts = action.payload;
                state.status = "success";
                state.loaded = "success";
                state.errors = {};
            })
            .addCase(listPopularProducts.rejected, (state, { payload }) => {
                state.status = "failed";
                state.loaded = "failed";
                state.errors = payload;
                state.products = [];
                state.popularProducts = []
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


        builder
            .addCase(listWishlistProducts.pending, state => {
                state.update = "idle";
                state.status = "pending";
                state.errors = {};
            })
            .addCase(listWishlistProducts.fulfilled, (state, action) => {
                state.wishList = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(listWishlistProducts.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
            })

        builder
            .addCase(addToWishlistProducts.pending, state => {
                state.wishlistStatus = "pending";
                state.errors = {};
            })
            .addCase(addToWishlistProducts.fulfilled, (state, action) => {
                state.wishlistStatus = "success";
                state.errors = {};
            })
            .addCase(addToWishlistProducts.rejected, (state, { payload }) => {
                state.wishlistStatus = "failed";
                state.errors = payload.msg;
            })

            builder
            .addCase(removeFromWishlistProducts.pending, state => {
                state.wishlistStatus = "pending";
                state.errors = {};
            })
            .addCase(removeFromWishlistProducts.fulfilled, (state, action) => {
                state.wishlistStatus = "success";
                state.errors = {};
            })
            .addCase(removeFromWishlistProducts.rejected, (state, { payload }) => {
                state.wishlistStatus = "failed";
                state.errors = payload.msg;
            })
    }
});


export const { cleanup } = productSlice.actions

export default productSlice.reducer;