import { createSlice} from "@reduxjs/toolkit";
import {browseCategories} from "@Request/Category";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        status: "idle",
        errors: {}
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.categories = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(browseCategories.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.categories = [];
            })
            .addCase(browseCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(browseCategories.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.categories = [];
            })
    }
});

export const { cleanup } = categorySlice.actions

export default categorySlice.reducer;