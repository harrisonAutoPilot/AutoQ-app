import { createSlice} from "@reduxjs/toolkit";
import {getOrders, placeOrder, reOrder, trackOrder, cancelOrder, orderFilter} from "@Request2/Order";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        status: "idle",
        errors: {},
        update: "idle",
        orderDetail : [],
        orderFilterStatus: "idle",
        orderFilterData: [],
        orderFilterCurrentData: {},
        loaded: "idle",
        trackOrderStatus: "idle",
        trackOrderList: [],
        cancelOrderStatus: [],
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle",
            state.orderDetail = [],
            state.trackOrderList = [],
            state.cancelOrderStatus = [],
            state.trackOrderStatus = "idle"
        },
        cleanOrderFilter: (state) => {
            state.orderFilterCurrentData = {}
            state.orderFilterData = []
            state.orderFilterStatus = "idle"
        },
        cleanPlaceOrder: (state) => {
            state.placeOrderStatus = "idle",
            state.errors = {}
        },
        cleanTrack: (state) => {
            state.trackOrderList  = "idle",
            state.errors = {}
        },
        cleanCancel: (state) => {
            state.cancelOrderStatus = "idle",
            state.errors = {}
        }
        

    },
    extraReducers: builder => {
        builder
            .addCase(getOrders.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.orders = [];
                state.loaded = "pending"
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.status = "success";
                state.errors = {};
                state.loaded = "success";
            })
            .addCase(getOrders.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.orders = [];
                state.loaded = "failed";
            })

            builder
            .addCase(placeOrder.pending, state => {
                state.update = "pending";
                state.errors = {};
                state.orderDetail = []
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.update = "success";
                state.errors = {}; 
                state.orderDetail = action.payload

            })
            .addCase(placeOrder.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
                state.orderDetail = []
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

            builder
            .addCase(orderFilter.pending, state => {
                state.orderFilterStatus = "pending";
                state.errors = {};
            })
            .addCase(orderFilter.fulfilled, (state, action) => {
                state.orderFilterStatus = "success";
                state.orderFilterCurrentData = action.payload
                state.orderFilterData = dict(state.orderFilterData, action.payload);
                state.errors = {}; 

            })
            .addCase(orderFilter.rejected, (state, { payload }) => {
                state.orderFilterStatus = "failed";
                state.errors = payload;
            })


            builder
            .addCase(cancelOrder.pending, state => {
                state.cancelOrderStatus = "pending";
                state.errors = {};
            })
            .addCase(cancelOrder.fulfilled, (state, action) => {
                state.cancelOrderStatus = "success";
                state.errors = {}; 

            })
            .addCase(cancelOrder.rejected, (state, { payload }) => {
                state.cancelOrderStatus = "failed";
                state.errors = payload;
            })
    }

});

export const { cleanup,cleanTrack,cleanCancel, logoutOrder,cleanReorder, cleanPlaceOrder, cleanOrderFilter } = orderSlice.actions

export default orderSlice.reducer;