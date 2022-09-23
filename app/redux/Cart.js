import { createSlice} from "@reduxjs/toolkit";
import {addToCart, updateCart,deleteAllCart,deleteMultipleCart, listCart, deleteCart} from "@Request/Cart"
import dict from "@Helper/dict";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        listItems:[],
        status: "idle",
        errors: {},
        addCart: "idle",
        removeCart: "idle",
        removeAllCart: "idle",
        removeMultipleCart: "idle",
        addCart: "idle",
        updateCartItems: "idle",
        loaded: "idle",
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.addCart = "idle",
            state.removeCart = "idle",
            state.removeAllCart = "idle",
            state.removeMultipleCart = "idle",
            state.updateCartItems = "idle"
        },
        idle: (state) => {
            state.loaded = "idle";
        },
        cleanList: (state) => {
            state.items = []
            state.listItems = []
        }

    },
    extraReducers: builder => {
        builder
            .addCase(listCart.pending, state => {
                state.status = "pending";
                state.loaded = "pending";
                state.errors = {};
            })
            .addCase(listCart.fulfilled, (state, action) => {
                state.items = action.payload
                state.listItems = dict(state.listItems, action.payload.carts.data)
                state.status = "success";
                state.loaded = "success";
                state.errors = {};
            })
            .addCase(listCart.rejected, (state, { payload }) => {
                state.status = "failed";
                state.loaded ="failed";
                state.errors = payload;
                state.items = [];
                state.listItems = [];
            })

            builder
            .addCase(addToCart.pending, state => {
                state.addCart = "pending";
                state.errors = {};
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

            builder
            .addCase(deleteAllCart.pending, state => {
                state.removeAllCart = "pending";
                state.errors = {};
            })
            .addCase(deleteAllCart.fulfilled, (state, action) => {
                state.removeAllCart = "success";
                state.errors = {};
            })
            .addCase(deleteAllCart.rejected, (state, { payload }) => {
                state.removeAllCart = "failed";
                state.errors = payload;
            })

            builder
            .addCase(deleteMultipleCart.pending, state => {
                state.removeMultipleCart = "pending";
                state.errors = {};
            })
            .addCase(deleteMultipleCart.fulfilled, (state, action) => {
                state.removeMultipleCart = "success";
                state.errors = {};
            })
            .addCase(deleteMultipleCart.rejected, (state, { payload }) => {
                state.removeMultipleCart = "failed";
                state.errors = payload;
            })


    }
});
export const { cleanup, idle, cleanList } = cartSlice.actions

export default cartSlice.reducer;