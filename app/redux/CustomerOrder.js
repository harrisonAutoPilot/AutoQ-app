import { createSlice} from "@reduxjs/toolkit";
import {getCustomerOrders, placeOrder, reOrder, trackOrder, verifyOrder, verifyCode, getCustomerPendingOrders} from "@Request/CustomerOrder";

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
        pendingOrders: [],
        trackOrderStatus: "idle",
        trackOrderList: [],
        pendingOrdersCurrentPage: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            // state.status = "idle",
            state.update = "idle"
            // state.orderDetail = {}
            state.verify = "idle"
            state.verificationStatus = "idle"
            state.pendingOrders = []
            state.trackOrderList= []
            state.trackOrderStatus = "idle"
        },
        cleanReOrder: (state) => {
            state.errors = {}
            state.update = "idle"
            state.orderDetail = {}
            state.trackOrderList= []
            state.trackOrderStatus = "idle"
            state.verify = "idle"
            state.verificationStatus = "idle"
        },
        cleanErr: (state) => {
            state.errors = {}
        },
        cleanVerify: (state) => {
            state.verificationStatus = "idle"
        },
        cleanfailedOrder: (state) => {
            state.errors = {}
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
                state.orders = [];
            })
            .addCase(getCustomerOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getCustomerOrders.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.orders = [];
            })

            builder
            .addCase(getCustomerPendingOrders.pending, state => {
                state.errors = {};
                state.loaded = "pending"
            })
            .addCase(getCustomerPendingOrders.fulfilled, (state, action) => {
                const reducerWithDictionary = (arrayOne, arrayTwo) => {
                    const reducedArray = []
                    const dictionary = {}
                  
                    arrayOne.forEach(object => {
                      if(dictionary[object.id]) return
                      dictionary[object.id] = true
                      reducedArray.push(object)
                    })
                  
                    arrayTwo.forEach(object => {
                      if(dictionary[object.id]) return
                      dictionary[object.id] = true
                      reducedArray.push(object)
                    })
                  
                    return reducedArray
                  }
                state.pendingOrders = reducerWithDictionary(state.pendingOrders, action.payload.orders.data);
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
                console.log(payload, "verify fail")
                state.verificationStatus = "failed"
                state.errors = payload;
            })

            builder
            .addCase(verifyCode.pending, state => {
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

export const { cleanup, cleanErr, cleanVerify, cleanfailedOrder, cleanReOrder } = orderSlice.actions

export default orderSlice.reducer;