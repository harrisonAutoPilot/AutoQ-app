import { createSlice} from "@reduxjs/toolkit";
import { getWallet, getWalletTransaction} from "@Request/Wallet"
import dict from "@Helper/dict";

export const walletSlice = createSlice({
    // name: "payment_method",
    name: "wallet",
    initialState: {
        wallet: [],
        walletItems:[],
        walletTrans:{},
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

        builder
        .addCase(getWalletTransaction.pending, state => {
            state.status = "pending";
            state.errors = {};
            state.walletTrans = {};
        })
        .addCase(getWalletTransaction.fulfilled, (state, action) => {
            state.status = "success";
            state.walletTrans = action.payload;
            state.walletItems = dict(state.walletItems, action.payload.data)
           
            state.errors = {};
        })
        .addCase(getWalletTransaction.rejected, (state, { payload }) => {
            state.status = "failed";
            state.errors = payload;
            state.walletTrans = {};
        })     
    }
});

export default walletSlice.reducer;