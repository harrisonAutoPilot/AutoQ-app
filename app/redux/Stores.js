import { createSlice } from "@reduxjs/toolkit";
import { getStore, deleteStore, createStore, getVerifiedStore } from "@Request/Store";

export const storeSlice = createSlice({
    name: "store",
    initialState: {
        stores: [],
        verifiedStores: [],
        status: "idle",
        update: "idle",
        errors: {},
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle"
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getStore.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.stores = [];
            })
            .addCase(getStore.fulfilled, (state, action) => {
                state.stores = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getStore.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.stores = [];
            })

            builder
            .addCase(getVerifiedStore.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.verifiedStores = [];
            })
            .addCase(getVerifiedStore.fulfilled, (state, action) => {
                state.verifiedStores = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getVerifiedStore.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.verifiedStores = [];
            })


        builder
            .addCase(deleteStore.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(deleteStore.fulfilled, (state, action) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(deleteStore.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

            builder
            .addCase(createStore.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(createStore.fulfilled, (state, action) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(createStore.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })
    }
});

export const {cleanup } = storeSlice.actions

export default storeSlice.reducer;