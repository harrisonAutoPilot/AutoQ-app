import { createSlice} from "@reduxjs/toolkit";
import {getLga} from "@Request/Lga";

export const lgaSlice = createSlice({
    name: "lga",
    initialState: {
        lga: [],
        status: "idle",
        errors: {}
    },
    extraReducers: builder => {
        builder
            .addCase(getLga.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.lga = [];
            })
            .addCase(getLga.fulfilled, (state, action) => {
                state.lga = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getLga.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.lga = [];
            })
    }
});

export default lgaSlice.reducer;