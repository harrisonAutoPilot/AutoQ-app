import { createSlice} from "@reduxjs/toolkit";
import {getBackInStock} from "@Request/BackInStock"
import dict from "@Helper/dict";


export const backInStockSlice = createSlice({
    name: "backInStock",
    initialState: {
        backInStocks: {},
        backInStocksItems:[],
        bisStatus: "idle",
        errors: {},
        addBackInStockStatus: "idle",
        addBackInStock: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },
        cleanupBackInStockStatus: (state) => {
            state.addBackInStockStatus= "idle",
            state.addBackInStock = {}
            
        },
    },
    extraReducers: builder => {
            builder
            .addCase(getBackInStock.pending, state => {
              
                state.bisStatus = "pending";
                state.errors = {};
                state.backInStocks = {}; 
            })
  
            .addCase(getBackInStock.fulfilled, (state, action) => { 
                state.backInStocks = action.payload
              
                state.backInStocksItems = dict(state.backInStocksItems, action.payload)
               
                state.bisStatus = "success";
                state.errors = {};
            })

            .addCase(getBackInStock.rejected, (state, { payload }) => {
              
                state.bisStatus = "failed";
                state.errors = payload;
            })

           

    }
});
export const { cleanup, cleanupBackInStockStatus } = backInStockSlice.actions

export default backInStockSlice.reducer;
