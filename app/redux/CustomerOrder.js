import { createSlice} from "@reduxjs/toolkit";
import {getCustomerOrders, placeOrder, reOrder, trackOrder, verifyOrder, verifyCode} from "@Request/CustomerOrder";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        status: "idle",
        errors: {},
        update: "idle",
        orderDetail : {},
        loaded: "idle",
        verify: "idle",
        verificationStatus:"idle",
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle",
            state.orderDetail = {},
            state.verify = "idle",
            state.verificationStatus = "idle"
        },
        cleanErr: (state) => {
            state.errors = {}
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCustomerOrders.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.orders = [];
                state.loaded = "pending"
            })
            .addCase(getCustomerOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.status = "success";
                state.errors = {};
                state.loaded = "success";
            })
            .addCase(getCustomerOrders.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.orders = [];
                state.loaded = "failed";
            })

            builder
            .addCase(placeOrder.pending, state => {
                state.update = "pending";
                state.errors = {};
                state.orderDetail = {}
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.update = "success";
                state.errors = {}; 
                state.orderDetail = action.payload

            })
            .addCase(placeOrder.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
                state.orderDetail = {}
            })

            builder
            .addCase(verifyOrder.pending, state => {
                state.errors = {};
                state.verificationStatus = "pending"
            })
            .addCase(verifyOrder.fulfilled, (state, action) => {
                state.verificationStatus = "success"
                state.errors = {}; 

            })
            .addCase(verifyOrder.rejected, (state, { payload }) => {
                state.verificationStatus = "failed"
                state.errors = payload;
            })

            builder
            .addCase(verifyCode.pending, state => {
                state.orderDetail = {};
                state.errors = {};
                state.verify = "pending";
            })
            .addCase(verifyCode.fulfilled, (state, action) => {
                state.errors = {}; 
                state.verify =  "success";

            })
            .addCase(verifyCode.rejected, (state, { payload }) => {
                state.errors = payload;
                state.verify =  "failed";
            })

            builder
            .addCase(reOrder.pending, state => {
                state.update = "pending";
                state.errors = {};
                state.orderDetail = []
            })
            .addCase(reOrder.fulfilled, (state, action) => {
                state.update = "success";
                state.errors = {}; 
                state.orderDetail = action.payload

            })
            .addCase(reOrder.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
                state.orderDetail = []
            })

            builder
            .addCase(trackOrder.pending, state => {
                state.trackOrderStatus = "pending";
                state.errors = {};
                state.trackOrderList = []
            })
            .addCase(trackOrder.fulfilled, (state, action) => {
                state.trackOrderStatus = "success";
                state.errors = {}; 
                state.trackOrderList = action.payload

            })
            .addCase(trackOrder.rejected, (state, { payload }) => {
                state.trackOrderStatus = "failed";
                state.errors = payload;
                state.trackOrderList = []
            })
    }

});

export const { cleanup, cleanErr } = orderSlice.actions

export default orderSlice.reducer;