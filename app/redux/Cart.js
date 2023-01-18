import { createSlice} from "@reduxjs/toolkit";
import {addToCart, updateCart,deleteAllCart,deleteMultipleCart, listCart,searchCartList, deleteCart} from "@Request/Cart"
import dict from "@Helper/dict";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        listItems:[],
        status: "idle",
        searchStatus:"idle",
        searchCartsData: {},
        searchedCarts:[],
        errors: {},
        addCart: "idle",
        removeCart: "idle",
        removeAllCart: "idle",
        removeMultipleCart: "idle",
        addCart: "idle",
        updateCartItems: "idle",
        loaded: "idle",
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.addCart = "idle",
            state.removeCart = "idle",
            state.removeAllCart = "idle",
            state.removeMultipleCart = "idle",
            state.updateCartItems = "idle"
        },
        idle: (state) => {
            state.loaded = "idle";
        },
        cleanList: (state) => {
            state.items = []
            state.listItems = []
        },
        cleanCarts: (state) => {
            state.searchedCarts = []
            state.searchCartsData = {}
        },
        cleanStatus: (state) => {
            state.loaded = "idle"
        },
        cleanSearchCart: (state) => {
            state.searchStatus = "idle"
            state.searchCartsData = {}
            state.searchedCarts = []
        }

    },
    extraReducers: builder => {
        builder
            .addCase(listCart.pending, state => {
                state.loaded = "pending";
                state.errors = {};
            })
            .addCase(listCart.fulfilled, (state, action) => {
                state.items = action.payload
                state.listItems = dict(state.listItems, action.payload.carts.data)
                state.loaded = "success";
                state.errors = {};
            })
            .addCase(listCart.rejected, (state, { payload }) => {
                state.loaded ="failed";
                state.errors = payload;
                state.items = [];
                state.listItems = [];
            })



            builder
            .addCase(searchCartList.pending, state => {
                state.errors = {};
                state.searchStatus = "pending";
            })
            .addCase(searchCartList.fulfilled, (state, action) => {
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
                state.searchedCarts = reducerWithDictionary(state.searchedCarts, action.payload.data);
                state.searchCartsData = action.payload;
                state.searchStatus = "success";
                state.errors = {};
            })
            .addCase(searchCartList.rejected, (state, { payload }) => {
                state.searchStatus= "failed";
                state.errors = payload;
                state.searchedCarts = [];
                state.searchCartsData = {};
            })




            builder
            .addCase(addToCart.pending, state => {
                state.addCart = "pending";
                state.errors = {};
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.addCart = "success";
                state.errors = {};
            })
            .addCase(addToCart.rejected, (state, { payload }) => {
                state.addCart = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateCart.pending, state => {
                state.updateCartItems = "pending";
                state.errors = {};
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.updateCartItems = "success";
                state.errors = {};
            })
            .addCase(updateCart.rejected, (state, { payload }) => {
                state.updateCartItems = "failed";
                state.errors = payload;
            })

            builder
            .addCase(deleteCart.pending, state => {
                state.removeCart = "pending";
                state.errors = {};
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.removeCart = "success";
                state.errors = {};
            })
            .addCase(deleteCart.rejected, (state, { payload }) => {
                state.removeCart = "failed";
                state.errors = payload;
            })

            builder
            .addCase(deleteAllCart.pending, state => {
                state.removeAllCart = "pending";
                state.errors = {};
            })
            .addCase(deleteAllCart.fulfilled, (state, action) => {
                state.removeAllCart = "success";
                state.errors = {};
            })
            .addCase(deleteAllCart.rejected, (state, { payload }) => {
                state.removeAllCart = "failed";
                state.errors = payload;
            })

            builder
            .addCase(deleteMultipleCart.pending, state => {
                state.removeMultipleCart = "pending";
                state.errors = {};
            })
            .addCase(deleteMultipleCart.fulfilled, (state, action) => {
                state.removeMultipleCart = "success";
                state.errors = {};
            })
            .addCase(deleteMultipleCart.rejected, (state, { payload }) => {
                state.removeMultipleCart = "failed";
                state.errors = payload;
            })


    }
});
export const { cleanup, idle,cleanCarts,cleanSearchCart, cleanList, cleanStatus } = cartSlice.actions

export default cartSlice.reducer;