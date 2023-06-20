import { createSlice} from "@reduxjs/toolkit";
import {getPopularProducts} from "@Request/PopularProducts"
import dict from "@Helper/dict";


export const popularProductSlice = createSlice({
    name: "popularProduct",
    initialState: {
        popularProducts: [],
        popularProductItems:[],
        status: "idle",
        errors: {},
        idStatus: "idle",
        addPopularProductnStatus: "idle",
        addPopularProduct: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },

    },
    extraReducers: builder => {
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

           
           
    }
});
export const { cleanup,  } = popularProductSlice.actions

export default popularProductSlice.reducer;
