import { createSlice} from "@reduxjs/toolkit";
import {getCustomers, updatePendingCustomers, registerCustomer, getCustomerOrder} from "@Request/Customer";
import dict from "@Helper/dict"

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customers: [],
        status: "idle",
        update: "idle",
        errors: {},
        orders: [],
        orderStatus: "idle",
        ordersCurrentPage: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.update = "idle"
        },
        cleanOrder: (state) => {
            state.orderStatus = "idle"
            state.orders = []
            state.ordersCurrentPage = {}
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
            })
            .addCase(getCustomers.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.customers = [];
            })

            builder
            .addCase(getCustomerOrder.pending, state => {
                state.orderStatus = "pending";
                state.errors = {};
            })
            .addCase(getCustomerOrder.fulfilled, (state, action) => {
                state.orders = dict(state.orders, action.payload.orders.data);
                state.ordersCurrentPage = action.payload.orders
                state.orderStatus = "success";
            })
            .addCase(getCustomerOrder.rejected, (state, { payload }) => {
                state.orderStatus = "failed";
                state.errors = payload;
                state.orders = [];
                state.ordersCurrentPage = {}
            })

            builder
            .addCase(updatePendingCustomers.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updatePendingCustomers.fulfilled, (state, action) => {
                state.update = "success";
                console.log("the pendingCustomer success", action.payload);
                state.errors = {};
            })
            .addCase(updatePendingCustomers.rejected, (state, { payload }) => {
                console.log("the pendingCustomer error", payload);
                state.update = "failed";
                state.errors = payload;
            })

            builder
            .addCase(registerCustomer.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(registerCustomer.fulfilled, (state, action) => {
                console.log("the registerCustomer success", action.payload);
                state.update = "success";
                state.errors = {};
            })
            .addCase(registerCustomer.rejected, (state, { payload }) => {
                console.log("the registerCustomer error", payload);
                state.update = "failed";
                state.errors = payload;
            })
    }
});

export const { cleanup, cleanOrder } = customerSlice.actions

export default customerSlice.reducer;