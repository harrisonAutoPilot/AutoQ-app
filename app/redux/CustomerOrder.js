import { createSlice} from "@reduxjs/toolkit";
import {getCustomerOrders, placeOrder, reOrder,reAddToCart, trackOrder, verifyOrder, verifyCode,getIncompleteItems,verifyCodeIncomplete, getCustomerPendingOrders} from "@Request/CustomerOrder";
import dict from "@Helper/dict";


export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        status: "idle",
        addToCart: "idle",
        errors: {},
        errorIncomplete:{},
        added:{},
        errorsCheck:{},
        update: "idle",
        orderDetail : {},
        loaded: "idle",
        verify: "idle",
        verifyIncom:"idle",
        verificationStatus:"idle",
        incompleteOrderCurrentPage: {},
        incompleteOrders :[],
        pendingOrders: [],
        trackOrderStatus: "idle",
        trackOrderList: [],
        pendingOrdersCurrentPage: {},
        ordersCurrentPage: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.errorIncomplete = {}
            state.errorsCheck = {}
            state.update = "idle"
            state.verify = "idle"
            state.verifyIncom = "idle"
            state.verificationStatus = "idle"
            state.pendingOrders = []
            state.incompleteOrders = []
            state.trackOrderList= []
            state.trackOrderStatus = "idle"
        },
        cleanOrder: (state) => {
            state.status = "idle"
            state.orders = []
            state.ordersCurrentPage = {}
            state.incompleteOrderCurrentPage = {}
        },
        cleanReOrder: (state) => {
            state.errors = {}
            state.errorIncomplete = {}
            state.errorsCheck = {}
            state.update = "idle"
            state.addToCart = "idle"
            state.orderDetail = {}
            state.added = {}
            state.trackOrderList= []
            state.trackOrderStatus = "idle"
            state.verify = "idle"
            state.verifyIncom = "idle"
            state.verificationStatus = "idle"
        },
        cleanErr: (state) => {
            state.errors = {}
            state.errorsCheck = {}
            state.errorIncomplete = {}
        },
        cleanVerify: (state) => {
            state.verificationStatus = "idle"
        },
        cleanfailedOrder: (state) => {
            state.errors = {}
            state.errorIncomplete = {}
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
                console.log("the success code", action.payload)
                state.verificationStatus = "success"

            })
            .addCase(verifyOrder.rejected, (state, { payload }) => {
                state.verificationStatus = "failed"
                state.errors = payload;
              
            })

            builder
            .addCase(verifyCode.pending, state => {
                state.errors = {};
                state.errorIncomplete ={};
                state.errorsCheck = {};
                state.verify = "pending";
            
            })
            .addCase(verifyCode.fulfilled, (state, action) => {
                state.errors = {}; 
                state.errorsCheck = {};
                state.errorIncomplete = {};
             
                state.verify =  "success";

            })
            .addCase(verifyCode.rejected, (state, { payload }) => {
                state.errors = payload;
                state.verify =  "failed";
                state.errorsCheck = payload;
                state.errorIncomplete = payload;
             
            })



            builder
            .addCase(verifyCodeIncomplete.pending, state => {
                state.errors = {};
                state.errorsCheck = {}
                state.verifyIncom = "pending";
            
            })
            .addCase(verifyCodeIncomplete.fulfilled, (state, action) => {
                console.log('the verify coooo', action.payload);
                state.errors = {}; 
                state.errorsCheck = {};
                state.verifyIncom =  "success";

            })
            .addCase(verifyCodeIncomplete.rejected, (state, { payload }) => {
                state.errors = payload;
                console.log("the verify coooo", payload);
                state.verifyIncom =  "failed";
                state.errorsCheck = payload;
             
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


            builder
            .addCase(reAddToCart.pending, state => {
                state.addToCart = "pending";
                state.errors = {};
                state.added = {}
            })
            .addCase(reAddToCart.fulfilled, (state, action) => {
                state.addToCart = "success";
                state.errors = {}; 
                state.added = action.payload

            })
            .addCase(reAddToCart.rejected, (state, { payload }) => {
                state.addToCart = "failed";
                state.errors = payload;
                state.added = {}
            })

            builder
            .addCase(getIncompleteItems.pending, state => {
                state.errors = {};
                state.loaded = "pending"
            })
            .addCase(getIncompleteItems.fulfilled, (state, action) => {
                //state.incompleteOrders = dict(state.incompleteOrders, action.payload.orders);
                state.incompleteOrderCurrentPage = action.payload;
                console.log("the redux incomplete",action.payload);
                state.errors = {};
                state.loaded = "success";
            })
            .addCase(getIncompleteItems.rejected, (state, { payload }) => {
                state.errors = payload;
                state.incompleteOrders = [];
                state.loaded = "failed";
            })


    }

});

export const { cleanup, cleanErr, cleanVerify, cleanfailedOrder, cleanReOrder, cleanOrder } = orderSlice.actions

export default orderSlice.reducer;