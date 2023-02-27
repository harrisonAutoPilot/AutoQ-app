import { createSlice} from "@reduxjs/toolkit";
import { getWallet, getLoan, getWalletTransaction, getLoanTransaction} from "@Request/Wallet"
import dict from "@Helper/dict";

export const walletSlice = createSlice({
    // name: "payment_method",
    name: "wallet",
    initialState: {
        wallet: [],
        loan:[],
        walletItems:[],
        walletTrans:{},
        loanItems:[],
        loanTrans:{},
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
            .addCase(getLoan.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.loan = [];
            })
            .addCase(getLoan.fulfilled, (state, action) => {
                state.loan = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getLoan.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.loan = [];
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
        
    
        builder
        .addCase(getLoanTransaction.pending, state => {
            state.status = "pending";
            state.errors = {};
            state.loanTrans = {};
        })
        .addCase(getLoanTransaction.fulfilled, (state, action) => {
            state.status = "success";
            state.loanTrans = action.payload;
            state.loanItems = dict(state.loanItems, action.payload.data)
           
            state.errors = {};
        })
        .addCase(getLoanTransaction.rejected, (state, { payload }) => {
            state.status = "failed";
            state.errors = payload;
            state.loanTrans = {};
        })     
    }
});

export default walletSlice.reducer;