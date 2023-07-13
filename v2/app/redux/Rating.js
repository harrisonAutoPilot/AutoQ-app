import { createSlice} from "@reduxjs/toolkit";
import { getRating, postRating } from "@Request2/Rating";

export const ratingSlice = createSlice({
    name: "rating",
    initialState: {
        rating: [],
        ratingStatus: "idle",
        errors: {},
        create: "idle"
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.ratingStatus = "idle",
            state.create = "idle",
            state.rating = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getRating.pending, state => {
                state.ratingStatus = "pending";
                state.errors = {};
                state.rating = [];
            })
            .addCase(getRating.fulfilled, (state, action) => {
                state.rating = action.payload;
                state.ratingStatus = "success";
                state.errors = {};
            })
            .addCase(getRating.rejected, (state, { payload }) => {
                state.ratingStatus = "failed";
                state.errors = payload;
                state.rating = [];
            })

            builder
            .addCase(postRating.pending, state => {
                state.create = "pending";
                state.errors = {};
            })
            .addCase(postRating.fulfilled, (state, action) => {
                state.create = "success";
                state.errors = {};
            })
            .addCase(postRating.rejected, (state, { payload }) => {
                state.create = "failed";
                state.errors = payload;
            })
    }
});
export const { cleanup } = ratingSlice.actions

export default ratingSlice.reducer;