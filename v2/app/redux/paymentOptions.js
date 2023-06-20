import { createSlice} from "@reduxjs/toolkit";
import { getPaymentOptions } from "@Request/paymentOptions";

export const paymentOptionSlice = createSlice({
    name: "payment_options",
    initialState: {
       options: [],
        status: "idle",
        errors: {}
    },
    extraReducers: builder => {
        builder
            .addCase(getPaymentOptions.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.options = [];
            })
            .addCase(getPaymentOptions.fulfilled, (state, action) => {
                state.options = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getPaymentOptions.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.options = [];
            })
    }
});

export default paymentOptionSlice.reducer;