import { createSlice} from "@reduxjs/toolkit";
import {getNewProducts} from "@Request/NewProducts"
import dict from "@Helper/dict";


export const newProductSlice = createSlice({
    name: "newProduct",
    initialState: {
        newProducts: {},
        newProductItems:[],
        newProductStatus: "idle",
        errors: {},
        idStatus: "idle",
       
      
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },

    },
    extraReducers: builder => {
            builder
            .addCase(getNewProducts.pending, state => {
                console.log("newProducts pending")
                state.newProductStatus = "pending";
                state.errors = {};
                state.newProducts = {};
              
            })

            .addCase(getNewProducts.fulfilled, (state, action) => { 
                state.newProducts = action.payload
                console.log("the new ...", action.payload);
                state.newProductItems = dict(state.newProductItems, action.payload)
                state.newProductStatus = "success";
                state.errors = {};
            })

            .addCase(getNewProducts.rejected, (state, { payload }) => {
                console.log("popularProduct fail", payload)
                state.newProductStatus = "failed";
                state.errors = payload;
            })

           
           
    }
});
export const { cleanup,  } = newProductSlice.actions

export default newProductSlice.reducer;
