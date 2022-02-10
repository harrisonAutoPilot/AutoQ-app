import { createSlice} from "@reduxjs/toolkit";
import { listPaymentMethod} from "@Request/paymentMethod"

export const paymentSlice = createSlice({
    name: "payment_method",
    initialState: {
        payment: [],
        status: "idle",
        errors: {},
    },
    extraReducers: builder => {
        builder
            .addCase(listPaymentMethod.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.payment = [];
            })
            .addCase(listPaymentMethod.fulfilled, (state, action) => {
                state.payment = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(listPaymentMethod.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.payment = [];
            })

           
    }
});

export default paymentSlice.reducer;