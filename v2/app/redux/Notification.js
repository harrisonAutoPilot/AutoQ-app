import { createSlice} from "@reduxjs/toolkit";
import { getNotification, getReadNotification} from "@Request2/Notification";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notification: [],
        status: "idle",
        errors: {},
        readStatus: "idle",
        notificationCount: 0
    },
    reducers:{
        cleanup: (state) => {
            state.status = "idle";
            state.errors = {};
            state.notification = [];
            state.readStatus = "idle";
            state.notificationCount = 0;
        },
        
    },
    extraReducers: builder => {
        builder
            .addCase(getNotification.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.notification = [];
                state.notificationCount = 0
            })
            .addCase(getNotification.fulfilled, (state, action) => {
                console.log("notification called count")
                state.notification = action.payload;
                state.status = "success";
                state.notificationCount = action.payload.notifications.filter(notification => {
                    return notification.pivot?.status === "unread"
                }).length
            })
            .addCase(getNotification.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.notification = [];
            })

            builder
            .addCase(getReadNotification.pending, state => {
                state.readStatus = "pending";
            })
            .addCase(getReadNotification.fulfilled, (state) => {
                state.readStatus = "success";
            })
            .addCase(getReadNotification.rejected, (state) => {
                state.readStatus = "failed";
            })
           
    }
});

export const { cleanup } = notificationSlice.actions

export default notificationSlice.reducer;