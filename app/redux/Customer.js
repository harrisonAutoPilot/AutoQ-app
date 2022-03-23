import { createSlice} from "@reduxjs/toolkit";
import {getCustomers, updatePendingCustomers} from "@Request/Customer";

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customers: [],
        status: "idle",
        update: "idle",
        errors: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle",
            state.customers = []
        },
   
    },
    extraReducers: builder => {
        builder
            .addCase(getCustomers.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.customers = [];
            })
            .addCase(getCustomers.fulfilled, (state, action) => {
                state.customers = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getCustomers.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.customers = [];
            })

            builder
            .addCase(updatePendingCustomers.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updatePendingCustomers.fulfilled, (state, action) => {
                console.log(action.payload)
                state.update = "success";
                state.errors = {};
            })
            .addCase(updatePendingCustomers.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })
    }
});

export const { cleanup } = customerSlice.actions

export default customerSlice.reducer;