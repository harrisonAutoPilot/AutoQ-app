import { createSlice } from "@reduxjs/toolkit";
import { getStore, deleteStore, createStore, getUserStore, getPendingUserStore } from "@Request/Store";

export const storeSlice = createSlice({
    name: "store",
    initialState: {
        stores: [],
        usersStore: [],
        status: "idle",
        update: "idle",
        deletes: "idle",
        errors: {},
        pending: {},
        pendingStatus: "idle"
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle",
            state.deletes = "idle",
            state.pending = {}
            state.pendingStatus = "idle"
            // state.usersStore = []
        },
        cleanupDelete: (state) => {
            state.errors = {}
            state.update = "idle",
            state.deletes = "idle"
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
            .addCase(getPendingUserStore.pending, state => {
                state.pendingStatus = "pending";
                state.errors = {};
                state.pending = {};
            })
            .addCase(getPendingUserStore.fulfilled, (state, action) => {
                state.pending = action.payload;
                state.pendingStatus = "success";
                state.errors = {};
            })
            .addCase(getPendingUserStore.rejected, (state, { payload }) => {
                state.pendingStatus = "failed";
                state.errors = payload;
                state.pending = {};
            })



        builder
            .addCase(deleteStore.pending, state => {
                state.deletes = "pending";
                state.errors = {};
            })
            .addCase(deleteStore.fulfilled, (state, action) => {
                state.deletes = "success";
                state.errors = {};
            })
            .addCase(deleteStore.rejected, (state, { payload }) => {
                state.deletes = "failed";
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

export const {cleanup, cleanupDelete } = storeSlice.actions

export default storeSlice.reducer;