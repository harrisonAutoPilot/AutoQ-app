import { createSlice} from "@reduxjs/toolkit";
import {getDeals, getDealById, addDealToCart} from "@Request/Deal"
import dict from "@Helper/dict";


export const dealSlice = createSlice({
    name: "deal",
    initialState: {
        deals: [],
        dealsItems:[],
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
                console.log("deal pending")
                state.status = "pending";
                state.errors = {};
                state.deals = [];
                state.dealsItems = []
            })

           
            .addCase(getDeals.fulfilled, (state, action) => { 
                state.deals = action.payload
               // console.log("this is deal new", action.payload);
                state.dealsItems = dict(state.dealsItems, action.payload.data)
                //console.log("deal redux", state.dealsItems)
                state.status = "success";
                state.errors = {};
            })
            .addCase(getDeals.rejected, (state, { payload }) => {
                console.log("deal fail", payload)
                state.status = "failed";
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
