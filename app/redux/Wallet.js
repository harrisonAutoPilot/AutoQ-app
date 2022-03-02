import { createSlice} from "@reduxjs/toolkit";
import { getWallet} from "@Request/Wallet"

export const walletSlice = createSlice({
    name: "payment_method",
    initialState: {
        wallet: [],
        status: "idle",
        errors: {},
    },
    extraReducers: builder => {
        builder
            .addCase(getWallet.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.wallet = [];
            })
            .addCase(getWallet.fulfilled, (state, action) => {
                state.wallet = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getWallet.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.wallet = [];
            })

           
    }
});

export default walletSlice.reducer;