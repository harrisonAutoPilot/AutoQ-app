import { createSlice} from "@reduxjs/toolkit";
import {getDeals, getDealById, addDealToCart} from "@Request/Deal"
import dict from "@Helper/dict";


export const dealSlice = createSlice({
    name: "deal",
    initialState: {
        deals: [],
        status: "idle",
        errors: {},
        idStatus: "idle",
        deal: {},
        addDealStatus: "idle",
        addDeal: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },
        cleanupDealStatus: (state) => {
            state.addDealStatus= "idle",
            state.addDeal = {}
            
        },
    },
    extraReducers: builder => {
            builder
            .addCase(getDeals.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.deals = []
            })
            .addCase(getDeals.fulfilled, (state, action) => {
                state.deals = action.payload.data;
                state.status = "success";
            })
            .addCase(getDeals.rejected, (state, { payload }) => {
                console.log("to check fail", state.status)
                state.errors = payload;
            })

            builder
            .addCase(getDealById.pending, state => {
                state.idStatus = "pending";
                state.errors = {};
                state.deal = {}
            })
            .addCase(getDealById.fulfilled, (state, action) => {
                state.idStatus = "success";
                state.deal = action.payload.data
            })
            .addCase(getDealById.rejected, (state, { payload }) => {
                state.idStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(addDealToCart.pending, state => {
                state.addDealStatus = "pending";
                state.errors = {};
                state.addDeal = {}
            })
            .addCase(addDealToCart.fulfilled, (state, action) => {
                console.log(action.payload, "deal pass")
                state.addDealStatus = "success";
                state.addDeal = action.payload
            })
            .addCase(addDealToCart.rejected, (state, { payload }) => {
                console.log(payload, "deal fail")
                state.addDealStatus = "failed";
                state.errors = payload;
            })


    }
});
export const { cleanup, cleanupDealStatus } = dealSlice.actions

export default dealSlice.reducer;
