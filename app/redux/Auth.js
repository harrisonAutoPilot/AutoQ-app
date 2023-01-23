import { createSlice } from "@reduxjs/toolkit";
import { login, getUser, updateUserPassword,forgotPin, updateUserDetails, deleteUserAccount, updateUserImage } from "@Request/Auth";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: {},
        status: "idle",
        deleteAccount: "idle",
        errors: {},
        reset:"idle",
        pin: "idle",
        isLoading: "idle",
        update:  "idle",
        loggedIn: false
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle"
            state.update = "idle"
            state.deleteAccount ="idle"
        },
        logout(state) {
            state.status = "idle"
            state.isAuthenticated = false
            state.user = {}
            state.errors = {}
            state.pin = "idle"
            state.deleteAccount = "idle"
            state.loggedIn = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.user = {};
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.errors = {};
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                console.log("the errors from redux login", payload)
                state.isAuthenticated = false
            })

        builder
            .addCase(getUser.pending, state => {
                state.status = "pending",
                state.errors = {},
                state.user = {};
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.user = payload;
                state.errors = {};
                state.loggedIn = true
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.isAuthenticated = false
                state.user = {};
            })

        builder
            .addCase(updateUserPassword.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updateUserPassword.fulfilled, (state) => {
                state.update = "success";
            })
            .addCase(updateUserPassword.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

        builder
            .addCase(forgotPin.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(forgotPin.fulfilled, (state) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(forgotPin.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateUserDetails.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updateUserDetails.fulfilled, (state, {payload}) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserDetails.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

            builder
            .addCase(deleteUserAccount.pending, state => {
                state.deleteAccount = "pending";
                state.errors = {};
            })
            .addCase(deleteUserAccount.fulfilled, (state, {payload}) => {
                state.deleteAccount = "success";
                state.errors = {};
            })
            .addCase(deleteUserAccount.rejected, (state, { payload }) => {
              
                state.deleteAccount = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateUserImage.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updateUserImage.fulfilled, (state, {payload}) => {
                
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserImage.rejected, (state, { payload }) => {
               
                state.update = "failed";
                state.errors = payload;
            })
            
    }
});

export const { logout, cleanup } = authSlice.actions

export default authSlice.reducer;