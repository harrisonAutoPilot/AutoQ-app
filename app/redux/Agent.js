import { createSlice} from "@reduxjs/toolkit";
import { getAgent, getAgentCustomer, getAgentTransaction } from "@Request/Agent";

export const agentSlice = createSlice({
    name: "agent",
    initialState: {
        agent: {},
        status: "idle",
        errors: {},
        customer: "idle",
        transaction : [],
        loaded: "idle",
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle"
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAgent.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.agent = {};
                state.loaded = "pending"
            })
            .addCase(getAgent.fulfilled, (state, action) => {
                state.agent = action.payload;
                state.status = "success";
                state.errors = {};
                state.loaded = "success";
            })
            .addCase(getAgent.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.agent = {};
                state.loaded = "failed";
            })

            builder
            .addCase(getAgentCustomer.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.customer = []
            })
            .addCase(getAgentCustomer.fulfilled, (state, action) => {
                state.status = "success";
                state.errors = {}; 
                state.customer = action.payload

            })
            .addCase(getAgentCustomer.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.customer = []
            })

            builder
            .addCase(getAgentTransaction.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.transaction = []
            })
            .addCase(getAgentTransaction.fulfilled, (state, action) => {
                state.status = "success";
                state.errors = {}; 
                state.transaction = action.payload

            })
            .addCase(getAgentTransaction.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.transaction = []
            })
    }

});

export const { cleanup } = agentSlice.actions

export default agentSlice.reducer;