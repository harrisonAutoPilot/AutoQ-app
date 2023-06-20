import { createSlice} from "@reduxjs/toolkit";
import {getKessington, getKessingtonById, addKessingtonToCart} from "@Request/Kessington"
import dict from "@Helper/dict";


export const kessingtonSlice = createSlice({
    name: "kessington",
    initialState: {
        kessingtons: [],
        kessingtonItems:[],
        kessingtonStatus: "idle",
        errors: {},
        idStatus: "idle",
        addKessingtonStatus: "idle",
        addKessington: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },
        cleanupKessingtonStatus: (state) => {
            state.addKessingtonStatus= "idle",
            state.addKessington = {}
            
        },
    },
    extraReducers: builder => {
            builder
            .addCase(getKessington.pending, state => {
                console.log("kessington pending")
                state.kessingtonStatus = "pending";
                state.errors = {};
                state.kessingtons = {};
              
            })
            
            .addCase(getKessington.fulfilled, (state, action) => { 
                state.kessingtons = action.payload
                state.kessingtonItems = dict(state.kessingtonItems, action.payload)
                state.kessingtonStatus = "success";
                state.errors = {};
            })


          

            .addCase(getKessington.rejected, (state, { payload }) => {
                console.log("kessington fail", payload)
                state.kessingtonStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(getKessingtonById.pending, state => {
                state.idStatus = "pending";
                state.errors = {};
                state.kessingtons = {}
            })
            .addCase(getKessingtonById.fulfilled, (state, action) => {
                state.idStatus = "success";
                state.kessingtons = action.payload.data
            })
            .addCase(getKessingtonById.rejected, (state, { payload }) => {
                state.idStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(addKessingtonToCart.pending, state => {
                state.addKessingtonStatus = "pending";
                state.errors = {};
                state.addKessington = {}
            })
            .addCase(addKessingtonToCart.fulfilled, (state, action) => {
                console.log(action.payload, "kessington pass")
                state.addKessingtonStatus = "success";
                state.addKessington = action.payload
            })
            .addCase(addKessingtonToCart.rejected, (state, { payload }) => {
                console.log(payload, "kessington fail")
                state.addKessingtonStatus = "failed";
                state.errors = payload;
            })


    }
});
export const { cleanup, cleanupKessingtonStatus } = kessingtonSlice.actions

export default kessingtonSlice.reducer;
