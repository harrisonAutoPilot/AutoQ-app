import { createSlice } from "@reduxjs/toolkit";
import { getStore, deleteStore, createStore, getUserStore } from "@Request/Store";

export const storeSlice = createSlice({
    name: "store",
    initialState: {
        stores: [],
        usersStore: [],
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
            .addCase(getUserStore.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.usersStore = [];
            })
            .addCase(getUserStore.fulfilled, (state, action) => {
                state.usersStore = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getUserStore.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.usersStore = [];
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
                console.log(action)
                state.update = "success";
                state.errors = {};
            })
            .addCase(createStore.rejected, (state, { payload }) => {
                console.log(payload)
                state.update = "failed";
                state.errors = payload;
            })
    }
});

export const {cleanup } = storeSlice.actions

export default storeSlice.reducer;