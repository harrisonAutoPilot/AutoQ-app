import { createSlice} from "@reduxjs/toolkit";
import {getCustomers} from "@Request/Customer";

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customers: [],
        status: "idle",
        errors: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
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
    }
});

export const { cleanup } = customerSlice.actions

export default customerSlice.reducer;