import { createSlice} from "@reduxjs/toolkit";
import {addToCart, updateCart, listCart, deleteCart} from "@Request/Cart"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        status: "idle",
        errors: {},
        addCart: "idle",
        removeCart: "idle",
        addCart: "idle",
        updateCartItems: "idle",
        loaded: "idle",
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.addCart = "idle",
            state.removeCart = "idle",
            state.updateCartItems = "idle"
            state.loaded = "idle";
        }
    },
    extraReducers: builder => {
        builder
            .addCase(listCart.pending, state => {
                state.status = "pending";
                state.loaded = "pending";
                state.errors = {};
                state.items = [];
            })
            .addCase(listCart.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "success";
                state.loaded = "success";
                state.errors = {};
            })
            .addCase(listCart.rejected, (state, { payload }) => {
                state.status = "failed";
                state.loaded ="failed";
                state.errors = payload;
                state.items = [];
            })

            builder
            .addCase(addToCart.pending, state => {
                state.addCart = "pending";
                state.errors = {};
                state.addCartMsg = [];
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.addCart = "success";
                state.errors = {};
            })
            .addCase(addToCart.rejected, (state, { payload }) => {
                state.addCart = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateCart.pending, state => {
                state.updateCartItems = "pending";
                state.errors = {};
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.updateCartItems = "success";
                state.errors = {};
            })
            .addCase(updateCart.rejected, (state, { payload }) => {
                state.updateCartItems = "failed";
                state.errors = payload;
            })

            builder
            .addCase(deleteCart.pending, state => {
                state.removeCart = "pending";
                state.errors = {};
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.removeCart = "success";
                state.errors = {};
            })
            .addCase(deleteCart.rejected, (state, { payload }) => {
                state.removeCart = "failed";
                state.errors = payload;
            })

    }
});
export const { cleanup } = cartSlice.actions

export default cartSlice.reducer;