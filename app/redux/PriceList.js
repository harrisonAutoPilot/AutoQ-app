import { createSlice} from "@reduxjs/toolkit";
import { priceList, priceListChemist} from "@Request/PriceList"

export const priceListSlice = createSlice({
    name: "price_list",
    initialState: {
        list: [],
        listChemist:[],
        priceStatus: "idle",
        errors: {},
    },
    reducers:{
        cleanup: (state) => {
            state.priceStatus = "idle";
            state.errors = {};
            state.list = [];
            state.listChemist = [];
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

            builder
            .addCase(priceListChemist.pending, state => {
                state.priceStatus = "pending";
                state.errors = {};
                state.list = [];
            })
            .addCase(priceListChemist.fulfilled, (state, action) => {
                state.list = action.payload;
                state.priceStatus = "success";
                state.errors = {};
            })
            .addCase(priceListChemist.rejected, (state, { payload }) => {
                state.priceStatus = "failed";
                state.errors = payload;
                state.list = [];
            })
       
    }
});

export const { cleanup } = priceListSlice.actions

export default priceListSlice.reducer;