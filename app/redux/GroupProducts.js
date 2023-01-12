import { createSlice} from "@reduxjs/toolkit";
import {getKessington , getBackInStock, getPopularProducts,  getNewProducts} from "@Request/GroupProducts"
import dict from "@Helper/dict";


export const groupProductSlice = createSlice({
    name: "groupProduct",
    initialState: {
        status: "idle",
        backInStocks: {},
        backInStocksItems:[],
        kessingtons: {},
        kessingtonItems:[],
        popularProducts: {},
        popularProductItems:[],
        newProducts: {},
        newProductItems:[],
     
        errors: {},
        addBackInStock: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },
        cleanupGroup: (state) => {
           
            state.backInStocks= {},
            state.backInStocksItems = [],
            state.popularProducts= {},
            state.popularProductItems=[],
            state.kessingtons= {},
            state.kessingtonItems=[],
            state.newProducts= {},
            state.newProductItems=[]

        },
    },
    extraReducers: builder => {
            builder
            .addCase(getBackInStock.pending, state => {
                console.log("backInStocks pending");
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


            builder
            .addCase(getKessington.pending, state => {
                console.log("kessington pending")
                state.status = "pending";
                state.errors = {};
                state.kessingtons = {};
              
            })
            
            .addCase(getKessington.fulfilled, (state, action) => { 
                state.kessingtons = action.payload
                console.log("the kess redux", action.payload);
                state.kessingtonItems = dict(state.kessingtonItems, action.payload)
                state.status = "success";
                state.errors = {};
            })

            .addCase(getKessington.rejected, (state, { payload }) => {
                console.log("kessington fail", payload)
                state.status = "failed";
                state.errors = payload;
            })  
            
            
            builder
            .addCase(getPopularProducts.pending, state => {
                console.log("popularProduct pending")
                state.status = "pending";
                state.errors = {};
                state.popularProducts = {};   
            })

            .addCase(getPopularProducts.fulfilled, (state, action) => { 
                state.popularProducts = action.payload
                state.popularProductItems = dict(state.popularProductItems, action.payload)
                state.status = "success";
                state.errors = {};
            })

            .addCase(getPopularProducts.rejected, (state, { payload }) => {
                console.log("popularProduct fail", payload)
                state.status = "failed";
                state.errors = payload;
            })


            builder
            .addCase(getNewProducts.pending, state => {
                console.log("newProducts pending")
                state.status = "pending";
                state.errors = {};
                state.newProducts = {};
              
            })

            .addCase(getNewProducts.fulfilled, (state, action) => { 
                state.newProducts = action.payload
                console.log("the new ...", action.payload);
                state.newProductItems = dict(state.newProductItems, action.payload)
                state.status = "success";
                state.errors = {};
            })

            .addCase(getNewProducts.rejected, (state, { payload }) => {
                console.log("popularProduct fail", payload)
                state.status = "failed";
                state.errors = payload;
            })



    }
});
export const { cleanup, cleanupGroup} = groupProductSlice.actions

export default groupProductSlice.reducer;
