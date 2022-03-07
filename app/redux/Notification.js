import { createSlice} from "@reduxjs/toolkit";
import { getNotification} from "@Request/Notification";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notification: [],
        status: "idle",
        errors: {},
    },
    reducers:{
        cleanup: (state) => {
            state.status = "idle";
            state.errors = {};
            state.notification = [];
        },
        
    },
    extraReducers: builder => {
        builder
            .addCase(getNotification.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.notification = [];
            })
            .addCase(getNotification.fulfilled, (state, action) => {
                state.notification = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getNotification.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.notification = [];
            })

           
    }
});

export const { cleanup } = notificationSlice.actions

export default notificationSlice.reducer;