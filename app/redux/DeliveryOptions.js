import { createSlice} from "@reduxjs/toolkit";
import { getDeliveryOptions } from "@Request/DeliveryOptions";

export const deliveryOptionSlice = createSlice({
    name: "delivery_options",
    initialState: {
       options: [],
        status: "idle",
        errors: {}
    },
    reducers:{
        cleanup:(state) => {
            state.errors = {}
            state.options = []
            state.status = "idle"
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getDeliveryOptions.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.options = [];
            })
            .addCase(getDeliveryOptions.fulfilled, (state, action) => {
                state.options = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getDeliveryOptions.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.options = [];
            })
    }
});

export const { cleanup} = deliveryOptionSlice.actions;

export default deliveryOptionSlice.reducer;