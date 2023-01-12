import { createSlice} from "@reduxjs/toolkit";
import {getCustomerOrders, placeOrder, reOrder, trackOrder, verifyOrder, verifyCode, getCustomerPendingOrders} from "@Request/CustomerOrder";
import dict from "@Helper/dict";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        status: "idle",
        errors: {},
        errorsCheck:{},
        update: "idle",
        orderDetail : {},
        loaded: "idle",
        verify: "idle",
        verificationStatus:"idle",
        pendingOrders: [],
        trackOrderStatus: "idle",
        trackOrderList: [],
        pendingOrdersCurrentPage: {},
        ordersCurrentPage: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.errorsCheck = {}
            state.update = "idle"
            state.verify = "idle"
            state.verificationStatus = "idle"
            state.pendingOrders = []
            state.trackOrderList= []
            state.trackOrderStatus = "idle"
        },
        cleanOrder: (state) => {
            state.status = "idle"
            state.orders = []
            state.ordersCurrentPage = {}
        },
        cleanReOrder: (state) => {
            state.errors = {}
            state.errorsCheck = {}
            state.update = "idle"
            state.orderDetail = {}
            state.trackOrderList= []
            state.trackOrderStatus = "idle"
            state.verify = "idle"
            state.verificationStatus = "idle"
        },
        cleanErr: (state) => {
            state.errors = {}
            state.errorsCheck = {}
        },
        cleanVerify: (state) => {
            state.verificationStatus = "idle"
        },
        cleanfailedOrder: (state) => {
            state.errors = {}
            state.errorsCheck = {}
            // state.update = "idle",
            state.verify = "idle"
            state.verificationStatus = "idle"
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getCustomerOrders.pending, state => {
                state.status = "pending";
                state.errors = {};
            
            })
            .addCase(getCustomerOrders.fulfilled, (state, action) => {
                state.orders = dict(state.orders, action.payload.orders.data);
                state.ordersCurrentPage = action.payload.orders
                state.status = "success";
                state.errors = {};
            })
            .addCase(getCustomerOrders.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.orders = [];
                state.ordersCurrentPage = {}
            })

            builder
            .addCase(getCustomerPendingOrders.pending, state => {
                state.errors = {};
                state.loaded = "pending"
            })
            .addCase(getCustomerPendingOrders.fulfilled, (state, action) => {
                state.pendingOrders = dict(state.pendingOrders, action.payload.orders.data);
                state.pendingOrdersCurrentPage = action.payload.orders
                state.errors = {};
                state.loaded = "success";
            })
            .addCase(getCustomerPendingOrders.rejected, (state, { payload }) => {
                state.errors = payload;
                state.pendingOrders = [];
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
                console.log(action.payload, "verify suc")
                state.verificationStatus = "success"
                state.errors = {}; 

            })
            .addCase(verifyOrder.rejected, (state, { payload }) => {
            
                state.verificationStatus = "failed"
                state.errors = payload;
                console.log("redux errors", payload);
            })

            builder
            .addCase(verifyCode.pending, state => {
                state.errors = {};
                state.errorsCheck = {}
                state.verify = "pending";
                console.log("redux verifycode is pending");
            })
            .addCase(verifyCode.fulfilled, (state, action) => {
                state.errors = {}; 
                state.errorsCheck = {};
                state.verify =  "success";

            })
            .addCase(verifyCode.rejected, (state, { payload }) => {
                state.errors = payload;
                state.verify =  "failed";
                state.errorsCheck = payload;
                console.log("redux verifycode is failed3", state.errorsCheck);
            })

            builder
            .addCase(reOrder.pending, state => {
                state.update = "pending";
                state.errors = {};
                state.orderDetail = {}
            })
            .addCase(reOrder.fulfilled, (state, action) => {
                state.update = "success";
                state.errors = {}; 
                state.orderDetail = action.payload

            })
            .addCase(reOrder.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
                state.orderDetail = {}
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

export const { cleanup, cleanErr, cleanVerify, cleanfailedOrder, cleanReOrder, cleanOrder } = orderSlice.actions

export default orderSlice.reducer;