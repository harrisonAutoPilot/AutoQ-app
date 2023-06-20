import { createSlice} from "@reduxjs/toolkit";
import {getState} from "@Request/State";

export const stateSlice = createSlice({
    name: "state",
    initialState: {
       states: [],
        status: "idle",
        errors: {}
    },
    extraReducers: builder => {
        builder
            .addCase(getState.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.states = [];
            })
            .addCase(getState.fulfilled, (state, action) => {
                state.states = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getState.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.states = [];
            })
    }
});

export default stateSlice.reducer;