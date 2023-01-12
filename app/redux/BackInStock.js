import { createSlice} from "@reduxjs/toolkit";
import {getBackInStock} from "@Request/BackInStock"
import dict from "@Helper/dict";


export const backInStockSlice = createSlice({
    name: "backInStock",
    initialState: {
        backInStocks: {},
        backInStocksItems:[],
        status: "idle",
        errors: {},
        addBackInStockStatus: "idle",
        addBackInStock: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },
        cleanupDealStatus: (state) => {
            state.addBackInStockStatus= "idle",
            state.addBackInStock = {}
            
        },
    },
    extraReducers: builder => {
            builder
            .addCase(getBackInStock.pending, state => {
                console.log("backInStocks pending")
                state.status = "pending";
                state.errors = {};
                state.backInStocks = {}; 
            })
  
            .addCase(getBackInStock.fulfilled, (state, action) => { 
                state.backInStocks = action.payload
                console.log("current backInStocks", state.backInStocks);
                state.backInStocksItems = dict(state.backInStocksItems, action.payload)
                console.log("Latest backInStocks length", state.backInStocksItems.length);
                state.status = "success";
                state.errors = {};
            })

            .addCase(getBackInStock.rejected, (state, { payload }) => {
                console.log("deal fail", payload)
                state.status = "failed";
                state.errors = payload;
            })

           

    }
});
export const { cleanup, cleanupBackInStockStatus } = backInStockSlice.actions

export default backInStockSlice.reducer;
