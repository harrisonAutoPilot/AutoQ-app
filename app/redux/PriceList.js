import { createSlice} from "@reduxjs/toolkit";
import { priceList } from "@Request/PriceList"

export const priceListSlice = createSlice({
    name: "price_list",
    initialState: {
        list: [],
        priceStatus: "idle",
        errors: {},
    },
    reducers:{
        cleanup: (state) => {
            state.priceStatus = "idle";
            state.errors = {};
            state.list = [];
        },
        
    },
    extraReducers: builder => {
        builder
            .addCase(priceList.pending, state => {
                state.priceStatus = "pending";
                state.errors = {};
                state.list = [];
            })
            .addCase(priceList.fulfilled, (state, action) => {
                state.list = action.payload;
                state.priceStatus = "success";
                state.errors = {};
            })
            .addCase(priceList.rejected, (state, { payload }) => {
                state.priceStatus = "failed";
                state.errors = payload;
                state.list = [];
            })

           
    }
});

export const { cleanup } = priceListSlice.actions

export default priceListSlice.reducer;