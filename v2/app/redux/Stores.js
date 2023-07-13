import { createSlice } from "@reduxjs/toolkit";
import { getStore, deleteStore, createStoreV2, getUserStore, getPendingUserStore } from "@Request2/Store";

export const storeSlice = createSlice({
    name: "store",
    initialState: {
        stores: [],
        usersStore: [],
        storeStatus: "idle",
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
        cleanUpStore: (state) => {
            state.errors = {}
            state.storeStatus = "idle"
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
                state.storeStatus = "pending";
                state.errors = {};
                state.stores = [];
            })
            .addCase(getStore.fulfilled, (state, action) => {
                state.stores = action.payload;
                state.storeStatus = "success";
            })
            .addCase(getStore.rejected, (state, { payload }) => {
                state.storeStatus = "failed";
                state.errors = payload;
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
            .addCase(createStoreV2.pending, state => {
                state.createStore = "pending";
                state.errors = {};
            })
            .addCase(createStoreV2.fulfilled, (state, action) => {
                state.createStore = "success";
            })
            .addCase(createStoreV2.rejected, (state, { payload }) => {
                state.createStore = "failed";
                state.errors = payload;
            })
    }
});

export const {cleanup,cleanUpStore, cleanupDelete } = storeSlice.actions

export default storeSlice.reducer;